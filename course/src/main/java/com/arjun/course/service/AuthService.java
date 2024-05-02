package com.arjun.course.service;

import com.arjun.course.dto.request.LoginRequest;
import com.arjun.course.dto.request.RegisterRequest;
import com.arjun.course.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);
    
    String createAdmin();
}
