package com.exam.controller;

import java.io.File;
import java.io.IOException;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;

@RestController
//@CrossOrigin
public class TestController {

	private Logger logger = LoggerFactory.getLogger(getClass());
	
	@PostMapping("/upload")
	public ResponseEntity<String> upload2(String theText, @RequestBody MultipartFile theFile) {
//		public ResponseEntity<UploadDTO> upload1(UploadDTO dto) {  // UploadDTO 처리 방법은 에러남. 
		
		logger.info("LOGGER:theText: {}", theText);
		logger.info("LOGGER:theFile: {}", theFile);
		
		//byte[] byte_arr = theFile.getBytes();
				String contentType =theFile.getContentType();
				String name = theFile.getName();
				String originalFilename
				      = theFile.getOriginalFilename();
				long size = theFile.getSize();
				
				logger.info("LOGGER:contentType: {}", contentType);
				logger.info("LOGGER:name: {}", name);
				logger.info("LOGGER:originalFilename: {}", originalFilename);
				logger.info("LOGGER:size: {}", size);
				
				// 저장할 경로 설정
				File f = new File("c:\\upload", originalFilename);
				
				// 파일 저장
				try {
					theFile.transferTo(f);
				} catch (IllegalStateException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
				
				
		return ResponseEntity.ok("success");  
	}

	
}






