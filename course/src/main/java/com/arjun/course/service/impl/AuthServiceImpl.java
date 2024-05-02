package com.arjun.course.service.impl;


import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.arjun.course.dto.request.LoginRequest;
import com.arjun.course.dto.request.RegisterRequest;
import com.arjun.course.dto.response.LoginResponse;
import com.arjun.course.enums.Role;
import com.arjun.course.model.Token;
import com.arjun.course.model.User;
import com.arjun.course.repository.JwtRepo;
import com.arjun.course.repository.UserRepo;
import com.arjun.course.service.AuthService;
import com.arjun.course.util.JwtToken;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthServiceImpl implements AuthService {

    private final UserRepo userRepository;
    private final JwtRepo tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtToken jwtUtil;

    @Override
    public String register(RegisterRequest registerRequest) {
        Optional<User> userExist = userRepository.findByEmail(registerRequest.getEmail());
        if (userExist.isPresent()) {
            return "User already exists with email id " + registerRequest.getEmail();
        }
        var user = User.builder()
                .name(registerRequest.getName())
                .email(registerRequest.getEmail())
                .phone(registerRequest.getPhone())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(Role.User)
                .build();
        userRepository.save(user);
        return "User registered successfully.";
    }

    @Override
public LoginResponse login(LoginRequest loginRequest) {
    authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
    var user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
    
    Map<String, Object> extraClaims = new HashMap<>();
    var accessToken = jwtUtil.generateToken(extraClaims,user, user.getEmail(), user.getRole().toString(), user.getName(), user.getPhone(), user.getUid());
    revokeAllUserTokens(user);
    saveUserToken(user, accessToken);
    return LoginResponse.builder()
    .accessToken(accessToken)
    .build();
}

    
    private void saveUserToken(User user, String accessToken) {
        var token = Token.builder().user(user).token(accessToken).expired(false).revoked(false).build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllByUser_UidAndExpiredFalseAndRevokedFalse(user.getUid());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    @Override
    public String createAdmin() {
        Optional<User> userExist = userRepository.findByEmail("admin@gmail.com");
        if (userExist.isPresent()) {
            return "User already exists with email id - admin@gmail.com";
        }

        var user = User.builder()
                .name("Admin")
                .email("admin@coursehunt.com")
                .password(passwordEncoder.encode("coursehunt@123"))
                .phone("1234567890")
                .role(Role.Admin)
                .build();
        userRepository.save(user);
        return "Admin registered successfully.";
    }
}