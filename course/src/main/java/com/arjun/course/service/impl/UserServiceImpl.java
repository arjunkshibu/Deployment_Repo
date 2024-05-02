package com.arjun.course.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.arjun.course.model.Courses;
import com.arjun.course.model.User;
import com.arjun.course.repository.UserRepo;
import com.arjun.course.service.UserService;

@Service 
public class UserServiceImpl implements UserService {

    private final UserRepo userRepository;

    public UserServiceImpl(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
		return userRepository.findAll();
	}

    @SuppressWarnings("null")
    @Override
    public User addUser(User newUser) {
        return userRepository.save(newUser);
    }


    @SuppressWarnings("null")
    @Override
    public User getUserById(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        return userOptional.orElse(null);
    }

    @Override
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
    

    
}
