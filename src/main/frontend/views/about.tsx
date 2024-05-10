import {ViewConfig} from '@vaadin/hilla-file-router/types.js';

export const config: ViewConfig = {
  menu: {
    order: 1,
    icon: 'line-awesome/svg/question-circle.svg'
  },
  title: 'About'
};

export default function AboutView() {
  return (
    <div className="p-m max-w-screen-sm">
      <p>
        Sentiment Analyzer is an example application that provides an AI powered sentiment analysis and response drafting.
        The application is built with <a href="https://vaadin.com">Vaadin</a> and <a
        href="https://github.com/langchain4j/langchain4j">LangChain4j</a>.
      </p>
      <p>
        The application supports both OpenAI (requires an <a href="https://openai.com/index/openai-api">API key</a>),
        and local models through an OpenAI compatible API like <a href="https://ollama.com/">Ollama</a>.
      </p>
      <p>
        You can find the source code for this application on <a
        href="https://github.com/marcushellberg/java-sentiment-analysis">GitHub</a>.
      </p>
    </div>
  );
}
