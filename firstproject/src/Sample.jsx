
import React from "react";
import {userdata} from './data'


let course="react js"
const Sample=()=>{
    

    return(
        <div>
            {userdata.map((user)=>{
                return(
                    <div style={{border:"1px solid black"}}>
                        <div >
                            {user.username}
                        </div>
                        <div>{user.email}</div>
                        <div>{user.address.street}</div>
                    </div>
                )
            })}

            <h1>{`I am learing ${course}`}</h1>
        </div>
    )
}

export default Sample;