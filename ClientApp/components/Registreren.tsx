import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

type regState = { firstName: string, lastName: string, userName: string, emailAdress: string, password: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string }

export async function UserRegistreren(firstName: string, lastName: string, userName: string, emailAdress: string, password: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string) {
    let res = await fetch(`./UserController/CreateUser/${firstName}/${lastName}/${userName}/${emailAdress}/${password}/${adress}/${phoneNumber}/${Country}/${Date_of_birth}/${gender}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })
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
            gender: ""
        }
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

        return <div>
            <div className='css-card'>
                <div className='css-container css-red'>
                    <h2>Register</h2>
                </div><br />
                <form onSubmit={() => this.Registreren() }>
                    <div className='css-container'>
                        <div>
                            <label className='css-text-red'>First Name:</label>
                            <input className='css-input css-lightred'
                                type="text"
                                pattern="[a-zA-Z]*"
                                required title="Your name does not seem to be valid."
                                value={this.state.firstName}
                                onChange={event => this.setState({ ...this.state, firstName: event.currentTarget.value })} />
                        </div>
                        <div>
                            <label className='css-text-red'>Last Name:</label>
                            <input className='css-input css-lightred'
                                type="text"
                                pattern="[a-zA-Z]*"
                                required title="Your surname does not seem to be valid."
                                value={this.state.lastName}
                                onChange={event => this.setState({ ...this.state, lastName: event.currentTarget.value })} />
                        </div>
                        <div>
                            <label className='css-text-red'>User Name:</label>
                            <input className='css-input css-lightred'
                                type="text"
                                pattern="[a-zA-Z]*"
                                required title=""
                                value={this.state.userName}
                                onChange={event => this.setState({ ...this.state, userName: event.currentTarget.value })} />
                        </div>
                        <div>
                            <label className='css-text-red'>Email adress:</label>
                            <input className='css-input css-lightred'
                                type="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                required title="Your email is not valid."
                                value={this.state.emailAdress}
                                onChange={event => this.setState({ ...this.state, emailAdress: event.currentTarget.value })} />
                        </div>
                        <div>
                            <label className='css-text-red'>Password:</label>
                            <input type="password"
                                className='css-input css-lightred'
                                value={this.state.password}
                                onChange={event => this.setState({ ...this.state, password: event.currentTarget.value })} />
                        </div>
                        <div>
                            <label className='css-text-red'>zipcode and housenumber :</label>
                            <input type="text"
                                pattern="/^([0-9]{4}+[a-zA-Z]{2})$/"
                                required title="Your address is not valid."
                                className='css-input css-lightred'
                                value={this.state.adress} onChange={event => this.setState({ ...this.state, adress: event.currentTarget.value })} />
                        </div>
                        <div>
                            <label className='css-text-red'>Phone Number:</label>
                            <input type="number"
                                className='css-input css-lightred'
                                value={this.state.phoneNumber}
                                onChange={event => this.setState({ ...this.state, phoneNumber: event.currentTarget.value })}
                                pattern="{/[2-9]{2}\d{8}/}"
                            />


                        </div>
                        <div>
                            <label className='css-text-red'>Country:</label>
                            <input type="text"
                                className='css-input css-lightred'
                                value={this.state.Country}
                                onChange={event => this.setState({ ...this.state, Country: event.currentTarget.value })}
                                pattern="[a-zA-Z]*"
                                required title="Your Country does not seem to be valid."
                            />
                        </div>
                        <div>
                            <label className='css-text-red'>Date of Birth(DD-MM-YY): </label>
                            <input type="date" className='css-input css-lightred' value={this.state.Date_of_birth} onChange={event => this.setState({ ...this.state, Date_of_birth: event.currentTarget.value })} />
                        </div>
                        <div>
                            <label className='css-text-red'>Gender(M/V):</label>
                            <input type="checkbox" className='css-input css-lightred' value={this.state.gender} onChange={event => this.setState({ ...this.state, gender: event.currentTarget.value })} />
                        </div>
                        <div>
                            <button className='css-btn' type="submit"  >Create account</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >;
    }
}