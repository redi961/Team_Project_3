package com.pro.service;

import com.pro.domain.AIS;
import com.pro.repository.AISRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class AISService {

    private final AISRepository aisRepository;

    @Transactional(readOnly = true)
    public List<AIS> findRecentAIS(){
        return aisRepository.findRecentAIS();
    }
}
