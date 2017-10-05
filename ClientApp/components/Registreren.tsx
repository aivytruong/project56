import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class Registreren extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div><div className='css-card'>
            <div className='css-container css-red'>
                <h2>Registreren</h2>
            </div><br/>
            <form className='css-container'>
                <p>
                    <span className='css-text-red'>Gebruikersnaam</span>
                    <input className='css-input css-lightred' name="naam" type="text" />
                </p>
                <p>
                    <span className='css-text-red'>Wachtwoord</span>
                    <input className='css-input css-lightred' name="pw1" type="text" />
                </p>
                <p>
                    <span className='css-text-red'>Opnieuw wachtwoord</span>
                    <input className='css-input css-lightred' name="pw2" type="text" />
                </p>
                <p>
                    <span className='css-text-red'>Geboortedatum</span>
                    <input className='css-input css-lightred' name="first" type="text" />
                </p>
                <p>
                    <span className='css-text-red'>E-mailadres</span>
                    <input className='css-input css-lightred' name="first" type="text" />
                </p>
                <p>
                    <span className='css-text-red'>Land</span>
                    <input className='css-input css-lightred' name="first" type="text" />
                </p>
                <p>
                <span className='css-text-red'>Geslacht</span> <br/>
                <input type="radio" name="gender" value="male" checked /> Man  
                <input type="radio" name="gender" value="female" /> Vrouw
                </p>
                <p>
                    <button className='css-btn'>Account aanmaken</button>
                </p>
            </form>
            </div>
        </div>; 
    }
}
 