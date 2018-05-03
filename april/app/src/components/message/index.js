import React, { Component } from "react";
import { connect } from "react-redux";
import { footer } from "../../common/index";
import Header from "../../common/header";
import { fetchMessage } from "../../actions/message";
/**
 * 个人消息页
 */
class MyMessages extends Component {
  /** todo: 流程需要优化一下，两边都要判断是否已登录这不太合理*/
  componentWillMount() {
    if (this.props.user) {
      // this.props.actions.fetchingMessage();
      let { dispatch } = this.props;
      dispatch(fetchMessage());
    }
  }

  render() {
    let { user, message } = this.props;
    // let main = '';

    // /** 未登录显示提示页面； 已登录加载中，显示加载动画；已登录且加载结束显示数据页面(数据可为空) */
    // if (!User.isLogined) {
    //     main = <TipMsgSignin />
    // } else if (isFetching) {
    //     main = <DataLoad />;
    // } else {
    //     let {hasnot_read_messages, has_read_messages} = data;
    //     let messageList = [];
    //     if (Object.keys(data).length) {
    //         /** 当data非空的时候才进行合并操作*/
    //         messageList = [...hasnot_read_messages, ...has_read_messages];
    //     }
    //     main = <MessageList list={messageList}/>;
    // }

    return (
      <div>
        <Header mode="mymessage" />
        {/* {main} */}
        <footer index="2" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
  user: state.user
});

export default connect(mapStateToProps)(MyMessages);
