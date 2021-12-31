// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons

import {
  faHome,
  faFootballBall,
  faHighlighter,
  faToggleOn,
  faFutbol,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../styles/NavComponent.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector, getState } from "react-redux";
import { startLogOut } from "../../actions/auth";
import { Button } from "@mui/material";
import { store } from "../../store/store";
import { style } from "@mui/system";
import Image from "next/image";

const links = [
  { id: "1", name: "Home", url: "/", icon: faHome },
  { id: "2", name: "Teams", url: "/teams", icon: faFutbol },
];
export const NavComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { name } = auth;

  const widthIcons = "18";

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(startLogOut());
  };

  // useEffect(() => {
  //   console.log("selectorData", selectorData);

  //   //if (!auth.uid && !auth.name) {
  //   //  router.push("/login");
  //   //}
  // }, [dispatch]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.cardUser}>
          <div className={styles.avatar}>
            <Image src="/avatar6.png" alt="avatar" width="40" height="40" />
          </div>
          <div className={styles.cardUserName}>{name.toUpperCase()}</div>
          <div className={styles.wrapperlogoff}>
            <FontAwesomeIcon
              icon={faPowerOff}
              style={{ width: widthIcons, cursor: "pointer" }}
              onClick={handleLogOut}
              className={styles.cardUserLogOff}
            />
          </div>
        </div>

        <hr className={styles.lineclas}></hr>
        <ul>
          {links.map(({ url, icon, name, id }) => {
            return (
              <li className={styles.linav}>
                <Link href={url}>
                  <a className={router.pathname == url ? styles.activeNav : ""}>
                    <span>
                      <FontAwesomeIcon
                        icon={icon}
                        style={{ width: widthIcons }}
                      />
                    </span>
                    <div>{name}</div>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
