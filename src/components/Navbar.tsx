import { useState } from "react";
import logo from "../assets/mainlogo.png"

export default function Navbar() {
  const [active, setActive] = useState("home");


  return (
    <>
      <header className="fixed medium-padding">
        <nav>
          <h6 className="max">
            <img src={logo} className="large"/>
          </h6>

          <button className="circle transparent large">
            <i>search</i>
          </button>

          <button className="circle transparent large">
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
          <span>خانه</span>
        </a>

        <a
          className={active === "users" ? "active" : ""}
          onClick={() => setActive("users")}
        >
          <i>groups</i>
          <span>کاربران</span>
        </a>

        <a
          className={active === "forms" ? "active" : ""}
          onClick={() => setActive("forms")}
        >
          <i>description</i>
          <span>فرم ها</span>
        </a>

        <a
          className={active === "settings" ? "active" : ""}
          onClick={() => setActive("settings")}
        >
          <i>settings</i>
          <span>تنظیمات</span>
        </a>
      </nav>
    </>
  );
}
