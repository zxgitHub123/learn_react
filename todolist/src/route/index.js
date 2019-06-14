import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
class RouterIndex extends React.Component{
    render(){
        return (
            <Switch>
                //switch用于匹配路由path
                <Route path='/' exact render={()=>(//exact是用于精准匹配，这里是定义了路由重定向，意思是当我们进入"/"时会重定向到“/index”
                <Redirect to='/index'/>
                )}/>
                {/* <Route path='/index' component={FristIndex}/>
                <Route path='/about' component={About}/>
                <Route path='/book' component={Book} />
                <Route path='/detail/:id' component={Detail}/>//注意这里的:id是为url设置参数 我们可以在detail组件下通过this.props.match.params.id获得
                <Route path='/user/:id' component={User}/> */}
            </Switch>
        )
    }
}