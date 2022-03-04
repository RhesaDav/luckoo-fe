import React, { useEffect, useState } from "react";
import axios from "axios";

import "./TopNFT.css";
import Countdown from "./Countdown";

export default function TopNFT() {
  const [getDatas, setDatas] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      headers: { "Content-Type": "application/json" },
      url: "https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/?format=json",
    }).then((results) => {
      setDatas(results.data);
    });
  }, []);

  return (
    <div className="row">
      <div className="col-4">
        <div className="card card-color">
          <img
            src={getDatas.image_original_url}
            className="m-3 rounded-3"
            alt="card-img-top"
          />
          <div className="card-body"></div>
        </div>
        <hr />
      </div>
      <div className="col-8">
        <div>
          <h1 className="top-title">Top NFT</h1>
          <h1 className="top-title">
            <span className="line">---------------</span> of The Week
          </h1>
        </div>

        <div>
          <h1 className="nft-name">{getDatas.name}</h1>
        </div>

        <div className="m-3">
          <span className="rounded-pill py-1 px-3 mx-2 nft-subject">Lorem ipsum collection <svg xmlns="http://www.w3.org/2000/svg" width='20' viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/></svg></span>
          <span className="rounded-pill py-1 px-3 mx-2 nft-subject">SotoAyam_Uenak</span>
        </div>
    
        <div>
          <h5 className="font-bid">Current Bid:</h5>
          <span className="eth">3.00 ETH</span>
          <span className="dollar">$7,282.98</span>
        </div>

        <div>
          <span className="auct-label">Auction Ending in</span>
          <Countdown />
        </div>

        <div className="py-4">
          <button className="border rounded-pill px-3 py-2 bid-button">
            <span>Place A Bid</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ms-3" width='20' viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
