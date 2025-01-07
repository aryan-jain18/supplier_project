package com.wecp.progressive.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wecp.progressive.dao.ProductDAO;
import com.wecp.progressive.entity.Product;
import com.wecp.progressive.repository.ProductRepository;
import com.wecp.progressive.service.ProductService;

@Service
public class ProductServiceImplJpa implements ProductService  {

    private ProductRepository productRepository;

    public ProductServiceImplJpa (ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
   
    @Override
    public List<Product> getAllProducts() {
        // TODO Auto-generated method stub
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(int productId) {
        // TODO Auto-generated method stub
        return productRepository.findById(productId).get();
    }

    @Override
    public int addProduct(Product product) {
        // TODO Auto-generated method stub
        return productRepository.save(product).getProductId();
    }

    @Override
    public void updateProduct(Product product) {
        // TODO Auto-generated method stub
        productRepository.save(product);
    }

    @Override
    public void deleteProduct(int productId) {
        // TODO Auto-generated method stub
        productRepository.deleteById(productId);
        
    }

}