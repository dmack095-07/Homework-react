import React from "react";
import Container from "../components/Container";
import "../styles/Contact.css";


const FormPage = () => {
  return (
   <div>
    <Container>
      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" placeholder="First and Last Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Example@gmail.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Container>
   </div>
  );
  };
  
  export default FormPage;

