import Image from "next/image";
const CommunityCard = ({ image, heading, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-[300px] text-center">
     
      <Image 
        width={120}
        height={120}
        src={image}
        className="w-full lg:h-full object-cover rounded-md mb-4"
        alt="card"
      />

      <h2 className="text-2xl font-bold text-yellow-800">{heading}</h2>
      <p className="text-slate-500 mt-2">{description}</p>
    </div>
  );
};

export default CommunityCard;
