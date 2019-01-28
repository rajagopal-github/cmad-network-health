package com.cisco.cmad.syslog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cisco.cmad.syslog.data.SyslogRepository;
import com.cisco.cmad.syslog.data.UserPreferenceRepository;
import com.cisco.cmad.syslog.model.Syslog;
import com.cisco.cmad.syslog.model.SyslogTypeStatistics;
import com.cisco.cmad.syslog.model.UserPreference;

@Service
public class SyslogService {
	
	
	@Autowired
	private SyslogRepository syslogRepo;
	
	@Autowired
	private UserPreferenceRepository userPrefRepo;
	
	
	public List<Syslog> getSyslogEvents(long timestamp, int noOfRec) {
		return syslogRepo.findTop50ByTimestampLessThanOrderByTimestampDesc(timestamp);
	}
	
	public List<SyslogTypeStatistics> getSyslogCountByType() {
		return syslogRepo.findAllGroupByType();
	}
	
	public UserPreference setUserPreference(UserPreference pref) {
			return userPrefRepo.save(pref);
					
	}
	
	public UserPreference getUserPreferenceByName(String name) {
		return userPrefRepo.findByProperty(name);
	}
	
	public List<UserPreference> getAllUserPerferences() {
		return (List<UserPreference>) userPrefRepo.findAll();
	}

}
