import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './DetailProduct'
import { ShoppingCart } from './Shoppingcart'

type Headers = { 'content-type': 'application/json' }

type regState = { firstName: string, lastName: string, userName: string, emailAdress: string, password: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string }

export async function CreateShoppingcart(Item_Number: string, user_id: number) {
    let res = await fetch(`./ShoppingcartController/CreateShoppingcart/${Item_Number}/${user_id}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })

    return console.log("made shoppingcart", res)
}

export async function CreateHistory(Item_Number: string, user_id: number) {
    let res = await fetch(`./HistoryController/CreateHistory/${Item_Number}/${user_id}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })

    return console.log("made history", res)
}

export async function UserInloggen(username: string, password: string): Promise<Models.Users> {
    let res = await fetch(`./UserController/Login/${username}/${password}`, { method: 'get', credentials: 'include', headers: new Headers })
    let json = res.json()
    return json
}

export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
    let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: new Headers })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export async function get_correctuser(user_id: number): Promise<Models.Wishlist[]> {
    let res = await fetch(`./ShoppingcartController/CorrectUser/${user_id}`, { method: 'get', credentials: 'include', headers: new Headers })
    let json = await res.json()
    console.log("received correct users", json)
    return json
}

export async function delete_correctsc(user_id: number) {
    let res = await fetch(`./ShoppingcartController/DeleteUserSC/${user_id}`, { method: 'delete', credentials: 'include', headers: new Headers })
    return console.log("deleted shoppinglist")
}

type LoadProducts = { load: Models.Lego, id: string, deleteItem: (index: string) => void }
type loginState = { lego: Models.Lego | 'loading', userName: string, password: string, loggedin: boolean, admin: boolean, userStatus: "Ingelogd" | 'Uitgelogd', user: Models.Users | "loading", legopr: Models.Lego[], wishlist2: Models.Shoppingcart[], firstName: string, lastName: string, emailAdress: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string }

export class Checkout extends React.Component<RouteComponentProps<{}>, loginState> {
    constructor(props, conetxt) {
        super(props)
        this.state = {
            lego:'loading',
            userStatus: "Uitgelogd",
            userName: "",
            password: "",
            loggedin: false,
            admin: false,
            user: "loading",
            legopr: [],
            wishlist2: [],
            firstName: "",
            lastName: "",
            emailAdress: "",
            adress: "",
            phoneNumber: "",
            Country: "",
            Date_of_birth: "",
            gender: ""
        }
    }

    componentWillUpdate(NextProps: any, NextState: any) {

        sessionStorage.setItem("user", JSON.stringify(NextState.user.id))
        sessionStorage.setItem("userStatus", NextState.userStatus)
    }

    Inloggen() {
        console.log("inloggen")
        UserInloggen(this.state.userName, this.state.password)
            .then(value => {
                if (value.firstName != "") 
                {
                    this.setState({ ...this.state, loggedin: true, user: value, userStatus: "Ingelogd" }, () =>
                    {let prevList = localStorage.getItem("shoppingcart")
                    let currentList = prevList == null ? null : prevList.split(",").reverse()
                    currentList.map(e =>  CreateHistory(e, JSON.parse(sessionStorage.getItem("user"))), console.log("map history"))})
                    localStorage.removeItem("shoppingcart")
                    
                }
                else { this.setState({ loggedin: false }), console.log("else") }
            })
    }


