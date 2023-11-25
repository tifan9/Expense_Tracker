package com.auca.expensetrackerbackend.repository;

import com.auca.expensetrackerbackend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
