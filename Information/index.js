import { View, Text, Image, StyleSheet } from "react-native";
const Informations = (navigation) => {
  return (
    <View style={styles.controner}>
      <Image style={styles.avata} source={require("../assets/avata.png")} />
      <Text style={styles.text}>Họ Và Tên: Nguyễn Công Vinh</Text>
      <Text style={styles.text}>Msv:PH20444</Text>
    </View>
  );
};
export default Informations;
const styles = StyleSheet.create({
  controner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B9FFF8",
  },
  text: {
    fontSize: 24,
    color: "blue",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  avata: {
    width: 350,
    height: 350,
    marginTop: 20,
    borderRadius:20,
  },
});
