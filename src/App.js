import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/HeaderComponent/Header.js';
import Banner from './components/BannerComponent/Banner.js';
//import Nav from './components/NavComponent/Nav.js';
import Footer from './components/FooterComponent/Footer.js';
import Home from './components/HomeComponent/Home.js';
import About from './components/AboutComponent/About.js';
import Contact from './components/ContactComponent/Contact.js';
import Service from './components/ServiceComponent/Service.js';
import Register from './components/RegisterComponent/Register.js';
import Login from './components/LoginComponent/Login.js';
import AdminHome from './components/AdminHomeComponent/AdminHome.js';
import Manageusers from './components/ManageusersComponent/Manageusers.js';
import EPAdmin from './components/EPAdminComponent/EPAdmin.js';
import AddCategory from './components/AddCategoryComponent/AddCategory.js';
import AddSubCategory from './components/AddSubCategoryComponent/AddSubCategory.js';
import CPAdmin from './components/CPAdminComponent/CPAdmin.js';
import CPUser from './components/CPUserComponent/CPUser.js';
import EPUser from './components/EPUserComponent/EPUser.js';
import UserHome from './components/UserHomeComponent/UserHome.js';
import Logout from './components/LogoutComponent/Logout.js';
import VerifyUser from './components/VerifyUserComponent/Verifyuser.js';
import ViewCategory from './components/ViewCategoryComponent/ViewCategory.js';
import ViewSubCategory from './components/ViewSubCategoryComponent/ViewSubCategory.js';
import Charity from './components/CharityComponent/Charity.js';
import Payment from './components/PaymentComponent/Payment.js';
import Success from './components/SuccessComponent/Success.js';
import AIClient from './components/AIClientComponent/AIClient.js';
import AddProduct from './components/AddProduct Component/AddProduct.js';
import AddConsignment from './components/AddConsignmentComponent/AddConsignment.js';
import ManageOrders from './components/ManageOrdersComponent/ManageOrders.js';
import ViewConsignmentStatus from './components/ConsignmentStatusComponent/ConsignmentStatus.js';


function App() {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <Banner />

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/vemail/:email" element={<VerifyUser/>} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/logout" element={<Logout />} ></Route>
        <Route path="/admin" element={<AdminHome />} ></Route>
        <Route path="/manageusers" element={<Manageusers />} ></Route>
        <Route path="/epadmin" element={<EPAdmin />} ></Route>
        <Route path="/epuser" element={<EPUser />} ></Route>
        <Route path="/cpadmin" element={<CPAdmin />} ></Route>
        <Route path="/addcategory" element={<AddCategory />} ></Route>
        <Route path="/addsubcategory" element={<AddSubCategory />} ></Route>
        <Route path="/addproduct" element={<AddProduct />} ></Route>
        <Route path="/user" element={<UserHome />} ></Route>
        <Route path="/cpuser" element={<CPUser />} ></Route>
        <Route path="/viewcategory" element={<ViewCategory />} ></Route>
        <Route path="/charity" element={<Charity />} ></Route>
        <Route path="/payment/:uid/:amt" element={<Payment />} ></Route>
        <Route path="/Success" element={<Success />} ></Route>
        <Route path="/aiclient" element={<AIClient />} ></Route>
        <Route path="/searchsc/:cnm" element={<ViewSubCategory/>} ></Route>
        <Route path="/consignmentstatus" element={<ViewConsignmentStatus/>} ></Route>
         
         <Route path="/addconsignment" element={<AddConsignment />} ></Route>
         <Route path="/manageorder" element={<ManageOrders />} ></Route>
         
        

        
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;