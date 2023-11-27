package com.auca.expensetrackerbackend.service;

import com.auca.expensetrackerbackend.model.Account;

import java.rmi.RemoteException;
import java.util.List;

public interface AccountService {
    Account getAccountById(Long id) throws RemoteException;
    List<Account> getAllAccounts() throws RemoteException;
    Account saveAccount(Account account) throws RemoteException;
    Account updateAccount(Account account, Long id) throws RemoteException;
    boolean deleteAccount(Long id) throws RemoteException;
}
