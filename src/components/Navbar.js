import React, { Component } from 'react';
import UserProfilePic from './../images/profilepic.png';
import {GreenCounter as NotificationCounter} from './../appcomponents'

class NavBar extends Component {
    state={
        UserOptionsStatus:false
    }
    hanldleUserOptionsMenu = () =>{
        this.setState({UserOptionsStatus:!this.state.UserOptionsStatus});
    }
    render() { 
        return ( 
            <div className="navbar">
                 <div className="navbar-item">
                 </div>
                 <div className="navbar-item my-auto d-flex align-items-center">
                        <span className="fa fa-bell"></span>
                        <span className="counter"><NotificationCounter Size="sm" Value="2"/></span>
                 </div>
                 <div className="navbar-item d-flex align-items-center justify-content-end">
                    <div className="profile">
                            <div className="profile-holder">
                                <img src={UserProfilePic} alt="userProfileId"></img>
                            </div>
                    </div>
                    <div className="profile-name">
                            Jana Strassmann
                    </div>
                    <div className="profile-dropdown-options">
                        <span className ="fa fa-angle-down" onClick={this.hanldleUserOptionsMenu}></span>
                    </div>    
                       {
                           this.state.UserOptionsStatus ?  
                                <UserOptions  
                                    hanldleUserOptionsMenu={this.hanldleUserOptionsMenu}
                                 /> 
                                 : null
                       }
                </div>
            </div>
         );
    }
}
 
export default NavBar;

const UserOptions = (hanldleUserOptionsMenu) =>{
            return(
                <ul className="userOptions list-unstyled list-group-item">{
                    ['Edit','Setting','Value'].map((item,index)=>{
                        return <li  onClick={hanldleUserOptionsMenu } data-id=" 1" key={'UO'+index}>{item}</li> 
                    })
                }</ul>
            )
}