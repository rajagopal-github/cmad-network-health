package com.cisco.cmad.syslog.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cisco.cmad.syslog.model.Syslog;
import com.cisco.cmad.syslog.model.SyslogTypeStatistics;
import com.cisco.cmad.syslog.model.UserPreference;
import com.cisco.cmad.syslog.service.SyslogService;

@RequestMapping(value="health/events")
@RestController
public class SyslogController {

	@Autowired
	private SyslogService syslogService;
	
	//TODO : offset structure
	@RequestMapping(value = "/syslog", method = RequestMethod.GET)
	public ResponseEntity<List<Syslog>> getSyslog(@RequestParam(value = "offset") String offset) {
		
		List<Syslog> events = syslogService.getSyslogEvents(Long.valueOf(offset), 50);
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin", "*");
		headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
		ResponseEntity entity = new ResponseEntity<List<Syslog>>(events,headers, HttpStatus.OK);

		return entity;
	}
	
	@RequestMapping(value = "/syslog/counters", method = RequestMethod.GET)
	public ResponseEntity<List<SyslogTypeStatistics>> getSyslogCounters() {
		
		List<SyslogTypeStatistics> counters = syslogService.getSyslogCountByType();
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin", "*");
		headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
		ResponseEntity entity = new ResponseEntity<List<SyslogTypeStatistics>>(counters,headers, HttpStatus.OK);

		return entity;
		//return new ResponseEntity<List<SyslogTypeStatistics>>(counters, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/syslog/filter", method = RequestMethod.GET)
	public ResponseEntity<List<Syslog>> getFilteredSyslogs(@RequestParam(required = false, value = "filterBy" ) String filter , @RequestParam(value = "offset") String offset) {
		return null;
	}
		
	@RequestMapping(value = "/user-preference",method = RequestMethod.GET)
	public ResponseEntity<UserPreference> getSyslogUserPreference(@RequestParam(value = "property") String propertyName) {
		UserPreference pref = syslogService.getUserPreferenceByName(propertyName);
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin", "*");
		headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
		ResponseEntity entity = new ResponseEntity<UserPreference>(pref,headers, HttpStatus.OK);
		return entity;

	}
	
	@CrossOrigin
	@RequestMapping(value = "/user-preference",method = {RequestMethod.POST,RequestMethod.PUT})
	public ResponseEntity<UserPreference> setSyslogUserPreference(@RequestBody UserPreference userPref) {
		System.out.println("SUSHMA in setSyslogUserPreference");
		UserPreference pref = syslogService.setUserPreference(userPref);
			HttpHeaders headers = new HttpHeaders();
			headers.add("Access-Control-Allow-Methods", "POST, PUT");
			System.out.println("SUSHMA resposnse setSyslogUserPreference");
			ResponseEntity entity = new ResponseEntity<UserPreference>(pref,headers, HttpStatus.CREATED);
			return entity;
		 
	}
	
//	@RequestMapping(value = "/user-preference",method = RequestMethod.GET)
//	public ResponseEntity<List<UserPreference>> getAllSyslogUserPreference() {
//		List<UserPreference> pref = syslogService.getAllUserPerferences();
//		HttpHeaders headers = new HttpHeaders();
//		headers.add("Access-Control-Allow-Origin", "*");
//		headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
//		ResponseEntity entity = new ResponseEntity<List<UserPreference>>(pref,headers, HttpStatus.OK);
//		return entity;
//
//	}


	
}