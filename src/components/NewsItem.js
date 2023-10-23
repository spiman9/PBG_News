import React, { Component } from "react";
import "../css/NewsItem.css"

export class NewsItem extends Component {
  render() {
    let {title , desc , imgurl , newsURL} = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card" style={{width: "18rem" }}>
            <img src={imgurl} className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title fw-bold">{title}</h4>
              <p className="card-text">
                {desc}
              </p>
              <a rel="noreferrer"  href={newsURL} target="_blank" className="btn btn-sm btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
