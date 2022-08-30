package com.example.be.dto;

import com.example.be.model.TrackEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class TrackDTO {
	private String id;
	private String time;
	private int mode;
	
	public TrackDTO(final TrackEntity entity) {
		this.id = entity.getId();
		this.time = entity.getTime();
		this.mode = entity.getMode();
	}
	
	public static TrackEntity toEntity(final TrackDTO dto) {
		return TrackEntity.builder()
				.id(dto.getId())
				.time(dto.getTime())
				.mode(dto.getMode())
				.build();
	}
}
