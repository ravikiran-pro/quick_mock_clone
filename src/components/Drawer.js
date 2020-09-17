import React,{Component} from 'react';
import {GreenCounter as ChatCounter} from './../appcomponents';
import '@fortawesome/fontawesome-free/css/all.min.css';

class Drawer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="drawer shadow-light">
                <div className="drawer-top">
                    {/* Drawer Contents */}
                    <div className="btn-wrapper-lg">
                        <button className="btn ripple shadow-dark">
                            Upload
                        </button>
                    </div>    
                    <ul className="drawer-navigation list-unstyled">
                        {/* creating drawer navigation */}
                        <DrawerNavigationLinks/>
                    </ul>
                    {/* Drawer Contents */}
                </div>
                <div className="drawer-bottom">
                    <div className="btn-wrapper-md">
                        <button className="btn ripple">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Drawer;

const DrawerNavigationLinks = () =>{
        return(
            <>
                <li>
                    <span>
                        <span className="fa fa-tv"></span>
                    </span>
                    <span>My page</span>
                </li>
                <li>
                    <span>
                        <span className="fa fa-bolt"></span>
                    </span>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>
                        <span className="fa fa-pencil-alt"></span>
                    </span>
                    <span>Edit Page</span>
                </li>
                <li>
                    <span>
                        <span className="fa fa-comments"></span>
                    </span>
                    <span>Chat</span>
                </li>
                <div className="chat-counter">
                    <ChatCounter Value={5} Size="lg"/>
                </div>
                <li>
                    <span>
                        <span className="fa fa-paperclip"></span>
                    </span>
                    <span>Community</span>
                </li>
                <li>
                    <span>
                        <span className="fa fa-cog"></span>
                    </span>
                    <span>Settings</span>
                </li>
                <li>
                    <span>
                        <span className="fa fa-user"></span>
                    </span>
                    <span>creators</span>
                </li>
            </>
        )
}