import React, { Component } from "react";
import { connect } from "react-redux";
// import Header from "../common/Header";
import { getUserView } from "../../actions/user-view";
import { UserHeadImg, DataLoad, Footer } from "../../common/index";
import Header from "../../common/header";
import { formatDate } from "../../utils/tool";
import { Link } from "react-router";
const TabList = ({ list }) => (
  <ul className="list">
    {list.map((item, index) => {
      let { id, title, last_reply_at } = item;
      return (
        <li key={index}>
          <Link data-flex="box:last" to={`/topic/${id}`}>
            <div className="tit">{title}</div>
            <time>{formatDate(last_reply_at)}</time>
          </Link>
        </li>
      );
    })}
  </ul>
);

class TabsControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.isCurrentIndex = this.isCurrentIndex.bind(this);
  }

  /** 判断当前tab是否是激发状态*/
  isCurrentIndex(index) {
    return index === this.state.currentIndex;
  }

  render() {
    return (
      <div>
        <ul className="tab-nav" data-flex="box:mean">
          {this.props.tabs.map((tabName, index) => (
            <li
              key={index}
              onClick={() => {
                this.setState({ currentIndex: index });
              }}
              className={this.isCurrentIndex(index) ? "on" : ""}
            >
              {tabName}
            </li>
          ))}
        </ul>

        {React.Children.map(this.props.children, (element, index) => {
          return (
            <div
              className="tab-content"
              key={index}
              style={{ display: this.isCurrentIndex(index) ? "block" : "none" }}
            >
              {element}
            </div>
          );
        })}
      </div>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }

  render() {
    let {
      avatar_url,
      loginname,
      score,
      recent_topics,
      recent_replies,
      create_at
    } = this.props.data;
    let arrOn = [];
    let arrDisplay = [];
    arrOn[this.state.tabIndex] = "on";
    arrDisplay[this.state.tabIndex] = "block";
    return (
      <div className="user-index">
        <div className="headimg" data-flex="dir:top main:center cross:center">
          <UserHeadImg url={avatar_url} />
          <div className="name">{loginname}</div>
          <div className="score">
            积分：{score}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册于：{formatDate(
              create_at
            )}
          </div>
        </div>

        <TabsControl tabs={["主题", "回复"]}>
          <TabList list={recent_topics} />
          <TabList list={recent_replies} />
        </TabsControl>
      </div>
    );
  }
}

class UserView extends Component {
  componentDidMount() {
    let { dispatch } = this.props;
    // this.props.actions.getUserView(this.props.params.loginname);
    dispatch(getUserView(this.props.params.loginname));
  }
  render() {
    let { userview } = this.props;
    let { user, params } = this.props;
    console.log(userview, "userview");
    let main = Object.keys(userview).length ? (
      <Home data={userview} />
    ) : (
      <DataLoad />
    );
    /* 只有是登录用户的个人页面才会显示底部导航栏*/
    let footer =
      params.loginname == user.loginname ? <Footer index="3" /> : null;

    let mode = "";
    let title = "";
    if (params.loginname == user.loginname) {
      mode = "userview-loginuser";
      title = "个人中心";
    } else {
      mode = "userview-normaluser";
      title = params.loginname + "的个人中心";
    }

    return (
      <div>
        {<Header mode={mode} title={title} />}
        {main}
        {footer}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  userview: state.userview
});

export default connect(mapStateToProps)(UserView);
