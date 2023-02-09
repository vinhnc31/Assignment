import React from 'react';
import { View, TextInput,  StyleSheet, Text, Alert , TouchableOpacity } from "react-native";
import { useState } from "react";
const ManagerList = (props) => {
  const navigation = props.navigation;
  const [nameInput, setNameInput] = useState("");
  const [AddressInput, setAddressInput] = useState("");
  const [PhoneInput, setPhoneInput] = useState("");
  const [statusInput, setStatusInput] = useState("");
  const onclose =() =>{
    setNameInput = ("");
    setAddressInput = ("");
    setPhoneInput = ("");
    setStatusInput = ("");
  }
  return (
    <View style={styles.controller}>
      <Text style={{ fontSize: 25, fontWeight: "bold",marginTop:25,marginLeft:10 }}>
        Them Danh Sach Cua Hang
      </Text>
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
        onChangeText={(text) => setPhoneInput(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Status :"
        value={statusInput}
        onChangeText={(text) => setStatusInput(text)}
      />
      <View style={{ flexDirection: "row",marginLeft:30}}>
        <TouchableOpacity style= {styles.buttonSave} onPress = {() =>Alert.alert("save")}>
          <Text style = {{fontSize:20,color:"#fff"}}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.buttonCloes} onPress = {() => Alert.alert("")}>
          <Text style = {{fontSize:20,color:"#fff"}}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ManagerList;

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
    width:150,
    height:50,
    borderRadius:20,
    backgroundColor:"green",
    alignItems:"center",
    justifyContent:"center",
    margin:5,
  },
  buttonCloes: {
    width:150,
    height:50,
    borderRadius:20,
    backgroundColor:"red",
    alignItems:"center",
    justifyContent:"center",
    margin:5,
  },
});
