package controller;

import com.pro.service.ShipService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ShipController {

    private final ShipService shipService;

    @GetMapping("/api/ships")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(shipService.findAll(), HttpStatus.OK);
    }



}
