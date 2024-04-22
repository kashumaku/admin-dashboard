import Piechart from "../../charts/Pie";
// import piechart from "../../images/piechart.png";

const TopRevenue = ({ theme }) => {
  return (
    <div className={`p-5 rounded-lg ${theme === "dark" ? "dark" : "light"}`}>
      <h1 className="text-2xl font-semibold mb-3">Top Revenue products</h1>
      {/* <img src={piechart} alt="" /> */}
      <Piechart />

      {/*chart description */}
      <section className="flex gap-5 flex-wrap mt-5">
        <p>
          <div className="w-5 h-5 rounded-full bg-red-500" />
          <span>Women Closet</span>
        </p>
        <p>
          <div className="w-5 h-5 rounded-full bg-yellow-500" />
          <span>Nike Air max</span>
        </p>
        <p>
          <div className="w-5 h-5 rounded-full bg-blue-500" />
          <span>Furniture</span>
        </p>
        <p>
          <div className="w-5 h-5 rounded-full bg-sky-500" />
          <span>Samsung mobile</span>
        </p>
        <p>
          <div className="w-5 h-5 rounded-full bg-green-500" />
          <span>Women</span>
        </p>
      </section>
    </div>
  );
};

export default TopRevenue;
