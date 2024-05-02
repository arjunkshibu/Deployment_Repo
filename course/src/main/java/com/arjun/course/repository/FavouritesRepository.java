package com.arjun.course.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.arjun.course.model.Favourites;

public interface FavouritesRepository extends JpaRepository<Favourites, Long> {
    List<Favourites> findByUserId(Long userId);
}
