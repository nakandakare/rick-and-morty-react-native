import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CharacterItem from "../CharacterItem/CharacterItem";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHARACTERS, GET_LOCATIONS, GET_EPISODES } from "../../queries";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";
import ResultsError from "../ResultsError/ResultsError";

interface ItemOverviewProps {
  searchInput: string;
  filterType: string;
}

interface characterItemProps {
  item: {
    name: string,
    image: string
  }
}

interface itemProps {
  item: {
    name: string,
    dimension: string | undefined,
    episode: string | undefined
  }
}

const ItemsOverview: React.FC<ItemOverviewProps> = ({
  searchInput,
  filterType,
}) => {
  //obtiene los datos con apollo, si el input del search es menor a 3 caracteres y no coincide el filterType, se "skippea" el query.
  const {
    loading: loadingChar,
    error: errorChar,
    data: dataChar,
    fetchMore: fetchMoreChar,
  } = useQuery(GET_CHARACTERS, {
    variables: { name: searchInput, page: 1 },
    skip: !(filterType === "characters") || searchInput.length < 3,
  });

  const {
    loading: loadingLoc,
    error: errorLoc,
    data: dataLoc,
    fetchMore: fetchMoreLoc,
  } = useQuery(GET_LOCATIONS, {
    variables: { name: searchInput, page: 1 },
    skip: !(filterType === "locations") || searchInput.length < 3,
  });

  const {
    loading: loadingEpi,
    error: errorEpi,
    data: dataEpi,
    fetchMore: fetchMoreEpi,
  } = useQuery(GET_EPISODES, {
    variables: { name: searchInput, page: 1 },
    skip: !(filterType === "episodes") || searchInput.length < 3,
  });

  if (loadingChar || loadingLoc || loadingEpi) {
    return <Spinner />;
  }

  if (errorChar || errorLoc || errorEpi) {
    return (
      <ResultsError message={`Error: we could not find the ${filterType}`} />
    );
  }

  if (!dataChar && !dataLoc && !dataEpi) {
    return (
      <ResultsError
        message={`Please use the search bar to find the ${filterType}`}
      />
    );
  }
  const loadMore = () => {
    filterType === "characters"
      ? fetchMoreChar({
          variables: {
            page: dataChar.characters.info.next,
          },
          updateQuery: (_previousResult: any, { fetchMoreResult }: any) => {
            fetchMoreResult.characters.results = [
              ..._previousResult.characters.results,
              ...fetchMoreResult.characters.results,
            ];
            return fetchMoreResult;
          },
        })
      : filterType === "locations"
      ? fetchMoreLoc({
          variables: {
            page: dataLoc.locations.info.next,
          },
          updateQuery: (_previousResult: any, { fetchMoreResult }: any) => {
            fetchMoreResult.locations.results = [
              ..._previousResult.locations.results,
              ...fetchMoreResult.locations.results,
            ];
            return fetchMoreResult;
          },
        })
      : filterType === "episodes"
      ? fetchMoreEpi({
          variables: {
            page: dataEpi.episodes.info.next,
          },
          updateQuery: (_previousResult: any, { fetchMoreResult }: any) => {
            fetchMoreResult.episodes.results = [
              ..._previousResult.episodes.results,
              ...fetchMoreResult.episodes.results,
            ];
            return fetchMoreResult;
          },
        })
      : null;
  };

  return (
    <View style={styles.itemsOverview}>
      {dataChar ? (
        <FlatList
          data={dataChar.characters.results}
          renderItem={({ item }: characterItemProps) => <CharacterItem item={item} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          contentContainerStyle={styles.flatList}
        />
      ) : dataLoc ? (
        <FlatList
          data={dataLoc.locations.results}
          renderItem={({ item }: itemProps ) => <Item item={item} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          contentContainerStyle={styles.flatList}
        />
      ) : dataEpi ? (
        <FlatList
          data={dataEpi.episodes.results}
          renderItem={({ item }: itemProps ) => <Item item={item} />}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          contentContainerStyle={styles.flatList}
        />
      ) : null}
      {/*
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
        */}
    </View>
  );
};

export default ItemsOverview;

const styles = StyleSheet.create({
  itemsOverview: {
    width: 400,
  },
  flatList: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
  },
});
