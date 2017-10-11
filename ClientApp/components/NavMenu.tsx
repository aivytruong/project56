import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                    <ul>
                        <li>
                        <i className="fa fa-home"></i>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <i className='css-icons'>home</i>
                                <img src="http://www.stickpng.com/assets/images/5847e798cef1014c0b5e480e.png" width={25 } height={20}/>
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
                         <li>
                            <NavLink to={ '/losseblokken' } activeClassName='active'>
                                <span className='glyphicon glyphicon'></span> Loose Blocks
                            </NavLink>
                        </li>
                        <li className='dropdown'>
                            <NavLink to={ '/login' } activeClassName='active'>
                                <img src="https://png.icons8.com/lego-head/Dusk_Wired/1600" width={20} height={20}/>
                            </NavLink>
                            {/* <div className='dropdown-content'>
                                <NavLink to={ '/sets' } activeClassName='active'>
                                    <span className='glyphicon glyphicon'></span> Sets
                                </NavLink>
                                <NavLink to={ '/sets' } activeClassName='active'>
                                    <span className='glyphicon glyphicon'></span> Sets
                                </NavLink>
                                <NavLink to={ '/sets' } activeClassName='active'>
                                    <span className='glyphicon glyphicon'></span> Sets
                                </NavLink>
                            </div> */}
                        </li>
                    </ul>
                </div>
    }
}
