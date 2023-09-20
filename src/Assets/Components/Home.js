import React, { useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import "../Styles/home.css";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../Actions/Actions";

const url = "https://api.spacexdata.com/v3/info";

const Home = () => {
  const info = useSelector((state) => state.info);
  const dispatch = useDispatch();

  const getUserData = () => {
    axios
      .get(url)
      .then((response) => {
        dispatch(getInfo(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="homebox">
        <div className="about">
          <h2>ABOUT SPACEX</h2>
          <p>{info.summary}</p>
        </div>
        <div className="cinfo">
          <h2>COMPANY INFO</h2>
          <ul>
            <li>Founded: {info.founded}</li>
            <li>Employees: {info.employees}</li>
            <li>Launch Sites: {info.launch_sites}</li>
            <li>Test Sites: {info.test_sites}</li>
            <li>Vehicles: {info.vehicles}</li>
          </ul>
        </div>
        <div className="cleaders">
          <h2>COMPANY LEADERSHIP</h2>
          <ul>
            <li>CEO: {info.ceo}</li>
            <li>COO: {info.coo}</li>
            <li>CTO: {info.cto}</li>
            <li>CTO of Propulsion: {info.cto_propulsion}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
