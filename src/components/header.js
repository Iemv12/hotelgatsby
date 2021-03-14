import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Navigation from './nav'

const HomeLink = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 3rem;
`

const Header = () => {
    return (
        <header
            css={css`
                background-color: rgba(44, 62, 80);
                padding: 1rem
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between
                    }

                `}
            >
                <HomeLink to="/">Hotel Gatsby</HomeLink>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header
