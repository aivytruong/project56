import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class SeparateBricks extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            
            <h1>Welcome to the separate bricks page! </h1>
            <h2>Choose a category</h2>
            <br/>

            <div className="categories">
            <br/>
            <NavLink to={ '/separatefigures' }  activeClassName='active'> <img src="http://i.ebayimg.com/00/s/MzkzWDM0Mg==/z/IpkAAOxyYSdS-zIg/$_35.JPG" width={200} height={300}/><br/><button>Figures</button> </NavLink>     
            </div>

            <div className="categories">
            <br/>
            <NavLink to={ '/separatebricksproduct' }  activeClassName='active'> <img src="https://27gen.files.wordpress.com/2013/06/lego-red-brick.jpg" width={300} height={200}/><br/><button>Bricks</button> </NavLink>        
            </div> 

            <div className="categories">
            <br/>
            <NavLink to={ '/separateobjects' }  activeClassName='active'> <img src="https://res.cloudinary.com/dorling-kindersley/image/upload/DK/87f2f3cdfee04ef789ba0295c99ebac5/558c1cf1cdc74a4da7d5b78bcd38d27e.jpg" width={300} height={200}/><br/><button>Objects</button> </NavLink>       
            </div> 
              
        
    </div>
    

   
    }
}