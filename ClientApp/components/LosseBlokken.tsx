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
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="https://pbs.twimg.com/media/Cl9q5-1WYAAfHL7.jpg:large" width={300} height={200}/></button> </NavLink>
            <br/>
            <NavLink to={ '/product' }  activeClassName='active'> <button>LEGO NINJAGO</button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/StarwarsLosseBlokken' }  activeClassName='active'> <button><img src="http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2017/05/lego_main.jpg?itok=OYmDXcmD" width={300} height={200}/></button> </NavLink>
            <br/>
            <NavLink to={ '/StarwarsLosseBlokken' }  activeClassName='active'> <button>LEGO STARWARS</button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="https://torrentsgames.org/wp-content/uploads/2017/01/Lego-City-Undercover-Xbox360.jpg" width={300} height={200}/></button> </NavLink>
            <br/>
            <NavLink to={ '/product' }  activeClassName='active'> <button>LEGO CITY</button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/KidsSets' }  activeClassName='active'> <button><img src="https://www.parentmap.com/images/article/6670/kids-with-lego.jpg" width={300} height={200}/></button> </NavLink>
            <br/>
            <NavLink to={ '/KidsSets' }  activeClassName='active'> <button>LEGO KIDS</button> </NavLink>     
            </div> 
              
        
    </div>
    

   
    }
}