package com.auca.expensetrackerbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="user_id")
    private Long id;
    @Column(name ="firstname")
    private String firstName;
    @Column(name="lastname")
    private String lastName;
    @Column(name="username")
    private String username;
    @NaturalId(mutable = true)
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;

}
