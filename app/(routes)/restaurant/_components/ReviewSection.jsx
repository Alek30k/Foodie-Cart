"use client";

import ReviewList from "@/app/_components/ReviewList";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { Rating as ReactRating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ReviewSection = ({ restaurant }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState();
  const [reviewList, setReviewList] = useState();

  const { user } = useUser();

  useEffect(() => {
    restaurant && getReviewList();
  }, [restaurant]);

  const handleSubmit = () => {
    const data = {
      email: user?.primaryEmailAddress.emailAddress,
      profileImage: user?.imageUrl,
      userName: user?.fullName,
      star: rating,
      reviewText: reviewText,
      RestroSlug: restaurant.slug,
    };

    GlobalApi.AddNewReview(data).then((resp) => {
      console.log(resp);

      toast("Review Added!!");
    });
  };

  const getReviewList = () => {
    GlobalApi.getRestaurantReviews(restaurant.slug).then((resp) => {
      console.log(resp);
      setReviewList(resp?.reviews);
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10">
      <div className="flex flex-col gap-2 p-5 border rounded-lg shadow-lg">
        <h2 className="font-bold text-lg">Add your review</h2>
        <ReactRating
          style={{ maxWidth: 100 }}
          value={rating}
          onChange={setRating}
        />
        <Textarea onChange={(e) => setReviewText(e.target.value)} />
        <Button
          disabled={rating == 0 || !reviewText}
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </div>
      <div className="col-span-2 ">
        <ReviewList reviewList={reviewList} />
      </div>
    </div>
  );
};

export default ReviewSection;
