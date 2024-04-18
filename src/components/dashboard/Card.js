import { FaArrowTrendUp } from "react-icons/fa6";

const Card = ({ bg, data }) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className={`w-[240px] text-black p-3 rounded-lg`}
    >
      <p className="flex gap-2 items-center">
        <span>{data.icon}</span>
        <span>{data.title}</span>
      </p>
      <h1 className="text-2xl font-semibold">{data.amount} ETB</h1>
      <p className="flex justify-end gap-3 items-center">
        <span className="text-xl">{data?.percentage} %</span>
        <FaArrowTrendUp />
      </p>
    </div>
  );
};

export default Card;
