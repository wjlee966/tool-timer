package com.example.be.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.be.model.TrackEntity;

@Repository
public interface TrackRepository extends JpaRepository<TrackEntity, String> {
	List<TrackEntity> findByUserId(String userId);
}
