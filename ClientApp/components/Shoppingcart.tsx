import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './DetailProduct'

export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
    let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

type WishlistRouterState = { legopr: Models.Lego[] }

export class ShoppingCartRouter extends React.Component<RouteComponentProps<{}>, WishlistRouterState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props)
        this.state = { legopr: [] }
    }

    componentWillMount() {
        let prevList = localStorage.getItem("shoppingcart")
        let currentList = prevList == null ? null : prevList.split(",")
        console.log({ currentList })

        currentList != null ? currentList.map(b =>
            get_correctproduct(b).then(b => this.setState({ ...this.state, legopr: this.state.legopr.concat(b) }))
                .catch(error => console.error(error))

        )
            : null
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


    render() {
        console.log(this.state.legopr)
        return <div>

            {this.state.legopr.map((lego: Models.Lego) =>
                <ShoppingCart load={lego} id={lego.item_Number} deleteItem={(p) => this.deleteItem(p)} />)}
                <br></br>
                Total price = {localStorage.getItem("price")}
                <br></br>
                <button>Checkout</button> 
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

    render() {
        // console.log("rendering", this.props.load.name)
        return <div>
            {console.log(this.props)}
            <h1>{this.props.load.name}</h1>
            <br></br>
            <img src={this.props.load.image_URL} width={300} height={200} />
            <br></br>
            Price: €{this.props.load.euR_MSRP}   
            <button onClick={() => this.props.deleteItem(this.props.load.item_Number)}>Remove from shoppingcart </button>
            
        </div>;
    }
}

