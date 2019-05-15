import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard'
import ItemNew from './items/ItemNew'
import ItemList from './items/ItemList'
import StoreList from './stores/StoreList'

import StoreNew from './stores/StoreNew'

class App  extends Component{

    componentDidMount(){
        this.props.fetchUser(); 
    }


    render(){
    return(
        <div className="container">
            
            <BrowserRouter>
                <div>
                <Header/>

                    <Route exact={true} path="/" component={Landing}/>

                    <Route exact  path="/select" component={Dashboard}/>

                    <Route exact  path="/item" component={ItemList}/>

                    <Route exact  path="/item/new" component={ItemNew}/>
                    <Route exact  path="/store" component={StoreList}/>
                    <Route   path="/store/new" component={StoreNew}/>
                </div>
            </BrowserRouter>
        </div>
    );
};
}

export default connect(null, actions) (App);