import React,{useState,useEffect} from 'react'
import Header from "./Header"




function Games() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data =>setUsers(data));

    }, [])
    console.log(users)

    return (
        <div className='He'>
        <Header/>
             <div>
{
  
    users.map((user=>{
        return(
            <div>
                {user.username}
            </div>
        )
    }))
}
            </div>
        </div>
    )

}

export default Games

