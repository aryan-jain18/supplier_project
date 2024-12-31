package com.wecp.progressive.dao;

import java.beans.Statement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import com.wecp.progressive.config.DatabaseConnectionManager;
import com.wecp.progressive.entity.Warehouse;

public class WarehouseDAOImpl implements WarehouseDAO{

    @Override
    public int addWarehouse(Warehouse warehouse) throws SQLException {
        
        Connection connection = null;
        PreparedStatement statement = null;
        int generatedID = -1;

        try{
            connection = DatabaseConnectionManager.getConnection();
            String sql = "INSERT INTO warehouse (supplier_id, warehouse_name, location, capacity) VALUES (?, ?, ?, ?)";
            statement = connection.prepareStatement(sql, statement.RETURN_GENERATED_KEYS);
            statement.setInt(1, warehouse.getSupplierId());
            statement.setString(2, warehouse.getWarehouseName());
            statement.setString(3, warehouse.getLocation());
            statement.setInt(4, warehouse.getCapacity());
            statement.executeUpdate();

            ResultSet resultSet = statement.getGeneratedKeys();
            
            if(resultSet.next())
            {
                generatedID = resultSet.getInt(1);
                warehouse.setWarehouseId(generatedID);
            }

    } catch (SQLException e)
    {
        e.printStackTrace();
        throw e;
    }
    finally 
    {
        if(connection!=null)
        {
            connection.close();
        }
      
    }
    return generatedID;
    }

    @Override
    public void deleteWarehouse(int warehouseId) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public List<Warehouse> getAllWarehouse() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Warehouse getWarehouseById(int warehouseId) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void updateWarehouse(Warehouse warehouse) {
        // TODO Auto-generated method stub
        
    }

    

}
