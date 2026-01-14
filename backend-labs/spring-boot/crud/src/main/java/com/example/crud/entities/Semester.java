package com.example.crud.entities;

import jakarta.persistence.*;

@Entity
@Table(name="semesters")
public class Semester {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="semester_id")
    private int semesterId;

    @Column(name="name")
    private String name;
}
