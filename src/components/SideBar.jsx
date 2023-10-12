import "../pages/Dashboard.css";
import dashboard from "../assets/icons/dashboard.svg";
import transactions from "../assets/icons/transactions.svg";
import schedule from "../assets/icons/schedule.svg";
import user from "../assets/icons/user.svg";
import settings from "../assets/icons/settings.svg";

const SideBar = () => {
  return (
    <div className="sidebar__container">
      <h1 className=" text-white mt-16 mb-16 ml-0 font-Montserrat font-bold text-[36px]">
        Board.
      </h1>

      <ul className="nav__links">
        <li className="nav__link">
          <a
            href="#"
            className="font-bold flex items-center "
          >
            <img src={dashboard} className="w-[18px] h-[18px] mr-12 object-contain" />
            Dashboard
          </a>
        </li>
        <li className="nav__link">
          <a
            href="#"
            className="flex items-center"
          >
            <img src={transactions} className="w-[18px] h-[18px] mr-12 object-contain" />
            Transactions
          </a>
        </li>
        <li className="nav__link">
          <a href="#" className="flex items-center">
          <img src={schedule} className="w-[18px] h-[18px] mr-12 object-contain" />Schedules
          </a>
        </li>
        <li className="nav__link">
          <a href="#" className="flex items-center">
          <img src={user} className="w-[18px] h-[18px] mr-12 object-contain" />Users
          </a>
        </li>
        <li className="nav__link">
          <a href="#" className="flex items-center">
          <img src={settings} className="w-[18px] h-[18px] mr-12 object-contain" />Settings
          </a>
        </li>
      </ul>

      <div className="sidebar__footer">
        <a href="#">Help</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
};

export default SideBar;
