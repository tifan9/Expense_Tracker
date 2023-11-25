package com.auca.expensetrackerbackend.service;

import com.auca.expensetrackerbackend.model.PaymentMethod;

import java.rmi.RemoteException;
import java.util.List;

public interface PaymentMethodService {
    PaymentMethod getPaymentMethodById(Long paymentId) throws RemoteException;
    List<PaymentMethod> getAllPayments() throws RemoteException;
    PaymentMethod savePaymentMethod(PaymentMethod paymentMethod) throws RemoteException;
    PaymentMethod updatePaymentMethod(PaymentMethod paymentMethod, Long paymentId) throws RemoteException;
    boolean deletePaymentMethod(Long paymentId) throws RemoteException;
}
