import axios from 'axios';

export const fetchUser = () => async dispatch =>{
    const res = await axios.get('/api/current_user');
    dispatch({type:'Fetch_User', payload:res});
    
};