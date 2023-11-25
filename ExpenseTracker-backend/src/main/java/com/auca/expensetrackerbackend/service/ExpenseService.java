package com.auca.expensetrackerbackend.service;

import com.auca.expensetrackerbackend.model.Expense;

import java.rmi.RemoteException;
import java.util.List;

public interface ExpenseService {
    Expense getExpenseById(Long expenseId) throws RemoteException;
    List<Expense> getAllExpenses() throws RemoteException;
    Expense saveExpense(Expense expense) throws RemoteException;
    Expense updateExpense(Expense expense, Long ExpenseId) throws RemoteException;
    boolean deleteExpense(Long expenseId) throws RemoteException;
}
