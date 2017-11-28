import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'


type StarwarsProductComponentProps = {}
type StarwarsProductComponentState = { products: Models.Lego | "loading" }
type LoadProducts = { load: Models.Lego }

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
            
           <ProductLoad load={this.state.products} />
            {console.log("render", this.state.products)}
        </div>;
    }
}

export class ProductLoad extends React.Component<LoadProducts, {}> {
    constructor(props: LoadProducts) {
        super(props);
        this.state = {};
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

            <NavLink to={ `/WishlistRouter/${this.props.load.item_Number}` } activeClassName='active'>
                                <button onClick={() => {}}>add </button>
                            </NavLink>
            
        </div>;
    }
}

