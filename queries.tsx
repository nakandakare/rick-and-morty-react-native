import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query characters($name: String!, $page: Int) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages
        count
        next
      }
      results {
        name
        image
        species
        gender
        type
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  query locations($name: String!, $page: Int) {
    locations(page: $page, filter: { name: $name }) {
      info {
        pages
        count
        next
      }
      results {
        name
        type
        dimension
        residents {
          name
          image
        }
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query episodes($name: String!, $page: Int) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        pages
        count
        next
      }
      results {
        name
        air_date
        episode
        characters {
          name
          image
        }
      }
    }
  }
`;