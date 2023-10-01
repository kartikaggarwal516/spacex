/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import "../Styles/launches.css";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLaunches } from "../Actions/Actions";
import PageOrder from "./PageOrder";

const lurl = "https://api.spacexdata.com/v3/launches?limit=3&offset=";

const Launches = () => {
  const launches = useSelector((state) => state.launches);
  const activePage = useSelector((state) => state.activePage);
  const dispatch = useDispatch();

  const getUserData = () => {
    const offset = (activePage - 1) * 3;
    axios
      .get(`${lurl}${offset}`)
      .then((response) => {
        dispatch(getLaunches(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserData();
  }, [activePage]);

  return (
    <div className="launches">
      <Header />
      <h1>SPACEX LAUNCHES</h1>
      <div className="launchbox">
        {launches.map((l, i) => (
          <Card style={{ width: '18rem' }} key={i} className="lcard">
            <Card.Img variant="top" src={l.links.mission_patch_small} height="150px" loading="lazy" />
            <Card.Body>
              <h2>{l.mission_name}</h2>
              <Card.Title>Mission Details:</Card.Title>
              <ul>
                <li>Rocket Name: {l.rocket.rocket_name}</li>
                <li>Rocket Type: {l.rocket.rocket_type}</li>
                <li>Launch Year: {l.launch_year} </li>
                <li>Launch Site: {l.launch_site.site_name} </li>
                <li>Launch: {l.launch_success ? "Success" : "Failure"} </li>
              </ul>
              <a href={l.links.video_link}>
                <Button variant="primary">Watch Video</Button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="pagebox">
        <PageOrder />
      </div>
    </div>
  );
};

export default memo(Launches);
