import { useLayoutEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Main({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => console.log("onPress")}
          onPressIn={() => console.log("onPressIn")}
          onPressOut={() => console.log("onPressOut")}
          style={styles.pressableContainer}
        >
          <Text style={styles.pressableText}>Press Me</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
  pressableContainer: {
    padding: 12,
    backgroundColor: "green",
    borderRadius: 15,
  },
  pressableText: {
    color: "white",
  },
});
