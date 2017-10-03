import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class Sale extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            <h1>Sale</h1>
            <div>Welcome to the sale page! Here you will find the best sales for LEGO </div>
            <br/>
            <h2>Starwars</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="https://images.brickset.com/sets/large/10188-1.jpg?200807260532" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3><del>€50,-</del> Now: €25,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>


            <br/>
            <br/>
            <br/>
            <h2>Starwars Sandcrawler</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/article_width/public/2017/02/2._sandcrawler.jpg" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3><del>€70,-</del> Now: €40,-</h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>

            <br/>
            <br/>
            <br/>
            <h2>Starwars: The Force Awakens</h2>
            <NavLink to={ '/product' }  activeClassName='active'> <button><img src="https://lc-www-live-s.legocdn.com/r/www/r/starwars/-/media/franchises/starwars2015/apps/forceawakensmobileedition/1_keyart_1488x837.jpg" width={600} height={300}/></button> </NavLink>
            <br/>
            <h3><del>€90,-</del> Now: €60,- </h3>
            <NavLink to={ '/product' }  activeClassName='active'> <button className="button">Read more</button> </NavLink>
            <br/>
            <br/>
            
        </div>;
    }

   
    }

