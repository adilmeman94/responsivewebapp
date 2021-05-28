import React from "react";
import { Link } from "react-router-dom";
import Background from "./backgroundimage.jpg";
import euroball from "./euroball.png";
import lottoball from "./lottoball.png";
import cartIcon from "./cart_icon.png";
import "./styles.css";

function Home() {
  return (
    <div className="homepage">
      <div className="bg">
        <img
          src={Background}
          alt="backgroundImage"
          className="img-fluid"
          style={{ height: "500px", width: "100%" }}
        />
        <div className="col-lg-6 col-md-8 col-sm-12 text-block">
          <h1>More Chances To Win For Less</h1>
          <p>Ready-Made Syndicates Where We Manage Everything For You</p>
        </div>
        <button type="button" className="btn btn-success btn1">
          JOIN NOW
        </button>

        <div className="col-lg-6 col-md-8 col-sm-12 text-block1">
          <p>
            By creating a LottoSocial account I accept the terms and conditions,
            and the privacy policy.
            <br />I am aware that I can change my preferences or opt out
            receiving communications at any time within my account.
          </p>
        </div>
      </div>
      <div className="row cardgallery">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <img src={euroball} className="img-fluid " alt="euroball" />
          <div className="card-body">
            <h5 className="card-title">NEXT EURO MILLIONS JACKPOT</h5>
            <p className="card-text">
              <b> Lottery Amount - $400 M</b> <br /> Draw Date - 28-05-2021
            </p>
            <Link to="#" className="btn btn-success">
              PLAY EURO MILLIONS
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <img src={lottoball} className="img-fluid" alt="lottoball" />
          <div className="card-body">
            <h5 className="card-title">NEXT LOTTO JACKPOT</h5>
            <p className="card-text">
              <b> Lottery Amount - $4M</b> <br /> Draw Date - 29-05-2021
            </p>
            <Link to="#" className="btn btn-success">
              PLAY LOTTO
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <img src={cartIcon} className="img-fluid" alt="cart_icon" />
          <div className="card-body">
            <h5 className="card-title">VISIT OUR STORE</h5>
            <p className="card-text">
              Visit our store to find a wide range of lottery products, instant
              win games and reward point prizes!
            </p>
            <Link to="#" className="btn btn-success">
              VISIT THE STORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
