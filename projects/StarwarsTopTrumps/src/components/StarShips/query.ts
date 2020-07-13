import gql from "graphql-tag";

const QUERY_STARWARS_SHARSHIPS = gql`
{
  allStarships {
    edges {
      node {
        name
        model
        hyperdriveRating
      }
    }
  }
}`

export default QUERY_STARWARS_SHARSHIPS;