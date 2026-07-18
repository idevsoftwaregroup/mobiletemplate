import { useState } from "react";
import logo from "../assets/new-logo.png"

export default function Navbar() {
  const [active, setActive] = useState("home");


  return (
    <>
      <header className="fixed">
        <nav>
          {/*<h6 className="max"><b>W</b>rit<b>INK</b></h6>*/}
          <h6 className="max">
          <img src={logo} className="large"/>
          </h6>

          <button className="circle transparent">
            <i>search</i>
          </button>

          <button className="circle transparent">
            <i>account_circle</i>
          </button>
        </nav>
      </header>

      <nav className="bottom">
        <a
          className={active === "home" ? "active" : ""}
          onClick={() => setActive("home")}
        >
          <i>home</i>
          <span>Home</span>
        </a>

        <a
          className={active === "users" ? "active" : ""}
          onClick={() => setActive("users")}
        >
          <i>groups</i>
          <span>Users</span>
        </a>

        <a
          className={active === "forms" ? "active" : ""}
          onClick={() => setActive("forms")}
        >
          <i>description</i>
          <span>Forms</span>
        </a>

        <a
          className={active === "settings" ? "active" : ""}
          onClick={() => setActive("settings")}
        >
          <i>settings</i>
          <span>Settings</span>
        </a>
      </nav>
    </>
  );
}
