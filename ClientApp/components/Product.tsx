import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'


type StarwarsProductComponentProps = {}
type StarwarsProductComponentState = | {kind:"loading"} | {kind: "lego", products: Models.Lego}

export async function get_starwars_product(theme: string): Promise<{product: Models.Lego}>{
    let res = await fetch(`custom/StarwarsProduct/${theme}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export class Product extends React.Component<RouteComponentProps<{}>, StarwarsProductComponentState> {
    constructor(props, context) {
        super(props, context);
        this.state = {kind:"loading"};
    }

    public render() {
        return <div>
           
        </div>;
    }


}

