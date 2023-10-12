import "./Dashboard.css";
import SideBar from "../components/SideBar";
import DashHeader from "../components/DashHeader";
import { useEffect, useState } from "react";
import TopCards from "../components/TopCards";
import DemoPieChart from "../components/DemoPieChart";
import Profile from "../components/Profile";
import data from "../constants";
import Graph from "../components/Graph";

const Dashboard = () => {
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

          <div className="main__dashboard__container mt-16">
            {/* Dhashboard-Header */}
            <DashHeader />

            {/* Top-Crypto-Coins */}
            <TopCards data={data} />

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
