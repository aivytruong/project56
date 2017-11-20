import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

type regState = {firstName: string, lastName: string, userName: string, emailAdress: string, password: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string}

export async function UserRegistreren(firstName: string, lastName: string, userName: string, emailAdress: string, password: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string) {
    let res = await fetch(`./UserController/CreateUser/${firstName}`, { method: 'post', credentials: 'include', headers: { 'content-type': 'application/json' } })
}


export class Registreren extends React.Component<RouteComponentProps<{}>, regState> {
    constructor(props, context)
    {
        super(props)
        this.state = {  firstName: "",
                        lastName: "",
                        userName: "",
                        emailAdress: "",
                        password: "",
                        adress: "",
                        phoneNumber: "",
                        Country: "",
                        Date_of_birth: "",
                        gender: ""}
    }

    Registreren() {
        UserRegistreren(this.state.firstName,
                        this.state.lastName,
                        this.state.userName,
                        this.state.emailAdress,
                        this.state.password,
                        this.state.adress,
                        this.state.phoneNumber,
                        this.state.Country,
                        this.state.Date_of_birth,
                        this.state.gender)
    }

    public render() {

        return <div><div className='css-card'>
            <div className='css-container css-red'>
                <h2>Register</h2>
            </div><br/>
            <div className='css-container'>
                <p>
                    <span className='css-text-red'>First Name:</span>
                    <input className='css-input css-lightred' value={this.state.firstName} onChange={event => this.setState({...this.state, firstName: event.target.value})}/>
                </p>
                <p>
                    <span className='css-text-red'>Last Name:</span>
                    <input className='css-input css-lightred' value={this.state.lastName} onChange={event => this.setState({...this.state, lastName: event.target.value})}/>
                </p>
                <p> 
                    <span className='css-text-red'>User Name:</span>
                    <input className='css-input css-lightred' value={this.state.userName} onChange={event => this.setState({...this.state, userName: event.target.value})}/>
                </p>
                <p>
                    <span className='css-text-red'>Email adress:</span>
                    <input className='css-input css-lightred' value={this.state.emailAdress} onChange={event => this.setState({...this.state, emailAdress: event.target.value})}/>
                </p>
                <p>
                    <span className='css-text-red'>Password:</span>
                    <input className='css-input css-lightred' value={this.state.password} onChange={event => this.setState({...this.state, password: event.target.value})}/>
                </p>
                <p>
                    <span className='css-text-red'>Adress:</span>
                    <input className='css-input css-lightred' value={this.state.adress} onChange={event => this.setState({...this.state, adress: event.target.value})}/>
                </p>
                <p>
                    <span className='css-text-red'>Phone Number:</span>
                    <input className='css-input css-lightred' value={this.state.phoneNumber} onChange={event => this.setState({...this.state, phoneNumber: event.target.value})}/>
                </p>
                <p>
                    <span className='css-text-red'>Country:</span>
                    <input className='css-input css-lightred' value={this.state.Country} onChange={event => this.setState({...this.state, Country: event.target.value})}/>
                </p>
                <p>
                    <span className='css-text-red'>Date of Birth(DD-MM-YY): </span>
                    <input className='css-input css-lightred' value={this.state.Date_of_birth} onChange={event => this.setState({...this.state, Date_of_birth: event.target.value})}/>
                </p>
                <p>
                    <span className='css-text-red'>Gender(M/V):</span>
                    <input className='css-input css-lightred' value={this.state.gender} onChange={event => this.setState({...this.state, gender: event.target.value})}/>
                </p>
                <p>
                    <button className='css-btn' onClick={() => this.Registreren()}>Create account</button>
                </p>
            </div>
            </div>
        </div>; 
    }
}
 