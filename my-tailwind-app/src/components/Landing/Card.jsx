const Card = ({ image, heading, text }) => {
  return (
    <div>
      <div className="bg-[#766C40] shadow-lg rounded-2xl p-4 min-w-[20%]">
        <div className="flex items-center gap-4 ">
          <img src={image} alt="Card" className="w-8 h-8 rounded-full" />
          <h2 className="text-2xl font-semibold">{heading}</h2>
        </div>
        <p className="text-gray-600 mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Card;
