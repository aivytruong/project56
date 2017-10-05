import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

export class KidsProductPage extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};

    }

    public render() {
        return <div>
            <br/>
            <h2>Starwars</h2>
            <img src="http://comicsalliance.com/files/2017/02/Lego-Batman-Movie.png" width={600} height={300}/>
            <br/>
            <br/>
            <h3>Product Description</h3>
            <p> Lorem ipsum dolor sit amet, his ea putant mollis maiorum. Constituto sadipscing nam ea, eros dolorum lucilius eum te, ei quo commodo senserit. Reque noster ei eam. Autem veniam ex nam, at nobis bonorum sea. Eu doming meliore vivendo qui.

Te his tempor mucius conclusionemque, erant primis signiferumque duo no. Eos tibique torquatos ne. Te sit vidisse vivendum iracundia, facilis appellantur necessitatibus vel ad, pro ei alia soluta virtute. Vim in choro prompta, nec cu vocent noluisse, est dicant sensibus ut.

Mel ex ceteros habemus facilisis, minim mazim tantas id sea, putent maiorum interpretaris mei ea. Sed ea feugait praesent petentium. Elitr doctus molestie per et, eos ea illud mediocrem democritum, quo eu eirmod cetero. Sed an rebum dolore.

Eam autem suavitate periculis te. Eu pro habeo debitis, sit omnes ubique ad. Falli legendos id eum, ne mea aliquam consequat. Nec epicuri recteque pericula eu. Eos cu reque sonet, quo congue consetetur definiebas an, mei probo nobis suavitate id.

No nisl elit civibus eum. Viris vitae et est, eam et discere salutandi urbanitas. Nam ex veritus tincidunt persequeris, te ius nonumy vocibus. Vel eu fierent senserit, quo ad equidem accusam singulis, et vim error definitionem. Has te apeirian dissentiunt, cu has dicunt aliquam.</p>
            <br/>
            <h3>€134,95</h3>
            <button>Add to cart</button>
            <br/>
            <br/>
            <br/>
            <NavLink to={ '/wishlist' }  activeClassName='active'> <button>Add to wishlist</button> </NavLink>
            <br/>
            <br/>
        </div>;
    }


}
