export default class Search extends Component {
    state = {
      value : null
    }
    constructor(props) {
      super(props);
      this.onInput = this.onInput.bind(this);
      // console.log(`Search constructor: this.props.placeholder=${this.props.placeholder},this.props.debounceTimeout=${this.props.debounceTimeout},this.props.onInputChange=${this.props.onInputChange}`);
    }
    componentWillMount() {
      // console.log("Search componentWillMount");
      this.delayedOnInput = _.debounce(this.props.onInputChange, this.props.debounceTimeout);
    }
    onInput(e){
      // console.log((new Date()).Format("HH:mm:ss.S"));
      // console.log("Search onInputChange");
      // console.log(e);
      this.setState({value : e.target.value});
      e.persist();
      this.delayedOnInput(this.state.value);
    }
    render () {
        return (
            <div class={style.cz_top_box}>
              <ul>
                <a>
                  <li class={style.min_box}>
                    <input
                      type="search"
                      value={this.state.value}
                      placeholder={this.props.placeholder}
                      onInput={this.onInput} />
                  </li>
                </a>
              </ul>
            </div>
        );
      }
    }
}
    Search.PropTypes = {
      debounceTimeout : PropTypes.number,
      placeholder : PropTypes.string,
      onInputChange : PropTypes.func.isRequired
    };
    Search.defaultProps = {
      debounceTimeout : 500,
      placeholder : "请输入后搜索"
    };

import Search from ‘../../../components/search’;
  onInputChange(currentValue){
    // console.log("CowManagement onInputChange");
    // console.log((new Date()).Format("HH:mm:ss.S"));
    this.setState({ searchKeyword : currentValue});
    // console.log(`this.state.searchKeyword=${this.state.searchKeyword}`);
    this.searchCowListByBlur(this.state.searchKeyword);
  }
  render() {
。。。
    return (
      <div class={style.the_herd_all}>
        <Search
          placeholder="输入牛号搜索"
          onInputChange={this.onInputChange}
        />
。。。
      </div>
    );
  }
}