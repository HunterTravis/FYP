import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom';
const Dashboard = () => {
    var counter=0;
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user']);
    useEffect(() => {
        if(counter===0){counter+=1;}
        else{

            if(cookies.Name === undefined || cookies.LoggedIn !== "true") {
                alert("You are not logged in");
                navigate('/');
            }
        }
    }, [])
    
    return (
        <div>Dashboard
        </div>
    )
}
export default Dashboard;
