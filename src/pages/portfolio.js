import React from "react"
import { Link, graphql } from "gatsby"


const portfolio = (props) => {
    return (
        <span>
            {props.data.allMarkdownRemark.edges.map(({ node }) => {
                return (
                <article key={node.fields.slug}>
                    <header>
                    <h3>
                        <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                        </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    </header>
                    <section>
                    {node.excerpt}
                    </section>
                </article>
                )
            })}
        </span>
    )
}

export default portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`