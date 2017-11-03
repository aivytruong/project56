import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'

<<<<<<< HEAD

type StarwarsProductComponentProps = {}
type StarwarsProductComponentState =  {products: Models.Lego[] | "loading"}

export async function get_starwars_product(theme: string): Promise<{product: Models.Lego}>{
    let res = await fetch(`custom/StarwarsProduct/${theme}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export class Product extends React.Component<RouteComponentProps<{}>, StarwarsProductComponentState> {
    constructor(props, context) {
        super(props, context);
        this.state = {products:"loading"};
    }

    // ComponentWillMount(){
    //     get_starwars_product('starwars').then(starwars => this.setState({... this.state, products: starwars}))
    // }

    public render() {
        return <div>
           
                     
            <h1>Product Page Template</h1>
            
            <br/>
            <NavLink to={ '/sale' }  activeClassName='active'> <button><h1>Back</h1></button> </NavLink>
            <h2>Product Title</h2>
            <img src="https://pixy.org/images/placeholder.png" width={600} height={300}/>
            <br/>
            <br/>
            <h3>Productbeschrijving</h3>
            <p> Lorem ipsum dolor sit amet, his ea putant mollis maiorum. Constituto sadipscing nam ea, eros dolorum lucilius eum te, ei quo commodo senserit. Reque noster ei eam. Autem veniam ex nam, at nobis bonorum sea. Eu doming meliore vivendo qui.
=======

type StarwarsProductComponentProps = {}
type StarwarsProductComponentState = {products: Models.Lego[] | "loading"}
>>>>>>> 1015e6c695f4181d8b51a93f3ed522b09b2ba773

export async function get_product(): Promise<Models.Lego[]>{
    let res = await fetch(`/custom/Product`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export class Product extends React.Component<RouteComponentProps<{}>, StarwarsProductComponentState> {
    constructor(props, context) {
        super(props, context);
        this.state = {products: "loading"};
    }

    componentWillMount(){
        get_product().then(prod => this.setState({...this.state, products: prod })).then( _ =>
        {if (this.state.products != "loading")
            console.log("gg", this.state.products)})
    }

    public render() {
        if (this.state.products == "loading") return <div>loading...</div>
        return <div>
           {this.state.products.map(product => <div>{product.Name}</div>)}    
        </div>;
    }
}

