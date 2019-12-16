import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
	const page = data.nodePage
	return (
		<Layout>
			<div>
				<img src={ page.relationships.field_page_image.localFile.url } />
				<h1>{ page.title }</h1>
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
		      summary
		    }
		    relationships {
		      field_page_image {
		        localFile {
		          url
		        }
		      }
		    }
  		}
	}
`