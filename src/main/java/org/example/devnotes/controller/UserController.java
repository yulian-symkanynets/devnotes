package org.example.devnotes.controller;

import org.example.devnotes.model.User;
import org.example.devnotes.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> allUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public User addUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @RequestMapping(value="/login", method = RequestMethod.GET)
    public boolean login(@RequestParam String username, @RequestParam String password) {
        return userService.login(username, password);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.PUT)
    public boolean deleteUser() {
        return userService.delete();
    }

}
