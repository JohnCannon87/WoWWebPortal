package com.github.johncannon87.WoWWebPortal.controllers;
import static
org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static
org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import
org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
/**
 * Integration test for the HelloController.
 */
@SpringBootTest
@AutoConfigureMockMvc
public class HelloControllerTest {
@Autowired
private MockMvc mvc;
@Test
public void testHelloEndpoint() throws Exception {
mvc.perform(get("/api/hello"))
.andExpect(status().isOk())
.andExpect(jsonPath("$.message").value("Hello, World!"));
}
}