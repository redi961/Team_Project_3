package com.pro.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Ship {

    @Id
    private int mmsi;

    private String shipName;

    @Column(nullable = false)
    private int shipType;

}
