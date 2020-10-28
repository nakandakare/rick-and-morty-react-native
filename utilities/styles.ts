import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  bottomOption: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    color: "white",
    width: "33.3%",
    textAlign: "center",
  },
  borderRight: {
    borderRightColor: "white",
    borderRightWidth: 1,
  },
});

export const charDetailStyles = StyleSheet.create({
  characterDetailContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#18191a",
  },
  characterDetailInner: {
    padding: "8%",
  },
  characterDetailMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  characterName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: "3%",
  },
  characterImg: {
    height: 230,
    width: 230,
    borderRadius: 10,
  },
  subText: {
    color: "white",
    marginVertical: 15,
    fontSize: 20,
  },
});

export const charItemStyles = StyleSheet.create({
  characterItem: {
    width: 300,
    height: 60,
    backgroundColor: "#383d42",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "10%",
    marginVertical: "2%",
    borderRadius: 10,
  },
  characterImg: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: "5%",
  },
  characterName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export const itemStyles = StyleSheet.create({
  items: {
    width: 300,
    height: 60,
    backgroundColor: "#383d42",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginVertical: "2%",
    borderRadius: 10,
    paddingLeft: "8%",
  },
  itemTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  itemText: {
    color: "white",
  },
});

export const itemDetailStyles = StyleSheet.create({
  itemDetailContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#18191a",
  },
  itemDetailInner: {
    padding: "8%",
  },
  itemDetailMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: "3%",
  },
  subText: {
    color: "white",
    marginVertical: 15,
    fontSize: 15,
  },
  characterNameTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    paddingVertical: "5%",
  },
  characters: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const itemOverviewStyles = StyleSheet.create({
  itemsOverview: {
    width: 400,
  },
  flatList: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
  },
});

export const resultsErrorStyles = StyleSheet.create({
  resultsErrorContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    height: "100%",
    width: "100%",
  },
  errorText: {
    color: "white",
  },
});

export const spinnerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export const homeStyles = StyleSheet.create({
  homeContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#18191a",
    paddingTop: 25,
  },
  homeInnerContainer: {
    height: "100%",
    width: "100%",
    paddingTop: "0%",
    display: "flex",
    justifyContent: "space-between",
  },
  homeSearchContainer: {
    height: "9%",
    width: "100%",
    zIndex: 1,
  },
  bottomOptionContainer: {
    display: "flex",
    justifyContent: "center",
    height: "9%",
    borderWidth: 1,
    borderTopColor: "white",
  },
  itemOverviewContainer: {
    height: "81%",
  },
});

export const introductionStyles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#18191a",
    paddingTop: 25
  },
  screenInnerContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "20%",
  },
  screenElem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    width: "100%",
    fontSize: 20,
    color: "white",
  },
  text: {
    width: "100%",
    fontSize: 15,
    color: "white",
    padding: "5%",
  },
  screenButton: {
    alignItems: "center",
    backgroundColor: "#18191a",
    paddingHorizontal: 25,
    paddingVertical: 10,
    width: "25%",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
  },
  buttonText: {
    width: "100%",
    color: "white",
  },
});