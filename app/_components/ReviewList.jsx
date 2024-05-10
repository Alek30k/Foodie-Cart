import Image from "next/image";

const ReviewList = ({ reviewList }) => {
  return (
    <div className="">
      {reviewList &&
        reviewList.map((review, index) => (
          <div className="" key={index}>
            <Image
              src={review.profileImage}
              alt={review.profileImage}
              width={50}
              height={50}
            />
          </div>
        ))}
    </div>
  );
};

export default ReviewList;
