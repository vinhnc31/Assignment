import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { useState } from "react";

const Detail = (navigation) => {
  const usesList = [
    {
      id: 1,
      name: "Thai Tu Ga 1",
      desc: "Nga Tu Pho Noi B",
      phone: "0246324823",
    },
  ];
  return (
    <View style={styles.controller}>
      <View style={styles.controller2}>
        <ScrollView>
          <FlatList>
          data = {usesList}
          </FlatList>
        </ScrollView>
      </View>
    </View>
  );
};
export default Detail;
const styles = StyleSheet.create({
  controller: {
    flex: 1,
    backgroundColor: "#6200ee",
  },
  controller2: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 80,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
});
