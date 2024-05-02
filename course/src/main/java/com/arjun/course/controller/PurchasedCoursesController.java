package com.arjun.course.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arjun.course.model.PurchasedCourses;
import com.arjun.course.service.PurchasedCoursesService;

@RestController
@RequestMapping("/api/purchased-courses")
public class PurchasedCoursesController {

    private final PurchasedCoursesService purchasedCoursesService;

    public PurchasedCoursesController(PurchasedCoursesService purchasedCoursesService) {
        this.purchasedCoursesService = purchasedCoursesService;
    }

    @GetMapping("/getAll")
    public List<PurchasedCourses> getAllPurchasedCourses() {
        return purchasedCoursesService.getAllPurchasedCourses();
    }

    @GetMapping("/{userId}")
    public List<PurchasedCourses> getPurchasedCoursesByUserId(@PathVariable Long userId) {
        return purchasedCoursesService.getPurchasedCoursesByUserId(userId);
    }

    @PostMapping("/add")
    public PurchasedCourses addPurchasedCourse(@RequestBody PurchasedCourses purchasedCourses) {
        return purchasedCoursesService.addPurchasedCourse(purchasedCourses);
    }

}
