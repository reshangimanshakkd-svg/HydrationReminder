import { StyleSheet, Text, View } from "react-native";

export default function AboutTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About This App</Text>

      <Text style={styles.description}>
        Built for Mobile Application Development Lab 6. Demonstrates local
        notifications and Expo Router tab navigation.
      </Text>

      <Text style={styles.footerText}>
        Developed with React Native and Expo.{"\n"}
        Created by [Enter Your Name].
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  footerText: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 20,
  },
});
