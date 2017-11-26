import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'

type loginState = { userName: string, password: string, loggedin: boolean, admin: boolean}

export async function UserInloggen(username: string, password: string) : Promise<Models.Users>
    {
        let res = await fetch(`./UserController/Login/${username}/${password}`, {method: 'get', credentials: 'include', headers: { 'content-type' : 'application/json'}})
        let json = res.json()
        return json
    }

export class Login extends React.Component<RouteComponentProps<{}>, loginState> {
    constructor(props, context)
    {
        super(props)
        this.state = { userName: "",
                       password: "",
                       loggedin: false,
                       admin: false}
    }

    Inloggen() 
    {
        UserInloggen(this.state.userName, this.state.password).then(value => {if (value.firstName != "") {this.setState({loggedin:true})} else {this.setState({loggedin:false})}})
    }

    Admin(e) 
    {
        if (e.target.checked){
            this.setState({...this.state, admin: true})
        }
        else {
            this.setState({...this.state, admin: false})
        }
    }

    public render() {
        console.log("user is",this.state.loggedin)
        return <div><div className='css-card'>
            <div className='css-container css-red'>
                <h2>Inloggen</h2>
            </div><br/>
            <div className='css-container'>
                <p className='inner-addon left-addon'>
                    <i className='css-icons css-text-red'>account_circle</i>
                    <input className='css-input css-lightred' value={this.state.userName} onChange={event => this.setState({...this.state, userName: event.target.value})} placeholder='Gebruikersnaam'/>
                </p>
                <p className='inner-addon left-addon'>
                    <i className='css-icons css-text-red'>lock</i>
                    <input className='css-input css-lightred' value={this.state.password} onChange={event => this.setState({...this.state,password: event.target.value})} placeholder='Wachtwoord'/>
                </p>
                <p>
                    <input type="checkbox" onChange={event => this.Admin(event)}/>
                </p>
                <p>
                    <button className='css-btn' onClick={() => this.Inloggen()}>Log in</button>
                </p>
            </div>
            </div>
            <br />
            <NavLink to={ '/registreren' } activeClassName='active'>
            <button className='css-btn'>Registreren</button>
            </NavLink>
        </div>; 
    }
}
 