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
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              "Hi! I'm Vincent, a San Diego native, a spicy food obsessive, and
              an avid curator of sad music playlists. I recently graduated from
              UC Berkeley with a double major in Data Science and Cognitive
              Science, and I'm hoping to apply that knowledge to a Software
              Engineering role in the near future. I'm constantly looking for
              ways to improve myself, and I'm not afraid to get my hands dirty
              to prove it. I perform best when I'm surrounded with ambitious,
              like-minded people who are just as passionate about their work as
              I am. When I'm not working on my next project, I'm probably
              enjoying an oolong milk tea or discovering underrated artists on
              Spotify. Please feel free to check out some of my past projects
              below."
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
