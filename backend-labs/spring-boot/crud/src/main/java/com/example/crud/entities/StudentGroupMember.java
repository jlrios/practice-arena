package com.example.crud.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "student_group_members")
public class StudentGroupMember {

    @Id
    @Column(name = "student_id")
    private int studentId;

    /*@Id
    @Column(name = "group_id")
    private int groupId;*/
}
