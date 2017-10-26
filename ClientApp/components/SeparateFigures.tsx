import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class SeparateFigures extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            
            <h1>Welcome to the separate figures page! </h1>
            <h2>Choose figure</h2>
            <br/>

            <div className="product">
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="http://i.ebayimg.com/00/s/MzkzWDM0Mg==/z/IpkAAOxyYSdS-zIg/$_35.JPG" width={250} height={300}/> </NavLink>     
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="http://www.theminifigurestore.co.uk/wp-content/uploads/2016/12/Catman-The-LEGO-Batman-Movie-Series-LEGO-Minifigures-71017.png" width={250} height={300}/></NavLink>        
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="http://www.theminifigurestore.co.uk/wp-content/uploads/2016/12/Barbara-Gordon-The-LEGO-Batman-Movie-Series-LEGO-Minifigures-71017.png" width={250} height={300}/> </NavLink>       
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="http://www.theminifigurestore.co.uk/wp-content/uploads/2014/01/William-Shakespeare-The-LEGO-Movie-LEGO-Minifigures.jpg" width={250} height={300}/> </NavLink>       
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="https://img.brickowl.com/files/image_cache/larger/lego-minifigures-the-simpsons-series-random-bag-set-71005-15-3.jpg" width={250} height={300}/> </NavLink>     
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="http://www.collectibleminifigs.com/figimages/shark-suit-guy-lego-minifigure.jpg" width={200} height={300}/></NavLink>     
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="http://www.theminifigurestore.co.uk/wp-content/uploads/2016/12/Vacation-Batman-The-LEGO-Batman-Movie-Series-LEGO-Minifigures-71017.png" width={200} height={300}/></NavLink>     
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="http://www.collectibleminifigs.com/figimages/aladdin-lego-minifigure.jpg" width={200} height={300}/></NavLink>     
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
            <NavLink to={ '/addtocart' }  activeClassName='active'> <img src="http://i.ebayimg.com/00/s/Nzg3WDU4NA==/z/-W0AAOSw8lBTrAD4/$_32.JPG" width={200} height={300}/></NavLink>     
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