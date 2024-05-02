package com.arjun.course.service;

import com.arjun.course.model.Courses;
import java.util.List;

public interface CoursesService {
    List<Courses> getAllCourses();
    Courses addCourse(Courses course);
    Courses getCourseById(Long courseId);
    Courses putCourses(Courses cs);
    void deleteCourses(long cid);
}
