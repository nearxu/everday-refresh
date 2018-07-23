class BoxMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu:false;
        }
    }
    toggle(){
        let showMenu = !this.state.showMenu;
        this.setState({showMenu});
    }
    renderTitle(){
        let result = [this.props.title];
        if(this.props.child){
            if(this.props.child instanceof Array){
                result = result.concat(this.props.child);
            }else{
                result.push(this.props.child);
            }
        }

        return result.map((val, i)=>{
            return <span onClick={this.onTabChange.bind(this, i)} key={i}
                         className={this.state.index == i?"active":""}>
                         {val}
                    </span>
        });
    }

    render(){
        return <div className="box-menu">
            <div className={"title "+(showMenu?"":"noshow")}
                 onClick={this.toggle.bind(this)}>
                {this.renderTitle()}
                <span className="arrows">
                </span>
            </div>
            <div className="cd-area" style={{display: showMenu?"block":"none"}}>
                {this.props.children}
            </div>
        </div>
    }
}


class Index extends Component {
    constructor(prosp){
        super(props);
    }
    renderContent(){
        return (
            <div className="filter-area">
                {funcs.map((value, index) => {
                switch (value.toString()) {
                    case MODULE_FUC.ALL: { return <BoxMenu />}
                    case MODULE_FUC.old: { return <BoxMenu />}
                    }
                })}
            </div>
        )
    }
    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}
