package com.example.be.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.be.model.TrackEntity;
import com.example.be.persistence.TrackRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class TrackService {

	@Autowired
	private TrackRepository repository;
	
	public String testService() {
		SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
		Date date = new Date(System.currentTimeMillis());

		// System.out.println(System.currentTimeMillis());
		// System.out.println(formatter.format(date));
		
		// TrackEntity 생성
		TrackEntity entity = TrackEntity.builder().time(formatter.format(date)).build();
		// TrackEntity 저장
		repository.save(entity);
		// TrackEntity 검색
		TrackEntity savedEntity = repository.findById(entity.getId()).get();
		return savedEntity.getTime();
	}
	
	public List<TrackEntity> create(final TrackEntity entity) {
		validate(entity);
		
		repository.save(entity);
		log.info("Entity ID : {} is saved.", entity.getId());
		return repository.findByUserId(entity.getUserId());
	}
	
	private void validate(final TrackEntity entity) {
		if (entity == null) {
			log.warn("Entity cannot be null.");
			throw new RuntimeException("Entity cannot be null.");
		}
		
		if (entity.getUserId() == null) {
			log.warn("Unknown user.");
			throw new RuntimeException("Unknown user.");
		}
	}
}
