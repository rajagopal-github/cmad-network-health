package com.cisco.cmad.syslog.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cisco.cmad.syslog.model.UserPreference;


@Repository
public interface UserPreferenceRepository extends CrudRepository<UserPreference, Integer> {
	
	
	public UserPreference findByProperty(@Param("property")  String property);

}
 