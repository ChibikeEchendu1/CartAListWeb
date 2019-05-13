
export default function(state=null, action){

    console.log(action);
    
    switch (action.type){
        case 'Fetch_User':
            return action.payload.data || false; 
        default:
            return state;
    }
}