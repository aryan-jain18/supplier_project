package com.wecp.progressive.service.impl;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import com.wecp.progressive.entity.Supplier;
import com.wecp.progressive.service.SupplierService;

public class SupplierServiceImplArraylist implements SupplierService {

    priavte static List<Supplier> supplierList = new ArrayList<>();

    @Override
    public int addSupplier(Supplier supplier) {
        
        supplierList.add(supplier);
        return supplierList.size();
    }

    @Override
    public List<Supplier> getAllSuppliers() {
        
        return supplierList;
    }

    @Override
    public List<Supplier> getAllSuppliersSortedByName() {
        List<Supplier> sortedSupplier = supplierList;
        sortedSupllier.sort(Comparator.comparing(Supplier::getSupplier_name()))
        return null;
    }

    

}