import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class Newproduct2 extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            <h1>NEW</h1>
            
            <br/>
            <NavLink to={ '/' }  activeClassName='active'> <button><h1>Back</h1></button> </NavLink>
            <h2>Flying Fox</h2>
            <img src="http://dark-horizons-sukobdumutpsb2zn0.stackpathdns.com/wp-content/uploads/2017/06/justice-league-lego-sets-offer-reveals.jpg" width={600} height={300}/>
            <p><img src="https://sh-s7-live-s.legocdn.com/is/image/LEGO/76087?$PDPDefault$" width={300} height={200}/>
            <img src="https://brickshow.com/wp-content/uploads/2017/07/76087-19.jpg" width={300} height={200}/></p>
            <br/>
            <br/>
            <h3>Productbeschrijving</h3>
            <p> Lorem ipsum dolor sit amet, his ea putant mollis maiorum. Constituto sadipscing nam ea, eros dolorum lucilius eum te, ei quo commodo senserit. Reque noster ei eam. Autem veniam ex nam, at nobis bonorum sea. Eu doming meliore vivendo qui.

Te his tempor mucius conclusionemque, erant primis signiferumque duo no. Eos tibique torquatos ne. Te sit vidisse vivendum iracundia, facilis appellantur necessitatibus vel ad, pro ei alia soluta virtute. Vim in choro prompta, nec cu vocent noluisse, est dicant sensibus ut.

Mel ex ceteros habemus facilisis, minim mazim tantas id sea, putent maiorum interpretaris mei ea. Sed ea feugait praesent petentium. Elitr doctus molestie per et, eos ea illud mediocrem democritum, quo eu eirmod cetero. Sed an rebum dolore.

Eam autem suavitate periculis te. Eu pro habeo debitis, sit omnes ubique ad. Falli legendos id eum, ne mea aliquam consequat. Nec epicuri recteque pericula eu. Eos cu reque sonet, quo congue consetetur definiebas an, mei probo nobis suavitate id.

No nisl elit civibus eum. Viris vitae et est, eam et discere salutandi urbanitas. Nam ex veritus tincidunt persequeris, te ius nonumy vocibus. Vel eu fierent senserit, quo ad equidem accusam singulis, et vim error definitionem. Has te apeirian dissentiunt, cu has dicunt aliquam.</p>
            <br/>
            <h3>Price</h3>
            <button><h3>Add to cart</h3></button>
            <br/>
            <br/>
            <br/>
            
            <br/>
            <br/>
        </div>;
    }


}

