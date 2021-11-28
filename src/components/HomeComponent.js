import React from "react";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const RenderCard = ({ item, isLoading, errMess }) => {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
    return (
      <div className="card">
        <img src={baseUrl + item.image} alt={item.name} className="card-img" />
        <div className="card-body">
          <h3 className="card-title">{item.name}</h3>
          {item.designation ? (
            <h5 className="card-subtitle text-muted">{item.designation}</h5>
          ) : null}
          <p className="card-text">{item.description}</p>
        </div>
      </div>
    );
  }
};

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishesErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={props.promotion}
            isLoading={props.promoLoading}
            errMess={props.promoErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}
export default Home;
