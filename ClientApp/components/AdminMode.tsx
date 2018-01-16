import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from 'ClientApp/components/Product';

type Adminstate = { products: Models.Lego[] | "loading", users: Models.Users[] | "loading", expanded: boolean, userexpand: boolean}
type ProductProps = { product: Models.Lego }
type ProductState = { expanded: boolean, name: string, price: string, availability: string}
type inputprops = { type: string, current: string, handler: Function}
type inputstate = { text: string, edit: boolean}
type UserlistState = {expanded: boolean, firstName: string, lastName: string, userName: string, emailAdress: string, password: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string}
type UserlistProps = { user: Models.Users }
type state = { search: "" }
type productprops = { products: Models.Lego[] }
type userstate = { search: "" }
type userproductprops = { list: Models.Users[] }

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

export async function updateusers(id: number, firstName: string, lastName: string, userName: string, emailAdress: string, password: string, adress: string, phoneNumber: string, Country: string, Date_of_birth: string, gender: string)
{
    let res = await fetch(`./UserController/Update/${id}/${firstName}/${lastName}/${userName}/${emailAdress}/${password}/${adress}/${phoneNumber}/${Country}/${Date_of_birth}/${gender}`, { method: 'put', credentials: 'include', headers: { 'content-type' : 'application/json' } })
}


export class adminmode extends React.Component<RouteComponentProps<{}>,Adminstate> {
    constructor() {
        super();
        this.state = {  products: "loading",
                        users: "loading",
                        expanded: false,
                        userexpand: false};
    }

    componentWillMount() {
        get_product().then(value => this.setState({...this.state, products:value}))
        get_users().then(value => this.setState({...this.state, users: value}))
    }

    expandornot(value) {
        this.setState({...this.state, expanded: value})
    }

    usersornot(value) {
        this.setState({...this.state, userexpand: value})
    }

    public render() {
        if (this.state.products == "loading" || this.state.users == "loading") return <div>loading</div>  
        return <div>
            {!this.state.expanded?<button onClick={() => this.expandornot(true)}>Show Products</button>:
                                 <button onClick={() => this.expandornot(false)}> Close Products</button>}
            {this.state.expanded?<Search products={this.state.products}/>:<span/>}
            <br/>
            <br/>
            {!this.state.userexpand?<button onClick={() => this.usersornot(true)}>Show Users</button>:
                                 <button onClick={() => this.usersornot(false)}> Close Users</button>}
            {this.state.userexpand?<Searchusers list={this.state.users}/>:<span/>}
            <br/>
            <br/>
            <NavLink to={ '/Lego/Create' } activeClassName='active'>
            <button>Create Lego</button>
            </NavLink>
            <br/>
            <br/>
            <NavLink to={ '/Userc/Create' } activeClassName='active'>
            <button>Create User</button>
            </NavLink>
        </div>;
    }
}

export class Productadmin extends React.Component<ProductProps,ProductState> {
    constructor(props: ProductProps) {
        super(props);
        this.state = {expanded: false,
                      name: "",
                      price: "",
                      availability: ""}
    }

    expandornot(value) {
        this.setState({...this.state, expanded: value})
    }

    handler(type,value) {
        if (type == "Name") {
            this.setState({...this.state, name: value})
        }
        else if (type == "Price") {
            this.setState({...this.state, price: value})
        }
        else if (type == "Availability") {
            this.setState({...this.state, availability: value})
        }
    }

    upload() {

    }

    render() {
        console.log(this.state.name)
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
                        <br/>
                        <NavLink to={ `/Lego/Edit/${this.props.product.item_Number}` } activeClassName='active'>
                        <button>Edit</button>
                        
                        </NavLink>
                        <NavLink to={ `/Lego/Delete/${this.props.product.item_Number}` } activeClassName='active'>
                        <button>Delete</button>
                        </NavLink>
                        <br/>
                        <br/>
                    </div>}
                </div>
    }
}

export class Useradmin extends React.Component<UserlistProps,UserlistState> {
    constructor(props: UserlistProps) {
        super(props);
        this.state =  { expanded: false,
                        firstName: "",
                        lastName: "",
                        userName: "",
                        emailAdress: "",
                        password: "",
                        adress: "",
                        phoneNumber: "",
                        Country: "",
                        Date_of_birth: "",
                        gender: ""}
        this.handler = this.handler.bind(this)
    }

    expandornot(value) {
        this.setState({...this.state, expanded: value})
    }

    handler(type,value) {
        if (type == "firstname") {
            this.setState({...this.state, firstName: value})
        }
        else if (type == "lastname") {
            this.setState({...this.state, lastName: value})
        }
        else if (type == "username") {
            this.setState({...this.state, userName: value})
        }
        console.log(this.state.firstName)
    }
    
    upload() {
        var userid = this.props.user.id;
        var newuserid = +userid;
        updateusers(newuserid,
                    this.state.firstName,
                    this.state.lastName,
                    this.state.userName,
                    this.state.emailAdress,
                    this.state.password,
                    this.state.adress,
                    this.state.phoneNumber,
                    this.state.Country,
                    this.state.Date_of_birth,
                    this.state.gender)
    }

    render() {
        return  <div className="css-card">
                    <div className="css-container css-red">
                        {this.props.user.userName} {this.props.user.id}
                    </div>
                    {!this.state.expanded?<div>
                                            <button onClick={() => this.expandornot(true)}>Expand</button>
                                          </div>:
                    <div>
                        <button onClick={() => this.expandornot(false)}> Close Product</button>
                        <Input type="username" current={this.props.user.userName} handler={this.handler}/>
                        <Input type="firstname" current={this.props.user.firstName} handler={this.handler}/>
                        <Input type="lastname" current={this.props.user.lastName} handler={this.handler}/>
                        <Input type="emailadress" current={this.props.user.emailAdress} handler={this.handler}/>
                        <Input type="adress" current={this.props.user.adress} handler={this.handler}/>
                        <Input type="phonenumber" current={this.props.user.phoneNumber} handler={this.handler}/>
                        <Input type="country" current={this.props.user.country} handler={this.handler}/>
                        <Input type="dateofbirth" current={this.props.user.date_of_birth} handler={this.handler}/>
                        <Input type="gender" current={this.props.user.gender} handler={this.handler}/>
                        <br/>
                        <NavLink to={ `Userc/Edit/${this.props.user.id}` } activeClassName='active'>
                        <button>Edit</button>
                        </NavLink>
                        <NavLink to={ `/Lego/Delete/${this.props.user.id}` } activeClassName='active'>
                        <button>Delete</button>
                        </NavLink>
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
                    <h3>{this.props.type}:</h3>
                    <p>{this.state.text}</p>
                </div>
    }
}

export class Search extends React.Component<productprops, state>{
    constructor(props: productprops) {
        super(props);
        this.state = { search: "" }
    }


    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    render() {
        let filteredproducts = this.props.products.filter((products) => { return products.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; });
        return <div>

            <input type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)} />

            {filteredproducts.map((products) => {
                return <div><Productadmin product={products} /><br/></div>
            })}



        </div>
    }

}

export class Searchusers extends React.Component<userproductprops, userstate>{
    constructor(props: userproductprops) {
        super(props);
        this.state = { search: "" }
    }


    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    render() {
        let filteredproducts = this.props.list.filter((products) => { return products.userName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; });
        return <div>

            <input type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)} />

            {filteredproducts.map((products) => {
                return <div><Useradmin user={products} /><br/></div>
            })}



        </div>
    }
}

