package com.pro.service;

import com.pro.domain.Ship;
import com.pro.repository.ShipRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@RequiredArgsConstructor
@Service
public class ShipService {

    private final ShipRepository shipRepository;

    @Transactional(readOnly = true)
    public List<Ship> findAll(){
        return shipRepository.findAll();
    }

}
