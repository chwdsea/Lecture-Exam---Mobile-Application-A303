import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function Layout() {
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EFEFEF" />

      {/* Center content */}
      <View style={styles.content}>
        {/* Avatar */}
        <View style={styles.avatarWrapper}>
          <Image
            source={require("../../assets/images/profile.jpg")}
            style={styles.avatar}
          />
        </View>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#AAAAAA"
          autoCapitalize="none"
        />

        {/* Greeting */}
        <Text style={styles.greeting}>Hello, {name}!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    paddingHorizontal: 40,
  },
  avatarWrapper: {
    width: 90,
    height: 90,
    borderRadius: 45,
    overflow: "hidden",
    backgroundColor: "#CCCCCC",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  input: {
    width: "100%",
    maxWidth: 240,
    height: 42,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    fontSize: 15,
    color: "#333333",
    fontFamily: "System",
  },
  greeting: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222222",
    letterSpacing: 0.2,
  },
});
