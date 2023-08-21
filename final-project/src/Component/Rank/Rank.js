import React from "react";

const Rank = ({entries,name}) =>{
    return(
        <div>
            <div className="white f3">
                {`${name}, Your current entry count is ${entries}`};
            </div>
        </div>
    )
}

export default Rank;