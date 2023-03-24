import { Box, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import pic1 from "../../images/Pics/pic1.png";
import pic2 from "../../images/Pics/pic2.png";
import styles from "./KnowHistory.module.css";
import "./KnowHistory.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Link } from 'react-scroll';

export default function KnowHistory() {
  const sectionRefs = useRef([]);

  const [activeLink, setActiveLink] = useState();

  const sections = [
    {
      id: 1,
      date: "200 B.C. - 231 B.C.",
      title: "Osiris Kingdom",
      img: pic1,
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
    {
      id: 2,
      date: "231 B.C. - 369 B.C.",
      title: "The Old Kingdom",
      img: pic2,
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
    {
      id: 3,
      date: "200 B.C. - 231 B.C.",
      title: "Osiris Kingdom",
      img: pic1,
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
    {
      id: 4,
      date: "231 B.C. - 369 B.C.",
      title: "The Old Kingdom",
      img: pic2,
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },

    {
      id: 5,
      date: "200 B.C. - 231 B.C.",
      title: "Osiris Kingdom",
      img: pic1,
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
  ];

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    let activeSection = sections[0].id;
  
    sections.forEach((section, index) => {
      const sectionRef = sectionRefs.current[index];
      if (sectionRef && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
        if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
          activeSection = section.id;
        }
      }
    });
  
    setActiveLink(activeSection);
  };

  useEffect(() => {
    sectionRefs.current = new Array(5).fill(null).map(() => React.createRef(null));
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick(id) {
    setTimeout(() => {
      setActiveLink(id)
    }, 1000); 
  }

  return (
    <Stack direction="row" mt="120px" sx={{ backgroundColor: "white" }}>
      <Box className={styles.timeLineCont}>

        <Box className={styles.timeLineTitle}>TimeLine</Box>

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
              {sections.map((sec) => {
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
                          spy={true} smooth={true} duration={200} offset={-100}
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
        <h4 className={styles.title}>Know History</h4>

        <Box className={styles.history}>
          {sections.map((sec) => {
            return (
              <Box
                key={sec.id}
                p="50px 0"
                id={sec.id}
                width="87%"
                margin="0 auto"
                ref={sectionRefs.current[sections.indexOf(sec)]}
              >
                <h4>{sec.title}</h4>
                <p className={styles.history__date}>{sec.date}</p>
                <img
                  className={styles.history__img}
                  src={sec.img}
                  alt={sec.title}
                />
                <Box className={styles.history__discription}>
                  <p>{sec.description[0]}</p>
                  <br />
                  <p>{sec.description[1]}</p>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Stack>
  );
}
