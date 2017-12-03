import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'

type ShoppingState = {model:Models.Lego | "loading"}
type ShoppingProps = {id:string}

export class WishlistRouter extends React.Component<RouteComponentProps<{id:string}>, ShoppingState> {
    constructor(props:RouteComponentProps<{id:string}>) {
        super(props);
        this.state = {model:"loading"};
    }

    componentWillMount()
    {
        // localStorage.setItem()
        
        return localStorage.setItem("wishlit",this.props.match.params.id.toString())
    }

    componentWillUpdate(NextProps:any, NextState:any)
    {
       localStorage.setItem("wishlist", NextProps.id.toString())
    }
    public render() {
        return <div>
            {/* <Wishlist /> */}
        </div>;
    }
}


// export class Wishlist extends React.Component<{},ShoppingState> {
//     constructor(props:ShoppingProps) {

// import * as React from 'react';
// import { RouteComponentProps } from 'react-router';
// import { Link, NavLink } from 'react-router-dom';
// import * as Models from './lego_types'

// type ShoppingState = {id:number}
// type ShoppingProps = {lego:string}
// export class WishlistRouter extends React.Component<RouteComponentProps<{lego:Models.Lego}>, ShoppingState> {
//     constructor(props:RouteComponentProps<{lego:Models.Lego}>) {

//         super(props);
//         this.state = {id:0};
//     }

//     componentWillMount()
//     {
//         // localStorage.setItem()
//         //  localStorage.setItem("wishlit",this.props.match.params.id.toString())
//     }

//     componentWillUpdate(NextProps:any, NextState:any)
//     {
//        let currentlist = localStorage.getItem("wishlist")
//        let list = currentlist == null ? "empty" : currentlist.valueOf().toString() + "," + NextState.id
//        localStorage.setItem("wishlist", currentlist == null ? "" : list)
//     }


//     public render() {
//         return <div>
//             <button onClick={() => this.setState({...this.state, id:this.state.id + 1})}> </button>
//         </div>;
//     }
// }


// // export class Wishlist extends React.Component<{},ShoppingState> {
// //     constructor(props:ShoppingProps) {
// //         super(props);
// //         this.state = {id:""};
// //     }

// //     componentWillMount()
// //     {
// //         // localStorage.setItem()
// //     }

  
// //     public render() {
// //         return <div>
            
// //         </div>;
// //     }
// // }
