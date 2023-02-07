import { View, Text, Image, StyleSheet } from "react-native";
const Informations = (navigation) => {
  return (
    <View style={styles.controner}>
      <Text style = {styles.text}>Họ Và Tên: Nguyễn Công Vinh</Text>
      <Text style = {styles.text}>Msv:PH20444</Text>
      <Image style = {styles.avata} source={require('../assets/anh3.png')}/>
    </View>
  );
};
export default Informations;
const styles = StyleSheet.create({
  controner: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
  },
  text: {
    fontSize: 24,
    color: "blue",
    fontStyle:'italic'
  },
  avata: {
    width: "100%",
    height: 350,
    marginTop: 20,
  }
});
