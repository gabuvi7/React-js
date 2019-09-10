import React from 'react';
import confLogo from '../images/badge-header.svg';

import './Styles/Badges.css';

class Badge extends React.Component{
    render(){
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="Badge__section-name">
                <img src="https://s.gravatar.com/avatar/fb3cbc78888b0e57a987234701e72d7f?s=80" alt="Avatar" className="Badge__avatar" />
                <h1>Gabriel <br/> Uviedo</h1>
            </div>

            <div className="Badge__section-info"> 
                <h3> IT Engineer</h3>
                <div> @Gabuvi7</div>
            </div>
            <div className="Badge__footer"> 
                #platziConf
            </div>
        </div>
    }
}

export default Badge;