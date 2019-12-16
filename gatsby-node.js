const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `node__page`) {
		const alias = createFilePath({ node, getNode, basePath: `pages`})
		createNodeField({
			node,
			name: `alias`,
			value: alias
		})

	}
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions
	const result = await graphql(`
		{
			allNodePage {
				edges {
					node {
						id
						field_page_image {
							alt
							title
							width
							height
						}
						path {
							alias
						}
						status
						title
						body {
							format
							processed
							summary
							value
						}
					}
				}
			}
		}
	`)
	// Handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	result.data.allNodePage.edges.forEach(({ node }) => {
		createPage({
			path: node.path.alias,
			component: path.resolve(`./src/templates/page.js`),
			context: {
				alias: node.path.alias,
			},
		})
	})
}