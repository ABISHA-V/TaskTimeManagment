package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Register;
import java.util.Optional;

public interface RegisterRepository extends JpaRepository<Register, Long> {
    boolean existsByEmail(String email);
    Optional<Register> findByEmail(String email);
}
