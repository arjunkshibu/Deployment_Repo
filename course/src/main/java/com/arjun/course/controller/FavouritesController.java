package com.arjun.course.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.arjun.course.model.Favourites;
import com.arjun.course.service.FavouritesService;

@RestController
@RequestMapping("/api/favourites")
public class FavouritesController {

    private final FavouritesService favouritesService;

    public FavouritesController(FavouritesService favouritesService) {
        this.favouritesService = favouritesService;
    }

    @GetMapping("/getAll")
    public List<Favourites> getAllFavourites() {
        return favouritesService.getAllFavourites();
    }

    @GetMapping("/{userId}")
    public List<Favourites> getFavouritesByUserId(@PathVariable Long userId) {
        return favouritesService.getFavouritesById(userId);
    }

    @PostMapping("/add")
    public Favourites addFavourite(@RequestBody Favourites favourite) {
        return favouritesService.addFavourite(favourite);
    }

    @DeleteMapping("/delete")
    public void deleteFavourite(@RequestParam Long id) {
        favouritesService.removeFavourite(id);
    }

}
