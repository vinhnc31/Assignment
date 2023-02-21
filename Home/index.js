import { View, Text, StyleSheet, Image } from "react-native";
const Home = () => {
  return (
    <View style={styles.controller}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiG8Ow0Fd3T3Upt7W4cECSCQZBEX0mC2y0Rg&usqp=CAU",
        }}
      />
      <Text style={styles.text}>QUẢN LÝ CỬA HÀNG</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  controller: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B9FFF8",
  },
  text: {
    fontSize: 28,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 300,
    height: 100,
  },
});
