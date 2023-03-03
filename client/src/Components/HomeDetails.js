import React from "react";
import CardComponent from "./CardComponent";
import Texts from "../Helpertexts/Texts";
import { Grid } from "@mui/material";
import BlogLists from "./BlogLists";
import DataBlog from "../Helpertexts/BlogLists";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/react.png";

function HomeDetails() {
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
      <>
        {" "}
        <div className="container">
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
            padding="2px"
          >
            <CardComponent Title="Physics" image={img1} />
            <CardComponent Title="Chemistry" image={img2} />
            <CardComponent Title="c++" image={img3} />
            <CardComponent Title="Java" image={img4} />
            <CardComponent Title="HTML/CSS" image={img5} />
            <CardComponent Title="React" image={img6} />
          </Grid>{" "}
        </div>
      </>
      <div className="blogs container">
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
      </div>
    </>
  );
}

export default HomeDetails;
