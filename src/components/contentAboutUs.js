import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const ContentMain = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }

    p{

        line-height: 2;
        margin-top: 1.5rem;
    }

`

const ContentAboutUs = () => {

    const results = useStaticQuery(graphql`
    query{
        allDatoCmsPage(filter: { slug: { eq: "About-us"} }){
            nodes {
				title
                content
                image {
					fluid(maxWidth: 1200){
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`)

    const { title, content, image:{ fluid } } = results.allDatoCmsPage.nodes[0]

    return (
        <>
            <h2
                css={css`
                    margin-top: 4rem;
                    text-align: center;
                    font-size: 4rem;
                `}
            >{ title }</h2>
            <ContentMain>
                <p>{ content }</p>
                <Image fluid={fluid}/>
            </ContentMain>
        </>
    )
}

export default ContentAboutUs
