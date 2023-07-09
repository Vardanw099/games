import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function Header() {
  const [scroll, setscroll] = useState(false);
  const [menuOp, setmenuOp] = useState(false);

  document.addEventListener("scroll", () => {
    if (window.scrollY >= 40) {
      setscroll(!false);
    } else {
      setscroll(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      setmenuOp(false);
    }
  });

  return (
    <div className="headerDiv">
      <div
        className={scroll ? "container menupart" : "container-fluid menupart2"}
      >
        <div className="row">
          <div className="col-lg-2 logo ">
            <img
              src="./images/logo.png"
              width={"80px"}
              height={"80px"}
              alt=""
            />
            <button onClick={() => setmenuOp(!menuOp)} className="menuIcon">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div
              className={
                menuOp ? "menuMobile menuOpen" : "menuMobile menuClose"
              }
            >
              <ul className={menuOp ? "menuUlAnim" : null}>
                <li>
                  <a href="">Categories</a>
                </li>
                <li>
                  <a href="">Top Games</a>
                </li>
                <li>
                  <a href="">New Games</a>
                </li>
                <li>
                  <a href="">Games For pc</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 d-none d-lg-flex d-xl-flex d-xxl-flex  menu">
            <ul>
              <li>
                <a href="">Categories</a>
              </li>
              <li>
                <a href="">Top Games</a>
              </li>
              <li>
                <a href="">New Games</a>
              </li>
              <li>
                <a href="">Games For pc</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 d-none d-lg-flex d-xl-flex d-xxl-flex signin">
            <a href="">Sign in/up</a>
          </div>
        </div>
      </div>

      <Carousel
        style={scroll ? { position: "absolute" } : null}
        pause={false}
        variant={"dark"}
        interval={2000}
      >
        <Carousel.Item pause={false}>
          <img
            className="d-block w-100"
            src="./images/pubg.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item pause={false}>
          <img
            className="d-block w-100"
            src="./images/warzone.jpg"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item pause={false}>
          <img
            className="d-block w-100"
            src="./images/tank.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Header;
