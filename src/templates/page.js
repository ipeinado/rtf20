import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Img from "gatsby-image"

export default ({ data }) => {
	const page = data.nodePage,
		  image = page.relationships.field_page_image
	return (
		<Layout>
			<div style={{
				margin: `2rem auto`,
				maxWidth: 960,
				padding: `0 1rem`,
			}}>
				<h1>{ page.title }</h1>
				{ image && 
					<Img style={{ marginBottom: `2rem`, }}fluid={ image.localFile.childImageSharp.fluid } />
				}
				<div dangerouslySetInnerHTML={{ __html: page.body.processed }} />
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($alias: String!) {
		nodePage(path: {alias: {eq: $alias}}) {
    		title
		    body {
		      processed
		    }
		    relationships {
		     	field_page_image {
		        	localFile {
		        		url
		          		childImageSharp {
		          			fluid(maxWidth: 1024, quality: 80) {
		          				...GatsbyImageSharpFluid
		          			}
		          		}
		        	}
		      	}
		    }
  		}
	}
`