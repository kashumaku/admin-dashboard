import { FaArrowTrendUp } from "react-icons/fa6";

const Card = ({ bg, data }) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`w-[240px] text-black p-1 md:p-3 rounded-lg`}
    >
      <p className="flex gap-2 items-center">
        <span>{data.icon}</span>
        <span className="">{data.title}</span>
      </p>
      <h1 className="md:text-2xl font-semibold text-gray-600">
        {data.amount} ETB
      </h1>
      <p className="flex justify-end gap-3 items-center">
        <span className="text-xl text-gray-600">{data?.percentage} %</span>
        <FaArrowTrendUp size={20} color="gray" />
      </p>
    </div>
  );
};

export default Card;
