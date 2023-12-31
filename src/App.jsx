import { Outlet } from 'react-router-dom';
import Dashboardview from './components/Dashboardview';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="">
      <div className="flex">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
          <Dashboardview />
          <div>
            <Outlet></Outlet>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
