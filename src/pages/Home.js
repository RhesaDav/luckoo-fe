import React from "react";
import ReactPlayer from "react-player";

import Carousel from "../component/Carousel";
import TopNFT from "../component/TopNFT";

import "./Home.css";

export default function Home() {
  return (
    <div className="">
      <div>
        <div className="p-5 text-center">
          <h1 className="text-title">Welcome to Luckoo.</h1>
          <p className="text-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil
            saepe culpa provident unde ipsa fugit aliquam similique cupiditate
            quidem labore incidunt, cumque vel. Cumque ex sint excepturi? Totam,
            dolorum!
          </p>
          <div>
            <Carousel />
          </div>
        </div>

        <div className="p-5 ">
          <h1 className="text-paragraph">
            How to use <span className="text-title">Luckoo.</span>
          </h1>
          <div className="text-center">
            <p className="text-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              nihil saepe culpa provident unde ipsa fugit aliquam similique
              cupiditate quidem labore incidunt, cumque vel. Cumque ex sint
              excepturi? Totam, dolorum!
            </p>
          </div>
          <div className="row">
            <div className="col-6">
              <ReactPlayer
                url="https://youtu.be/GXoEpNjgKzg"
                controls
                width="100%"
                height="425px"
              />
            </div>
            <div className="col-6">
              <div className="col-12">
                <img
                  src="https://mobileimages.lowes.com/marketingimages/19dd22a3-1ff6-4faa-bd08-ebd77e158d69/windows-og.png"
                  className="rounded border-howtouse m-1"
                />
                <img
                  src="https://globalcastaway.com/wp-content/uploads/2019/08/chichen.jpg"
                  className="rounded border-howtouse m-1"
                />
              </div>
              <div className="col-12 my-2">
                <img
                  src="https://cdnassets.hw.net/05/44/08211cbb4be8bd62f0d7f77c97e5/proxy-18.jfif"
                  className="rounded border-howtouse m-1"
                />
                <img
                  src="https://www.popsci.com/uploads/2021/02/19/F2DPV2MPW5CNFKO3GI6RWVXUV4.jpg?auto=webp&width=1440&height=959.76"
                  className="rounded border-howtouse m-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <TopNFT />
        </div>
      </div>
    </div>
  );
}
