import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const QUERY = graphql`
    query{
        allGoogleSheetVendedoresRow {
        edges {
            node {
            cidade
            endereco
            nome
            estado
            }
        }
        }
    }
  
`

const Index = () => {
    const data = useStaticQuery(QUERY)

    return (
        <div>
            <h1>Revendedores</h1>
                {data.allGoogleSheetVendedoresRow.edges.map(node => {
                    return(
                        <h3>{node.node.nome}</h3>
                    )
                })}
        </div>
    )
}

export default Index