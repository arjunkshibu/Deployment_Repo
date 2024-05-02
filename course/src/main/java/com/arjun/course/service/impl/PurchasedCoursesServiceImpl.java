package com.arjun.course.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arjun.course.model.PurchasedCourses;
import com.arjun.course.repository.PurchasedCoursesRepo;
import com.arjun.course.service.PurchasedCoursesService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PurchasedCoursesServiceImpl implements PurchasedCoursesService {

    private final PurchasedCoursesRepo purchasedCoursesRepository;

    @Override
    public List<PurchasedCourses> getAllPurchasedCourses() {
        return purchasedCoursesRepository.findAll();
    }

    @Override
    public List<PurchasedCourses> getPurchasedCoursesByUserId(Long userId) {
        return purchasedCoursesRepository.findByUserId(userId);
    }

    @Override
    public PurchasedCourses addPurchasedCourse(PurchasedCourses purchasedCourses) {
        return purchasedCoursesRepository.save(purchasedCourses);
    }

    @Override
    public void removePurchasedCourse(Long id) {
        purchasedCoursesRepository.deleteById(id);
    }
}
