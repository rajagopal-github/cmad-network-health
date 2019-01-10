package com.cisco.cmad.syslog.data;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cisco.cmad.syslog.model.Syslog;
import com.cisco.cmad.syslog.model.SyslogTypeStatistics;

@Repository
public interface SyslogRepository extends PagingAndSortingRepository<Syslog,Long> {
	
	default List<Syslog> findTop50ByTimestampLessThanOrderByTimestampDesc(@Param("timestamp") Long timestamp) {
		
		Sort sort = new Sort(Sort.Direction.DESC,"timestamp");
		return findAllByTimestampLessThan(timestamp, PageRequest.of(0, 50, sort));
	}

	default List<Syslog> findTop50ByTimestampGreaterThanOrderByTimestampDesc(@Param("timestamp") Long timestamp) {
		Sort sort = new Sort(Sort.Direction.DESC,"timestamp");
		return findAllByTimestampGreaterThan(timestamp, PageRequest.of(0, 50,sort));
	}


	default List<Syslog> findAllByTimestampLessThanOrderByTimestampDesc(@Param("timestamp") Long timestamp,Pageable pageable) {
		Sort sort = new Sort(Sort.Direction.DESC,"timestamp");
		return findAllByTimestampGreaterThan(timestamp, PageRequest.of(pageable.getPageNumber(),pageable.getPageSize(),sort));
		
	}
	
	List<Syslog> findAllByTimestampGreaterThanOrderByTimestampDesc(@Param("timestamp") Long timestamp,Pageable pageable);
	
	List<Syslog> findAllByTimestampLessThan(@Param("timestamp") Long timestamp,Pageable pageable);
	
	List<Syslog> findAllByTimestampGreaterThan(@Param("timestamp") Long timestamp,Pageable pageable);
	
	@Query("select s.type as type, count(s) as count " +
	           "from Syslog s " +
	           "group by s.type")
	List<SyslogTypeStatistics> findAllGroupByType();

}
