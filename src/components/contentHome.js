import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const SectionContent = styled.div`
    padding: 4rem 0;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }

    p{
        line-height: 2;
    }

`

const ContentHome = () => {

    const results = useStaticQuery(graphql`
        query{
            allDatoCmsPage(filter: { slug: { eq: "Home"} }){
                nodes {
                    title
                    content
                    image {
                        fluid {
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
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
            >{title}</h2>
            <SectionContent>
                <p>{content}</p>
                <Image fluid={fluid} alt={`image of ${title}`}/>
            </SectionContent>
        </>
    )
}

export default ContentHome
