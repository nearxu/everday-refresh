redux - example

1.counter async todo - mvc

react 性能优化部分：

1.pureComponent

2.shouldComponentUpdate(){ }

3.immutable.js
import { is } from 'immutable';
import Immutable from 'immutable';
let data = Immutable.fromJS

shouldComponentUpdate(nextProps, nextState){
    if (Object.keys(this.props).length != Object.keys(nextProps).length) {
        return true;
    }
    for (const key in nextProps) {
        if (!is(this.props[key], nextProps[key])) {
            return true;
        }
    }
}

4.redux