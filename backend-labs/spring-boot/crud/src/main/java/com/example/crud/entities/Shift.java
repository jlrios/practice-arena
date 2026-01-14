package com.example.crud.entities;

import jakarta.persistence.*;

@Entity
@Table(name="shifts")
public class Shift {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="shift_id")
    private int shiftId;

    @Column(name="name")
    private String name;
}
