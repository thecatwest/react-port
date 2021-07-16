import React from "react";
import coverImage from "../../assets/cover/hero-portfolio.jpg";

function About() {
//   const style = {
//     display: "inline",
//     justifyContent: "center",
//     alignItems: "center",
// };
  return (
    <section className="my-5" id="about">
      <img
        src={coverImage}
        className="my-1"
        style={{ width: "100%" }}
        alt="cover"
      />
      <h1>About Me</h1>

      <p className="about-me">Hi there! I'm <span style={{ color: 'var(--secondary' }}>Cat Westover</span>, a full-stack developer, and this is my site, <a href="http://www.catwest.codes"><span style={{ color: 'var(--secondary' }}>catwest.codes.</span></a>
      <br />
      I live in <span style={{ color: 'var(--secondary' }}>Tempe, AZ</span>, where we suffer through 9 months of <span style={{ color: 'var(--secondary' }}>hot, hot, heat</span> (good band, by the way),
      <br />
      and enjoy the other 3 months to the fullest potential. When I'm not coding, I'm probably <span style={{ color: 'var(--secondary' }}>knitting socks</span> 🧶🧦
      <br />
      
      </p>
    </section>
  );
}

export default About;
