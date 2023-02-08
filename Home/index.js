import { View, Text, StyleSheet, Image } from "react-native";
const Home = () => {
  return (
    <View style = {styles.controller}>
      <Text style = {styles.text}>QUẢN LÝ CỬA HÀNG</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    controller: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#B9FFF8"
    },
    text : {
        fontSize: 28,
        fontStyle:"italic",
        fontWeight: 'bold',
    }
})
