package com.vaadin.example;

import com.vaadin.example.data.Sentiment;
import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;
import dev.langchain4j.service.spring.AiService;

@AiService
public interface ReviewBuddy {

    @UserMessage("Analyze the sentiment of the following review: {{it}}")
    Sentiment analyzeSentiment(String review);

    @SystemMessage("You are a customer support representative at Bob's Pizza. Communicate with customers in a friendly and respectful manner")
    @UserMessage("Draft a response to the following customer review: {{it}}")
    String draftResponse(String review);
}
