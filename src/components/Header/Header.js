import React from 'react'
import HeaderFixed from './HeaderFixed'
import HeaderMain from './HeaderMain'
import HeaderTop from './HeaderTop'

function Header() {
    return (
        <header>
                <HeaderTop />
                <HeaderMain />
                <HeaderFixed />
        </header>
    )
}

export default Header