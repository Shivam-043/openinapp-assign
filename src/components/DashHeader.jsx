import "../pages/Dashboard.css";
import { auth, db, logout} from '../firebase/firebaseInit';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

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
          <i className="ri-notification-2-line"></i>
        </button>

        <div className="profile__icon">
          {user && <img src={photo} alt="userimage" />}

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
