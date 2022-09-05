package com.example.be.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.be.dto.ResponseDTO;
import com.example.be.dto.TrackDTO;
import com.example.be.model.TrackEntity;
import com.example.be.service.TrackService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("track")
public class TrackController {

	@Autowired
	private TrackService service;
	
	@GetMapping("/test")
	public ResponseEntity<?> testTrack() {
		String str = service.testService();
		List<String> list = new ArrayList<>();
		list.add(str);
		ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping
	public ResponseEntity<?> createTrack(@RequestBody TrackDTO dto) {
		try {
			String temporaryUserId = "temporary-user";
			
			TrackEntity entity = TrackDTO.toEntity(dto);
			
			if (entity.getTime() == null) {
				log.info("Entity Time : {}", entity.getTime());
				SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
				Date date = new Date(System.currentTimeMillis());
				entity.setTime(formatter.format(date));
				
				log.info("Entity Time : {}", entity.getTime());
				log.info("Entity Mode : {}", entity.getMode());
			}
			
			entity.setId(null);
			entity.setUserId(temporaryUserId);
			List<TrackEntity> entities = service.create(entity);
			List<TrackDTO> dtos = entities.stream().map(TrackDTO::new).collect(Collectors.toList());
			ResponseDTO<TrackDTO> response = ResponseDTO.<TrackDTO>builder().data(dtos).build();
			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<TrackDTO> response = ResponseDTO.<TrackDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}
	
	@GetMapping
	public ResponseEntity<?> retrieveTrackList() {
		String temporaryUserId = "temporary-user";
		
		List<TrackEntity> entities = service.retrieve(temporaryUserId);
		List<TrackDTO> dtos = entities.stream().map(TrackDTO::new).collect(Collectors.toList());
		ResponseDTO<TrackDTO> response = ResponseDTO.<TrackDTO>builder().data(dtos).build();
		return ResponseEntity.ok().body(response);
	}
	
	@PutMapping
	public ResponseEntity<?> updateTrack(@RequestBody TrackDTO dto) {
		String temporaryUserId = "temporary-user";
		
		TrackEntity entity = TrackDTO.toEntity(dto);
		
		if (entity.getTime() == null) {
			log.info("Entity Time : {}", entity.getTime());
			SimpleDateFormat formatter= new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
			Date date = new Date(System.currentTimeMillis());
			entity.setTime(formatter.format(date));
			
			log.info("Entity Time : {}", entity.getTime());
			log.info("Entity Mode : {}", entity.getMode());
		}
		
		entity.setUserId(temporaryUserId);
		List<TrackEntity> entities = service.update(entity);
		List<TrackDTO> dtos = entities.stream().map(TrackDTO::new).collect(Collectors.toList());
		ResponseDTO<TrackDTO> response = ResponseDTO.<TrackDTO>builder().data(dtos).build();
		return ResponseEntity.ok().body(response);
	}
	
	@DeleteMapping
	public ResponseEntity<?> deleteTrack(@RequestBody TrackDTO dto) {
		try {
			String temporaryUserId = "temporary-user";
			
			TrackEntity entity = TrackDTO.toEntity(dto);
			entity.setUserId(temporaryUserId);
			
			List<TrackEntity> entities = service.delete(entity);
			List<TrackDTO> dtos = entities.stream().map(TrackDTO::new).collect(Collectors.toList());
			ResponseDTO<TrackDTO> response = ResponseDTO.<TrackDTO>builder().data(dtos).build();
			
			return ResponseEntity.ok().body(response);
		} catch (Exception e) {
			String error = e.getMessage();
			ResponseDTO<TrackDTO> response = ResponseDTO.<TrackDTO>builder().error(error).build();
			return ResponseEntity.badRequest().body(response);
		}
	}
}
