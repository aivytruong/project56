import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'


type StarwarsProductComponentProps = {}
<<<<<<< HEAD
type StarwarsProductComponentState =  {products: Models.Lego[] | "loading"}
=======
type StarwarsProductComponentState = { products: Models.Lego[] | "loading" }
type LoadProducts = { load: Models.Lego }
>>>>>>> origin/amount

export async function get_product(): Promise<Models.Lego[]> {
    let res = await fetch(`./custom/Product`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export class Product extends React.Component<RouteComponentProps<{}>, StarwarsProductComponentState> {
    constructor(props, context) {
<<<<<<< HEAD
        super(props, context);
        this.state = {products:"loading"};
    }

    // ComponentWillMount(){
    //     get_starwars_product('starwars').then(starwars => this.setState({... this.state, products: starwars}))
    // }

    public render() {
        return <div>
           
                     
            <h1>Product Page Template</h1>
            
            <br/>
            <NavLink to={ '/sale' }  activeClassName='active'> <button><h1>Back</h1></button> </NavLink>
            <h2>Product Title</h2>
            <img src="https://pixy.org/images/placeholder.png" width={600} height={300}/>
            <br/>
            <br/>
            <h3>Productbeschrijving</h3>
            <p> Lorem ipsum dolor sit amet, his ea putant mollis maiorum. Constituto sadipscing nam ea, eros dolorum lucilius eum te, ei quo commodo senserit. Reque noster ei eam. Autem veniam ex nam, at nobis bonorum sea. Eu doming meliore vivendo qui.

Te his tempor mucius conclusionemque, erant primis signiferumque duo no. Eos tibique torquatos ne. Te sit vidisse vivendum iracundia, facilis appellantur necessitatibus vel ad, pro ei alia soluta virtute. Vim in choro prompta, nec cu vocent noluisse, est dicant sensibus ut.

Mel ex ceteros habemus facilisis, minim mazim tantas id sea, putent maiorum interpretaris mei ea. Sed ea feugait praesent petentium. Elitr doctus molestie per et, eos ea illud mediocrem democritum, quo eu eirmod cetero. Sed an rebum dolore.

Eam autem suavitate periculis te. Eu pro habeo debitis, sit omnes ubique ad. Falli legendos id eum, ne mea aliquam consequat. Nec epicuri recteque pericula eu. Eos cu reque sonet, quo congue consetetur definiebas an, mei probo nobis suavitate id.

No nisl elit civibus eum. Viris vitae et est, eam et discere salutandi urbanitas. Nam ex veritus tincidunt persequeris, te ius nonumy vocibus. Vel eu fierent senserit, quo ad equidem accusam singulis, et vim error definitionem. Has te apeirian dissentiunt, cu has dicunt aliquam.</p>
            <br/>
            <h3>Price</h3>
            <button><h3>Add to cart</h3></button>
            <br/>
            <br/>
            <br/>
            
            <br/>
            <br/>
=======
        super();
        this.state = { products: "loading" };
    }

    componentWillMount() {
        get_product().then(products => this.setState({ ...this.state, products: products }))
        console.log("mapping", this.state.products)
    }

    render() {
        if (this.state.products == "loading") return <div>loading...</div>
        else
        return <div>
            {this.state.products.map(products => <div> name: <ProductLoad load={products} /> </div>)}
            {console.log("render", this.state.products)}
>>>>>>> origin/amount
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
            {this.props.load.name}
            
        </div>;
    }
}
