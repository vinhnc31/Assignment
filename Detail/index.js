import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import { useState } from "react";
const Detail = (props) => {
  const navigation = props.navigation;
  const listuser = [
    {
      id: 1,
      name: "Ga Tuoi Manh Hoach",
      diachi: "Hai Duong",
      phone: "0966346589",
      status: "open",
      link: "https://png.pngtree.com/element_our/png_detail/20181229/vector-shop-icon-png_302739.jpg",
    },
    {
      id: 2,
      name: "Ga De Vuong",
      diachi: "Ha Noi",
      phone: "0966896579",
      status: "open",
      link: "https://img.freepik.com/vector-premium/icono-tienda_126283-1646.jpg",
    },
    {
      id: 3,
      name: "Thai Tu Ga",
      diachi: "Hung Yen",
      phone: "0966347779",
      status: "open",
      link: "https://i.pinimg.com/originals/35/eb/5c/35eb5ce9b59efae9cec60cd6e258939e.png",
    },
    {
      id: 4,
      name: "Kinh Bac",
      diachi: "Bac Ninh",
      phone: "0964447779",
      status: "open",
      link: "https://i.pinimg.com/originals/35/eb/5c/35eb5ce9b59efae9cec60cd6e258939e.png",
    },
  ];

  const [userList, setUserlist] = useState(listuser);
  const onDelete = (id) => {
    Alert.alert("Ban Chac Chan La Muon Xoa Chu ?", "", [
      {
        text: "No",
        onPress: () => {},
        style: "No",
      },
      {
        text: "Yes",
        onPress: () => {
          const newList = userList.filter((item) => item.id !== id);
          setUserlist(newList);
        },
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.controller}>
      
        <View style={styles.tabbar}>
          <Text style={styles.text}>Danh Sach Cac Nha Hang</Text>
          <Pressable onPress={() => navigation.navigate("ListStore")}>
            <Image
              style={{ height: 30, width: 30, marginHorizontal: 120 }}
              source={require("../assets/add.png")}
            />
          </Pressable>
        </View>
        <View>
          <FlatList
            data={userList}
            renderItem={({ item }) => (
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: "#6FEDD6",
                  padding: 10,
                  width: 415,
                  marginTop: 5,
                  flexDirection: "row",
                }}
              >
                <Image
                  style={{ width: 80, height: 80 }}
                  source={{ uri: item.link }}
                />
                <View
                  style={{
                    marginLeft: 5,
                    justifyContent: "center",
                    width: 215,
                  }}
                >
                  <Text>Name: {item.name}</Text>
                  <Text>Address: {item.diachi}</Text>
                  <Text>Phone: {item.phone}</Text>
                  <Text>Status: {item.status}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 5,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("UpdateStore")}
                  >
                    <Image
                      style={{ width: 40, height: 40 }}
                      source={require("../assets/edit.png")}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Image
                      style={{ width: 40, height: 40, marginLeft: 10 }}
                      source={require("../assets/delete.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
    </SafeAreaView>
  );
};
export default Detail;
const styles = StyleSheet.create({
  controller: {
    flex: 1,
    backgroundColor: "#B9FFF8",
  },
  tabbar: {
    height: 60,
    padding: 10,
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
