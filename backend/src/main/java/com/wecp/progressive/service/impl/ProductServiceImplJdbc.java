package com.wecp.progressive.service.impl;

import java.sql.SQLException;
import java.util.List;

import com.wecp.progressive.dao.ProductDAO;
import com.wecp.progressive.entity.Product;

public class ProductServiceImplJdbc implements  ProductDAO {

    @Override
    public int addProduct(Product product) throws SQLException {
        
        return 0;
    }

    @Override
    public void deleteProduct(int productId) throws SQLException {
        // TODO Auto-generated method stub
        
    }

    @Override
    public List<Product> getAllProducts() throws SQLException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Product getProductById(int productId) throws SQLException {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void updateProduct(Product product) throws SQLException {
        // TODO Auto-generated method stub
        
    }







    

}