import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import styled from "styled-components"

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: #91c384;
`

const MenuItem = styled(Link)`
  color: black;
  display: block;
  padding: 8px 16px;
`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main menu" } }
        ) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenuWrapper>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          item => (
            <MenuItem to={`/${item.object_slug}`} key={item.title}>
              {item.title}
            </MenuItem>
          )
        )}
      </MainMenuWrapper>
    )}
  >
    Main menu
  </StaticQuery>
)

export default MainMenu
