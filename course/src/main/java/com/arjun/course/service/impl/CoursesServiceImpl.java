package com.arjun.course.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arjun.course.model.Courses;
import com.arjun.course.repository.CoursesRepository;
import com.arjun.course.service.CoursesService;

@Service
public class CoursesServiceImpl implements CoursesService {

    private final CoursesRepository coursesRepository;

    
    public CoursesServiceImpl(CoursesRepository coursesRepository) {
        this.coursesRepository = coursesRepository;
    }

    @Override
    public List<Courses> getAllCourses() {
        return coursesRepository.findAll();
    }


    @Override
    public Courses addCourse(Courses course) {
        Courses existingCourse = coursesRepository.findByCourseName(course.getCourseName());
        if (existingCourse != null) {
            return existingCourse;
        } else {
            return coursesRepository.save(course);
        }
    }

    @Override
    public Courses getCourseById(Long courseId) {
        return coursesRepository.findById(courseId).orElse(null);
    }

    @Override
    public Courses putCourses(Courses cs) {
        return coursesRepository.save(cs);
    }

    @Override
    public void deleteCourses(long cid) {
        coursesRepository.deleteById(cid);
    }
}
