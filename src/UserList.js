import { useState } from "react";
const UserList = (props) => {
    const resultUsers = props.resultUsers;
    const [title,settitle] = useState(props.title);
    const blockdelete = props.blockdelete;
    const filterByName = props.filterByName;
    



    console.log(props);
    return ( 
        <div className="user-list">
            
            <h2>{title}</h2>
            
            <input type="text" id='search'></input>
            <button onClick={()=>(filterByName(document.getElementById('search').value))}></button>
            
            {resultUsers.map((user) => (

            <div className="user-preview" key={user.id} >
                <h2>{user.name}</h2>
                <p>{user.quality}</p>
                <button onClick={()=> (blockdelete(user.id))}>del</button>
            </div>

    ))}
</div>
     );
}
 
export default UserList;