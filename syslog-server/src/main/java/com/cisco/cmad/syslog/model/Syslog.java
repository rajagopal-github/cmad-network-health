package com.cisco.cmad.syslog.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "syslogevents")
public class Syslog {

	@Id
	//@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SYSLOG_SEQ")
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;

	@Column(name = "ipaddress")
	private String sourceIp;

	private long timestamp;
//
//	@Column(name = "type")
//	@Enumerated(EnumType.STRING)
//	private SyslogEnum type;
	
	private String type;

	private String message;

//	public enum SyslogEnum {
//		ERROR("error"), WARNING("warning"), NOTIFICATION("notification");
//		private String type;
//
//		private SyslogEnum(String value) {
//			this.type = value;
//		}
//	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}



	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}


	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSourceIp() {
		return sourceIp;
	}

	public void setSourceIp(String sourceIp) {
		this.sourceIp = sourceIp;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}



	
}
