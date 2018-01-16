import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import {ProductLoad} from './ProductLoad';
import {Search} from './SearchFunction';


type HomeComponentProps = {}
type HomeState = { lego: Models.Lego[] | "loading" }
type LoadProducts = { load: Models.Lego }


export async function get_friendsproduct(theme:string): Promise<Models.Lego[]> {
    let res = await fetch(`./custom/PromotionalSets/${theme}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export class Home extends React.Component<RouteComponentProps<{}>, HomeState> {
    constructor(props, context) {
        super(props),
            this.state = { lego: "loading" }
    }

    componentWillMount() {
        get_friendsproduct("Promotional").then(products => this.setState({ ...this.state, lego: products }))
        console.log("mapping", this.state.lego)
    }

    render() {


            {/* Working on the homepage!
            <div className="categories">
            <NavLink to={ '/PromotionalSets' }  activeClassName='active'> <button><img src="http://maoincheoil.com/wp-content/uploads/2015/04/Special_Promotions_Header.png" width={300} height={200}/></button> </NavLink>
            <br/>
            <NavLink to={ '/PromotionalSets' }  activeClassName='active'> <button>Promotional</button> </NavLink>     
            </div>   */} {
            if (this.state.lego == "loading") return <div>loading...</div>
        else
        return <div>
                        <h1>What's new!</h1>
            <h3>Take a look at these special items in our store. Each month new and special items will take the spotlight. </h3>
            <Search products={this.state.lego}/>
           
            {console.log("render", this.state.lego)}
        </div>
            }

    }
}





