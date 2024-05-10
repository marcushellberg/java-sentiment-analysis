import Review from "Frontend/generated/com/vaadin/example/data/Review";
import Badge from "Frontend/components/Badge";
import {Button, TextArea} from "@vaadin/react-components";
import ReviewModel from "Frontend/generated/com/vaadin/example/data/ReviewModel";
import {useForm} from "@vaadin/hilla-react-form";
import {useEffect} from "react";
import {ReviewService} from "Frontend/generated/endpoints";
import {useSignal} from "@vaadin/hilla-react-signals";

interface ReviewCardProps {
  review: Review,
  onGenerateDraft: (review: Review) => Promise<void>
  onSave: (review: Review) => Promise<void>
}

export default function ReviewCard({review, onSave, onGenerateDraft}: ReviewCardProps) {
  const drafting = useSignal(false);
  const {field, model, read, submit} = useForm(ReviewModel, {onSubmit: onSave});

  useEffect(() => {
    read(review);
    drafting.value = false;
  }, [review]);

  return (
    <div className="flex flex-col gap-s items-start border shadow-xs rounded-s p-m">
      <div className="flex gap-s items-baseline">
        <h3 className="text-l m-0">{review.name}</h3>
        <Badge text={review.sentiment}/>
      </div>

      <p>{review.review}</p>

      {review.response ? (
        <div className="self-stretch flex flex-col">
          <TextArea label="Response" {...field(model.response)}/>
          <Button theme="primary" className="self-end" onClick={submit}>Save</Button>
        </div>
      ) : (
        <Button
          className="self-end"
          disabled={drafting.value}
          onClick={() => {
            drafting.value= true;
            onGenerateDraft(review);
          }}>{drafting.value ? "Generating..." : "Generate draft response ✨"}</Button>
      )}
    </div>
  );
}