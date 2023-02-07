import { View, Text, StyleSheet, Image } from "react-native";
const Home = () => {
  return (
    <View style = {styles.controller}>
      <Text style = {styles.text}>Chào Mừng Bạn Đến Với App Quản Lý Cửa Hàng</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    controller: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    text : {
        fontSize: 28,
        fontStyle:"italic",
        padding:24,
    }
})
