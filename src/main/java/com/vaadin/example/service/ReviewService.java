package com.vaadin.example.service;


import com.vaadin.example.ReviewBuddy;
import com.vaadin.example.data.Review;
import com.vaadin.example.data.ReviewRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;

import java.util.List;

@BrowserCallable
@AnonymousAllowed
public class ReviewService {

    private final ReviewRepository repository;
    private final ReviewBuddy reviewBuddy;

    public ReviewService(ReviewRepository repository, ReviewBuddy reviewBuddy) {
        this.repository = repository;
        this.reviewBuddy = reviewBuddy;
    }

    public List<Review> findAll() {
        return repository.findAll();
    }

    public Review save(Review review) {
        return repository.save(review);
    }

    public Review analyzeSentiment(Review review) {
        var sentiment = reviewBuddy.analyzeSentiment(review.getReview());
        review.setSentiment(sentiment);
        return repository.save(review);
    }

    public Review generateDraftResponse(Review review) {
        review.setResponse(reviewBuddy.draftResponse(review.getReview()));
        return review;
    }
}
