import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'


type StarwarsProductComponentProps = {}
type StarwarsProductComponentState = {products: Models.Lego[] | "loading"}

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

