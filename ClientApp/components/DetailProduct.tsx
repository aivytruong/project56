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
            
           <ProductLoad lego={this.state.products}  />
            {console.log("render", this.state.products)}
        </div>;
    }
}


type ShoppingState = {cart: boolean, wishlist: boolean}
type ProductLoadState = {lego: Models.Lego | "loading", cart: boolean, wishlist: boolean }
type ProductLoadProps = { lego: Models.Lego }
export class ProductLoad extends React.Component<ProductLoadProps, ProductLoadState> {
    constructor(props: ProductLoadProps) {
        super(props)
        this.state = {lego: "loading", cart: false, wishlist: false}
    }

    componentWillUpdate(NextProps:any, NextState:any)
    {
        let exists = NextState.lego.item_Number
        console.log("exist", NextState.wishlist, NextState.cart);


        if (NextState.wishlist == true && NextState.cart == false) {
            let currentlist = localStorage.getItem("wishlist")
            let list = currentlist == null ? NextState.lego.item_Number : currentlist.valueOf().toString() + "," + NextState.lego.item_Number 
            console.log("1e", NextState);
            this.setState({...this.state, wishlist: false})
            return localStorage.setItem("wishlist",  currentlist == null ? list : currentlist.includes(exists)? (alert("You already have this item in your wishlist."), currentlist) : list )
            
        }

        if (NextState.wishlist == false && NextState.cart == true) {
            let currentlist2 = localStorage.getItem("shoppingcart")
            let list2 = currentlist2 == null ? NextState.lego.item_Number : currentlist2.valueOf().toString() + "," + NextState.lego.item_Number
            console.log("2e", NextState);
            this.setState({...this.state, cart: false})
            return localStorage.setItem("shoppingcart",  currentlist2 == null ? list2 : currentlist2.includes(exists)? (alert("You already have this item in your shoppingcart."), currentlist2) : list2 )
            
        }         
        else {
            console.log("else", NextState);
        }  
         //    localStorage.setItem("wishlist", currentlist == null ? NextProps.id : list)
    //    localStorage.setItem("wishlist",  list == null ? currentlist : list.includes(exists)? (alert("You already have this item in your wishlist."), list) : currentlist )
       
       
    }

    render() {
        // console.log("rendering", this.props.load.name)
        return <div>
            {console.log(this.props)}
            <h1>{this.props.lego.name}</h1>
            <br></br>
            <img src={this.props.lego.image_URL} width={300} height={200}/>
            <br></br>
            <h3>Description</h3>
            <br/>
            <p>Bring all of the action of the epic {this.props.lego.theme} to your adventurous builder with the {this.props.lego.name}. Your child will take on exciting challenges and obstacles with this functional, action-packed set. Builders can take a break from screen time and take on a new challenge! They can role play with their friends and take on the evils for incredible, larger than life stories! Designed with builders of all ages in mind, this toy with {this.props.lego.pieces} pieces will encourage open-ended building play, and inspire any imagination.  </p>
            <br></br>
            Price: €{this.props.lego.euR_MSRP}
            <br></br>
            
            <button onClick={() => this.setState({...this.state, lego:this.props.lego, wishlist: true}
            )}>Add to wishlist </button>
            <button onClick={() => this.setState({...this.state, lego:this.props.lego, cart: true}
                )}>Add to shoppingcart </button>

                
        </div>;
    }

    

    
}

