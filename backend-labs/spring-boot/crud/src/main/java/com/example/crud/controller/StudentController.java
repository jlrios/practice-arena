package com.example.crud.controller;

import com.example.crud.entities.Student;
import com.example.crud.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentController {
    private final StudentService serviceStudent;

    public StudentController(StudentService serviceStudent) {
        this.serviceStudent = serviceStudent;
    }

    @GetMapping("api/students")
    public List<Student> listStudents() {
        return serviceStudent.getStudents();
    }
}
