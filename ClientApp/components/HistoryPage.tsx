import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import * as Models from './lego_types'
import { ProductLoad } from './DetailProduct'


type Headers = { 'content-type': 'application/json' }

export async function get_correctuser(user_id: number): Promise<Models.History[]> {
  let res = await fetch(`./HistoryController/CorrectUser/${user_id}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
  let json = await res.json()
  console.log("received correct users", json)
  return json
}

export async function get_history(): Promise<Models.History[]> {
  let res = await fetch(`./HistoryController/History`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
  let json = await res.json()
  console.log("received correct history", json)
  return json
}

export async function get_correctproduct(item_Number: string): Promise<Models.Lego> {
  let res = await fetch(`./custom/CorrectProduct/${item_Number}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
  let json = await res.json()
  console.log("received correct products", json)
  return json
}

export async function get_correcthistory(item_Number: string): Promise<Models.History> {
  let res = await fetch(`./HistoryController/CorrectHistory/${item_Number}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
  let json = await res.json()
  console.log("received correct products", json)
  return json
}

export async function get_correctorder(order_id: number): Promise<Models.History[]> {
  let res = await fetch(`./HistoryController/CorrectOrder/${order_id}`, { method: 'get', credentials: 'include', headers: { 'content-type': 'application/json' } })
  let json = await res.json()
  //console.log("received correct order id", json)
  return json
}


type HistoryState = { history: Models.History[], legopr: Models.Lego[], expanded: boolean, orders: ((Models.History)[])[] }

export class HistoryPage extends React.Component<RouteComponentProps<{}>, HistoryState> {
  constructor(props: RouteComponentProps<{}>) {
    super(props)
    this.state = { history: [], legopr: [], expanded: false, orders: [] }
  }

  componentWillMount() {
    (get_correctuser(parseInt(sessionStorage.getItem("user"))).
      then(pr => this.setState({ ...this.state, history: pr.concat(this.state.history) },
        () => this.state.history.map((p: Models.History) =>
          this.state.history.indexOf(p) == 0 ||
            this.state.history[this.state.history.indexOf(p) - 1] != undefined &&
            this.state.history[this.state.history.indexOf(p) - 1].order_id != this.state.history[this.state.history.indexOf(p)].order_id
            ?
            get_correctorder(p.order_id).then(h => this.setState({ ...this.state, orders: this.state.orders.concat([h]) }))

            :
            console.log("item already exists")
        ))))

    //     then(p => this.setState({ ...this.state, legopr: this.state.legopr.concat(p) })))))).
    // catch(error => console.error(error))

    // (get_correctuser(parseInt(sessionStorage.getItem("user"))).
    // then(pr => this.setState({ ...this.state, history: pr.concat(this.state.history) })))

  }

  render() {

    return <div>


      {this.state.orders.map(e =>
        <Expanding his={e} />)}

    </div>
  }
}

type LoadOrderNumbers = { his: Models.History[] }
export class Expanding extends React.Component<LoadOrderNumbers, HistoryState> {
  constructor(props: LoadOrderNumbers) {
    super(props);
    this.state = { history: [], legopr: [], expanded: false, orders: [] };
  }

  componentWillMount() {
    this.props.his.map(product => get_correctproduct(product.item_Number).then(products => this.setState({ ...this.state, legopr: this.state.legopr.concat(products) }))
    .catch(e => console.error(e)))

    // get_correctproduct(this.props.match.params.item_Number).then(products => this.setState({ ...this.state, products: products }))
    //     console.log("mapping", this.state.products)
  }

  didExpend(value) {
    this.setState({ ...this.state, expanded: value })
  }

  render() {
    return <div>
      {console.log(this.state)}
      {
        !this.state.expanded ?
          <button onClick={() => this.didExpend(true)}>order number:{this.props.his[0].order_id}, status: pending..., total:{this.props.his[0].totalprice}</button>
          :
          <button onClick={() => this.didExpend(false)}> Close </button>
      }

      {
        this.state.expanded == true ?
          <div>
            {this.props.his.map(e =>
              <div>
                {this.state.legopr.map(p =>
                  e.item_Number == p.item_Number ?
                    <div>
                      <h4>Name: {p.name}</h4>
                      <img src={p.image_URL}/>
                    </div>
                    :
                    <div />)}
                <h4>Amount: {e.amount}</h4>
                <h4>Price: €{(parseFloat(e.price) * e.amount).toFixed(2)}</h4>
                <h4>Status: pending...</h4>
                <h4>Date of purchase: {e.date}</h4>

              </div>)
            }
          </div>
          :
          <div />

      }
    </div>
  }
}

