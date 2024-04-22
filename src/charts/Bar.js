import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Sep",

    Total_sold_products: 2400,
    amt: 2400,
  },
  {
    month: "Oct",

    Total_sold_products: 1398,
    amt: 2210,
  },
  {
    month: "Nov",

    Total_sold_products: 9800,
    amt: 2290,
  },
  {
    month: "Dec",

    Total_sold_products: 3908,
    amt: 2000,
  },
  {
    month: "Jan",

    Total_sold_products: 4800,
    amt: 2181,
  },
  {
    month: "Feb",

    Total_sold_products: 3800,
    amt: 2500,
  },
  {
    month: "Apr",

    Total_sold_products: 4300,
    amt: 2100,
  },
  {
    month: "May",

    Total_sold_products: 4300,
    amt: 2100,
  },
  {
    month: "Jun",

    Total_sold_products: 4300,
    amt: 2100,
  },
  {
    month: "Jul",

    Total_sold_products: 4300,
    amt: 2100,
  },
  {
    month: "Aug",
    uv: 399,
    Total_sold_products: 4300,
    amt: 2100,
  },
];

const Barchart = () => {
  return (
    <BarChart width={800} height={400} data={data} barSize={25}>
      <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="1 1" />
      <Bar
        dataKey="Total_sold_products"
        fill="blue"
        background={{ fill: "#eee" }}
      />
    </BarChart>
  );
};

export default Barchart;
