// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children/39401252
// children props 照样能够传方法
<div>
    {React.cloneElement(this.props.children, { loggedIn: this.state.loggedIn })}
</div>