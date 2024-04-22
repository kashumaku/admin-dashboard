import Barchart from "../../charts/Bar";

const SellingAnalysis = ({ theme }) => {
  return (
    <div
      className={`p-5 max-md:p-1 rounded-lg ${
        theme === "dark" ? "dark" : "light"
      }`}
    >
      <h1 className="text-2xl font-semibold mb-3">Selling analysis</h1>
      <div className="w-[100%] overflow-x-auto">
        <Barchart />
      </div>
    </div>
  );
};

export default SellingAnalysis;
