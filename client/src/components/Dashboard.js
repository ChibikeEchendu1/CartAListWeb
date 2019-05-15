import React from 'react';
import {Link} from 'react-router-dom'

const Dashboard = () =>{
    return(
        <div style={{display:'flex', flexDirection:'column',alignItems:'center', height:'300px', justifyContent:'center'}}>
            Do what needs to be done
            <div style={{marginBottom:'20px',marginTop:'20px'}}>
            <Link to="/item" class="waves-effect waves-light btn-large"><i class="material-icons left">add_shopping_cart</i>Create/Edit new Items</Link>
            </div>
            <div>
            <Link to="/store"  class="waves-effect waves-light btn-large"><i class="material-icons left">pregnant_woman</i>Create/Edit store Items</Link>
            </div>
        </div>

    );
};

export default Dashboard;