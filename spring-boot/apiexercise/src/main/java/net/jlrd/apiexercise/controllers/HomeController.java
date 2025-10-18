package net.jlrd.apiexercise.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Class:
 * Author: José L. Ríos
 * Creation date:
 * Short description:
 * Updates:
 */
@RestController
public class HomeController {

    @GetMapping("/")
    public String showMessage() {
        return "Hello World! Basic API with Spring Boot";
    }
}