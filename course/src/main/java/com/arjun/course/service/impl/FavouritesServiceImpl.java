package com.arjun.course.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.arjun.course.model.Favourites;
import com.arjun.course.repository.FavouritesRepository;
import com.arjun.course.service.FavouritesService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FavouritesServiceImpl implements FavouritesService {
    
    private final FavouritesRepository favouritesRepository;

    public List<Favourites> getAllFavourites() {
        return favouritesRepository.findAll();
    }

    public List<Favourites> getFavouritesById(Long userId) {
        return favouritesRepository.findByUserId(userId);
    }

    public Favourites addFavourite(Favourites favourite) {
        return favouritesRepository.save(favourite);
    }

    public void removeFavourite(Long id) {
        favouritesRepository.deleteById(id);
    }
}
