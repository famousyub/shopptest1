
import { View, Text, StyleSheet } from "react-native";
export default function Test() {
  return (
    <View>
        <View style={styles.cartLink}>
            <Text style={styles.title}>hello </Text>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    title: {
      alignItems: "center",
      width: "100%",
    },
    cartLink: {
      width: "100%",
      alignItems: "flex-end",
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
  });