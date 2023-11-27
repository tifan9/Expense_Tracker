package com.auca.expensetrackerbackend.controller;

import com.auca.expensetrackerbackend.model.Account;
import com.auca.expensetrackerbackend.model.Expense;
import com.auca.expensetrackerbackend.service.ExpenseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.RemoteException;
import java.util.List;

@RestController
@RequestMapping("/expenses")
@RequiredArgsConstructor
public class ExpenseController {
    private final ExpenseService expenseService;

    @GetMapping
    public ResponseEntity<List<Expense>> getExpenses() throws RemoteException {
        return new ResponseEntity<>(
                expenseService.getAllExpenses(), HttpStatus.FOUND
        );
    }
    @GetMapping("/search/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Long ExpenseId) {
        try {
            Expense exp= expenseService.getExpenseById(ExpenseId);
            if(exp != null){
                return new ResponseEntity<>(exp, HttpStatus.OK);
            }else{
                return new ResponseEntity<>(ExpenseId + " Not Found", HttpStatus.NOT_FOUND);
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @PostMapping
    public Expense saveExpense(@RequestBody Expense expense) throws RemoteException{
        return expenseService.saveExpense(expense);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateExpense(@RequestBody Expense expense, @PathVariable("id") Long ExpenseId){
        try {
            Expense exp= expenseService.updateExpense(expense,ExpenseId);
            if(exp != null){
                return new ResponseEntity<>(exp, HttpStatus.OK);
            }else{
                return new ResponseEntity<>(ExpenseId + " Not Found", HttpStatus.NOT_FOUND);
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteExpense(@PathVariable("id") Long ExpenseId){
        try {
            expenseService.deleteExpense(ExpenseId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
