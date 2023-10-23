import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import "../css/News.css";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am Constructor from newsitem");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      genre: "sports",
      totalResults: 20,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=sports&apiKey=fab31f6e06604bb28a649ed5c2af59a0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  handleNextClick = async () => {
    console.log("Next");

    //fetch the api
    if (Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1) {
      console.log("No Page left to be displayed");
    } else {
      let url = `https://newsapi.org/v2/everything?q=sports&apiKey=fab31f6e06604bb28a649ed5c2af59a0&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);

      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    }
  };

  handPreviousClick = async () => {
    console.log("Previous");
    //fetch the api
    let url = `https://newsapi.org/v2/everything?q=sports&apiKey=fab31f6e06604bb28a649ed5c2af59a0&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };

  render() {
    let m = 0;
    return (
      <div className="container my-3">
        <h1 className="text-center fw-bold">Top headlines</h1>
        
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page == 1}
            type="button"
            className="btn btn-outline-success"
            onClick={this.handPreviousClick}
          >
            &larr; Previous
          </button>
          <button
          disabled={this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-outline-success"
            onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </button>
        </div>
        <Spinner />
        <div className="parent">
          {this.state.articles.map((element) => {
            return (
              <div className="child" key={m++}>
                <NewsItem
                  title={element.title.slice(0, 30) + "..."}
                  desc={
                    element.description === null
                      ? ""
                      : element.description.slice(0, 87) + "..."
                  }
                  imgurl={element.urlToImage}
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
