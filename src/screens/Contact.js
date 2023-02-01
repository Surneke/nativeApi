import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, StatusBar } from "react-native";
import axios from "axios";

const Item = ({ title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ContactScreen = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=10").then((response) => {
      setData(response.data.products);
    });
  }, []);
  console.log(data);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList data={data} renderItem={({ item }) => <Item title={item.brand} />} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ContactScreen;
