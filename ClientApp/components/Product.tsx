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
        super();
        this.state = {products: "loading"};
    }

    componentWillMount(){
        get_product().then(products => this.setState({...this.state, products:products
            .map((_products:Models.Lego) => {
            return {
                products:_products,
                Item_Number:_products.Item_Number,
                Name:_products.Name,
                Year:_products.Year,
                Theme:_products.Theme,
                Subtheme:_products.Subtheme,
                Pieces:_products.Pieces,
                Minifigures:_products.Minifigures,
                Image_URL:_products.Image_URL,
                GBP_MSRP:_products.GBP_MSRP,
                USD_MSRP:_products.USD_MSRP,
                CAD_MSRP:_products.CAD_MSRP,
                EUR_MSRP:_products.EUR_MSRP,
                Packaging:_products.Packaging,
                Availability:_products.Availability

            }
        })
    }))
        
        // get_product().then(products => this.setState({...this.state, products: products})).then( _ =>
        // {if (this.state.products != "loading")
        //     console.log("gg", this.state.products)})
    }

    render() {
        if (this.state.products == "loading") return <div>loading...</div>
        return <div>
           {this.state.products.map(products => <div> title: {products.Name}</div>)}
           {console.log("render", this.state.products)}    
        </div>;
    }
}

