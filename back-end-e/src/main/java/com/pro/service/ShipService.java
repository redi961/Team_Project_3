package com.pro.service;

import com.pro.domain.Ship;
import com.pro.repository.ShipRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class ShipService {

    private ShipRepository shipRepository;

    @Autowired
    public ShipService(ShipRepository shipRepository) {
    	this.shipRepository = shipRepository;
    }
    
    @Transactional(readOnly = true)
    public List<Ship> findAll(){
        return shipRepository.findAll();
    }

}
