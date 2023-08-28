import React from "react";
import "./skills.css";

function Skill() {
  return (
    <div>
      <div style={{ backgroundColor: "#8b0f0f", }}>
        <h1
          style={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          Skills
        </h1>
        <p
          style={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          Web developer skills refer to the specific abilities needed to get
          hired and successfully perform in a web developer role. Having these
          skills in abundance can help you stand out from other candidates vying
          for the same role and in your everyday tasks on the job. As with any
          job, you can also develop your skills as a web developer over time.
          Some web developer skills include understanding HTML, general design
          skills, and being analytical. To become a web developer, you'll need a
          variety of hard and soft skills to succeed. Here are some of the most
          common skills to have in this role: HTML/CSS skills, JavaScript
          skills, Responsive design skills, and Analytical skills.
        </p>

        <div class="container">
          <div class="row">
            <div class="col">
              <h3 style={{color:'white'}}>My Focus</h3>
              <h4 style={{color:'#ff0000'}}>___________________</h4>
              <ul className="list-group" >
                <li className="list-group-item-'#8b0f0f'">Web Design</li>
                <li className="list-group-item-'#8b0f0f'">Mobile App Design</li>
                <li className="list-group-item-'#8b0f0f'">A third item</li>
                <li className="list-group-item-'#8b0f0f'">A fourth item</li>
                <li className="list-group-item-'#8b0f0f'">And a fifth one</li>
              </ul>
            </div>
            <div class="col">
              <div className="skillbar">
                <div className="skillbar-title">HTML</div>
                <div className="skill-bar-percent">55%</div>
                <div className="skillbar-bar" style={{ width: "55%" }}></div>
              </div>

              <div className="skillbar">
                <div className="skillbar-title">CSS</div>
                <div className="skill-bar-percent">80%</div>
                <div className="skillbar-bar" style={{ width: "80%" }}></div>
              </div>

              <div className="skillbar">
                <div className="skillbar-title">JavaScript</div>
                <div className="skill-bar-percent">40%</div>
                <div className="skillbar-bar" style={{ width: "40%" }}></div>
              </div>
              <div className="skillbar">
                <div className="skillbar-title">C++</div>
                <div className="skill-bar-percent">30%</div>
                <div className="skillbar-bar" style={{ width: "30%" }}></div>
              </div>

              <div className="skillbar">
                <div className="skillbar-title">React</div>
                <div className="skill-bar-percent">70%</div>
                <div className="skillbar-bar" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
