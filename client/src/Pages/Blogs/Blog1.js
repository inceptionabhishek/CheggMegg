import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Editor from "../../Components/Editor/editor";
function Blog1() {
  const [fakedata, setFakedata] = useState(
    "<h1>Megg-Chegg: A Doubt Solving website</h1><p><br></p><p>There are 3 types of users that can be registered on this website. They are <strong>Students</strong>, <strong>Tutors, </strong>and <strong>admins</strong>.</p><p><br></p><p>MeggChegg is an online education platform that provides a wide range of academic services to students, including textbook rentals, homework help, tutoring, and more. Founded in 2005, Chegg has become one of the most popular and trusted websites for students seeking assistance with their academic work. In this blog post, we'll take a closer look at the various services offered by Chegg and how they can benefit students.</p><ol><li>Textbook Rentals:One of the primary services offered by Chegg is textbook rentals. Students can search for the books they need, rent them for a fraction of the cost of buying them new, and return them when they are finished. Chegg also offers eTextbooks, which can be accessed on any device with an internet connection.</li><li>Homework Help:Another popular service provided by Chegg is homework help. Students can post questions related to their coursework and receive answers from subject matter experts. Chegg also offers step-by-step solutions to textbook problems, which can be incredibly helpful for students who are struggling with a particular concept or topic.</li><li>Tutoring: Chegg's tutoring services are designed to help students who need one-on-one assistance with their coursework. Students can choose from a variety of subjects, including math, science, and language arts. Chegg's tutors are all certified professionals who are passionate about helping students succeed.</li><li>Scholarships: In addition to academic services, Chegg also provides resources to help students prepare for their careers. These resources include resume builders, interview preparation tools, and job search engines. Chegg's goal is to help students succeed not only in their academic pursuits but also in their professional lives.</li></ol><p>Conslusion:</p><p><br></p><p>Chegg.com is an excellent resource for students who are looking for academic assistance, career resources, and more. The platform is easy to use, and the services are affordable and accessible. Whether you need help with your homework, want to rent textbooks, or are looking for ways to finance your education, Chegg has something to offer. Overall, Chegg is an excellent tool that can help students achieve their academic and professional goals.</p>"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <div className="spinner">
            <Spinner
              animation="border"
              variant="primary"
              className="TempSpinner"
            />
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <Editor data={fakedata} />
          </div>
        </>
      )}
    </>
  );
}

export default Blog1;
