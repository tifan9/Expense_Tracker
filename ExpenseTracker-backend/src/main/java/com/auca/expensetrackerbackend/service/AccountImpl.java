package com.auca.expensetrackerbackend.service;

import com.auca.expensetrackerbackend.model.Account;
import com.auca.expensetrackerbackend.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.rmi.RemoteException;
import java.util.List;
@Service
@RequiredArgsConstructor
public class AccountImpl implements AccountService {
    private final AccountRepository accountRepository;

    @Override
    public Account getAccountById(Long id) throws RemoteException {
        Account account = accountRepository.findById(id).orElse(null);
        if(account != null){
            return account;
        }
        return null;
    }

    @Override
    public List<Account> getAllAccounts() throws RemoteException {
        return accountRepository.findAll();
    }

    @Override
    public Account saveAccount(Account account) throws RemoteException {
        return accountRepository.save(account);
    }

    @Override
    public Account updateAccount(Account account, Long id) throws RemoteException {
        return accountRepository.findById(id).map(pay->{
            pay.setName(account.getName());
            pay.setAccountNumber(account.getAccountNumber());
            pay.setBalance(account.getBalance());
            return accountRepository.save(account);
        }).orElse(null);

    }

    @Override
    public boolean deleteAccount(Long id) throws RemoteException {
        Account accountpay = accountRepository.findById(id).orElse(null);
        if(accountpay != null){
            accountRepository.delete(accountpay);
        }
        return false;
    }
}
