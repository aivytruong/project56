import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class Login extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div><div className='css-card'>
            <div className='css-container css-red'>
                <h2>Inloggen</h2>
            </div><br/>
            <form className='css-container'>
                <p className='inner-addon left-addon'>
                    <i className='css-icons css-text-red'>account_circle</i>
                    <input className='css-input css-lightred' name="first" type="text" placeholder='Gebruikersnaam'/>
                </p>
                <p className='inner-addon left-addon'>
                    <i className='css-icons css-text-red'>lock</i>
                    <input className='css-input css-lightred' name="first" type="password" placeholder='Wachtwoord'/>
                </p>
                <p>
                    <button className='css-btn'>Log in</button>
                </p>
            </form>
            </div>
            <br />
            <NavLink to={ '/registreren' } activeClassName='active'>
            <button className='css-btn'>Registreren</button>
            </NavLink>
        </div>; 
    }
}
 