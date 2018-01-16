import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import {ProductLoad} from './ProductLoad';
import {Search} from './SearchFunction';

type StarwarsProductComponentProps = {}
type StarwarsProductComponentState = { products: Models.Lego[] | "loading" }
type LoadProducts = { load: Models.Lego }

export async function get_starwarsproduct(theme:string): Promise<Models.Lego[]> {
    let res = await fetch(`./custom/LegoStarwars/${theme}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
    let json = await res.json()
    console.log("received correct products", json)
    return json
}

export class StarwarsSets extends React.Component<RouteComponentProps<{}>, StarwarsProductComponentState> {
    constructor(props, context) {
        super();
        this.state = { products: "loading" };
    }

<<<<<<< HEAD
    public render() {
         {
        function x(searchterm){
        for (var index = 0; index < searchterm.length; index++){
            document.getElementsByClassName(searchterm[index])[0].remove();
        }}
        return <div>
            <h1>LEGO STARWARS</h1> 
            <br/>
            <h1><button onClick={(event)=>x(["id1","id2"])}>Starwars: The forceawakens</button></h1>
            <h1><button onClick={(event)=>x(["id2", "id3"])}>Starwars</button></h1>
            <h1><button onClick={(event)=>x(["id3", "id1"])}>Starwars Sandcrawler</button></h1>

            <div className="id1">
            <h2>Starwars</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="https://images.brickset.com/sets/large/10188-1.jpg?200807260532" width={200} height={100}/></button> </NavLink>
            <br/>
            <h3>€40,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="id2">
            <h2>LEGO Star Wars First Order Star Destroyer 75190Starwars Sandcrawler</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/article_width/public/2017/02/2._sandcrawler.jpg" width={200} height={100}/></button> </NavLink>
            <br/>
            <h3>€70,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="<id3ad><1>	<Aq>	<AQ>    <wewe><Q>a</Q></wewe></AQ></Aq></1></id3ad>">
            <h2>Starwars: The Force Awakens</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="https://lc-www-live-s.legocdn.com/r/www/r/starwars/-/media/franchises/starwars2015/apps/forceawakensmobileedition/1_keyart_1488x837.jpg" width={200} height={100}/></button> </NavLink>
            <br/>
            <h3>€90,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>
            <button onClick={(event)=>x(["id1","id2"])}>Starwars: The forceawakens</button>
            <button onClick={(event)=>x(["id2", "id3"])}>Starwars</button>
            <button onClick={(event)=>x(["id3", "id1"])}>Starwars Sandcrawler</button>

            <br/>
            <br/>
            
        </div>;
    }

   
    }}
=======
    componentWillMount() {
        get_starwarsproduct("Star Wars").then(products => this.setState({ ...this.state, products: products }))
        console.log("mapping", this.state.products)
    }

    render() {
        if (this.state.products == "loading") return <div>loading...</div>
        else
        return <div>
            <Search products={this.state.products}/>
           
            {console.log("render", this.state.products)}
        </div>;
    }
}
>>>>>>> origin/amount
