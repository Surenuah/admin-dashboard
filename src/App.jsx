import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import './app.scss';

function App() {
  return (
      <div>
        <Topbar />
        <div className="container">
            <Sidebar />
            <Home />
        </div>
      </div>
  );
}

export default App;