import App from './App'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const AppRouterWrapper = () => {
    return(
    <>
    <BrowserRouter>
    <div className='app' style={{justifyContent:'center'}}>
    <App/>
    </div>
    </BrowserRouter>
    
    </>)
 
}

export default AppRouterWrapper;