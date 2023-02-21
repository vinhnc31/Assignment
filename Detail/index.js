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
import { useState, useEffect } from "react";
import { API_LISTMANAGER } from "../Api";
import { useIsFocused } from "@react-navigation/native";

const Detail = (props) => {
  const navigation = props.navigation;
  const isFocused = useIsFocused();
  const [userList, setUserlist] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const geteffect = () => {
    fetch(API_LISTMANAGER)
      .then((res) => res.json())
      .then((data) => {
        setUserlist(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };
  useEffect(() => {
    geteffect();
  }, [isFocused]);
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
          fetch(API_LISTMANAGER + "/" + id, { method: "DELETE" })
            .then((res) => geteffect())
            .catch((error) => console.log("Error" + error));
        },
      },
    ]);
  };
  const oneditobj = (editId) => {
    fetch(API_LISTMANAGER + "/" + editId)
      .then((res) => res.json())
      .then((listmanager) =>
        navigation.navigate("UpdateStore", { editData: listmanager })
      );
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
        {/* {isLoading 
        ? <Text style={{fontSize: 24 }} >Loading....</Text> */}
        <FlatList
          data={userList}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                style={{ width: 80, height: 80 }}
                source={{ uri: item.link }}
              />
              <View style={styles.itemtext}>
                <Text>Name: {item.name}</Text>
                <Text>Address: {item.address}</Text>
                <Text>Phone: {item.phone}</Text>
                <Text>Status: {item.status}</Text>
              </View>
              <View style={styles.itemicon}>
                <TouchableOpacity onPress={() => oneditobj(item.id)}>
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
        {/* }; */}
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
  item: {
    borderRadius: 10,
    backgroundColor: "#6FEDD6",
    padding: 10,
    width: 415,
    marginTop: 5,
    flexDirection: "row",
  },
  itemtext: {
    marginLeft: 5,
    justifyContent: "center",
    width: 215,
  },
  itemicon: {
    flexDirection: "row",
    marginLeft: 5,
    alignItems: "center",
  },
});
