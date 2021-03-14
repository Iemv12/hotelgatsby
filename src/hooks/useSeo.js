import { graphql, useStaticQuery } from 'gatsby'

const useSeo = () =>{

    const results = useStaticQuery(graphql`
        query {
            datoCmsSite{
		        globalSeo{
                    siteName
                    titleSuffix
                    fallbackSeo{
				        title
                        description
                    }
                }
            }
        }
    `)

    return results.datoCmsSite.globalSeo
}

export default useSeo