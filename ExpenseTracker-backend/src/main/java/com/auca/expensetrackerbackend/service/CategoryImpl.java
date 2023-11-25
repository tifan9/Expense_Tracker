package com.auca.expensetrackerbackend.service;

import com.auca.expensetrackerbackend.model.Category;
import com.auca.expensetrackerbackend.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.rmi.RemoteException;
import java.util.List;
@Service
@RequiredArgsConstructor
public class CategoryImpl implements CategoryService{
    private final CategoryRepository categoryRepository;
    @Override
    public Category getCategoryById(Long categoryId) throws RemoteException {
       Category category = categoryRepository.findById(categoryId).orElse(null);
       if(category != null){
           return category;
       }else{
           System.out.println("Category not found");
       }return null;
    }

    @Override
    public List<Category> getAllCategories() throws RemoteException {
        return categoryRepository.findAll();
    }

    @Override
    public Category saveCategory(Category category) throws RemoteException {
        return categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Category category, Long categoryId, String categoryName) throws RemoteException {
        Category cat = categoryRepository.findById(categoryId).orElse(null);
        if(cat != null){
            category.setCategoryName(categoryName);
            return categoryRepository.save(category);
        }else{
            System.out.println("Category not update");
        }return null;
    }

    @Override
    public boolean deleteCategory(Long categoryId) throws RemoteException {
        Category deletecat = categoryRepository.findById(categoryId).orElse(null);
        if(deletecat != null){
            categoryRepository.delete(deletecat);
        }else{
            System.out.println("Category not deleted");
        }
        return false;
    }
}
