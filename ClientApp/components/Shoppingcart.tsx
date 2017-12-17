import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './DetailProduct'
import {Checkout} from './Checkout'

export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
    let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export async function get_correctuser(user_id: number): Promise<Models.Shoppingcart[]> {
    let res = await fetch(`./ShoppingcartController/CorrectUser/${user_id}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct users", json)
    return json
}

export async function delete_correctproduct(user_id: number, item_number:string) {
    let res = await fetch(`./ShoppingcartController/Delete/${user_id}/${item_number}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
    return console.log("deleted correct product from shoppingcart")
    
}

export async function delete_correctproduct2(user_id: number, item_number:string) {
    let res = await fetch(`./HistoryController/Delete/${user_id}/${item_number}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
    return console.log("deleted correct product from history")
    
}
type WishlistRouterState = { legopr: Models.Lego[] , wishlist2:Models.Shoppingcart[], history:Models.History[], userStatus: "Ingelogd" | 'Uitgelogd', user:Models.Users | "loading"}

export class ShoppingCartRouter extends React.Component<RouteComponentProps<{wishlist:number, lego:Models.Lego}>, WishlistRouterState> {
    constructor(props: RouteComponentProps<{wishlist:number, lego:Models.Lego}>) {
        super(props)
        this.state = { legopr: [], wishlist2:[], history:[], userStatus:"Uitgelogd", user:"loading" }
    }

    componentWillMount() {
        let prevList = localStorage.getItem("shoppingcart")
        let currentList = prevList == null ? null : prevList.split(",")
        console.log({ currentList })

        
        sessionStorage.getItem("userStatus") != "Ingelogd"?
        currentList != null ? currentList.map(b =>
            get_correctproduct(b).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b) }))
                .catch(error => console.error(error))

        )
            : null

        :

        this.state.wishlist2 != null && sessionStorage.getItem("userStatus") == "Ingelogd"? 
            (get_correctuser(parseInt(sessionStorage.getItem("user"))).
                then(pr => this.setState({...this.state, wishlist2:pr.concat(this.state.wishlist2)}, 
                    () => this.state.wishlist2.map((p: Models.Shoppingcart) => get_correctproduct(p.item_Number).
                    then(p => this.setState({...this.state, legopr:this.state.legopr.concat(p)})))))).
                    catch(error => console.error(error))
            :
                null     
    }

    deleteItem(NextState: any)
    {
        let prevListDelete = localStorage.getItem("shoppingcart")
        let nextList = prevListDelete != null ? (prevListDelete.replace(NextState, "")) : ""
        localStorage.setItem("shoppingcart", nextList != null ? nextList : nextList)
        let prevList = localStorage.getItem("shoppingcart")
        let currentList = prevList == null ? null : prevList.split(",").reverse()

        currentList != null ? currentList.map(b =>
            get_correctproduct(b).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b)}), () => location.reload())
                .catch(error => console.error(error))

        )
            : null
    }

    calcTotalPrice()
    {
        let i = 0
        this.state.legopr.map(lg => i = i + parseFloat(lg.euR_MSRP))
        return i
    }


    render() {
        console.log(this.state.legopr)
        return <div>

            {this.state.legopr.map((lego: Models.Lego) =>
                <ShoppingCart load={lego} id={lego.item_Number} deleteItem={(p) => this.deleteItem(p)} />)}
                <br></br>
                Total price = {this.calcTotalPrice()}
                <br></br>
                <NavLink to={'/checkout'}> <button onClick={() => this.setState({...this.state, userStatus:"Ingelogd"})}>Checkout</button></NavLink> 
               
        </div>
    }
}

// type WishlistProps = { id: number }

type LoadProducts = { load: Models.Lego, id: string, deleteItem: (index: string) => void }
export class ShoppingCart extends React.Component<LoadProducts, {deleteID: string}> {
    constructor(props: LoadProducts) {
        super(props);
        this.state = {deleteID: ""};
    }

    componentWillUpdate(NextProps: any, NextState: any) {
        
        // let currentlist = localStorage.getItem("shoppingcart")
        // let newlist = currentlist.replace(NextState.id, " ");
        // localStorage.setItem("shoppingcart", newlist);
    }

    productDeleten()
    {   let user =  JSON.parse(sessionStorage.getItem("user"))
        user != null? 
        (delete_correctproduct(user, this.props.load.item_Number).then(() => location.reload()),
        delete_correctproduct2(user, this.props.load.item_Number).then(() => location.reload()))
        : null  
    }

    render() {
        // console.log("rendering", this.props.load.name)
        return <div>
            {console.log(this.props)}
            <h1>{this.props.load.name}</h1>
            <br></br>
            <img src={this.props.load.image_URL} width={300} height={200} />
            <br></br>
            Price: €{this.props.load.euR_MSRP}  

            <button onClick={() => sessionStorage.getItem("userStatus") == "Ingelogd"? 
            this.productDeleten()
            : 
            this.props.deleteItem(this.props.load.item_Number)}>Remove from shoppingcart </button>
            
        </div>;
    }
}

