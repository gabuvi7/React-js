import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
    render(){
        return <div>
            <div>
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div>
                <img src="" alt="Avatar" />
                <h1>Gabriel <br/> Uviedo</h1>
            </div>

            <div> 
                <p> IT Engineer</p>
                <p> @Gabuvi7</p>
            </div>
            <div> 
                #platziConf
            </div>
        </div>
    }
}

export default Badge;