package com.arjun.course.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arjun.course.model.PurchasedCourses;

public interface PurchasedCoursesRepo extends JpaRepository<PurchasedCourses,Long> {

    boolean existsByUserIdAndCourseId(Long userId, Long courseId);
    List<PurchasedCourses> findByUserId(Long userId);


}
    