import chart from "../../images/chart.png";

const SellingAnalysis = ({ theme }) => {
  return (
    <div className={`p-5 rounded-lg ${theme === "dark" ? "dark" : "light"}`}>
      <h1 className="text-2xl font-semibold mb-3">Selling analysis</h1>
      <img src={chart} alt="" className="w-[100%]" />
    </div>
  );
};

export default SellingAnalysis;
