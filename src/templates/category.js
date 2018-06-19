import { Link } from "gatsby";
import React from "react";
import Hero from "../components/Hero";

const pluralize = term => n => n === 1 ? `${n} ${term}` : `${n} ${term}s`;
const pluralizeCocktails = pluralize('Cocktail');

export default ({ data, pageContext }) => {
  // handle null list -> use fromNullable?
  // check for list before rendering <ul>
  if (data.allContentfulCocktail) {
    return (
      <div>
        <Hero>
          <h1>{pageContext.category}</h1>
        </Hero>
        
        <p>{pluralizeCocktails(data.allContentfulCocktail.totalCount)}</p>
        <ul>
          {
            data.allContentfulCocktail.edges.map(({ node }) => (
              <li key={node.id}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <p>There are 0 cocktails in {`"${pageContext.category}"`} category</p>
      </div>
    )
  }
};

export const query = graphql`
  query CategoryCocktailQuery($category: String!) {
    allContentfulCocktail(filter: { category: { name: { eq: $category } } }) {
      totalCount
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
