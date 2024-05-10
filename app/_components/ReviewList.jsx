import Image from "next/image";
import { Rating as ReactRating } from "@smastrom/react-rating";
import moment from "moment";

const ReviewList = ({ reviewList }) => {
  return (
    <div className="flex flex-col gap-5">
      {reviewList &&
        reviewList.map((review, index) => (
          <div className="flex gap-5 items-center border" key={index}>
            <Image
              src={review.profileImage}
              alt={review.profileImage}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="">
              <h2 className="">{review?.reviewText}</h2>
              <ReactRating
                style={{ maxWidth: 100 }}
                value={review.star}
                isDisabled={true}
              />
              <h2 className="text-sm">
                <span className="font-bold">{review?.userName}</span> at
                {moment(review.publishedAt).format("DD-MMM-yyyy")}
              </h2>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReviewList;
