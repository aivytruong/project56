import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './DetailProduct'
import { Checkout } from './Checkout'
import { Lego, Shoppingcart } from './lego_types';

export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
    let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export async function get_beiden(products: Lego, shoppingcart: Shoppingcart): Promise<Models.Lego> {
    let res = await fetch(`./custom/CorrectProduct/${products}/${shoppingcart}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("beiden", json)
    return json
}

export async function get_correctuser(user_id: number): Promise<Models.Shoppingcart[]> {
    let res = await fetch(`./ShoppingcartController/CorrectUser/${user_id}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct users", json)
    return json
}

export async function delete_correctproduct(user_id: number, item_number: string) {
    let res = await fetch(`./ShoppingcartController/Delete/${user_id}/${item_number}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
    return console.log("deleted correct product from shoppingcart")

}

export async function delete_correctproduct2(user_id: number, item_number: string) {
    let res = await fetch(`./HistoryController/Delete/${user_id}/${item_number}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
    return console.log("deleted correct product from history")

}

export async function updateamount(item_number: string,  user_id:number) {
    let res = await fetch(`./ShoppingcartController/Amount/${item_number}/${user_id}`, { method: 'post', credentials: 'include', headers: { 'content-type': 'application/json' } })
    // let json = await res.json()
    return console.log("updated amount", res.status)
}

export async function updateminamount(item_number: string,  user_id:number) {
    let res = await fetch(`./ShoppingcartController/AmountMin/${item_number}/${user_id}`, { method: 'post', credentials: 'include', headers: { 'content-type': 'application/json' } })
    // let json = await res.json()
    return console.log("updated amount", res.status)
}

export async function CreateHistory(Item_Number: string, user_id: number) {
    let res = await fetch(`./HistoryController/CreateHistory/${Item_Number}/${user_id}`, { method: 'post', credentials: 'include', headers: new Headers({ 'content-type': 'application/json' }) })

    return console.log("made history", res)
}

type WishlistRouterState = { legopr: Models.Lego[], shopcart: Models.Shoppingcart[], history: Models.History[], userStatus: "Ingelogd" | 'Uitgelogd', user: Models.Users | "loading", amount: number, beiden: Models.Beiden[] }

export class ShoppingCartRouter extends React.Component<RouteComponentProps<{ wishlist: number, lego: Models.Lego }>, WishlistRouterState> {
    constructor(props: RouteComponentProps<{ wishlist: number, lego: Models.Lego }>) {
        super(props)
        this.state = { legopr: [], shopcart: [], history: [], userStatus: "Uitgelogd", user: "loading", amount: 1, beiden: [] }
    }

    componentWillMount() {
        let prevList = localStorage.getItem("shoppingcart")
        let currentList = prevList == null ? null : prevList.split(",")
        console.log({ currentList })


        sessionStorage.getItem("userStatus") != "Ingelogd" ?
            currentList != null ? currentList.map(b =>
                get_correctproduct(b).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b) }))
                    .catch(error => console.error(error))

            )
                : null

            :

            this.state.shopcart != null && sessionStorage.getItem("userStatus") == "Ingelogd" ?
                (get_correctuser(parseInt(sessionStorage.getItem("user"))).
                    then(pr => this.setState({ ...this.state, shopcart: pr.concat(this.state.shopcart) },
                        () => this.state.shopcart.map((p: Models.Shoppingcart) => get_correctproduct(p.item_Number).
                            then(p => this.setState({ ...this.state, legopr: this.state.legopr.concat(p) })))))).
                    catch(error => console.error(error))
                :
                null
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


    // deleteItem(NextState: any) {
    //     let prevListDelete = localStorage.getItem("shoppingcart")
    //     let nextList = localStorage.removeItem(NextState)
    //     let currentList = localStorage.setItem("shoppingcart", JSON.stringify(nextList))
    // }

    calcTotalPrice() {
        let i = 0
        this.state.legopr.map(lg => i = i + parseFloat(lg.usD_MSRP))
        return i
    }

    checkout() {
        this.setState({ ...this.state, userStatus: "Ingelogd" })

        //checken of user is ingleogd
        //als user is ingelogd, voeg toe aan history en verwijder uit shoppingcart
        //als dit is gelukt, verwijs de user naar purchase page
        //als user is uitgelogd, geef m de optie om in te loggen enz.
        {
            let user = sessionStorage.getItem("user")
            sessionStorage.getItem("userStatus") == "Ingelogd" ?
                (this.state.legopr.map(e => CreateHistory(e.item_Number, JSON.parse(sessionStorage.getItem("user")))), location.replace('/checkout'))
            :
            location.replace('/checkout')
        }
    }

    render() {
        console.log(this.state.legopr)
        return <div>
            
            {this.state.legopr.map((lego: Models.Lego) =>
                <ShoppingCart load={lego} id={lego.item_Number} deleteItem={(p) => this.deleteItem(p)}  shopcart = {this.state.shopcart.find(p => p.item_Number == lego.item_Number)}/>)
            }

            <br></br>
            Total price = {this.calcTotalPrice()}
            <br></br>
            <button onClick={() => this.checkout()}>Checkout</button>

        </div>
    }
}

// type WishlistProps = { id: number }

type LoadProducts = { load: Models.Lego, id: string, deleteItem: (index: string) => void, shopcart: Models.Shoppingcart }
export class ShoppingCart extends React.Component<LoadProducts, { deleteID: string }> {
    constructor(props: LoadProducts) {
        super(props);
        this.state = { deleteID: "" };
    }

    addToAmount() {

        
        return updateamount(this.props.shopcart.item_Number, JSON.parse(sessionStorage.getItem("user"))), location.reload()

    }

    deleteFromAmount() {

        
        return updateminamount(this.props.shopcart.item_Number, JSON.parse(sessionStorage.getItem("user"))), location.reload()

    }

    productDeleten() {
        let user = JSON.parse(sessionStorage.getItem("user"))
        user != null ?
            (delete_correctproduct(user, this.props.load.item_Number).then(() => location.reload()),
                delete_correctproduct2(user, this.props.load.item_Number).then(() => location.reload()))
            : null
    }


    render() {
        return <div>
            {console.log(this.props)}
            <h1>{this.props.load.name}</h1>
            <br></br>
            <img src={this.props.load.image_URL} width={300} height={200} />
            <br></br>

            <h4>Price: €{this.props.load.usD_MSRP}</h4>


            Amount: <button onClick={() => this.deleteFromAmount()}>-</button> { this.props.shopcart.amount} <button onClick={() => this.addToAmount()}>+</button>

            <br />
            <button onClick={() => sessionStorage.getItem("userStatus") == "Ingelogd" ?
                this.productDeleten()
                :
                this.props.deleteItem(this.props.load.item_Number)}>Remove from shoppingcart </button>

        </div>;
    }
}


