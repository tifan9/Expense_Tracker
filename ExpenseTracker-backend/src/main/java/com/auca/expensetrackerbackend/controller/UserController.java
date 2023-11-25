package com.auca.expensetrackerbackend.controller;

import com.auca.expensetrackerbackend.exception.UserNotFoundException;
import com.auca.expensetrackerbackend.model.User;
import com.auca.expensetrackerbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getUsers(){
        return new ResponseEntity<>(
                userService.getUsers(), HttpStatus.FOUND
        );
    }
    @PostMapping
    public User saveUser(@RequestBody User user) throws Exception{
        return userService.saveUser(user);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateUser(@RequestBody User user, @PathVariable Long id){
        try{
            User updatedUser = userService.updateUser(user, id);
            return ResponseEntity.ok(updatedUser);
        }catch(UserNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id){
        try{
            userService.deleteUser(id);
            return ResponseEntity.ok("user deleted successfully");
        }catch(UserNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id){
        try{
            User user = userService.getUserById(id);
            return ResponseEntity.ok("user deleted successfully");
        }catch(UserNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }

}
