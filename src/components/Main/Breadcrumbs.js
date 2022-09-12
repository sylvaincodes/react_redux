import React from 'react'
import {
  Link
} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


function Breadcrumbs() {
    return (

        <div className="container">
            <Link to={`/products`}>
                <div className="flex-inline" style={{display : 'flex', alignItems:  'center', color:'black' }}>
                    <IoIosArrowBack className='' />
                    Retour à la liste
                </div>
            </Link>
        </div>
    )
}

export default Breadcrumbs