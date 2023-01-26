package com.pro.controller;

import com.pro.service.AISService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class AISController {

    private final AISService aisService;

    @GetMapping("/api/ais")
    public ResponseEntity<?> findRecentAIS(){
        return new ResponseEntity<>(aisService.findRecentAIS(), HttpStatus.OK);
    }
}

