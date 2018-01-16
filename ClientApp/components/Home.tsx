import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './ProductLoad';
import { Search } from './SearchFunction';
import { get_product } from 'ClientApp/Components/AdminMode';


type HomeComponentProps = {}
type HomeState = { lego: Models.Lego[] | "loading" }
type LoadProducts = { load: Models.Lego }


export async function get_friendsproduct(theme: string): Promise<Models.Lego[]> {
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

        return <div>
            <h1>What's new!</h1>
            <h3>Take a look at these special items in our store. Each month new and special items will take the spotlight. Check them out below! </h3>

            {
                <div className="categories">
                    <NavLink to={'DetailProduct/850486'} activeClassName='active'> <button><img src="http://images.brickset.com/sets/images/850486-1.jpg" width={300} height={200} /></button> </NavLink>
                    <br />
                    <br/>
                    <NavLink to={'DetailProduct/8805'} activeClassName='active'> <button><img src="http://images.brickset.com/sets/images/8805-1.jpg" width={300} height={200} /></button> </NavLink>
                    <br />
                    <br/>
                    <NavLink to={'DetailProduct/45008'} activeClassName='active'> <button><img src="http://images.brickset.com/sets/images/45008-1.jpg" width={300} height={200} /></button> </NavLink>
                    <br />
                    <br/>
                    <NavLink to={'DetailProduct/21004'} activeClassName='active'> <button><img src="http://images.brickset.com/sets/images/21004-1.jpg" width={300} height={200} /></button> </NavLink>
                    <br />
                    <br/>
                    <NavLink to={'DetailProduct/41109'} activeClassName='active'> <button><img src="http://images.brickset.com/sets/images/41109-1.jpg" width={300} height={200} /></button> </NavLink>
                </div>}
        </div>
        {
            // if (this.state.lego == "loading") return <div>loading...</div>
            // else
            //     return <div>


            //         {/* {console.log("render", this.state.lego)} */}
            //     </div>
        }

    }





}
