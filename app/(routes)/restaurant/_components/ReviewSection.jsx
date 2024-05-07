const ReviewSection = ({ restaurant }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
      <div className="">User Input</div>
      <div className="col-span-2 ">List of Review</div>
    </div>
  );
};

export default ReviewSection;
