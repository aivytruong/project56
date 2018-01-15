import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import * as Models from './lego_types'

type regState = { firstName: string, lastName: string, userName: string, emailAdress: string, password: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string, loggedin: boolean, userStatus: "Ingelogd" | 'Uitgelogd', user: Models.Users | "loading" }

export async function UserRegistreren(firstName: string, lastName: string,
                                     userName: string, emailAdress: string,
                                     password: string, adress: string, 
                                     phoneNumber: string, Country: string,
                                     Date_of_birth: string, gender: string) : Promise<Models.Users> 
{
    let res = await fetch(`./UserController/CreateUser/${firstName}/${lastName}/${userName}/${emailAdress}/${password}/${adress}/${phoneNumber}/${Country}/${Date_of_birth}/${gender}`, { method: 'post', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = res.json()
    return json
}

export async function UserInloggen(username: string, password: string): Promise<Models.Users> {
    let res = await fetch(`./UserController/Login/${username}/${password}`, { method: 'get', credentials: 'include', headers: new Headers })
    let json = res.json()
    return json
}

export async function CreateShoppingcart(Item_Number: string, user_id: number) {
    let res = await fetch(`./ShoppingcartController/CreateShoppingcart/${Item_Number}/${user_id}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })

    return console.log("made shoppingcart", res)
}


export class Registreren extends React.Component<RouteComponentProps<{}>, regState> {
    constructor(props, context) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            emailAdress: "",
            password: "",
            adress: "",
            phoneNumber: "",
            Country: "",
            Date_of_birth: "",
            gender: "",
            loggedin: false,
            userStatus: 'Uitgelogd',
            user: "loading"
        }
    }

    componentWillUpdate(NextProps: any, NextState: any) {

        sessionStorage.setItem("user", JSON.stringify(NextState.user.id))
        sessionStorage.setItem("userStatus", NextState.userStatus)
    }

    Registreren() {
        var registered = UserRegistreren(this.state.firstName,
            this.state.lastName,
            this.state.userName,
            this.state.emailAdress,
            this.state.password,
            this.state.adress,
            this.state.phoneNumber,
            this.state.Country,
            this.state.Date_of_birth,
            this.state.gender).then(r => { if (r != null) this.setState({...this.state, user: r,userStatus:"Ingelogd"}); else  alert("Username of Email already taken")})
        console.log("register", registered)
    }

    public render() {

        return <div>
             {sessionStorage.getItem("userStatus") == "Ingelogd" ?
                 <Redirect to={'/'}> </Redirect> :
            
            
            <div className='css-card'>
        
            <div className='css-container css-red'>
                <h2>Register</h2>
            </div><br />
            <div className='css-container'>
                <p>
                    <span className='css-text-red'>First Name:</span>
                    <input className='css-input css-lightred' value={this.state.firstName} onChange={event => this.setState({ ...this.state, firstName: event.target.value })} />
                </p>
                <p>
                    <span className='css-text-red'>Last Name:</span>
                    <input className='css-input css-lightred' value={this.state.lastName} onChange={event => this.setState({ ...this.state, lastName: event.target.value })} />
                </p>
                <p>
                    <span className='css-text-red'>User Name:</span>
                    <input className='css-input css-lightred' value={this.state.userName} onChange={event => this.setState({ ...this.state, userName: event.target.value })} />
                </p>
                <p>
                    <span className='css-text-red'>Email adress:</span>
                    <input className='css-input css-lightred' value={this.state.emailAdress} onChange={event => this.setState({ ...this.state, emailAdress: event.target.value })} />
                </p>
                <p>
                    <span className='css-text-red'>Password:</span>
                    <input className='css-input css-lightred' value={this.state.password} onChange={event => this.setState({ ...this.state, password: event.target.value })} />
                </p>
                <p>
                    <span className='css-text-red'>Adress:</span>
                    <input className='css-input css-lightred' value={this.state.adress} onChange={event => this.setState({ ...this.state, adress: event.target.value })} />
                </p>
                <p>
                    <span className='css-text-red'>Phone Number:</span>
                    <input className='css-input css-lightred' value={this.state.phoneNumber} onChange={event => this.setState({ ...this.state, phoneNumber: event.target.value })} />
                </p>
                <p>
                    <span className='css-text-red'>Country:</span>
                    <input className='css-input css-lightred' value={this.state.Country} onChange={event => this.setState({ ...this.state, Country: event.target.value })} />
                </p>
                <p>
                    <span className='css-text-red'>Date of Birth(DD-MM-YY): </span>
                    <input className='css-input css-lightred' value={this.state.Date_of_birth} onChange={event => this.setState({ ...this.state, Date_of_birth: event.target.value })} />
                </p>
                <p>
                    <span className='css-text-red'>Gender(M/V):</span>
                    <input className='css-input css-lightred' value={this.state.gender} onChange={event => this.setState({ ...this.state, gender: event.target.value })} />
                </p>
                <p>
                   <button className='css-btn' onClick={() => this.Registreren()}>Create account</button> 
                </p>
                
            </div>
        </div>}
        </div>;
    }
}