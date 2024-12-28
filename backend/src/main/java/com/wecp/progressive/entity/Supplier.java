package com.wecp.progressive.entity;

public class Supplier {

    private int supplier_id;
    private String supplier_name;
    private String contact_email;
    private String contact_phone;
    private String address;
    public Supplier() {
    }
    public Supplier(int supplier_id, String supplier_name, String contact_email, String contact_phone, String address) {
        this.supplier_id = supplier_id;
        this.supplier_name = supplier_name;
        this.contact_email = contact_email;
        this.contact_phone = contact_phone;
        this.address = address;
    }
    public int getSupplier_id() {
        return supplier_id;
    }
    public void setSupplier_id(int supplier_id) {
        this.supplier_id = supplier_id;
    }
    public String getSupplier_name() {
        return supplier_name;
    }
    public void setSupplier_name(String supplier_name) {
        this.supplier_name = supplier_name;
    }
    public String getContact_email() {
        return contact_email;
    }
    public void setContact_email(String contact_email) {
        this.contact_email = contact_email;
    }
    public String getContact_phone() {
        return contact_phone;
    }
    public void setContact_phone(String contact_phone) {
        this.contact_phone = contact_phone;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    
    

    
    
    

}