import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  menuItem: {
    color: "black",
    fontSize: 20,
    margin: 20,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Link style={styles.menuItem} href="/property-search">
        <Text>Property Search</Text>
      </Link>
      <Link style={styles.menuItem} href="/map">
        <Text>Map</Text>
      </Link>
      <Link style={styles.menuItem} href="/properties-list">
        <Text>Properties List</Text>
      </Link>
    </View>
  );
}
