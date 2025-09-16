package org.example.devnotes.service;

import org.example.devnotes.model.User;
import org.example.devnotes.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public boolean login(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user.getPassword().equals(password);
    }

    public boolean delete(){
        userRepository.deleteAll();
        return true;
    }
}
