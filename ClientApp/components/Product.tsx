import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'


type StarwarsProductComponentProps = {}
type StarwarsProductComponentState = { products: Models.Lego[] | "loading" }
type LoadProducts = { load: Models.Lego }

export async function get_product(): Promise<Models.Lego[]> {
    let res = await fetch(`/custom/Product`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export class Product extends React.Component<RouteComponentProps<{}>, StarwarsProductComponentState> {
    constructor(props, context) {
        super();
        this.state = { products: "loading" };
    }

    componentWillMount() {
        get_product().then(products => this.setState({ ...this.state, products: products }))

        // get_product().then(products => this.setState({...this.state, products: products})).then( _ =>
        // {if (this.state.products != "loading")
        console.log("mapping", this.state.products)
    }

    render() {
        if (this.state.products == "loading") return <div>loading...</div>
        return <div>
            {this.state.products.map(products => <ProductLoad load={products} />)}
            {console.log("render", this.state.products)}
        </div>;
    }
}

export class ProductLoad extends React.Component<LoadProducts, {}> {
    constructor(props: LoadProducts) {
        super();
        this.state = {};
    }

    render() {
        return <div>
            {this.props.load.Name}
        </div>;
    }
}

