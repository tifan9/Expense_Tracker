package com.auca.expensetrackerbackend.service;

import com.auca.expensetrackerbackend.model.PaymentMethod;

import java.rmi.RemoteException;
import java.util.List;

public interface PaymentMethodService {
    PaymentMethod getPaymentMethodById(Long methodId) throws RemoteException;
    List<PaymentMethod> getAllPayments() throws RemoteException;
    PaymentMethod savePaymentMethod(PaymentMethod paymentMethod) throws RemoteException;
    PaymentMethod updatePaymentMethod(PaymentMethod paymentMethod, Long paymentMethodId) throws RemoteException;
    void deletePaymentMethod(Long methodId) throws RemoteException;
}
