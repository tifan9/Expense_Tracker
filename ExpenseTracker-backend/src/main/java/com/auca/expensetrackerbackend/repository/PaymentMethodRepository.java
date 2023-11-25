package com.auca.expensetrackerbackend.repository;

import com.auca.expensetrackerbackend.model.PaymentMethod;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Long> {
}
