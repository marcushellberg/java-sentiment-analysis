package com.vaadin.example.data;

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Review {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String review;
    @Nullable
    private Sentiment sentiment;
    @Nullable
    private String response;

    public Review() {
    }

    public Review(String name, String review) {
        this.name = name;
        this.review = review;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    @Nullable
    public Sentiment getSentiment() {
        return sentiment;
    }

    public void setSentiment(@Nullable Sentiment sentiment) {
        this.sentiment = sentiment;
    }

    @Nullable
    public String getResponse() {
        return response;
    }

    public void setResponse(@Nullable String response) {
        this.response = response;
    }
}
