"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Rating as ReactRating } from "@smastrom/react-rating";
import { useState } from "react";

const ReviewSection = ({ restaurant }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
      <div className="flex flex-col gap-2 p-5 border rounded-lg shadow-lg">
        <h2 className="font-bold text-lg">Add your review</h2>
        <ReactRating
          style={{ maxWidth: 100 }}
          value={rating}
          onChange={setRating}
        />
        <Textarea />
        <Button>Submit</Button>
      </div>
      <div className="col-span-2 ">List of Review</div>
    </div>
  );
};

export default ReviewSection;
