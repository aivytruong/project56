import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './DetailProduct'

 type Headers = { 'content-type': 'application/json' }

export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
    let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: new Headers })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export async function get_correctuser(user_id: number): Promise<Models.Wishlist[]> {
    let res = await fetch(`./WishlistController/CorrectUser/${user_id}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct users", json)
    return json
}

export async function delete_correctproduct(user_id: number, item_number:string) {
    let res = await fetch(`./WishlistController/Delete/${user_id}/${item_number}`, { method: 'delete', credentials: 'include', headers: { 'content-type': 'application/json' } })
    return console.log("deleted correct product")
    
}

type WishlistRouterState = { legopr: Models.Lego[], userStatus: "Ingelogd" | 'Uitgelogd', user:Models.Users | "loading", wishlist2:Models.Shoppingcart[]}

export class WishlistRouter extends React.Component<RouteComponentProps<{ wishlist:number, lego:Models.Lego}>, WishlistRouterState> {
    constructor(props: RouteComponentProps<{wishlist:number, lego:Models.Lego}>) {
        super(props)
        this.state = { legopr: [], userStatus:"Uitgelogd", user:"loading", wishlist2:[]}
    }

    componentWillMount() {
        let prevList = localStorage.getItem("wishlist")
        let currentList = prevList == null ? null : prevList.split(",")

        sessionStorage.getItem("userStatus") != "Ingelogd"?
        

            currentList != null
            ? currentList.map(b =>
                get_correctproduct(b).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b) }))
                    .catch(error => console.error(error)))
            
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
        
        let prevListDelete = localStorage.getItem("wishlist")
        let prevList = localStorage.getItem("wishlist")
        let nextList = prevListDelete != null ? (prevListDelete.replace(NextState, "")) 
        : ""
        let currentList = prevList == null ? null 
        : prevList.split(",").reverse()
        localStorage.setItem("wishlist", nextList != null ? nextList 
        : nextList)

        
        currentList != null ? currentList.map(b =>
            get_correctproduct(b).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b)}), () => location.reload())
                .catch(error => console.error(error))
            )
            : null
        
        
        
        
           
    }


    render() {
        console.log(this.state.legopr)
        return <div>
            
                {this.state.legopr.map((lego: Models.Lego) =>
                <Wishlist load={lego} id={lego.item_Number} deleteItem={(p) => this.deleteItem(p)} />)}
            
            
        </div>
    }
}

type WishlistProps = { id: number }

type LoadProducts = { load: Models.Lego, id: string, deleteItem: (index: string) => void }
export class Wishlist extends React.Component<LoadProducts, {}> {
    constructor(props: LoadProducts) {
        super(props);
        this.state = {};
    }

    componentWillUpdate(NextProps: any, NextState: any) {
    }

    productDeleten()
    {   let user =  JSON.parse(sessionStorage.getItem("user"))
        user != null? 
        delete_correctproduct(user, this.props.load.item_Number).then(() => location.reload())
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
            {this.props.load.euR_MSRP == "NA" ?
            <h3>Price: €{this.props.load.usD_MSRP}</h3> 
            :
            <h3>Price: €{this.props.load.euR_MSRP}</h3>}

            <button onClick={() => sessionStorage.getItem("userStatus") == "Ingelogd"? 
            this.productDeleten()
            :
            this.props.deleteItem(this.props.load.item_Number)}>Remove from wishlist </button>
        </div>
    }
}