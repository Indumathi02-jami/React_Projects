
import React, { useState ,useEffect} from 'react'


const userdeatis = "https://jsonplaceholder.typicode.com/posts"
console.log('i am the link',userdeatis)

const UserPage = () => {

    const[user,setuser] = useState([])

    const userHandler = async()=>{
        const res = await fetch(userdeatis)
        const newdate = await res.json()
        setuser(newdate)
    }
    useEffect(()=>{
        console.log(userHandler())
    },[])
    console.log(user)



  return (
    <div>{user.map((item)=>{
        return(
            <div>
                {item.title}
            </div>
        )
    })}

    </div>
  )
}

export default UserPage