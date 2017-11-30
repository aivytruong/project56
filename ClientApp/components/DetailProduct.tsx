import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'


type StarwarsProductComponentProps = {}
type StarwarsProductComponentState = { products: Models.Lego | "loading" }
type LoadProducts = { load: Models.Lego, id:string}

export async function get_correctproduct(item_Number:string): Promise<Models.Lego> {
    let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export class CorrectProduct extends React.Component<RouteComponentProps<{item_Number:string}>, StarwarsProductComponentState> {
    constructor(props, context) {
        super();
        this.state = { products: "loading" };
    }

    componentWillMount() {
        get_correctproduct(this.props.match.params.item_Number).then(products => this.setState({ ...this.state, products: products }))
        console.log("mapping", this.state.products)
    }

    render() {
        if (this.state.products == "loading") return <div>loading...</div>
        else
        return <div>
            
           <ProductLoad load={this.state.products} id={this.props.match.params.item_Number} />
            {console.log("render", this.state.products)}
        </div>;
    }
}


type ShoppingState = {}
export class ProductLoad extends React.Component<LoadProducts, ShoppingState> {
    constructor(props: LoadProducts) {
        super(props);
        this.state = {};
    }

    componentWillMount()
    {
        get_correctproduct(this.props.id).then(p => this.setState({...this.state, id:p}))
    }

    componentWillUpdate(NextProps:any, NextState:any)
    {
       let currentlist = localStorage.getItem("wishlist")
       let list = currentlist == null ? "empty" : currentlist.valueOf().toString() + "," + NextState.id
       localStorage.setItem("wishlist", currentlist == null ? "" : list)
    }

    render() {
        // console.log("rendering", this.props.load.name)
        return <div>
            {console.log(this.props)}
            <h1>{this.props.load.name}</h1>
            <br></br>
            <img src={this.props.load.image_URL} width={300} height={200}/>
            <br></br>
            Price: €{this.props.load.euR_MSRP}

            <button onClick={() => this.setState({...this.state, id:this.props.load.item_Number})}>Add to shopping cart </button>
            
            {localStorage.getItem("wishlist")}


            {/* <NavLink to={ `/WishlistRouter/${this.props.load.item_Number}` } activeClassName='active'>
                                <button onClick={() => {}}>add </button>
                            </NavLink> */}
            
        </div>;
    }
}

