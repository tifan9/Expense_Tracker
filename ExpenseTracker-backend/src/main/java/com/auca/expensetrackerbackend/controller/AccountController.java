package com.auca.expensetrackerbackend.controller;

import com.auca.expensetrackerbackend.model.Account;
import com.auca.expensetrackerbackend.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.RemoteException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/account")
@RequiredArgsConstructor
public class AccountController {
    private final AccountService accountService;
    @GetMapping
    public ResponseEntity<List<Account>> getAllAccounts() throws RemoteException {
        return new ResponseEntity<>(
                accountService.getAllAccounts(), HttpStatus.FOUND
        );
    }
    @GetMapping(value = "/search/{id}")
    public ResponseEntity<?> getAccountById(@PathVariable("id") Long id){
        try {
            Account acc= accountService.getAccountById(id);
            if(acc != null){
                return new ResponseEntity<>(acc, HttpStatus.OK);
            }else{
                return new ResponseEntity<>(id + " Not Found", HttpStatus.NOT_FOUND);
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
        }
    }
    @PostMapping
    public ResponseEntity<?> saveAccount(@RequestBody Account account) throws RemoteException{
            if(account != null){
                Account saveaccount= accountService.saveAccount(account);
                if(saveaccount != null){
                    return new ResponseEntity<>("account Saved", HttpStatus.OK);
                }else{
                    return new ResponseEntity<>("failed", HttpStatus.BAD_REQUEST);
                }
            }else{
                return new ResponseEntity<>("account is null", HttpStatus.BAD_REQUEST);
            }
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateAccount(@RequestBody Account account, @PathVariable("id") Long id){
            try {
                Account updateaccount= accountService.updateAccount(account,id);
                return ResponseEntity.ok(updateaccount);
            }catch (Exception e){
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
            }
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> deleteAccount(@PathVariable("id") Long id){
        try {
            accountService.deleteAccount(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
