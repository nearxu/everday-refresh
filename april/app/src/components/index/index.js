import React, { Component } from "react";
import "./index.less";
import Nav from "./nav";
import ListItem from "./listItem";
import http from "../../utils/http";
import { Footer } from "../../common/index";
class Index extends Component {
  constructor(props) {
    super(props);
    this.tab = props.location.query.tab || "all";
    this.page = 1;
    this.limit = 10;
    this.mdrender = false;
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.getData();
  }
  componentWillReceiveProps(nextProps) {
    this.tab = nextProps.location.query.tab || "all";
    this.page = 1;
    this.getData();
  }
  getData() {
    http
      .get("/api/v1/topics", {
        tab: this.tab,
        page: this.page,
        limit: this.limit,
        mdrender: this.mdrender
      })
      .then(res => {
        console.log(res.data, "resdata");
        this.setState({ data: res.data.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  }
  render() {
    let { data } = this.state;
    return (
      <div className="index">
        <Nav />
        <ul className="index-list">
          {data.map(item => <ListItem key={item.id} {...item} />)}
        </ul>
        <Footer />
      </div>
    );
  }
}

export default Index;
