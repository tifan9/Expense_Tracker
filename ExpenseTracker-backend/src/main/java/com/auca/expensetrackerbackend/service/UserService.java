package com.auca.expensetrackerbackend.service;

import com.auca.expensetrackerbackend.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    List<User> getUsers();
    User updateUser(User user, Long id);
    User getUserById(Long id);
    void deleteUser(Long id);
}
