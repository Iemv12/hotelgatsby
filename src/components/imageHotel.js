import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const Image = styled(BackgroundImage)`
    height: 400px;
`

const ImageText = styled.div`
    background-image: linear-gradient(to top, rgba(34, 49, 63, .85), rgba(34, 49, 63, .85));
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4rem;
        margin: 0%;

        @media (min-width: 992px){
            font-size: 5rem;
        }

    }
    p {
        font-size: 2rem;
        @media (min-width: 992px){
            font-size: 2.8rem;
        }
    }
`

const ImageHotel = () => {

    const { image } = useStaticQuery(graphql`
    query{
        image: file(relativePath: { eq: "8.jpg"}){
            sharp: childImageSharp {
                fluid{
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    `)

    return (
        <Image tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <ImageText>
                <h1>Welcome to Hotel Gatsby</h1>
                <p>The best Hotel for your vacations</p>
            </ImageText>
        </Image>
    )
}

export default ImageHotel
