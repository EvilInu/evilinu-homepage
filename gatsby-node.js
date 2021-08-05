const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

function getSlugPath(slug) {
  return slug.slice(1, slug.length - 1).split('/')
}

exports.onCreateNode = ({ node, getNode, getNodesByType, actions }) => {
  const { createNodeField, createParentChildLink } = actions

  if (node.internal.type === 'Directory') {
    // in some case the trailing slash is missing.
    // Always add it and normalize the path to remove duplication
    const parentDirectory = path.normalize(node.dir + '/')
    const parent = getNodesByType('Directory').find(n => path.normalize(n.absolutePath + '/') === parentDirectory)

    if (parent) {
      node.parent = parent.id
      createParentChildLink({
        child: node,
        parent
      })
    }
  }
  // Ensures we are processing only markdown files
  if (node.internal.type === 'Mdx' || node.internal.type === 'Md') {

    const slug = createFilePath({ node, getNode, basePath: `products`})
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    // createNodeField({
    //   node,
    //   name: 'parentDir',
    //   value: slugPath ? slugPath[2] : ' '
    // })

    // createNodeField({
    //   node,
    //   name: 'subDir',
    //   value: slugPath[slugPath.length - 1]
    // })
  }
}