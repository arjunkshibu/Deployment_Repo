package com.arjun.course.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arjun.course.model.User;



@Service
public interface UserService {


    User addUser(User newUser);

    List<User> getUsers();

    User getUserById(Long userId);

    User updateUser(User user);

    void deleteUser(Long userId);

    
}
