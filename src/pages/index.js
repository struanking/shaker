import { Link } from "gatsby";
import React from "react";
import FukolGridList from "../components/FukolGridList";
import Hero, { HeroTitle } from "../components/Hero";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Tagline from "../components/tagline";

// const Tile = styled.div``;

// const TileLink = styled(Link)`
//   border: solid 1px #e3e3e3;
//   display: inline-block;
//   c
//   text-decoration: none;
//   width: 100%;

//   & :hover {
//     background: #eee;
//     box-shadow: 0 0 0 0 0.25rem;
//   }
// `;

export default ({ data }) => (
  <Layout>
    <Hero>
      <HeroTitle>
        {data.site.siteMetadata.title}
        <Tagline>A library of cocktail drinks</Tagline>
      </HeroTitle>
    </Hero>
    
    <h2>Categories</h2>
    
    <Nav aria-label="categories">
      <FukolGridList>
        {data.allContentfulCategory.edges.map(({ node }) => (
          <li key={node.id}>
            <div className="card">
              <h3>
                <Link to={`category/${node.slug}`}>
                  {node.name}
                </Link>
              </h3>
            </div>
          </li>
        ))}
      </FukolGridList>
    </Nav>
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCategory(sort: { fields: [name], order: ASC }) {
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
