import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { API_LISTMANAGER } from "../Api";
const UpdateStore = (props) => {
  const navigation = props.navigation;
  const [link, setlink] = useState("");
  const [name, setNameInput] = useState("");
  const [address, setAddressInput] = useState("");
  const [phone, setPhoneInput] = useState("");
  const [status, setStatusInput] = useState("");
  const editData = props.route.params?.editData;
  useEffect(() => {
    if (editData) {
      setNameInput(editData.name);
      setAddressInput(editData.address);
      setPhoneInput(editData.phone);
      setStatusInput(editData.status);
      setlink(editData.link);
    }
  }, [editData?.id]);
  const onsubmit = () => {
    const newobj = {
      name : name,
      phone : phone,
      address : address,
      status : status,
      link : link,
    }
    fetch(API_LISTMANAGER + "/" + editData.id, {
      method: "PUT",
      body: JSON.stringify(newobj),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then((res) => navigation.goBack())
  };
  return (
    <View style={styles.controller}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 25,
          marginLeft: 10,
        }}
      >
        Update Danh Sach Cua Hang
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Link :"
        defaultValue={link}
        onChangeText={(text) => setlink(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name :"
        defaultValue={name}
        onChangeText={(text) => setNameInput(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address :"
        defaultValue={address}
        onChangeText={(text) => setAddressInput(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone :"
        defaultValue={phone}
        onChangeText={(text) => setPhoneInput(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Status :"
        defaultValue={status}
        onChangeText={(text) => setStatusInput(text)}
      />
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.buttonSave}
          onPress={() => onsubmit()}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default UpdateStore;

const styles = StyleSheet.create({
  controller: {
    flex: 1,
    backgroundColor: "#B9FFF8",
    height: 50,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  buttonSave: {
    width: 150,
    height: 50,
    borderRadius: 20,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonCloes: {
    width: 150,
    height: 50,
    borderRadius: 20,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
});
