package com.auca.expensetrackerbackend.service;

import com.auca.expensetrackerbackend.model.Expense;
import com.auca.expensetrackerbackend.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class ExpenseImpl implements ExpenseService{
    private final ExpenseRepository expenseRepository;
    @Override
    public Expense getExpenseById(Long expenseId) {
        Expense expense=expenseRepository.findById(expenseId).orElse(null);
        if(expense != null){
            return expense;
        }
        return null;
    }

    @Override
    public List<Expense> getAllExpenses() {

        return expenseRepository.findAll();
    }

    @Override
    public Expense saveExpense(Expense expense) {

        return expenseRepository.save(expense);
    }

    @Override
    public Expense updateExpense(Expense expense, Long ExpenseId) {
        return expenseRepository.findById(ExpenseId).map(ex->{
                ex.setDescription(expense.getDescription());
                ex.setAmount(expense.getAmount());
            return expenseRepository.save(expense);
        }).orElse(null);
    }

    @Override
    public boolean deleteExpense(Long expenseId) {
        Expense exp=expenseRepository.findById(expenseId).orElse(null);
        if(exp != null){
            expenseRepository.delete(exp);
        }
        return false;
    }
}
