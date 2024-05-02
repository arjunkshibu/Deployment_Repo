package com.arjun.course.controller;

import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.arjun.course.model.Courses;
import com.arjun.course.service.CoursesService;
@RestController
@RequestMapping("/api/courses")
public class CoursesController {

    private final CoursesService courseService;

    public CoursesController(CoursesService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/getAll")
    public List<Courses> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public Courses getCourseById(@PathVariable long id) {
        return courseService.getCourseById(id);
    }

    @PostMapping("/post")
    @PreAuthorize("hasRole('Admin')")
    public Courses addCourse(@RequestBody Courses course) {
        return courseService.addCourse(course);
    }

    @PutMapping("/putcourses/{cid}")
    @PreAuthorize("hasRole('Admin')")
    public Courses putCourses(@PathVariable long cid, @RequestBody Courses cs) {
        cs.setCourseId(cid);
        return courseService.putCourses(cs);
    }

    @DeleteMapping("/deletecourses/{cid}") 
    @PreAuthorize("hasRole('Admin')")
    public String deleteCourses(@PathVariable long cid){
        courseService.deleteCourses(cid);
        return "Course deleted!";
    }
}
