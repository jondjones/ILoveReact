import gql from "graphql-tag";

const QUERY_STARWARS_FILM_CHARACTER = gql`
{
  allPeople {
 	edges {
      node {
        name
        height
      }
    }
  }
}`

export default QUERY_STARWARS_FILM_CHARACTER;