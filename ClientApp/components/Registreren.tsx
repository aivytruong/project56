import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class Registreren extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div><div className='css-card'>
            <div className='css-container css-red'>
                <h2>Register</h2>
            </div><br/>
            <form className='css-container'>
                <p>
                    <span className='css-text-red'>username</span>
                    <input className='css-input css-lightred' name="naam" type="text" />
                </p>
                <p>
                    <span className='css-text-red'>password</span>
                    <input className='css-input css-lightred' name="pw1" type="text" />
                </p>
                <p>
                    <span className='css-text-red'>repeat password</span>
                    <input className='css-input css-lightred' name="pw2" type="text" />
                </p>
                <p>
                    <span className='css-text-red'>date of birth</span>
                    <input className='css-input css-lightred' name="first" type="text" />
                </p>
                <p>
                    <span className='css-text-red'>E-mail address</span>
                    <input className='css-input css-lightred' name="first" type="text" />
                </p>
                <p>
                    <span className='css-text-red'>country</span>
                    <input className='css-input css-lightred' name="first" type="text" />
                </p>
                <p>
                <span className='css-text-red'>Gender</span> <br/>
                <input type="radio" name="gender" value="male" checked /> Man  
                <input type="radio" name="gender" value="female" /> Vrouw
                </p>
                <p>
                    <button className='css-btn'>Create account</button>
                </p>
            </form>
            </div>
        </div>; 
    }
}
 