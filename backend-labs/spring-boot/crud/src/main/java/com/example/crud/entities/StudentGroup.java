package com.example.crud.entities;

import jakarta.persistence.*;

@Entity
@Table(name="student_groups")
public class StudentGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "group_id")
    private int groupId;

    @Column(name = "group_code")
    private String groupCode;

    @Column(name = "semester_id")
    private int semesterId;

    @Column(name = "shift_id")
    private int shiftId;

    @Column(name = "notes")
    private String notes;
}