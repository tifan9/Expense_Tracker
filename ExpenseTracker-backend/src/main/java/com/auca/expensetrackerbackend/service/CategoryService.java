package com.auca.expensetrackerbackend.service;

import com.auca.expensetrackerbackend.model.Category;

import java.rmi.RemoteException;
import java.util.List;

public interface CategoryService {
    Category getCategoryById(Long categoryId) throws RemoteException;
    List<Category> getAllCategories() throws RemoteException;
    Category saveCategory(Category category) throws RemoteException;
    Category updateCategory(Category category, Long categoryId, String categoryName) throws RemoteException;
    boolean deleteCategory(Long categoryId) throws RemoteException;
}
