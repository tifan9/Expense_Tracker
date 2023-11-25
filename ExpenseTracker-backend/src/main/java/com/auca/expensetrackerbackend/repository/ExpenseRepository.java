package com.auca.expensetrackerbackend.repository;

import com.auca.expensetrackerbackend.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
