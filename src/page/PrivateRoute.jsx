import React from 'react'
import { Route, Redirect } from 'react-router-dom'


export default ({component: Component, ...rest}) => {
    const userName = localStorage.getItem('username');
    const isLogin = typeof userName === 'string';
    return (
        <Route 
            {...rest}
            render={props =>
                isLogin ?
                ( <Component {...props} /> ) :
                <Redirect 
                    to={{pathname: "/login", state: {from: props.location} }}
                />
            }
        />
    )
}