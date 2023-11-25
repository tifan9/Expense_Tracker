package com.auca.expensetrackerbackend.service;

import com.auca.expensetrackerbackend.exception.UserAlreadyExistsException;
import com.auca.expensetrackerbackend.exception.UserNotFoundException;
import com.auca.expensetrackerbackend.model.User;
import com.auca.expensetrackerbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserImpl implements UserService{
   private final UserRepository userRepository;

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    @Override
    public User saveUser(User user) {
        if(userAlreadyExists(user.getEmail())){
            throw new UserAlreadyExistsException(user.getEmail() + "Already Exist");
        }
        return userRepository.save(user);
    }

    @Override
    public User updateUser(User user, Long id) {
        return userRepository.findById(id).map(us->{
            us.setFirstName(user.getFirstName());
            us.setLastName(user.getLastName());
            us.setUsername(user.getUsername());
            us.setEmail(user.getEmail());
            us.setPassword(user.getPassword());
            return userRepository.save(us);
        }).orElseThrow(()-> new UserNotFoundException("User Not Found"));

    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException("User Not Found with id: " + id));
    }

    @Override
    public void deleteUser(Long id) {
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException("User Not Found");
        }
    }
    private boolean userAlreadyExists(String email) {

        return userRepository.findByEmail(email).isPresent();
    }
}
