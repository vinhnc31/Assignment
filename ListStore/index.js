import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { API_LISTMANAGER } from "../Api";
const ListStore = (props) => {
  const navigation = props.navigation;
  const [link, setlink] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [AddressInput, setAddressInput] = useState("");
  const [PhoneInput, setPhoneInput] = useState("");
  const [statusInput, setStatusInput] = useState("");
  const [checkphone, setCheckphone] = useState(false);

  const handleCheckphone = (text) => {
    let check = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;
    setPhoneInput(text);
    if (check.test(text)) {
      setCheckphone(false);
    } else setCheckphone(true);
  };
  const onadd = () => {
    const newObj = {
      name: nameInput,
      address: AddressInput,
      phone: PhoneInput,
      status: statusInput,
    };
    fetch(API_LISTMANAGER, {
      method: "POST",
      body: JSON.stringify(newObj),
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
      },
    }).then((res) => navigation.goBack());
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
        Them Danh Sach Cua Hang
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Link :"
        value={link}
        onChangeText={(text) => setlink(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Name :"
        value={nameInput}
        onChangeText={(text) => setNameInput(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address :"
        value={AddressInput}
        onChangeText={(text) => setAddressInput(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone :"
        value={PhoneInput}
        onChangeText={(text) => {
          handleCheckphone(text);
        }}
        keyboardType="numeric"
      />
      {checkphone ? (
        <Text style={{ color: "red", fontSize: 15, marginHorizontal: 20 }}>
          Wrong fomat phone
        </Text>
      ) : (
        <Text></Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Status :"
        value={statusInput}
        onChangeText={(text) => setStatusInput(text)}
      />
        {nameInput === "" ||
        AddressInput === "" ||
        PhoneInput === "" ||
        link === "" ||
        checkphone == true ? (
          <TouchableOpacity 
          disabled
          style={styles.buttonSave1} onPress={() => onadd()}>
          <Text style={{ fontSize: 20, color: "#fff" }}>SUBMIT</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonSave} onPress={() => onadd()}>
            <Text style={{ fontSize: 20, color: "#fff" }}>SUBMIT</Text>
          </TouchableOpacity>
        )}
      </View>
  );
};
export default ListStore;

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
    marginHorizontal:130
  },
  buttonSave1: {
    width: 150,
    height: 50,
    borderRadius: 20,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginHorizontal:130
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
