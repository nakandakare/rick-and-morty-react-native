import React from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CharacterItem from "../CharacterItem/CharacterItem";
import Item from "../Item/Item";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import ResultsError from "../ResultsError/ResultsError";
import Spinner from "../Spinner/Spinner";

interface ItemOverviewProps {
  searchInput: string;
  filterType: string;
}

const GET_CHARACTERS = gql`
  query characters($name: String!, $page: Int) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages
        count
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

const GET_LOCATIONS = gql`
  query locations($name: String!, $page: Int) {
    locations(page: $page, filter: { name: $name }) {
      info {
        pages
        count
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

const GET_EPISODES = gql`
  query episodes($name: String!, $page: Int) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        pages
        count
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

const onLoadMore = () => {
  console.log("onLoadMore");
};

const handleScroll = (
  e: NativeSyntheticEvent<NativeScrollEvent>,
  onLoadMore: () => void
) => {
  let paddingToBottom = 10;
  paddingToBottom += e.nativeEvent.layoutMeasurement.height;
  if (
    e.nativeEvent.contentOffset.y >=
    e.nativeEvent.contentSize.height - paddingToBottom
  ) {
    onLoadMore();
  }
};

const ItemsOverview: React.FC<ItemOverviewProps> = ({
  searchInput,
  filterType,
}) => {
  //obtiene los datos con apollo, si el input del search es menor a 3 caracteres y no coincide el filterType, se "skippea" el query.
  const { loading: loadingChar, error: errorChar, data: dataChar } = useQuery(
    GET_CHARACTERS,
    {
      variables: { name: searchInput, page: 1 },
      skip: !(filterType === "characters") || searchInput.length < 3,
    }
  );

  const { loading: loadingLoc, error: errorLoc, data: dataLoc } = useQuery(
    GET_LOCATIONS,
    {
      variables: { name: searchInput, page: 1 },
      skip: !(filterType === "locations") || searchInput.length < 3,
    }
  );

  const { loading: loadingEpi, error: errorEpi, data: dataEpi } = useQuery(
    GET_EPISODES,
    {
      variables: { name: searchInput, page: 1 },
      skip: !(filterType === "episodes") || searchInput.length < 3,
    }
  );

  return (
    <View>
      <ScrollView
        onScroll={(e) => handleScroll(e, onLoadMore)}
        contentContainerStyle={styles.itemOverviewInner}
      >
        {loadingChar || loadingLoc || loadingEpi ? (
          <Spinner />
        ) : errorChar || errorLoc || errorEpi ? (
          <ResultsError
            message={`Error: we could not find the ${filterType}`}
          />
        ) : !dataChar && !dataLoc && !dataEpi ? (
          <ResultsError
            message={`Please use the search bar to find the ${filterType}`}
          />
        ) : dataChar && filterType === "characters" ? (
          dataChar.characters.results.map(
            (
              character: {
                name: string;
                image: string;
                species: string;
                genre: string;
                type: string;
              },
              i: number
            ) => <CharacterItem key={i} {...character} />
          )
        ) : dataLoc && filterType === "locations" ? (
          dataLoc.locations.results.map(
            (
              location: {
                name: string;
                type: string;
                dimension: string;
                residents: [];
              },
              i: number
            ) => (
              <Item key={i} name={location.name} attOne={location.dimension} />
            )
          )
        ) : dataEpi && filterType === "episodes" ? (
          dataEpi.episodes.results.map(
            (
              episode: {
                name: string;
                air_date: string;
                episode: string;
                characters: [];
              },
              i: number
            ) => <Item key={i} name={episode.name} attOne={episode.episode} />
          )
        ) : null}
      </ScrollView>
    </View>
  );
};

export default ItemsOverview;

const styles = StyleSheet.create({
    itemOverviewInner: {
    display: "flex",
    alignItems: "center",
  },
});
