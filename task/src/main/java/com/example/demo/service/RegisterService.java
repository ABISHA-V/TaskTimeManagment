package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Register;
import com.example.demo.repository.RegisterRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository registerRepository;

    public String registerUser(Register register) {
        if (registerRepository.existsByEmail(register.getEmail())) {
            return "User already exists with email id " + register.getEmail();
        }
        registerRepository.save(register);
        return "User registered successfully";
    }

    public List<Register> getAllUsers() {
        return registerRepository.findAll();
    }

    public Optional<Register> getUserById(Long id) {
        return registerRepository.findById(id);
    }

    public Optional<Register> authenticateUser(String email, String password) {
        Optional<Register> user = registerRepository.findByEmail(email);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user;
        }
        return Optional.empty();
    }
}
