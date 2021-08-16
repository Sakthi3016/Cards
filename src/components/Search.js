import { useState } from 'react'
import '../App.css'
import Food from './Food.js'
function Search(){
    return(
        <div>
            <section className="searchbox-wrap">
                <input type="text" placeholder="Search for a Restaurant" className="searchbox" />
                
            </section>
        </div>
    )
}

export default Search;