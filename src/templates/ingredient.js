import { Link } from "gatsby";
import React from "react";

export default ({ data }) => (
  <div>
    <h1>Ingredient:</h1>
    <h2>Cocktails used in</h2>
    <ul>
    {
      data.allContentfulCocktail.edges.map(({ node }) => (
      <li key={node.id}>
        <Link to={`/${node.slug}`}>{node.name}</Link>
      </li>
    ))}
    </ul>
  </div>
);  

export const query = graphql`
  query IngredientQuery($id: String!) {
    allContentfulCocktail(filter: {tags: {id: {eq: $id}}}) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;
