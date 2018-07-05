import { Link } from "gatsby";
import React from "react";
import FukolGridList from "../components/FukolGridList";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Nav from "../components/nav";

const pluralize = term => (n = 0) => n === 1 ? `${n} ${term}` : `${n} ${term}s`;
const pluralizeCocktails = pluralize('Cocktail');

export default ({ data, pageContext }) => {
  // handle null list -> use fromNullable?
  // check for list before rendering <ul>
  // common card template?
  return (
    <Layout>
      <Hero>
        <h1>{pageContext.category}</h1>
      </Hero>
      
      { data.allContentfulCocktail
        ? (
          <>
            <h2>{pluralizeCocktails(data.allContentfulCocktail.totalCount)}</h2>
            <Nav aria-label="cocktails">
              <FukolGridList>
                {
                  data.allContentfulCocktail.edges.map(({ node }) => (
                    <li key={node.id}>
                      <div className="card">
                        <h3>
                          <Link to={`/${node.slug}`}>{node.name}</Link>
                        </h3>
                      </div>
                    </li>
                  ))
                }
              </FukolGridList>
            </Nav>
          </>
        )
        : <h2>{pluralizeCocktails()}</h2>
      }
    </Layout>
  )
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
