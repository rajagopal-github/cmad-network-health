package com.cisco.cmad.syslog.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_preference")
public class UserPreference {

	@Id
//	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USER_PREF_SEQ")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private String id;

	private String user;
	
	private String property;
	
	private String value;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getProperty() {
		return property;
	}

	public void setProperty(String property) {
		this.property = property;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

}
