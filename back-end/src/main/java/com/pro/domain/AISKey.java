package com.pro.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.sql.Timestamp;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AISKey implements Serializable {


    @ManyToOne
    @JoinColumn(name = "mmsi")
    private Ship ship;

    @Column(nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp signal_date;
}
