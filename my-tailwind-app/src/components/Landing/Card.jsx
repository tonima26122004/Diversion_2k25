const Card = ({ image, heading, text }) => {
  return (
    <div className="w-full"> 
      <div className="bg-[#766C40] shadow-lg rounded-2xl p-4 min-w-[20%] min-h-[10%]">
        <div className="flex items-center gap-2 ">
          <img src={image} alt="Card" className="w-5 h-5 rounded-full" />
          <h2 className="text-2xl text-[#E4E2D6] font-semibold">{heading}</h2>
        </div>
        <p className="text-[#E4E2D6] mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Card;
