package com.pro.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class AIS {

    @EmbeddedId
    private AISKey aisKey;

    @Column(nullable = false)
    private double sog;

    @Column(nullable = false)
    private double cog;

    @Column(nullable = false)
    private double posX;

    @Column(nullable = false)
    private double posY;

}
