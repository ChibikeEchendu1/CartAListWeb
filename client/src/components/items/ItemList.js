import React from 'react';
import {Link} from 'react-router-dom'

const ItemList = () =>{
    return(
        <div>
          <div className="fixed-action-btn">
            <Link to="/item/new" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></Link>
            </div>
            </div> 
       

    );
};

export default ItemList;