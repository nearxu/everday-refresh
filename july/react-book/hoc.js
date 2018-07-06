import React, { Component } from "react";

export default (WrapComponent, name) => {
  class newComponent extends Component {
    constructor() {
      super();
      this.state = {
        data: null
      };
    }
    componentWillMount() {
      let data = localStorage.getItem(name);
      this.setState({ data });
    }
    render() {
      return <WrapComponent data={this.state.data} />;
    }
  }
  return newComponent;
};

// ajax
export default (WrapAjaxComponent) => {
    class newComponent extends Component {
      constructor() {
        super();
        this.state = {
          data: null
        };
      }
      componentWillMount() {
        ajax.get('/data/'+this.props.data,(data) => {
            this.setState({data})
        })
      }
      render() {
        return <WrapAjaxComponent data={this.state.data} />;
      }
    }
    return newComponent;
  };

class inputName extends Component {
  render() {
    return <input value={this.props.data} />;
  }
}

var InputUserName = WrapAjaxComponent(inputName);
var InputUserName = WrapComponent(inputName, "name");

class Index extends Component {
  render() {
    return (
      <div>
        用户名：<InputUserName />
      </div>
    );
  }
}
