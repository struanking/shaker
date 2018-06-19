const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `ContentfulCategory`) {
//     console.log('Create page for a ContentfulCategory');
//     console.log('Category = ', node.name);
//     // const slug = createFilePath({ node, getNode, basePath: `data/cocktails` })
//     createNodeField({
//       node,
//       name: `category`,
//       value: node.name,
//     }) 
//   }
// };

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulCategory {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    `).then(result => {
      // console.log(JSON.stringify(result, null, 4))
      result.data.allContentfulCategory.edges.forEach(({ node }) => {
        createPage({
          path: `category/${node.slug}`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            category: node.name,
            slug: node.slug,
          },
        })
      });
    }).then(() => {
        graphql(`
          {
            allContentfulCocktail {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
        `).then(result => {
          result.data.allContentfulCocktail.edges.forEach(({ node }) => {
            createPage({
              path: node.slug,
              component: path.resolve(`./src/templates/cocktail.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                id: node.id,
              },
            })
          });
        })
      }).then(() => {
        graphql(`
          {
            allContentfulIngredient {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
        `).then(result => {
          result.data.allContentfulIngredient.edges.forEach(({ node }) => {
            createPage({
              path: `ingredients/${node.slug}`,
              component: path.resolve(`./src/templates/ingredient.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                id: node.id,
              },
            })
          });
          resolve();
        })
      })
    })
  };
