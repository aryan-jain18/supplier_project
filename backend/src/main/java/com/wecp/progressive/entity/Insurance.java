package com.wecp.progressive.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Insurance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer insuranceId;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "shipmentId")
    Shipment shipment;
    String insurance_provider;
    Double insurance_coverage_amount;

    public Insurance() {}

    public Integer getInsuranceId() {
        return insuranceId;
    }
    public void setInsuranceId(Integer insuranceId) {
        this.insuranceId = insuranceId;
    }
    public Shipment getShipment() {
        return shipment;
    }
    public void setShipment(Shipment shipment) {
        this.shipment = shipment;
    }
    public String getInsurance_provider() {
        return insurance_provider;
    }
    public void setInsurance_provider(String insurance_provider) {
        this.insurance_provider = insurance_provider;
    }
    public Double getInsurance_coverage_amount() {
        return insurance_coverage_amount;
    }
    public void setInsurance_coverage_amount(Double insurance_coverage_amount) {
        this.insurance_coverage_amount = insurance_coverage_amount;
    }

    
}