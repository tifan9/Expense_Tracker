package com.auca.expensetrackerbackend.repository;

import com.auca.expensetrackerbackend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
