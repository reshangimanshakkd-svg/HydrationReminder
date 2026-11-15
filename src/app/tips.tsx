import { StyleSheet, Text, View } from "react-native";

export default function TipsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Why Hydrate? 🌊</Text>

      <Text style={styles.tipItem}>Boosts skin health and beauty</Text>
      <Text style={styles.tipItem}>Regulates body temperature</Text>
      <Text style={styles.tipItem}>Flushes body waste</Text>
      <Text style={styles.tipItem}>Maintains blood pressure</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0284C7",
    marginBottom: 30,
  },
  tipItem: {
    fontSize: 16,
    color: "#334155",
    marginVertical: 8,
    textAlign: "center",
  },
});
