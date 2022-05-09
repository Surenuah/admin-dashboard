import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import './app.scss';

function App() {
  return (
      <div>
        <Topbar />
        <div className="container">
            <Sidebar />
        </div>
      </div>
  );
}

export default App;