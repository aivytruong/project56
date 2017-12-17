import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './DetailProduct'
import { ShoppingCart } from './Shoppingcart'

export async function UserInloggen(username: string, password: string): Promise<Models.Users> {
    let res = await fetch(`./UserController/Login/${username}/${password}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = res.json()
    return json
}

export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
    let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export async function get_correctuser(user_id: number): Promise<Models.Wishlist[]> {
    let res = await fetch(`./ShoppingcartController/CorrectUser/${user_id}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct users", json)
    return json
}

export async function delete_correctsc(user_id: number) {
    let res = await fetch(`./ShoppingcartController/DeleteUserSC/${user_id}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
    return console.log("deleted shoppinglist")
}

type LoadProducts = { load: Models.Lego, id: string, deleteItem: (index: string) => void }
type loginState = { userName: string, password: string, loggedin: boolean, admin: boolean, userStatus: "Ingelogd" | 'Uitgelogd', user: Models.Users | "loading", legopr: Models.Lego[], wishlist2:Models.Wishlist[] }

export class Checkout extends React.Component<RouteComponentProps<{}>, loginState> {
    constructor(props, conetxt) {
        super(props)
        this.state = {
            userStatus: "Uitgelogd",
            userName: "",
            password: "",
            loggedin: false,
            admin: false,
            user: "loading",
            legopr: [],
            wishlist2:[]
        }
    }

    componentWillUpdate(NextProps: any, NextState: any) {

        sessionStorage.setItem("user", JSON.stringify(NextState.user.id))
        sessionStorage.setItem("userStatus", NextState.userStatus)
    }

    Inloggen() {
        UserInloggen(this.state.userName, this.state.password)
            .then(value => {
                if (value.firstName != "") { this.setState({ ...this.state, loggedin: true, user: value, userStatus: "Ingelogd" }) }
                else { this.setState({ loggedin: false }) }
            })

    }

    Admin(e) {
        if (e.target.checked) {
            this.setState({ ...this.state, admin: true })
        }
        else {
            this.setState({ ...this.state, admin: false })
        }
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
                    <h1>Already have an account?</h1>
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
                                <input type="checkbox" onChange={event => this.Admin(event)} />
                            </p>
                            <p>

                                <button className='css-btn' onClick={() => this.Inloggen()}>Log in</button>
                            </p>
                        </div>
                    </div>

                    <br />
                    <h1>Don't have an account? Please make one to continue the checkout</h1>
                    <NavLink to={'/registreren'} activeClassName='active'>
                        <button className='css-btn'>Registreren</button>
                    </NavLink>
                </div>
            }

        </div>

    }
}

export class Purchase extends React.Component<{}, {}> {
    constructor(props, conetxt) {
        super(props)
        this.state = {}
    }

    productDeleten() {
        let user = JSON.parse(sessionStorage.getItem("user"))
        user != null ?
        delete_correctsc(user).then(() => location.reload())
            : null
    }


    render() {
        console.log("render")
        return <div>
            
            Order has been made!

            {this.productDeleten()}
        </div>

    }
}

