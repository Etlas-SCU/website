import { Box, Stack } from "@mui/material";
import React from "react";
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
export default function KnowHistory() {
  const values = [
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
      date: "231 B.C. - 369 B.C.",
      title: "The Old Kingdom",
      img: pic2,
      description: [
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
    },
  ];

  return (
    <Stack direction="row" mt="120px">
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
              {values.map((val) => {
                return (
                  <Box key={val.id}>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot
                          sx={{ backgroundColor: "#8D5E32" }}
                        >
                          <Box ></Box>
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
                        <a href={`#${val.id}`}>
                          <h3 className={styles.timeLine__title}>
                            {val.title}
                          </h3>
                        </a>
                        <p className={styles.timeLine__date}>{val.date}</p>
                      </TimelineContent>
                    </TimelineItem>
                  </Box>
                );
              })}
            </Timeline>
          </Box>
        </Box>
      </Box>

      <Box  className={styles.historyCont} >
        <h4 style={{ color: "var(--mainColor)", marginBottom: "10px" }}>
          Know History
        </h4>
        <Box className={styles.history}>
          {values.map((val) => {
            return (
              <Box key={val.id} mt="20px" id={val.id}>
                <h4>{val.title}</h4>
                <p className={styles.history__date}>{val.date}</p>
                <img
                  className={styles.history__img}
                  src={val.img}
                  alt={val.title}
                />
                <Box className={styles.history__discription}>
                  <p>{val.description[0]}</p>
                  <br />
                  <p>{val.description[1]}</p>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Stack>
  );
}
