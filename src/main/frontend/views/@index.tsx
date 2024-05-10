import {ViewConfig} from '@vaadin/hilla-file-router/types.js';
import {useSignal} from '@vaadin/hilla-react-signals';
import Review from "Frontend/generated/com/vaadin/example/data/Review";
import {useEffect} from "react";
import {ReviewService} from "Frontend/generated/endpoints";
import ReviewCard from "Frontend/components/ReviewCard";
import {Button} from "@vaadin/react-components";

export const config: ViewConfig = {
  menu: {order: 0, icon: 'line-awesome/svg/comments.svg'},
  title: 'Reviews',
};

export default function HelloWorldView() {
  const reviews = useSignal<Review[]>([]);
  const working = useSignal(false);

  useEffect(() => {
    ReviewService.findAll().then(r => reviews.value = r);
  }, []);

  async function analyzeReviews() {
    working.value = true;
    // You probably want to throttle this to avoid hitting the API rate limit
    const promises = reviews.value.map(review => analyzeSingleReview(review));
    await Promise.all(promises);
    working.value = false;
  }

  async function analyzeSingleReview(review: Review) {
    const analyzedReview = await ReviewService.analyzeSentiment(review);

    // Update reviews as they're received
    reviews.value = reviews.value.map(r =>
      r.id === review.id ? analyzedReview : r
    );
  }

  async function save(review: Review) {
    const saved = await ReviewService.save(review);
    reviews.value = reviews.value.map(r =>
      r.id === saved.id ? saved : r
    );
  }

  async function generateDraftResponse(review: Review) {
    const draft = await ReviewService.generateDraftResponse(review);
    reviews.value = reviews.value.map(r =>
      r.id === draft.id ? draft : r
    );
  }

  return (
    <div className="flex flex-col gap-s items-start p-m" style={{maxWidth: '500px'}}>
      <Button onClick={analyzeReviews}
              disabled={working.value}>{working.value ? "Analyzing..." : "Analyze sentiment"}</Button>
      {reviews.value.map(review => (
        <ReviewCard
          key={review.id}
          review={review}
          onSave={save}
          onGenerateDraft={generateDraftResponse} />
      ))}
    </div>
  );
}
