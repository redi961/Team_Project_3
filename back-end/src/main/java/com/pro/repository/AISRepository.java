package com.pro.repository;

import com.pro.domain.AIS;
import com.pro.domain.AISKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AISRepository extends JpaRepository<AIS, AISKey> {

    @Query(value = "select * from (\n" +
            "\tselect * from ais order by mmsi, signal_date DESC limit 18446744073709551615\n" +
            "    ) as recent_ais group by mmsi", nativeQuery = true)
    List<AIS> findRecentAIS();
}
