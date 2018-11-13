#https://www.jianshu.com/p/e3adc9b5f75c


<!-- react-router React Router 核心
react-router-dom 用于 DOM 绑定的 React Router
react-router-native 用于 React Native 的 React Router
react-router-redux React Router 和 Redux 的集成
react-router-config 静态路由配置的小助手 -->

#react-router 还是 react-router-dom不同之处就是后者比前者多出了 <Link> <BrowserRouter> 这样的 DOM 类组件

# <Switch> 只渲染出第一个与当前访问地址匹配的 <Route> 
<!-- import {Router,Route,Switch} from 'react-router-dom';
<Router>
    <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} />
        <Route component={Error} />
    </Switch>
</Router> -->


