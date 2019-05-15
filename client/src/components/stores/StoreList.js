import React from 'react';
import {Link} from 'react-router-dom'

const StoreList = () =>{
    return(
        <div>
          <div className="fixed-action-btn">
            <Link to="/store/new" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></Link>
            </div>
            </div> 
       

    );
};

export default StoreList;