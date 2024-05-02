package com.arjun.course.service;

import java.util.List;


import com.arjun.course.model.Favourites;

public interface FavouritesService {
    List<Favourites> getAllFavourites();
    List<Favourites> getFavouritesById(Long Id);
    Favourites addFavourite(Favourites favourite);
    void removeFavourite(Long id);
}
