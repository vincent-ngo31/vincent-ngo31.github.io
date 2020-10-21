import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profilepic.jpg"
              alt="Vincent Ngo Profile Pic"
            />
            {/* <div className="seals">
              <img
                className="berkeley-seal"
                src="images/berk.png"
                alt="berkeley-seal"
              />
              <img
                className="gtech-seal"
                src="images/gtech.png"
                alt="georgia-tech-seal"
              />
            </div> */}
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Hi! I'm Vincent, a San Diego native, a recent UC Berkeley graduate
              with a double major in Data Science and Cognitive Science, an
              incoming Masters student at Georgia Tech, and a software engineer
              at Roblox.
            </p>
            {/* <p>
              I graduated from UC Berkeley with a double major in Data Science
              and Cognitive Science in May 2020, and I was recently admitted to
              Georgia Tech's Master of Computer Science program for Spring 2021.
            </p> */}
            <p>
              I'm constantly looking for ways to improve myself, and I'm not
              afraid to get my hands dirty to prove it. I perform best when I'm
              surrounded with ambitious, like-minded people who are just as
              passionate about their work as I am. When I'm not working on my
              next project, I'm probably enjoying an oolong milk tea or
              discovering underrated artists on Spotify. Please feel free to
              check out some of my past projects below.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
