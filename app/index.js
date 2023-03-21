import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    marginTop: 50,
  },
  textInput: {
    width: "90%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 10,
    color: "#000",
  },
  searchButton: {
    width: "90%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 30,
    color: "#000",
  },
});

export default function App() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={address}
        onChange={(e) => {
          setAddress(e.nativeEvent.text);
        }}
      />
      <TextInput
        style={styles.textInput}
        value={city}
        onChange={(e) => setCity(e.nativeEvent.text)}
      />
      <TextInput
        style={styles.textInput}
        value={state}
        onChange={(e) => setState(e.nativeEvent.text)}
      />
      <TextInput
        style={styles.textInput}
        value={zip}
        onChange={(e) => setZip(e.nativeEvent.text)}
      />
      <Link href={`/property-details/${address}-${city}-${state}-${zip}`}>
        <Button title="Search" style={styles.searchButton} />
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
