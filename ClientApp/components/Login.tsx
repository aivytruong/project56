import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import * as Models from './lego_types'

type loginState = { userName: string, password: string, loggedin: boolean, admin: boolean, userStatus: "Ingelogd" | 'Uitgelogd', user:Models.Users | "loading"}

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
        this.state = { userStatus: "Uitgelogd",
                       userName: "",
                       password: "",
                       loggedin: false,
                       admin: false,
                       user: "loading"}
    }
    componentWillUpdate(NextProps:any, NextState:any){
     
            sessionStorage.setItem("user", JSON.stringify(NextState.user.id))
            sessionStorage.setItem("userStatus", NextState.userStatus)
            

        


    }

    Inloggen() 
    {
        UserInloggen(this.state.userName, this.state.password)
                    .then(value => {if (value.firstName != "") 
                                        {this.setState({...this.state, loggedin:true, user:value, userStatus: "Ingelogd"})} 
                                    else {this.setState({loggedin:false})}})
                
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
      
        return <div>
            {sessionStorage.getItem("userStatus") == "Ingelogd"?
            <Redirect to={'/'}> </Redirect>:
            <div>
            <div className='css-card'>
            <div className='css-container css-red'>
                <h2>Inloggen</h2>
            </div><br/>
            <div className='css-container'>
                <p className='inner-addon left-addon'>
                    <i className='css-icons css-text-red'>account_circle</i>
                    <input className='css-input css-lightred' value={this.state.userName} 
                    onChange={event => this.setState({...this.state, userName: event.target.value})} placeholder='Gebruikersnaam'/>
                </p>
                <p className='inner-addon left-addon'>
                    <i className='css-icons css-text-red'>lock</i>
                    <input type ='password'className='css-input css-lightred' value={this.state.password}
                     onChange={event => this.setState({...this.state,password: event.target.value})} placeholder='Wachtwoord'/>
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
        </div>
          } 
         
         </div>
    
    }
}
 