import React from "react";
import "./About.css";
import Me from "../../../images/Me.jpg";
import CardMedia from "@mui/material/CardMedia";

export default function About() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
          }}
          image={Me}
          alt="About Me"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p id="p-about">
        AJ is a recent graduate from Northwestern Full Stack Web Development Bootcamp. Prior to attending the boot camp, AJ spent several years in the Healthcare Revenue Cycle Management Space. He worked as an implementation consultant for a top EMR software company and also as a Data Analyst with another Revenue Cycle Management firm.


        </p>
        <p id="p-about">
        AJ's passion for software development began when he first opened a terminal and wrote a series of basic shell scripts that saved him hours of manual copying and moving of folders/directories. With his background in Implementation Consulting, data analytics, and Full Stack Web Development, AJ brings a unique mix of functional and technical prowess that will make him a catalyst for the changing world of website development and software engineering.
   
        </p>
        <p id="p-about">
        AJ is excited to apply his skills in the field of website development and software engineering. He is eager to learn and grow in this rapidly evolving industry. His love for software development and his commitment to excellence make him an ideal candidate for any organization looking to build innovative solutions.
      
        </p>
        <p id="p-about">
        In conclusion, AJ's background in Implementation Consulting, data analytics, and Full Stack Web Development, coupled with his passion for software development, make him a valuable addition to any team. His unique mix of functional and technical expertise will undoubtedly contribute to the changing world of website development and software engineering.
      
        </p>
      </div>
    </>
  );
}
