package com.pro.repository;

import com.pro.domain.AIS;
import com.pro.domain.AISKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AISRepository extends JpaRepository<AIS, AISKey> {
}
