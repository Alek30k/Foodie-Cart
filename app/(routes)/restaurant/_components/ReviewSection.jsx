import { Textarea } from "@/components/ui/textarea";

const ReviewSection = ({ restaurant }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg">Add your review</h2>
        <Textarea />
      </div>
      <div className="col-span-2 ">List of Review</div>
    </div>
  );
};

export default ReviewSection;
