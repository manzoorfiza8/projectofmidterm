import React from 'react'
import "./home.css";
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/header/Header';
import Featured from '../../Components/Featured/Featured';
import PropertyList from '../../Components/propertyList/propertyList';
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties';
import Footer from '../../Components/Footer/Footer';


const Home = () => {
  return (
    <div>
     <Navbar/>
     <Header/>

     <div className="homeContainer">
     <Featured/>
     
     <h1 className="homeTitle"> Choose Your Type</h1>
     <PropertyList/>
     <h1 className="homeTitle"> Featured Rooms</h1>

     <FeaturedProperties/>
     <br/>
     <Footer/>
     
     </div>
     

    </div>
  );
};

export default Home;
