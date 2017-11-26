import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from 'ClientApp/components/Product';

type Adminstate = { products: Models.Lego[] | "loading", users: Models.Users[] | "loading", expanded: boolean}
type ProductProps = { product: Models.Lego }
type inputprops = { type: string, current: string, handler: Function}
type inputstate = { text: string, edit: boolean}

export async function get_product(): Promise<Models.Lego[]> {
    let res = await fetch(`./custom/Product`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    return json
}

export async function get_users(): Promise<Models.Users[]> {
    let res = await fetch(`./UserController/Users`, { method: 'get', credentials: 'include', headers: { 'content-type' : 'application/json' } })
    let json = await res.json()
    return json
}

export class adminmode extends React.Component<RouteComponentProps<{}>,Adminstate> {
    constructor() {
        super();
        this.state = {  products: "loading",
                        users: "loading",
                        expanded: false};
    }

    componentWillMount() {
        get_product().then(value => this.setState({...this.state, products:value}))
        get_users().then(value => this.setState({...this.state, users: value}))
    }

    expandornot(value) {
        this.setState({...this.state, expanded: value})
    }

    public render() {
        if (this.state.products == "loading") return <div>loading</div>  
        return <div>
            {!this.state.expanded?<button onClick={() => this.expandornot(true)}>Show Products</button>:
                                 <button onClick={() => this.expandornot(false)}> Close Products</button>}
            {this.state.expanded?this.state.products.map(value => <div><Productadmin product={value} /><br/></div>):<span/>}
        </div>;
    }
}

export class Productadmin extends React.Component<ProductProps,{expanded: boolean}> {
    constructor(props: ProductProps) {
        super(props);
        this.state = {expanded: false}
    }

    expandornot(value) {
        this.setState({...this.state, expanded: value})
    }

    handler(type,value) {
        if (type == "Name") {
            this.setState({})
        }
        else if (type == "Price") {
            this.setState({})
        }
        else if (type == "Availability") {
            this.setState({})
        }
    }

    render() {
        return  <div className="css-card">
                    <div className="css-container css-red">
                        {this.props.product.name} {this.props.product.item_Number}
                    </div>
                    {!this.state.expanded?<div>
                                            <button onClick={() => this.expandornot(true)}>Expand</button>
                                          </div>:
                    <div>
                        <button onClick={() => this.expandornot(false)}> Close Product</button>
                        <Input type="Name" current={this.props.product.name} handler={this.handler}/>
                        <Input type="Price" current={this.props.product.euR_MSRP} handler={this.handler}/>
                        <Input type="Availability" current={this.props.product.availability} handler={this.handler}/>
                    </div>}
                </div>
    }
}

export class Input extends React.Component<inputprops,inputstate> {                                                                                             
    constructor() {
        super();
        this.state = { text: "",
                       edit: false}
    }

    componentWillMount() {
        this.setState({text: this.props.current})
    }

    edit(value) {
        this.setState({edit: value})
        this.props.handler(this.props.type,this.state.text)
    }

    render() {
        return  <div>
                    {this.props.type}:
                    {!this.state.edit?<div>
                                        <p>{this.state.text}</p>
                                        <button onClick={() => this.edit(true)}>edit</button>
                                      </div>:
                    <div>
                        <input value={this.state.text} onChange={event => this.setState({...this.state, text: event.target.value})}/>
                        <button onClick={() => this.edit(false)}>edit</button>
                    </div>}
                </div>
    }
}

