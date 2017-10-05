import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class StarwarsProductPage extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            <h1>LEGO STARWARS</h1> 
            <br/>

            <div className="starwars">
            <h2>Starwars</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="https://images.brickset.com/sets/large/10188-1.jpg?200807260532" width={200} height={100}/></button> </NavLink>
            <br/>
            <h3>€40,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="starwars">
            <h2>LEGO Star Wars First Order Star Destroyer 75190Starwars Sandcrawler</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/article_width/public/2017/02/2._sandcrawler.jpg" width={200} height={100}/></button> </NavLink>
            <br/>
            <h3>€70,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>

            <br/>
            <br/>
            <br/>

            <div className="starwars">
            <h2>Starwars: The Force Awakens</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="https://lc-www-live-s.legocdn.com/r/www/r/starwars/-/media/franchises/starwars2015/apps/forceawakensmobileedition/1_keyart_1488x837.jpg" width={200} height={100}/></button> </NavLink>
            <br/>
            <h3>€90,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            </div>

            <br/>
            <br/>
            
        </div>;
    }

   
    }

