import React from 'react';

export default ({input,placeholder,meta:{error,touched}}) => {
   // console.log(props.input);
    
    return(
        <div style={{width: '50%', marginTop:'30px'}}>
            <label style={{fontSize: 20}}>{placeholder}</label>
            <input style={{marginBottom:'5px'}} placeholder ={placeholder} {...input} />
            <div className="red-text" style={{marginBottom:'20px'}}>
            {touched && error}
            </div>
        </div>
    )
}