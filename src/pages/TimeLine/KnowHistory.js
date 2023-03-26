import { Box, Stack } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./KnowHistory.module.css";
import "./KnowHistory.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Context } from "../../components/Context/Context";
import { useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function KnowHistory() {
  const { t } = useTranslation();

  const sectionRefs = useRef([]);

  const [activeLink, setActiveLink] = useState();

  const { timeLineSections } = useContext(Context); 
  const location = useLocation();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    let activeSection = timeLineSections[0].id;

    timeLineSections.forEach((section, index) => {
      const sectionRef = sectionRefs.current[index];
      if (sectionRef && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
        if (
          currentScrollPos >= sectionTop &&
          currentScrollPos < sectionBottom
        ) {
          activeSection = section.id;
        }
      }
    });

    setActiveLink(activeSection);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth'});
      }
    }
  });


  useEffect(() => {
    sectionRefs.current = new Array(5)
      .fill(null)
      .map(() => React.createRef(null));
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick(id) {
    setTimeout(() => {
      setActiveLink(id);
    }, 1000);
  }

  return (
    <Stack direction="row" mt="120px" sx={{ backgroundColor: "white" }}>
      <Box className={styles.timeLineCont}>
        <Box className={styles.timeLineTitle}>{t("timeLine.timeLine")}</Box>

        <Box display="flex" justifyContent="flex-end">
          <Box className={styles.timeLine}>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {timeLineSections.map((sec) => {
                return (
                  <Box key={sec.id}>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot
                          sx={{ backgroundColor: "#8D5E32", padding: "1px" }}
                        >
                          <Box
                            className={`${styles.circle} ${
                              activeLink === sec.id ? styles.clicked : "none"
                            }`}
                          ></Box>
                        </TimelineDot>
                        <TimelineConnector
                          sx={{
                            width: "4px",
                            backgroundColor: "var(--secondryColor)",
                            opacity: "0.8",
                          }}
                        />
                      </TimelineSeparator>

                      <TimelineContent>
                        <Link
                          to={sec.id}
                          onClick={() => handleClick(sec.id)}
                          spy={true}
                          smooth={true}
                          duration={200}
                          offset={-100}
                        >
                          <h3 className={styles.timeLine__title}>
                            {sec.title}
                          </h3>
                        </Link>
                        <p className={styles.timeLine__date}>{sec.date}</p>
                      </TimelineContent>
                    </TimelineItem>
                  </Box>
                );
              })}
            </Timeline>
          </Box>
        </Box>
      </Box>

      <Box className={styles.historyCont}>
        <h4 className={styles.title}>{t("timeLine.title")}</h4>

        <Box className={styles.history}>
          {timeLineSections.map((sec) => {
            return (
              <Box
                key={sec.id}
                p="50px 0"
                id={sec.id}
                width="87%"
                margin="0 auto"
                ref={sectionRefs.current[timeLineSections.indexOf(sec)]}
              >
                <h4>{sec.title}</h4>
                <p className={styles.history__date}>{sec.date}</p>
                <Fade>

                <img
                  className={styles.history__img}
                  src={sec.img}
                  alt={sec.title}
                />
                </Fade>
                <Box className={styles.history__discription}>
                 <Fade top>
                 <p>{sec.description[0]}</p>
                  <br />
                  <p>{sec.description[1]}</p>
                 </Fade>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Stack>
  );
}
