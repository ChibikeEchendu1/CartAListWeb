import React,{Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import StoreField from './StoreField'
import {Link} from 'react-router-dom'
import _ from 'lodash'
const FEILDS = [
    {placeholder: "Store Name", name:"StoreName"},
    {placeholder: "State", name:"Location"},
    {placeholder: "Longitude", name:"Longitude"},
    {placeholder: "Latitude", name:"Latitude"},
    {placeholder: "Address", name:"Address"},
    {placeholder: "Number", name:"Number"},
    {placeholder: "WebSite", name:"WebSite"},  
];

class StoreForm extends Component{

    renderFields(){
        return(
            
               _.map(FEILDS, ({placeholder,name}) => {
                  return  <Field key={name} type="text" placeholder={placeholder} name={name}component={StoreField}/>
                })
                
           
        );
    }
    render(){
        return(
            <div>

                <h1>Add a Store</h1>
                
                <form onSubmit={this.props.handleSubmit(values => console.log(values)
                )}>
                <div>
                {this.renderFields()}
                </div>
                <Link to="/store" className="red btn-flat white-text">Cancel</Link>
                <button className="teal btn-flat right white-text" type="submit">Submit
                <i className="material-icons right">done</i>
                </button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    _.each(FEILDS,({name})=>{
        if(!values[name]){
            errors[name] = "You must provide a value"
        }

    })

    return errors;

}

export default reduxForm({
    validate,
    form: 'storeForm'
}) (StoreForm);