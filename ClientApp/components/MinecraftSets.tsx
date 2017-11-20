import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import {ProductLoad} from './ProductLoad';

type MinecraftSetsComponentProps = {}
type MinecraftSetsComponentState = { products: Models.Lego[] | "loading" }
type LoadProducts = { load: Models.Lego }

export async function get_minecraftproduct(theme:string): Promise<Models.Lego[]> {
    let res = await fetch(`./custom/MinecraftSets/${theme}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export class MinecraftSets extends React.Component<RouteComponentProps<{}>, MinecraftSetsComponentState> {
    constructor(props, context) {
        super();
        this.state = { products: "loading" };
    }

    componentWillMount() {
        get_minecraftproduct("Minecraft").then(products => this.setState({ ...this.state, products: products }))
        console.log("mapping", this.state.products)
    }

    render() {
        if (this.state.products == "loading") return <div>loading...</div>
        else
        return <div>
            {this.state.products.map(products => <div> <ProductLoad load={products} /> </div>)}
            {console.log("render", this.state.products)}
        </div>;
    }
}

