import React from "react";

const RenderCard = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        {item.designation ? (
          <h5 className="card-subtitle text-muted">{item.designation}</h5>
        ) : null}
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}
export default Home;
