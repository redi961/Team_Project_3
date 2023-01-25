package com.pro.service;

import com.pro.domain.AIS;
import com.pro.repository.AISRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AISService {

    private AISRepository aisRepository;
    
    @Autowired
    public AISService(AISRepository aisRepository) {
    	this.aisRepository = aisRepository;
    }

    public List<AIS> findAll(){
        return aisRepository.findAll();
    }
}
