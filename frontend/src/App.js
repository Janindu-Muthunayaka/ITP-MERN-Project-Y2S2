import React from 'react';
import './App.css';
import Header from './compoments/Header';
import Footer from './compoments/Footer';
import Intro from './compoments/Intro';
import CustomerLogin from './compoments/Login/CustomerLogin';
import CustomerProfilePage from './pages/customer/CustomerProfilePage';
import AdminLogin from './compoments/AdminLogin';
import GMChoose from './compoments/GMChoose';
import DMChoose from './compoments/DMChoose';
import PMChoose from './compoments/PMChoose';
import StockDashBoardPage from './pages/stock/StockDashBoardPage';
import PackageDashBoardPage from './pages/package/PackageDashBoardPage';
import OrderDashBoardPage from './pages/order/Or_Dashboard';
import PaymentDashBoardPage from './pages/payment/PaymentDashBoardPage';
import EmployeeDashBoardPage from './pages/employee/EmployeeDashBoardPage';
import CustomerDashBoardPage from './pages/customer/CustomerDashBoardPage';
import MachineDashBoardPage from './pages/machine/MachineDashBoardPage';
import DeliveryDashBoardPage from './pages/delivery/DeliveryDashBoardPage';
import Or_add from './compoments/Order/AddForm';
import Or_Confirm from './compoments/Order/Or_confirm';
// import Read from './components/Read';
import MachineAdd from './compoments/Machine/machineadd';
import MachineManager from './compoments/Machine/MachineManager';
import UpdateMachine from './compoments/Machine/UpdateMachine';
import MachineStatus from './compoments/Machine/MachineStatus';
import AssignMachine from './compoments/Machine/AssignMachine';
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

// import Regi from './components/Regi';
// import Update from './components/Update';



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/*" element={<Outlet />} />
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/CustomerProfilePage" element={<CustomerProfilePage />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/GMChoose" element={<GMChoose />} />
          <Route path="/DMChoose" element={<DMChoose />} />
          <Route path="/PMChoose" element={<PMChoose />} />
          <Route path="/CustomerDashBoardPage" element={<CustomerDashBoardPage />} />
          <Route path="/StockDashBoardPage" element={<StockDashBoardPage />} />
          <Route path="/PackageDashBoardPage" element={<PackageDashBoardPage />} />
          <Route path="/Or_add" element={<Or_add />} />
          <Route path="/Or_Add/order-details" element={<Or_Confirm />} />
          <Route path="/OrderDashBoardPage" element={<OrderDashBoardPage />} />
          <Route path="/PaymentDashBoardPage" element={<PaymentDashBoardPage />} />
          <Route path="/EmployeeDashBoardPage" element={<EmployeeDashBoardPage />} />
          <Route path="/MachineDashBoardPage" element={<MachineDashBoardPage />} />
          <Route path="/DeliveryDashBoardPage" element={<DeliveryDashBoardPage />} />
      
          <Route path="/MachineDashBoardPage/add-machine" element={<MachineAdd />} />
          <Route path="/add-machine//MachineDashBoardPage" element={<MachineAdd />} />
          <Route path="/machine-manager" element={<MachineManager />} />
          <Route path="/update-machine/:id" element={<UpdateMachine />} />
          <Route path="/MachineDashBoardPage/UpdateMachine" element={<UpdateMachine />} />
          <Route path="/MachineDashBoardPage/Machine-Status" element={<MachineStatus />} />
          <Route path="/MachineStatus/Assign-machine" element={<AssignMachine />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
