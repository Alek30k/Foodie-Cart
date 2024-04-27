import Image from "next/image";

const BusinessItem = ({ business }) => {
  return (
    <div className="">
      <Image
        src={business.banner?.url}
        alt={business.name}
        width={500}
        height={130}
        className="h-[130px] rounded-xl object-cover"
      />
      <div className="mt-2">
        <h2 className="font-bold text-lg">{business.name}</h2>
        <div className="flex gap-2 items-center">
          <div className="">
            <Image src="/star.png" alt="star" width={14} height={14} />
            <label htmlFor="">4.5</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessItem;
