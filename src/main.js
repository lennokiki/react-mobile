import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Main from './page/Main'
import './assets/style/reset.css'
import './assets/style/app.css'
import { AppContainer } from 'react-hot-loader'

const render = (App) => {  
    ReactDOM.render(  
        <AppContainer>  
            <HashRouter>
                <Main />
            </HashRouter>  
        </AppContainer>,  
    document.getElementById('app')
    )  
} 

render(Main)  
    
if (module.hot) {  
    module.hot.accept()  
}
