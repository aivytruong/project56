import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import {Button, Glyphicon} from 'react-bootstrap'
export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
            <ul>
                <li>
                    <i className="fa fa-home"></i>
                    <NavLink to={'/'} exact activeClassName='active'>
                    <Button bsStyle="warning" bsSize="large">
                            <Glyphicon glyph="home">
                                Home 
                            </Glyphicon >
                    </Button>
                        <img src="http://www.stickpng.com/assets/images/5847e798cef1014c0b5e480e.png" width={25} height={20} />
                    </NavLink>
                </li>
                <li>
                    {sessionStorage.getItem("userStatus") == "Ingelogd" ?
                        <NavLink to={'/HistoryPage'} activeClassName='active'>
                            <span className='glyphicon glyphicon'></span> <Button bsStyle="warning" bsSize="large">History</Button>
                    </NavLink>
                        :
                        null}
                </li>

                {/* <li>
                            <NavLink to={ '/databasebutton' } activeClassName='active'>
                                <span className='glyphicon glyphicon'></span> database
                            </NavLink>
                        </li>  */}
                <li>
                    <NavLink to={'/sets'} activeClassName='active'>
                        <span className='glyphicon glyphicon'></span>
                        <Button bsStyle="warning" bsSize="large">
                            <Glyphicon glyph="th">
                                Sets 
                            </Glyphicon >
                         </Button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/separatebricks'} activeClassName='active'>
                        <span className='glyphicon glyphicon'></span>
                         <Button bsStyle="warning" bsSize="large"> 
                            <Glyphicon glyph="ice-lolly-tasted" > 
                                Minifigures 
                            </Glyphicon>
                        </Button>
                    </NavLink>
                </li>

                <li>
                    {sessionStorage.getItem("userStatus") == "AdminIngelogd" ?
                        <NavLink to={'/AdminMode'} activeClassName='active'>
                            <span className='glyphicon glyphicon'></span> 
                            <Button bsStyle="warning" bsSize="large" >
                                <Glyphicon glyph="edit">
                                    Admin
                                </Glyphicon>
                            </Button>
                    </NavLink>
                        :
                        null}
                </li>

                <li className='dropdown'>

                    {sessionStorage.getItem("userStatus") == "Ingelogd" ?


                        <a href={'/'}
                            onClick={() => (sessionStorage.removeItem('user'), sessionStorage.removeItem('admin'), sessionStorage.removeItem('userStatus'))}

                        >
                        <Button bsStyle="warning" bsSize="large">
                                Logout
                        </Button></a>
                        :
                        sessionStorage.getItem("userStatus") == "AdminIngelogd" ?
                            <a href={'/'}
                                onClick={() => (sessionStorage.removeItem('admin'), sessionStorage.removeItem('user'), sessionStorage.removeItem('userStatus'))}

                            ><Button bsStyle="warning" bsSize="large">
                            Logout
                    </Button></a>
                            :
                            <NavLink to={'/login'} activeClassName='active'>
                                <img src="https://png.icons8.com/lego-head/Dusk_Wired/1600" width={20} height={20} />
                            </NavLink>

                    }
                </li>
                <li className='dropdown-wish'>
                    <NavLink to={'/wishlist'} activeClassName='active'>
                        <img src="https://png.icons8.com/wish-list/ios7/50/000000" width={20} height={20} />
                    </NavLink>
                </li>

                <li className='dropdown-shoppingcart'>
                    <NavLink to={'/Shoppingcart'} activeClassName='active'>
                        <img src="https://png.icons8.com/shopping-cart/dotty/50/000000" width={20} height={20} />
                    </NavLink>
                </li>
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
            </ul>
        </div>
    }
}