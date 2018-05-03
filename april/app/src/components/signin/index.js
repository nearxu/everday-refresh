import React, { Component } from "react";
import { connect } from "react-redux";
import { hashHistory } from "react-router";
import { loginActions } from "../../actions/login";
// import Header from "../../common/header";

/**
 * 登录模块
 * todo: 1. 处理快速点击登陆框导致重复请求的问题 2. 登陆失败清空输入框的操作
 */
class SignIn extends Component {
  /** 登录成功后再次访问登录页时跳转到个人中心）*/
  componentWillMount() {
    let { isLogined, loginname } = this.props.user;
    if (isLogined) {
      hashHistory.push({ pathname: "/user/" + loginname });
    }
  }

  /** 当登录成功，SignIn组件或接受到新的User数据，然后根据isLogined来决定跳转到个人中心还是清空输入框 */
  componentWillReceiveProps(nextProps) {
    let { isLogined, loginname, onLogining } = nextProps.user;
    if (loginname.length) {
      /* 登录成功跳转 */
      console.log(this.props, "props", hashHistory, "hashHistory");
      this.props.router.replace("/user/" + loginname);
    } else if (!loginname) {
      /** 这里if生效的条件是未登录且不处于登录状态*/
      this.tokenInput.value = "";
      // alert('登录失败');
    }
  }

  /** 处理登录的请求*/
  handleClick() {
    let accesstoken = this.tokenInput.value;
    let { dispatch } = this.props;
    // dispatch(fetchPosts());
    dispatch(loginActions.login(accesstoken));
  }

  render() {
    let { onLogining } = this.props.user;
    let loginText = onLogining ? "登陆中..." : "登录";
    return (
      <div>
        {/* <Header mode="signin" /> */}
        <div className="signin" data-flex="dir:top main:center cross:center">
          <div className="center">
            <div className="text">
              <input
                ref={input => {
                  this.tokenInput = input;
                }}
                type="text"
                placeholder="Access Token"
              />
            </div>
            <button className="btn" onClick={this.handleClick.bind(this)}>
              {loginText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(SignIn);
