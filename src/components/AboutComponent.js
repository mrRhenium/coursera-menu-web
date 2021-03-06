import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const RenderLeader = ({ leader }) => {
  return (
    <>
      <div className="media m-1 border">
        <div className="row">
          <div className="col-md-2">
            <img
              className="m-2 mt-1"
              src={baseUrl + leader.image}
              alt={leader.name}
            />
          </div>
          <div className="col-md-10">
            <div className="media-body p-3">
              <h4 className="card-title">{leader.name}</h4>
              <div className="card-title lead">{leader.designation} </div>
              <p>{leader.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function About(props) {
  const leaders = props.leaders.map((leader) => {
    return (
      <div key={leader.id}>
        <RenderLeader leader={leader} />
      </div>
    );
  });
  if (props.isLoading) {
    return <Loading />;
  } else if (props.errMess) {
    return <h4>{props.errMess}</h4>;
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="breadcrumb">
            <div className="breadcrumb-item">
              <Link to="/home">Home</Link>
            </div>
            <div className="breadcrumb-item active">About</div>
          </div>
          <div className="col-12">
            <h3>About</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-md-6">
            <h2>Our History</h2>
            <p>
              Started in 2010, Ristorante con Fusion quickly established itself
              as a culinary icon par excellence in Hong Kong. With its unique
              brand of world fusion cuisine that can be found nowhere else, it
              enjoys patronage from the A-list clientele in Hong Kong. Featuring
              four of the best three-star Michelin chefs in the world, you never
              know what will arrive on your plate the next time you visit us.
            </p>
            <p>
              The restaurant traces its humble beginnings to{" "}
              <em>The Frying Pan</em>, a successful chain started by our CEO,
              Mr. Peter Pan, that featured for the first time the world's best
              cuisines in a pan.
            </p>
          </div>
          <div className="col-12 col-md-5">
            <div className="card">
              <div className="card-body border">
                <h3 className="card-title bg-primary text-light min-w-100">
                  Facts At a Glance
                </h3>

                <div className="card-text">
                  <dl className="row p-1">
                    <dt className="col-6">Started</dt>
                    <dd className="col-6">3 Feb. 2013</dd>
                    <dt className="col-6">Major Stake Holder</dt>
                    <dd className="col-6">HK Fine Foods Inc.</dd>
                    <dt className="col-6">Last Year's Turnover</dt>
                    <dd className="col-6">$1,250,375</dd>
                    <dt className="col-6">Employees</dt>
                    <dd className="col-6">40</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body bg-faded">
                <blockquote className="blockquote">
                  <p className="mb-3">
                    You better cut the pizza in four pieces because I'm not
                    hungry enough to eat six.
                  </p>
                  <footer className="blockquote-footer">
                    Yogi Berra,
                    <cite title="Source Title">
                      The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion
                      Books, 2014
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h2>Corporate Leadership</h2>
          </div>
          <div className="col-12">{leaders}</div>
        </div>
      </div>
    );
  }
}

export default About;
