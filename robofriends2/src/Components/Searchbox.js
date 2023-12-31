import React from "react";

const Searchbox = ({onSearchChange} ) =>{
    return(
        <div>
            <input  className='pa3 ba b--green bg-lightest-blue' 
                    type="search" 
                    placeholder="search robots"
                    onChange={onSearchChange}
            />
        </div>
    )
}

export default Searchbox;