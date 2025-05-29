package com.github.johncannon87.WoWWebPortal.controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
/**
 * Simple REST controller that returns a JSON Hello World message.
 * This mimics the Spring guide example for a Hello World REST service .
 */
@RestController
public class HelloController {
@GetMapping("/api/hello")
public Map<String, String> hello() {
// Returns {"message":"Hello, World!"}
return Map.of("message", "Hello, World!");
}
}