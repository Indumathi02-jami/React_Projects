

import React from "react";

const Apple=()=>{
    let array = ["indu",20,{username:"mathi"}]

    return(
        <div>
            {array[0]}
            {array[2].username}
        </div>
    )
}

export default Apple;