import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import * as Models from './lego_types'

type regState = { firstName: string, lastName: string, userName: string, emailAdress: string, password: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string, loggedin: boolean, userStatus: "Ingelogd" | 'Uitgelogd', user: Models.Users | "loading" }

export async function UserRegistreren(firstName: string, lastName: string,
    userName: string, emailAdress: string,
    password: string, adress: string,
    phoneNumber: string, Country: string,
    Date_of_birth: string, gender: string): Promise<Models.Users> {
    let res = await fetch(`./UserController/CreateUser/${firstName}/${lastName}/${userName}/${emailAdress}/${password}/${adress}/${phoneNumber}/${Country}/${Date_of_birth}/${gender}`, { method: 'post', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = res.json()
    return json
}

export async function UserInloggen(username: string, password: string): Promise<Models.Users> {
    let res = await fetch(`./UserController/Login/${username}/${password}`, { method: 'get', credentials: 'include', headers: new Headers })
    let json = res.json()
    return json
}

export async function CreateShoppingcart(Item_Number: string, user_id: number, amount:number) {
    let res = await fetch(`./ShoppingcartController/CreateShoppingcart/${Item_Number}/${user_id}/${amount}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })
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
checkout(){
    // history moet mee
    // localStorage.getItem("checkout") == "true"
    // ? location.replace('/checkout')
    // :  
    location.replace('/')


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
            this.state.gender).then(r => {

                if (r.userName == "0") 
                {alert("Username of Email already taken")}
                
                else {this.setState({ ...this.state, user: r, userStatus: "Ingelogd" },
                    () => {
                        let cart = localStorage.getItem("cart")
                        let cartlijst = JSON.parse(cart)
                        cartlijst != null ?
                            cartlijst.map((e: any) =>
                                    
                            CreateShoppingcart(e.lego, JSON.parse(sessionStorage.getItem("user")), e.amount),localStorage.removeItem("cart"), location.replace('/'))
                                
                            :
                            console.log("localstorage cart is empty")

                    }); this.checkout()}
                
            })
        console.log("register", registered)

 
    }





    public render() {

        return <div className="">
            {sessionStorage.getItem("userStatus") == "Ingelogd" ?
                <div/> 
                
                :


                <div className='css-card'>

                    <div className='css-container css-red'>
                        <h2 className="HeaderStyle">Register</h2>
                    </div><br />
                    <div className='css-container'>
                        <p>
                            <span className='css-text-red'>First Name:</span>
                            <input className='css-input css-lightred' pattern="[A-Za-z]*" title="Can only contain letters" value={this.state.firstName} onChange={event => this.setState({ ...this.state, firstName: event.target.value })} />
                        </p>
                        <p>
                            <span className='css-text-red'>Last Name:</span>
                            <input className='css-input css-lightred' pattern="[A-Za-z]*" title="Can only contain letters" value={this.state.lastName} onChange={event => this.setState({ ...this.state, lastName: event.target.value })} />
                        </p>
                        <p>
                            <span className='css-text-red'>User Name:</span>
                            <input className='css-input css-lightred' pattern="[A-Za-z0-9]{5,}" title="Can only contain letters and numbers and must be more than 5 characters" value={this.state.userName} onChange={event => this.setState({ ...this.state, userName: event.target.value })} />
                        </p>
                        <p>
                            <span className='css-text-red'>Email adress:</span>
                            <input className='css-input css-lightred' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="must be a correct email" value={this.state.emailAdress} onChange={event => this.setState({ ...this.state, emailAdress: event.target.value })} />
                        </p>
                        <p>
                            <span className='css-text-red'>Password:</span>
                            <input className='css-input css-lightred' pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$" title="Must include one number, one uppercase, lowercase letter and 8-16 characters" value={this.state.password} onChange={event => this.setState({ ...this.state, password: event.target.value })} />
                        </p>
                        <p>
                            <span className='css-text-red'>Zipcode + housenumber:</span>
                            <input className='css-input css-lightred'pattern="[0-9]{4}\s*[a-zA-Z]{2}\s{1}[0-9a-zA-Z]{1,9}" title="Must contain a dutch zipcode and house number example 1234aa 19b or 1234 AA 19"  value={this.state.adress} onChange={event => this.setState({ ...this.state, adress: event.target.value })} />
                        </p>
                        <p>
                            <span className='css-text-red'>Phone Number:</span>
                            <input className='css-input css-lightred'pattern="^\+\s*[0-9]{6,14}" title="Your number should be like this example: +312345678, 312345678 or 0612345678" value={this.state.phoneNumber} onChange={event => this.setState({ ...this.state, phoneNumber: event.target.value })} />
                        </p>
                        <p>
                            <span className='css-text-red'>Country code:</span>
                            <input className='css-input css-lightred' pattern="[A-Za-z]{3}" title=" Please enter your country code example: USA, ENG, CHN, JPN" value={this.state.Country} onChange={event => this.setState({ ...this.state, Country: event.target.value })} />
                        </p>
                        <p>
                            <span className='css-text-red'>Date of Birth(DD-MM-YY): </span>
                            <input className='css-input css-lightred' pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$" title="please enter a correct Date of Birth" value={this.state.Date_of_birth} onChange={event => this.setState({ ...this.state, Date_of_birth: event.target.value })} />
                        </p>
                        <p>
                            <span className='css-text-red'>Gender(M/V):</span>
                            <input className='css-input css-lightred' pattern="/^m$|^v$|^M$|^V$/" title="please only enter: m, v, M or V" value={this.state.gender} onChange={event => this.setState({ ...this.state, gender: event.target.value })} />
                        </p>
                        <p>
                            <button className='css-btn' onClick={() => this.Registreren()}>Create account</button>
                        </p>

                    </div>
                </div>}
        </div>;
    }
}