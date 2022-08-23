import "./Cats.css";
import { Howl } from "howler";
import React from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";

function Cats() {
  const navStyle = ({ isActive }) => {
    return {
      fontSize: isActive ? "1.9vw" : "1.5vw",
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "red" : "green",
      textDecoration: "none",
    };
  };

  const { catinfo } = useParams();
  const navigate = useNavigate();
  const cats = [
    {
      name: "sera",
      sex: "female",
      age: "1 month",
      color: "white-black",
      eyes: "brown",
      sound: require("../sounds/sound .wav"),
      imgsrc: require("../images/cat1.jpeg"),
    },

    {
      name: "jaguar",
      sex: "male",
      age: "1 year",
      color: "black",
      eyes: "yellow",
      sound: require("../sounds/cat3.mp3"),
      imgsrc: require("../images/cat3.jpeg"),
    },
    {
      name: "kora",
      sex: "male",
      age: "3 years",
      color: "gray",
      eyes: "blue",
      sound: require("../sounds/cat2.mp3"),
      imgsrc: require("../images/cat2.jpeg"),
    },
  ];
  function playSound(src) {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  }
  return (
    <>
      <div className="cats">
        <ul>
          {cats.map((cat) => {
            return (
              <li>
                <img
                  className={
                    catinfo === cat.name
                      ? "active-cat"
                      : catinfo
                      ? "not-active"
                      : ""
                  }
                  src={cat.imgsrc}
                  alt="cat"
                />

                <NavLink style={navStyle} to={`/cats/${cat.name}`}>
                  {cat.name}
                </NavLink>
                {catinfo === cat.name && (
                  <div className="cat-info ">
                    <div>{`Name: ${cat.name}`}</div>
                    <div>{`Sex: ${cat.sex}`}</div>
                    <div>{`Age: ${cat.age}`}</div>
                    <div>{`Color: ${cat.color}`}</div>
                    <div>{`Eyes-Color: ${cat.eyes}`}</div>

                    <button onClick={() => playSound(cat.sound)}>
                      <i class="fa-solid fa-volume-high"></i>
                    </button>

                    <button
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      <i class="fa-solid fa-house"></i>
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Cats;
