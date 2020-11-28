import React from "react";

function Navbar() {
  return (
    <div className="jumbotron jumbotron-vertical">
      <div className="container text-center">
        <h1 className="display-4">Hello World!</h1>
        <p className="lead"> I'm Dianna</p>
        <hr class="my-4"></hr>
        <p>Full-Stack Developer</p>
        <a className="btn btn-secondary mr-1 btn-md" href="/" role="button">About</a>
        <a className="btn btn-secondary mr-1 btn-md" href="/portfolio" role="button">Portfolio</a>
        <a className="btn btn-secondary btn-md" href="/contact" role="button">Contact</a>
      </div>
    </div>
    );
  }

export default Navbar;
