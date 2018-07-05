import React from "react";
import styled from "styled-components";

const FukolGridList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;

  padding-left: 0;

  // display: flex; /* 1 */
  // flex-wrap: wrap; /* 2 */
  // margin: -0.5em; /* 5 (edit me!) */

  // & > * {
  //   flex: 1 0 5em; /* 3 (edit me!) */
  //   margin: 0.5em; /* 4 (edit me!) */
  // }
`

export default ({ children }) => (
  <FukolGridList>
    {children}
  </FukolGridList>
);


/* Key:
1. Fukol is a Flexbox based grid system. Even Opera Mini supports Flexbox. Older user agents that don't support Flexbox ignore the `display: flex` declaration, degrading to a single column layout. No harm done.
2. This line determines how items are handled. The `wrap` value means items will start a new row if there's not enough room on the current one.
3. This is the 'element query' part. Instead of setting an arbitrary number of columns and using breakpoints, we decide roughly how wide we want the item to be (`5em` in the example — the flex basis) and make sure items can grow to use the available space (`1`) but not shrink (`0`). So only change the `5em` value and leave `1 0` as it is.
4. This is for gutters. A `0.5em` margin here means gutters of `1em` (the margins double up).
5. This should always be a negative version of 4. It compensates for the margins created by the items. It makes sure the outside of the `.fukol-grid` container remains flush horizontally and no additional margin is added to the vertical flow.
6. The `class="fukol"` container in the HTML snippet enables you to add positive margins around the grid — not possible with just `.fukol-grid` because this uses negative margins (see 5). It also suppresses horizontal scrolling issues which occur under certain circumstances. */
