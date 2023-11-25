package com.auca.expensetrackerbackend.service;

import com.auca.expensetrackerbackend.model.PaymentMethod;
import com.auca.expensetrackerbackend.repository.PaymentMethodRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.rmi.RemoteException;
import java.util.List;
@Service
@RequiredArgsConstructor
public class PaymentMethodImpl implements PaymentMethodService{
    private final PaymentMethodRepository paymentMethodRepository;
    @Override
    public PaymentMethod getPaymentMethodById(Long paymentId) throws RemoteException {
        PaymentMethod payment= paymentMethodRepository.findById(paymentId).orElse(null);
        if (payment != null){
            return payment;
        }return null;
    }

    @Override
    public List<PaymentMethod> getAllPayments() throws RemoteException {
        return paymentMethodRepository.findAll();
    }

    @Override
    public PaymentMethod savePaymentMethod(PaymentMethod paymentMethod) throws RemoteException {
        return paymentMethodRepository.save(paymentMethod);
    }

    @Override
    public PaymentMethod updatePaymentMethod(PaymentMethod paymentMethod, Long paymentId) throws RemoteException {
        return paymentMethodRepository.findById(paymentId).map(pay->{
            pay.setMethodName(paymentMethod.getMethodName());
            return paymentMethodRepository.save(paymentMethod);
        }).orElse(null);
    }
    @Override
    public boolean deletePaymentMethod(Long paymentId) throws RemoteException {
        PaymentMethod method= paymentMethodRepository.findById(paymentId).orElse(null);
        if(method != null){
            paymentMethodRepository.delete(method);
        }
        return false;
    }
}
