import React from 'react'

function Newsletter() {
    return (
        <div className='newsletter'>
            <div className='container'>
                <input type="text" name="newsletter" placeholder="Entrer votre email" />
                <button className='newsletter-btn' type="submit">Envoyer</button>
            </div>
        </div>
    )
}

export default Newsletter