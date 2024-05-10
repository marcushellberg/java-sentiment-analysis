# Java AI review sentiment analysis and reply generator

This app demonstrates how you can create a custom AI chatbot that can use your own documents to answer questions using RAG (retrieval augmented generation).
The chatbot uses [LangChain4j](https://github.com/langchain4j/langchain4j) and the OpenAI API to generate responses and [Vaadin](http://vaadin.com/) to create the user interface.

> [!IMPORTANT]
> Before you can use the application you need to configure either OpenAi or a local LLM

## 🛠️ Configuration

### Using Open AI

OpenAI gives you better quality answers but requires you to send data to a 3rd party.

To use OpenAI, get an [API key](https://platform.openai.com/api-keys) and configure it in `application.properties`.
Optionally, you can also configure the model in the properties.

### Using a local LLM

Using a local model allows you to keep your data on your local computer, but the quality of answers will not be as good as with OpenAI.

Install [Ollama](https://ollama.com/) and the `llama3` model.
Comment out the OpenAI section of `application.properties` and uncomment the Ollama section.


## ▶️ Running the application

The project is a standard Maven project. To run it from the command line,
type `mvnw` (Windows), or `./mvnw` (Mac & Linux), then open
http://localhost:8080 in your browser.

You can also import the project to your IDE of choice as you would with any
Maven project. Read more on [how to import Vaadin projects to different IDEs](https://vaadin.com/docs/latest/guide/step-by-step/importing) (Eclipse, IntelliJ IDEA, NetBeans, and VS Code).
