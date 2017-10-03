import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                    <ul>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/sale' } activeClassName='active'>
                                <span className='glyphicon glyphicon'></span> Sale
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/sets' } activeClassName='active'>
                                <span className='glyphicon glyphicon'></span> Sets
                            </NavLink>
                        </li>
                        <li className='dropdown'>
                            <img src="https://png.icons8.com/lego-head/Dusk_Wired/1600" width={20} height={20}/>
                            <div className='dropdown-content'>
                                <span>I am the best around</span>
                                <span>I am the best around</span>
                                <span>I am the best around</span>
                            </div>
                        </li>
                    </ul>
                </div>
    }
}
