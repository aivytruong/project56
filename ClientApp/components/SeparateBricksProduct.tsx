import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class SeparateBricksProduct extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            
            <h1>Welcome to the separate bricks product page! </h1>
            <h2>Choose your brick</h2>
            <br/>

            <div className="product">
            <br/>
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="https://27gen.files.wordpress.com/2013/06/lego-red-brick.jpg" width={300} height={200}/></NavLink>     
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="http://ecx.images-amazon.com/images/I/31NRPk8c7PL.jpg" width={300} height={200}/></NavLink>        
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzaaRLrqbvjfdypYXSddzBiiAKM9F0fYjNFB1usCWm3MpI1W6Jtw" width={300} height={200}/></NavLink>       
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="https://images-na.ssl-images-amazon.com/images/I/41SDEQmcU3L._SL500_AC_SS350_.jpg" width={300} height={200}/></NavLink>       
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="https://img.brickowl.com/files/image_cache/larger/lego-green-brick-2-x-4-3001-30-771344-61.jpg" width={300} height={200}/></NavLink>     
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="https://img.brickowl.com/files/image_cache/larger/lego-transparent-brick-1-x-2-without-bottom-tube-3065-2-887549-97.jpg" width={300} height={200}/></NavLink>     
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="https://img.brickowl.com/files/image_cache/larger/lego-transparent-neon-green-round-brick-1-x-1-with-open-stud-3062-30068-30-763649-103.jpg" width={300} height={200}/></NavLink>     
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="http://www.steinelager.de/img/bricks/4/6/46413_26_lg.png" width={300} height={200}/></NavLink>     
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