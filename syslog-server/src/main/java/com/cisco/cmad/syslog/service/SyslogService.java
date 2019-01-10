package com.cisco.cmad.syslog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cisco.cmad.syslog.data.SyslogRepository;
import com.cisco.cmad.syslog.model.Syslog;
import com.cisco.cmad.syslog.model.SyslogTypeStatistics;

@Service
public class SyslogService {
	
	
	@Autowired
	private SyslogRepository syslogRepo;
	
	
	public List<Syslog> getSyslogEvents(long timestamp, int noOfRec) {
		return syslogRepo.findTop50ByTimestampLessThanOrderByTimestampDesc(timestamp);
	}
	
	public List<SyslogTypeStatistics> getSyslogCountByType() {
		return syslogRepo.findAllGroupByType();
	}

}
