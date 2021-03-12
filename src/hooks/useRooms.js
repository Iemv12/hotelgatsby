import { graphql, useStaticQuery } from 'gatsby'

const useRooms = () => {

    const results = useStaticQuery(graphql`
        query{
            allDatoCmsRoom{
                nodes{
                    title
                    id
                    slug
                    content
                    image{
                        fluid(maxWidth:1200){
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `)

    return results.allDatoCmsRoom.nodes.map( room => ({
        title: room.title,
        id: room.id,
        image: room.image,
        content: room.content,
        slug: room.slug,
    }))
}

export default useRooms
