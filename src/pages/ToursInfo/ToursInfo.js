import React, { useState } from "react";
import Style from "./ToursInfo.module.css";
import { Box, Stack } from "@mui/material";
import Stars from "../../components/Stars/Stars";
import Tours1 from "../../images/Pngs/Tours1.png";
import Tours2 from "../../images/Pngs/Tours2.png";
import Tours3 from "../../images/Pngs/Tours3.png";
import Tours4 from "../../images/Pngs/Tours4.png";
import Arrow_Prev from "../../images/Icons/prevArrow.png";
import Arrow_Next from "../../images/Icons/nextArrow.png";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PopUp from "../../components/PopUp_Message/PopUp";
import { getTourById } from "../../repositories/toursRepo";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ToursInfo(props) {
  const [tour, setTour] = useState(null);
  const { id } = useParams();

  async function getTour(id) {
    const result = await getTourById(id);
    if (!result.isError) {
      setTour(result.body);
    } else {
      console.log("Error fetching tour");
    }
  }
  useEffect(() => {
    getTour(id);
  }, []);

  SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);
  const [buttonPopUp, setButtonPopUp] = useState(false);

  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slide_img = [Tours1, Tours2, Tours3, Tours4];

  return (
    <Stack>
      {tour ? (
        <>
          <Stack className={Style.Sec1}>
            <Box className={Style.slide}>
              <Swiper
                ref={swiperRef}
                autoplay={true}
                initialSlide={slide_img.length / 2}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  700: {
                    slidesPerView: 2,
                    spaceBetween: 7,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 9,
                  },
                }}
                pagination={true}
                className={Style.mySwiper}
              >
                {tour.images.map((image) => {
                  return (
                    <SwiperSlide key={image.id}>
                      <img src={image.image_url} alt="" className={Style.mySwiper_img} />
                    </SwiperSlide>
                  );
                })}
                <Box className={Style.slider_controller}>
                  <button className={Style.prev_btn} onClick={goPrev}>
                    <img
                      src={Arrow_Prev}
                      className={Style.prev_img}
                      alt="prev"
                    />
                  </button>
                  <button className={Style.next_btn} onClick={goNext}>
                    <img
                      src={Arrow_Next}
                      className={Style.next_img}
                      alt="next"
                    />
                  </button>
                  <Box className={Style.swiper_pagination}></Box>
                </Box>
              </Swiper>
            </Box>
          </Stack>
          <Stack className={Style.Sec2}>
            <Box className={Style.tours_info}>
              <Box width="80%">
                <h2 className={Style.tours_title}>{tour.title}</h2>
                <p className={Style.tours_prag}>{tour.description}</p>
              </Box>
              <Box className={Style.tours_rate}>
                <Stars />
                <button
                  onClick={() => setButtonPopUp(true)}
                  className={Style.rate_btn}
                >
                  <p className={Style.tours_prag3}>
                    if you take a trip to Giza before, don't forget to give your
                    feedback.
                  </p>
                </button>
              </Box>
            </Box>
            <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
              <Box>
                <h2 className={Style.popup_title}>Give us your feedback</h2>
                <p className={Style.popup_prag}>
                  What do you think about this tour ?
                </p>
                <br />
              </Box>
              <Box className={Style.popup_star}>
                <Stars rating={0} />
              </Box>
            </PopUp>
            <br />
            <br />
            <Box>
              <p className={Style.tours_prag2}>
                <br />
                <h3>{tour.sections[0].title}</h3>
                <div>{tour.sections[0].description}</div> <br />
                <br />
                <h3>{tour.sections[1].title}</h3>
                <div>{tour.sections[1].description}</div> <br />
                <br />
                <h3>{tour.sections[2].title}</h3>
                <div>{tour.sections[2].description}</div> <br />
                <br />
              </p>
            </Box>
          </Stack>
          <br />
          <br />
        </>
      ) : (
        <Box width="20%" margin="300px auto">
          <h1>loading...</h1>
        </Box>
      )}
    </Stack>
  );
}
