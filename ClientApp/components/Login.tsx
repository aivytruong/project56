import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

type loginState = { UserName: string, PassWord: string}

export class Login extends React.Component<RouteComponentProps<{}>, loginState> {
    constructor(props, context)
    {
        super(props)
        this.state = { UserName: "",
                       PassWord: ""}
    }

    public render() {
        return <div><div className='css-card'>
            <div className='css-container css-red'>
                <h2>Inloggen</h2>
            </div><br/>
            <form className='css-container'>
                <p className='inner-addon left-addon'>
                    <i className='css-icons css-text-red'>account_circle</i>
                    <input className='css-input css-lightred' value={this.state.UserName} onChange={event => this.setState({...this.state, UserName: event.target.value})} placeholder='Gebruikersnaam'/>
                </p>
                <p className='inner-addon left-addon'>
                    <i className='css-icons css-text-red'>lock</i>
                    <input className='css-input css-lightred' value={this.state.PassWord} onChange={event => this.setState({...this.state,PassWord: event.target.value})} placeholder='Wachtwoord'/>
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
 