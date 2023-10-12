import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from './firebase/firebaseInit';


function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <main className="container">
      {user ? <Dashboard /> : <SignIn />}
      {/* <Dashboard /> */}
    </main>
  );
}

export default App;
