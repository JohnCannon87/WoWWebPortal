# Stage 1: Build the application with Gradle
FROM gradle:8.7-jdk21 AS builder
WORKDIR /app
# Copy everything and build the backend (includes frontend static files)
COPY . .
# Only build the backend (gradle will also run frontend build via dependencies)
RUN ./gradlew backend:bootJar --no-daemon --stacktrace
# Stage 2: Create a lightweight runtime image
FROM gcr.io/distroless/java21-debian12
WORKDIR /app
# Copy the Spring Boot executable JAR from the builder stage
COPY --from=builder /app/backend/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]