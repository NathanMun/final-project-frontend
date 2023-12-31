import React from "react";
import "./ContactPage.scss";
const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="about-section">
        <h2>We are project group 3</h2>
        <h3>Falcon Ping</h3>
      </div>

      <div className="my-container">
        <div className="my-container-top">
          <div className="card">
            <img src="src\assets\images\team\bank.jpg" alt="Cat Avatar" />
            <h2>Bank</h2>
            <p className="title">Fullstack Developer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>rattanun901@gmail.com</p>
            <p>
            <a href="https://www.linkedin.com/in/rattanun" target="_blank"><button className="button">Linked</button></a>
            </p>
          </div>

          <div className="card">
            <img className="noom-img" src="src\assets\images\team\noom.jpg" alt="Cat Avatar" />

            <h2>Noom</h2>
            <p className="title">Fullstack Developer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>nathawut.munsri@gmail.com</p>
            <p>
              <a href="https://www.linkedin.com/in/nathawut-munsri/" target="_blank"><button className="button">Linked</button></a>
            </p>
          </div>
        </div>
        <div className="my-container-bottom">
          <div className="card">
            <img src="src\assets\images\team\pin.jpg" alt="Cat Avatar" />

            <h2>Pinn</h2>
            <p className="title">Fullstack Developer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>thanyalaktanyianiti@gmail.com</p>
            <p>
            <a href="https://www.linkedin.com/in/thanyalak-tanyianniti/" target="_blank"><button className="button">Linked</button></a>
            </p>
          </div>

          <div className="card">
            <img src="src\assets\images\team\pulse.png" alt="Cat Avatar" />

            <h2>Pulse</h2>
            <p className="title">Fullstack Developer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>nuchcha.boonyato@gmail.com</p>
            <p>
            <a href="https://www.linkedin.com/in/nuch-cha-boonyato-498936285" target="_blank"><button className="button">Linked</button></a>
            </p>
          </div>

          <div className="card">
            <img src="src\assets\images\Team\fluke.jpg" alt="Cat Avatar" />

            <h2>Fluke</h2>
            <p className="title">Fullstack Developer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>Supachai.wans@gmail.com</p>
            <p>
              <a href="https://www.linkedin.com/in/supachaiws/" target="_blank"><button className="button">Linked</button></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
