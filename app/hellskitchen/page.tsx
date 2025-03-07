"use client";

import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

import Article from "../components/article";
import OffsetPanel from "../components/panel-offset";
import TextFlow from "../components/text-flow";
import Carousel from "../components/carousel";
import ImageAspect from "../components/image-aspect";
import MainPanel from "../components/panel-main";

export default function HellsKitchen() {
  return (
    <>
      <Article
        header={
          <>
            <h1 className="text-4xl font-bold text-mine-7">Hell's Kitchen</h1>
            <h1 className="text-lg italic font-light text-mine-5 justify-center">
              Restaurant Management Game
            </h1>
          </>
        }
        body={
          <OffsetPanel
            isLeft={true}
            mainSection={
              <div className="h-full">
                <Carousel>
                <SwiperSlide>
                  <ImageAspect
                    src="/img/hellskitchen/hk1.png"
                    alt="Hell's Kitchen"
                    aspectRatio="16/9"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ImageAspect
                    src="/img/hellskitchen/hk2.png"
                    alt="Hell's Kitchen"
                    aspectRatio="16/9"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ImageAspect
                    src="/img/hellskitchen/hk3.png"
                    alt="Hell's Kitchen"
                    aspectRatio="16/9"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ImageAspect
                    src="/img/hellskitchen/hk4.png"
                    alt="Hell's Kitchen"
                    aspectRatio="16/9"
                  />
                </SwiperSlide>
              </Carousel>
              </div>
            }
            subSection={
              <div className="bg-mine-2 rounded-lg shadow-lg p-1">
                <ImageAspect
                  src="/img/hellskitchen/hk_title.png"
                  alt="Hell's Kitchen"
                  aspectRatio="4/3"
                  frameStyle="mb-2"
                />
                <TextFlow title="Role" content="Programmer" />
                <TextFlow title="Team Size" content="4" />
                <TextFlow title="Engine" content="Unity" />
                <TextFlow title="Platform" content="Window, Web, Mobile" />
                <TextFlow title="Tool Used" content="Aseprite, Git" />
              </div>
            }
          />
        }
        footer={
          <>
            <div className="flex flex-row space-x-2">
              <div className="p-4 text-xl font-semibold bg-mine-5 rounded-md">
                Play Now
              </div>
            </div>
          </>
        }
      />
      <br />
      <MainPanel></MainPanel>
    </>
  );
}
