const MenteeCard = ({ image, heading, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img width={120} height={120} src={image} alt="card" />
      <h1 className="text-xl mt-2 font-bold ">{heading}</h1>
      <div className="w-full h-[200px] mt-6 text-slate-500 font-semibold">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenteeCard;
