import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
/** 加载动画*/
const DataLoad = () => (
  <div className="data-load data-load-true">
    <div className="msg">正在加载中</div>
  </div>
);

/** 暂无记录 */
const DataNull = () => <div>暂无记录</div>;

/** 提示登录 */
const TipMsgSignin = () => (
  <div className="tip-msg-signin">
    你还未登录，请先<Link to="/signin">登录</Link>
  </div>
);

/** 用户头像*/
const UserHeadImg = ({ url }) => (
  <div className="user-headimg" style={{ backgroundImage: `url(${url})` }} />
);

/**
 * 生成主题类型小图标
 *
 * 显示右侧的icon信息：
 *  tab： job, ask, share, good
 *  good: 是否是精华
 *  top:  是否指定
 *
 *  优先显示top(指定)，good(精华)，其他tab
 */
const TabIcon = ({ icon }) => (
  <i
    className={
      "iconfont icon-" + (icon.top ? "top" : icon.good ? "good" : icon.tab)
    }
  />
);

const Foot = ({ user, messageCount }) => {
  const myUrl = user && user.loginname ? "/user/" + user.loginname : "/signin";
  const arr = [];
  return (
    <footer className="common-footer">
      <div className="zhanwei" />
      <ul className="menu" data-flex="box:mean">
        <li className={arr[0]}>
          <Link to="/">
            <i className="iconfont icon-shouye" />首页
          </Link>
        </li>
        <li className={arr[1]}>
          <Link to="/topic/create">
            <i className="iconfont icon-fabu" />发表
          </Link>
        </li>
        <li className={arr[2]}>
          <Link to="/my/messages">
            <i className="iconfont icon-xiaoxi" />消息{messageCount > 0 ? (
              <em>{messageCount}</em>
            ) : (
              ""
            )}
          </Link>
        </li>
        <li className={arr[3]}>
          <Link to={myUrl}>
            <i className="iconfont icon-wode" />我的
          </Link>
        </li>
      </ul>
    </footer>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  messageCount: state.message.count
});

const Footer = connect(mapStateToProps)(Foot);

export { DataLoad, DataNull, TipMsgSignin, UserHeadImg, TabIcon, Footer };
