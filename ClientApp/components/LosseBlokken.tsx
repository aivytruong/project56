import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class LosseBlokken extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            
            <h1>Welcome to the loose blocks page! </h1>
            <h2>Choose a category</h2>
            <br/>

            <div className="categories">
            <NavLink to={ '/StarwarsLosseBlokken' }  activeClassName='active'> <button><img src="https://ae01.alicdn.com/kf/HTB1RI3bSFXXXXaqaXXXq6xXFXXXP/Baksteen-blok-Kinderen-Speelgoed-Star-Wars-Force-Wekt-Han-Solo-Chewbacca-Kylo-Ren-Building-Juguetes-Compatibel.jpg" width={300} height={200}/></button> </NavLink>
            <br/>
            <NavLink to={ '/StarwarsLosseBlokken' }  activeClassName='active'> <button>Loose figures</button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="https://s.s-bol.com/imgbase0/imagebase3/large/FC/6/4/3/2/9200000016312346_6.jpg" width={300} height={200}/></button> </NavLink>
            <br/>
            <NavLink to={ '/product' }  activeClassName='active'> <button>Loose blocks</button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="http://farm5.static.flickr.com/4146/5061589253_dc12961822.jpg" width={300} height={200}/></button> </NavLink>
            <br/>
            <NavLink to={ '/product' }  activeClassName='active'> <button>Loose objects</button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/KidsSets' }  activeClassName='active'> <button><img src="https://i.pinimg.com/736x/d8/34/50/d834509d1cc7d0d511123f85c6323f67--lego-furniture-lego-building.jpg" width={300} height={200}/></button> </NavLink>
            <br/>
            <NavLink to={ '/KidsSets' }  activeClassName='active'> <button>Loose decorations</button> </NavLink>     
            </div> 
              
        
    </div>
    

   
    }
}