import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import CardComponentForTopTutor from "./CardComponentForTopTutor";
import Texts from "../Helpertexts/Texts";
import { Container, Row, Col } from "react-bootstrap";
import { Grid, Typography } from "@mui/material";
import BlogLists from "./BlogLists";
import DataBlog from "../Helpertexts/BlogLists";
const api = "https://randomuser.me/api/";
function HomeDetails() {
  // const [topTutors,setTopTutors]=useState([]);
  // useEffect(()=>{
  //   axios.get(api).then(res=>{
  //     setTopTutors(res.data.results);
  //     console.log(res.data.results);
  //   })
  // },[]);
  const tempData = [
    {
      name: "Sachin",
      Rating: "4.5",
      QuestionsSolved: "200",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Ragav",
      Rating: "4.9",
      QuestionsSolved: "300",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
    },
  ];
  return (
    <>
      <div className="Top-Section">
        <h5 className="text-top-section">24/7 homework help</h5>
      </div>
      <div className="details-desciptions">
        <p className="details-desciptions-text">{Texts[0]}</p>
      </div>
      <div className="Top-Section">
        <h5 className="text-top-section">Subjects</h5>
      </div>

      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        padding="2px"
      >
        <CardComponent Title="Physics"/>
        <CardComponent Title="Chemistry" />
        <CardComponent Title="c++" />
        <CardComponent Title="Java" />
        <CardComponent Title="HTML/CSS" />
        <CardComponent Title="React" />
      </Grid>
      <div className="Top-Section">
        <h3 className="text-top-section">Our Top Tutors</h3>
      </div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        padding="2px"
      >
        <CardComponentForTopTutor Data={tempData} />
      </Grid>
      <h3 className="text-top-section">Recent Blogs by Admins</h3>
      {DataBlog.map((data, index) => {
        return (
          <BlogLists
            key={index}
            id={data.id}
            name={data.name}
            image={data.image}
            title={data.title}
            shortDescription={data.shortDescription}
          />
        );
      })}
    </>
  );
}

export default HomeDetails;
