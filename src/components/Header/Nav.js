import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import world from "../../images/Icons/World.png";
import { Stack } from "@mui/material";
import { Context } from "../Context/Context";
import check from "../../images/Icons/Check.png";
import { useTranslation } from "react-i18next";
import Popup from "./registe-signin/PopupOutline/Popup";
import profile from "../../images/Pngs/ProfilePic.jpg";
import arrow from "../../images/Pngs/symbols_arrow.png";
import { Logout } from "../../repositories/authRepo";
import { useEffect } from "react";

export default function Nav() {
  const { t, i18n } = useTranslation();
  const {
    mobileOpen,
    setMobileOpen,
    langPopup,
    setLangPopup,
    LANGUAGES,
    selectedLanguage,
    setSelectedLanguage,
    setButtonPopup,
    LogIn,
    setLogIn,
    userData
  } = useContext(Context);

  const NavList = (
    <>
      <NavLink to="/">
        <p className={styles.nav__list__item}>Home</p>
      </NavLink>
      <NavLink to="/know_history">
        <p className={styles.nav__list__item}> Know History</p>
      </NavLink>
      <NavLink to="/tours">
        <p className={styles.nav__list__item}>Tours</p>
      </NavLink>
      <NavLink to="/articles">
        <p className={styles.nav__list__item}>Articles</p>
      </NavLink>
      <NavLink to="/knowledge" style={{ marginRight: "2vw" }}>
        <p className={styles.nav__list__item}>Knowledge Check</p>
      </NavLink>
    </>
  );

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLanguageClick = (obj) => {
    setSelectedLanguage(Object.values(obj)[0]);
    i18n.changeLanguage(Object.keys(obj)[0]);
  };

  const handelLogout = () => {
    var jsonBody = {
      refresh: localStorage.getItem("refresh"),
    };
    Logout(jsonBody).then((res) => {
      setLogIn(false)
    });
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      style={{ backgroundColor: "#BF8148" }}
      height="100%"
    >
      <Stack className={styles.nav__list} direction="column">
        <Box p="50px 0px 10px 0px" lineHeight="60px">
          {NavList}
          {LogIn ? (
            <>
              <NavLink to="/profile" style={{ marginRight: "2.5vw" }}>
                profile
              </NavLink>
              <button
                style={{
                  margin: "0 auto",
                  display: "block",
                  backgroundColor: "#003441",
                }}
                onClick={handelLogout}
                className={styles.nav__list__btn}
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setButtonPopup([true, t("nav.register")])}
                style={{ backgroundColor: "#003441" }}
                className={styles.nav__list__btn}
              >
                {t("nav.register")}
              </button>
              <button
                onClick={() => setButtonPopup([true, t("nav.signin")])}
                className={styles.nav__list__btn}
              >
                {t("nav.signin")}
              </button>
            </>
          )}
        </Box>
        <Box
          margin="15px auto"
          borderBottom="1px solid white "
          width="92px"
        ></Box>

        <Box width="75%">
          {LANGUAGES.map((obj, index) => {
            return (
              <Stack
                direction="row"
                justifyContent="space-between"
                key={index}
                onClick={() => handleLanguageClick(obj)}
              >
                <p className={styles.sideNav_li}>{Object.values(obj)[0]}</p>
                <img
                  src={check}
                  alt="check"
                  className={
                    selectedLanguage === Object.values(obj)[0]
                      ? styles.check
                      : styles.notcheck
                  }
                />
              </Stack>
            );
          })}
        </Box>
      </Stack>
    </Box>
  );

  return (
    <>
      <Popup />

      <Box className={styles.nav}>
        <Box
          display="flex"
          alignItems="center"
          sx={{ width: { xs: "auto", md: "20%" } }}
        >
          <div className={styles.elogo}>e</div>
          <Box color="white" fontWeight="200">
            <p style={{ fontFamily: "CapitalisTypOasis", fontSize: "20px" }}>
              ETLAS
            </p>
            <div style={{ fontFamily: "var(--mainFont)", fontSize: "11px" }}>
              Your Tour Guid
            </div>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-end"
          sx={{ width: { xs: "70%", md: "auto" } }}
        >
          <IconButton
            style={{
              color: "#BF8148",
              border: "1px solid #BF8148",
              borderRadius: "5px",
            }}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Box className={styles.nav__list}>
            <Box
              className={styles.nav__list__lang}
              onMouseEnter={() => setLangPopup(true)}
              onMouseLeave={() => setLangPopup(false)}
              open={langPopup}
            >
              <img src={world} alt="worldIcon" style={{ width: "30px" }} />

              {langPopup && (
                <Box pt="20px" className={styles.lang__popUp}>
                  <p className={styles.triangle_up}> </p>

                  <p className={styles.lang__popUp__title}>{t("nav.lang")}</p>
                  <Box
                    margin="0 auto"
                    mb="10px"
                    borderBottom="2.6px solid white "
                    width="92px"
                  ></Box>

                  {LANGUAGES.map((obj, index) => {
                    return (
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        key={index}
                        onClick={() => handleLanguageClick(obj)}
                      >
                        <p className={styles.sideNav_li}>
                          {Object.values(obj)[0]}
                        </p>
                        <img
                          src={check}
                          alt="check"
                          className={
                            selectedLanguage === Object.values(obj)[0]
                              ? styles.check
                              : styles.notcheck
                          }
                        />
                      </Stack>
                    );
                  })}
                </Box>
              )}
            </Box>

            <Box
              display="flex"
              p="10px 35px"
              alignItems="center"
              width={LogIn ? "72%" : "95%"}
            >
              {NavList}
              {LogIn ? (
                <Box
                  width="21%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  gap="15px"
                >
                  <Stack direction="row" gap="4px">
                    <NavLink
                      to="/profile"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src={
                          userData != null && userData.image_url != null
                            ? userData.image_url
                            : profile
                        }
                        style={{ width: "35%", borderRadius: "50%" }}
                      />
                      <p>
                        &nbsp;
                        {userData != null && userData.full_name != null
                          ? userData.full_name.split(" ")[0]
                          : ""}
                      </p>
                    </NavLink>
                  </Stack>

                  <button
                    style={{
                      margin: "0 auto",
                      display: "block",
                      backgroundColor: "#003441",
                    }}
                    onClick={handelLogout}
                    className={styles.nav__list__btn}
                  >
                    LogOut
                  </button>
                </Box>
              ) : (
                <>
                  <button
                    onClick={() => setButtonPopup([true, t("nav.register")])}
                    style={{ backgroundColor: "#003441" }}
                    className={styles.nav__list__btn}
                  >
                    {t("nav.register")}
                  </button>
                  <button
                    onClick={() => setButtonPopup([true, t("nav.signin")])}
                    className={styles.nav__list__btn}
                  >
                    {t("nav.signin")}
                  </button>
                </>
              )}
            </Box>
          </Box>
        </Box>

        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor="right"
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              height: "100%",
              width: "240px",
            },
          }}
        >
          <Box height="100%">{drawer}</Box>
        </Drawer>
      </Box>
    </>
  );
}
