import { React, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./Searchbar.css"



const Searchbar =({placeHolder,handleSelect} ) =>  {
 
    const[searchWord, setSearchword] = useState("")

     const handleSubmit = () => {
        handleSelect(searchWord)
        setSearchword("")
     }


    return(
        <div className="container">

            <input type="text"
            className="inputField"
            placeholder= {placeHolder}
            value={searchWord}
            onChange= {(event) => setSearchword(event.target.value)}
            />

            <div className="searchIcon">
                {searchWord.length === 0 ? (
                    <SearchIcon  />
                ) : (<h3 
                className="clearBtn"
                onClick={handleSubmit}
                >{"->"}</h3>)}
               
            </div>

        </div>
    )

}
export default Searchbar;