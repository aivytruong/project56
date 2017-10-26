import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class Product extends React.Component<RouteComponentProps<{}>, {amount:number}> {
    constructor() {
        super();
        this.state = {amount:1};

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase() {
        this.setState({... this.state, amount: this.state.amount + 1})
    }

    decrease() {
        if (this.state.amount > 1) {
            this.setState({... this.state, amount: this.state.amount -1})
        }
    }

    public render() {
        return <div className='row'>
            <div className='column w70'>
                <img src="https://pixy.org/images/placeholder.png" width={700} height={600}/>
            </div>  
            <div className='column w30'>
                <h1>Product Page Template</h1>
                <h2>Product Title</h2>
                <h3>Productbeschrijving</h3>
                <h3>Price</h3>
                <div className='amount'>
                    <button className='css-btn css-teal css-circle css-big' onClick={this.increase}>+</button>
                    <span>{this.state.amount}</span>
                    <button className='css-btn css-redish css-circle css-big' onClick={this.decrease}>-</button>
                </div>

                <button>Add to cart</button>
                <br />
                <NavLink to={ '/sale' }  activeClassName='active'> <button>Back</button> </NavLink>
            </div>
        </div>;
    }


}

