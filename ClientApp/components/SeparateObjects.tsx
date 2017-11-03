import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class SeparateObjects extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            
            <h1>Welcome to the separate Objects page! </h1>
            <h2>Choose your object</h2>
            <br/>

            <div className="product">
            <br/>
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="https://res.cloudinary.com/dorling-kindersley/image/upload/DK/87f2f3cdfee04ef789ba0295c99ebac5/558c1cf1cdc74a4da7d5b78bcd38d27e.jpg" width={350} height={300}/> </NavLink>     
            <br/>
            Amount:<input className='css-input-amount css-lightred' name="naam" type="text" />
            <br/>
            <NavLink to={ '/addtocart' }  activeClassName='active'><button>Add to Cart</button></NavLink>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>

            <div className="product">
            <br/>
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="https://img2.cgtrader.com/items/112612/987f721ca3/large/lego-technic-8080-3d-model-max-obj-fbx.jpg" width={250} height={300}/></NavLink>        
            <br/>
            Amount:<input className='css-input-amount css-lightred' name="naam" type="text" />
            <br/>
            <NavLink to={ '/addtocart' }  activeClassName='active'><button>Add to Cart</button></NavLink>
            <br/>
            <br/>
            <br/>
            <br/>
            </div> 

            <div className="product">
            <br/>
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="https://edge.alluremedia.com.au/m/l/2015/12/Capture1.jpg" width={350} height={300}/></NavLink>       
            <br/>
            Amount:<input className='css-input-amount css-lightred' name="naam" type="text" />
            <br/>
            <NavLink to={ '/addtocart' }  activeClassName='active'><button>Add to Cart</button></NavLink>
            <br/>
            <br/>
            <br/>
            <br/>
            </div> 

            <div className="product">
            <br/>
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="https://dp1eoqdp1qht7.cloudfront.net/community/migrated/36a/edd/367297/image-thumbnail-full" width={450} height={300}/></NavLink>       
            <br/>
            Amount:<input className='css-input-amount css-lightred' name="naam" type="text" />
            <br/>
            <NavLink to={ '/addtocart' }  activeClassName='active'><button>Add to Cart</button></NavLink>
            <br/>
            <br/>
            <br/>
            <br/>
            </div> 
        
        
    </div>
    

   
    }
}