    deleteItem(NextState: any) {
        let prevListDelete = localStorage.getItem("shoppingcart")
        let nextList = prevListDelete != null ? (prevListDelete.replace(NextState, "")) : ""
        localStorage.setItem("shoppingcart", nextList != null ? nextList : nextList)
        let prevList = localStorage.getItem("shoppingcart")
        let currentList = prevList == null ? null : prevList.split(",").reverse()

        currentList != null ? currentList.map(b =>
            get_correctproduct(b).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b) }), () => location.reload())
                .catch(error => console.error(error))

        )
            : null
    }

    render() {
        return <div>
            
            {sessionStorage.getItem("userStatus") == "Ingelogd" ?
                 
                    <Purchase/>
                
                :
                <div>
                    <h2>Already have an account?</h2>
                    <div className='css-card'>
                        <div className='css-container css-red'>
                            <h2>Inloggen</h2>
                        </div><br />
                        <div className='css-container'>
                            <p className='inner-addon left-addon'>
                                <i className='css-icons css-text-red'>account_circle</i>
                                <input className='css-input css-lightred' value={this.state.userName}
                                    onChange={event => this.setState({ ...this.state, userName: event.target.value })} placeholder='Gebruikersnaam' />
                            </p>
                            <p className='inner-addon left-addon'>
                                <i className='css-icons css-text-red'>lock</i>
                                <input type='password' className='css-input css-lightred' value={this.state.password}
                                    onChange={event => this.setState({ ...this.state, password: event.target.value })} placeholder='Wachtwoord' />
                            </p>
                            <p>

                                <button className='css-btn' onClick={() => this.Inloggen()}>Log in</button>
                            </p>
                        </div>
                    </div>

                    <br />
                    <h2>Don't have an account? Make one for free!</h2>
                    <NavLink to={'/registreren'} activeClassName='active'>
                        <button className='css-btn'>Registreren</button>
                    </NavLink>

                    <h2>Want to continue your purchase without account?</h2>
                    <div><div className='css-card'>
                        <div className='css-container css-red'>
                            <h2>Personal information</h2>
                        </div><br />
                        <div className='css-container'>
                            <p>
                                <span className='css-text-red'>First Name:</span>
                                <input className='css-input css-lightred' />
                            </p>
                            <p>
                                <span className='css-text-red'>Last Name:</span>
                                <input className='css-input css-lightred' />
                            </p>
                            <p>
                                <span className='css-text-red'>Email adress:</span>
                                <input className='css-input css-lightred' />
                            </p>
                            <p>
                                <span className='css-text-red'>Adress:</span>
                                <input className='css-input css-lightred' />
                            </p>
                            <p>
                                <span className='css-text-red'>Phone Number:</span>
                                <input className='css-input css-lightred' />
                            </p>
                            <p>
                                <span className='css-text-red'>Country:</span>
                                <input className='css-input css-lightred' />
                            </p>
                            <p>
                                <span className='css-text-red'>Date of Birth(DD-MM-YY): </span>
                                <input className='css-input css-lightred' />
                            </p>
                            <p>
                              <a href={'/PurchaseRoute'}> <button className='css-btn' >Purchase</button> </a>
                            </p>
                        </div>
                    </div>
                    </div>;


                    {/* <h2>Want to continue without registering?</h2>
                    <div><div className='css-card'>
            <div className='css-container css-red'>
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
                    <span className='css-text-red'>Email adress:</span>
                    <input className='css-input css-lightred' value={this.state.emailAdress} onChange={event => this.setState({...this.state, emailAdress: event.target.value})}/>
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
                    
                    <button className='css-btn' onClick={() => this.product} > Go to checkout </button>
                    
                </p>
            </div>
            </div>
        </div> */}
                </div>
            }

        </div>

    }
}

export class PurchaseRoute extends React.Component<RouteComponentProps<{}>,  {}> {
    constructor(props, conetxt) {
        super(props)
        this.state = {}
    }

    render() {
        return <div>
            <Purchase/>
        </div>

    }
}

export type PurchaseProps = {lego:Models.Lego}
export class Purchase extends React.Component<{}, {}> {
    constructor(props, conetxt) {
        super(props)
        this.state = {}
    }

    componentWillMount(){
        localStorage.getItem("userStatus")
    }


    productDeleten() {
        let user = JSON.parse(sessionStorage.getItem("user"))
        user != null ?
            delete_correctsc(user)

            : null
    }

    // CreateHis(){
    //     let user =  JSON.parse(sessionStorage.getItem("user"))

    //     if (user != null)
    //     {
    //         CreateHistory(this.props.lego.item_Number,
    //             user)
    //     }
    // }


    render() {
        console.log("render")
        return <div>
            
            Order has been made! Go back to the homepage.
            {/* {this.CreateHis()} */}
            {this.productDeleten()}



        </div>

    }
}

