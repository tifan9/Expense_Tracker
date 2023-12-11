package com.auca.expensetrackerbackend.controller;

import com.auca.expensetrackerbackend.model.Category;
import com.auca.expensetrackerbackend.model.User;
import com.auca.expensetrackerbackend.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.RemoteException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/category")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;
    @GetMapping
    public ResponseEntity<List<Category>> getCategory() throws RemoteException {
        return new ResponseEntity<>(
                categoryService.getAllCategories(), HttpStatus.FOUND
        );
    }
    @GetMapping(value = "/search/{id}")
    public ResponseEntity<?> getCategoryById(@PathVariable("id") Long categoryId) throws RemoteException {
        Category cat= categoryService.getCategoryById(categoryId);
        if(cat != null){
            return new ResponseEntity<>(cat, HttpStatus.OK);
        }else
            return new ResponseEntity<>(categoryId + " Not Found", HttpStatus.NOT_FOUND);
    }
    @PostMapping
    public Category saveCategory(@RequestBody Category category) throws Exception{
        return categoryService.saveCategory(category);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable("id")Long categoryId) {
        try{
            categoryService.deleteCategory(categoryId);
            return ResponseEntity.ok("category deleted successfully");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
//    @PutMapping("update/{id}")
//    public ResponseEntity<?> updateCategory(@RequestBody Category category, @PathVariable("id") Long categoryId)throws RemoteException{
//        Category updatecat = CategoryService.updateCategory(category, categoryId);
//        return ResponseEntity.ok(updatecat);
//    }


}
