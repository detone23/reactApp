import { useState , useEffect} from "react";
import UserList from "./UserList";

const Home = () => {
    const [users,setUsers] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [resultUsers,setResultUsers] = useState(users);

    const blockdelete = (id) => {

        const newUsers = users.filter(users => users.id !== id);
        setUsers(newUsers);

}
const filterByName = (name) => {
    const newUsers = users.filter(users => users.name===name);
    setResultUsers(newUsers);
}
    

useEffect(()=>{
      
    setTimeout(()=>{

        fetch("https://my-json-server.typicode.com/detone23/mockServer/users")
    .then(res =>{

        return res.json();

    })
    .then(data => {
        setUsers(data);
        console.log(data);
        setIsPending(false);
    }
        )


    },1000);
    
 setResultUsers(users)} ,[]);


    return ( 
    <div className="home">
        <h1>HomePage</h1>
            <div className="user-list">
                {isPending && <div>pending...</div>}
                {resultUsers && <UserList resultUsers={resultUsers} title= "Users" blockdelete={blockdelete} filterByName={filterByName}/>}
            
            </div>
        
        </div>
     );
}
 
export default Home;
