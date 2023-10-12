import "../pages/Dashboard.css";
import { auth, db, logout} from '../firebase/firebaseInit';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

import notifications from "../assets/icons/notifications.svg";
import user from "../assets/icons/user.svg";

const DashHeader = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setPhoto(data.photoUrl);
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    // if (loading) return;
    // if (!user) return navigate("/");
    fetchUserName();
    console.log(photo);
  }, [user, loading]);
  // const { user, logout, isAuthenticated } = useAuth0();

  return (
    <div className="dash__header__bar">
      <h2 className="dahsboard">Dashboard</h2>

      <div className="header__right">
        <div className="search__box">
          <input
            type="text"
            className="search__bar"
            placeholder="Search..."
          />
          <i className="ri-search-line"></i>
        </div>

        <button className="bell__icon">
        <img src={notifications} alt="notification" className='w-[18px] h-[18px] object-contain'/>
        </button>

        <div className="profile__icon">
          {user && (photo!= null || photo == "") ? <img src={photo} alt="userimage" />:  <i class="ri-user-fill text-[22px] flex justify-center text-center" ></i>}

          <ul
            className="profile__dropdown"
          >
            <li>{name}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        </div>
        <button
          className="menu__toggle"
          onClick={() => {
            document
              .querySelector(".sidebar__container")
              .classList.toggle("active");
          }}
        >
          <i className="ri-menu-4-line"></i>
        </button>
      </div>
    </div>
  );
};

export default DashHeader;
