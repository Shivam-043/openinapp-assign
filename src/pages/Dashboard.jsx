import "./Dashboard.css";
import SideBar from "../components/SideBar";
import DashHeader from "../components/DashHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import TopCoinCards from "../components/TopCoinCards";
import CoinChart from "../components/CoinChart";
import DemoPieChart from "../components/DemoPieChart";
import Profile from "../components/Profile";
import data from "../constants";
import Graph from "../components/Graph";


const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

const Dashboard = () => {
  const [apiData, setAPIData] = useState();
  const [coinHistory, setCoinHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
        setLoading(false);
    };
    fetchApi();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      ) : (
        <div className="dashb__container">
          <SideBar />

          <div className="main__dashboard__container">
            {/* Dhashboard-Header */}
            <DashHeader />

            {/* Top-Crypto-Coins */}
            <TopCoinCards data={data} />

            {/* History-Chart-Of-A-Single-Chart */}
            {/* <CoinChart coinHistory={coinHistory} /> */}
              <Graph />

            <div className=" mr-5 px-5 w-[100%] gap-8 flex flex-wrap justify-between">
              <DemoPieChart />

              <Profile />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
