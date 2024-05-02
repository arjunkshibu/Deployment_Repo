package com.arjun.course.service;

import com.arjun.course.model.PurchasedCourses;
import java.util.List;

public interface PurchasedCoursesService {
    List<PurchasedCourses> getAllPurchasedCourses();
    List<PurchasedCourses> getPurchasedCoursesByUserId(Long userId);
    PurchasedCourses addPurchasedCourse(PurchasedCourses purchasedCourses);
    void removePurchasedCourse(Long id);
}
