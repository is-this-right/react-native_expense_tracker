import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const listed_categories = [
     { label: "Food", value: "Food" },
     { label: "Transpo", value: "Transpo" },
     { label: "Misc", value: "Misc" },
];

export default function Add_Item() {
     const [category, setCategory] = useState();
     const [item, setItem] = useState();
     const [price, setPrice] = useState();
     const [seller, setSeller] = useState();

     return (
          <View style={styles.bg}>
               <View style={styles.form_container}>
                    <View style={styles.form_row}>
                         <Text style={styles.form_rowLabel}>Category</Text>
                         <Dropdown
                              placeholderStyle={styles.dropdown_placeholder}
                              style={styles.input}
                              data={listed_categories}
                              selectedTextStyle={styles.dropdown}
                              // inputSearchStyle={styles.dropdown_inputSearch}
                              labelField="label"
                              valueField="value"
                              onChange={setCategory}
                              value={category}
                              placeholder="Category"
                         ></Dropdown>
                    </View>
                    <View style={styles.form_row}>
                         <Text style={styles.form_rowLabel}>Price</Text>
                         <TextInput
                              style={styles.input}
                              onChangeText={setPrice}
                              value={price}
                              placeholder="Price"
                         ></TextInput>
                    </View>
                    <View style={styles.form_row}>
                         <Text style={styles.form_rowLabel}>Item</Text>
                         <TextInput
                              style={styles.input}
                              onChangeText={setItem}
                              value={item}
                              placeholder="Item"
                         ></TextInput>
                    </View>
                    <View style={styles.form_row}>
                         <Text style={styles.form_rowLabel}>Seller</Text>
                         <TextInput
                              style={styles.input}
                              onChangeText={setSeller}
                              value={seller}
                              placeholder="Seller"
                         ></TextInput>
                    </View>
                    <View style={styles.form_row}>
                         <Button title="Add"></Button>
                         <Button title="Back" onPress={() => router.dismissAll()}/>
                    </View>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     bg: {
          backgroundColor: "#0d1b2a",
          flex: 1,
     },
     input: {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "#0059b3",
          //   margin: 10,
          paddingLeft: 10,
          // backgroundColor: '#415a77',
          borderRadius: 25,
          color: "#eee",
          fontSize: 18,
          height: "90%",
          flex: 1,
          //   width: "60%"
          //   border-radius: 12px,
          //   border: 0,
          //   box-sizing: border-box,
          //   color: #eee,
          //   font-size: 18px,
          //   height: 100%,
          //   outline: 0,
          //   padding: 4px 20px 0,
          //   width: 100%
     },
     dropdown: {
          color: "#eee",
     },
     dropdown_placeholder: {
          color: "#0059b3"
     },
     dropdown_inputSearch: {
          color: "#0059b3",
     },
     form_container: {
          height: "50%",
          width: "90%",
          display: "flex",
          alignItems: "center",
        //   justifyContent: "center",
        //   flexDirection: "column",
          //   backgroundColor: "yellow"
     },
     form_row: {
          flexDirection: "row",
          height: "25%",
     },
     form_rowLabel: {
          color: "#eee",
          fontSize: 18,
          //   verticalAlign: "auto",
          //   verticalAlign: "bottom",
          //   flex: 0.33,
          height: "100%",
          width: "33%",
          justifyContent: "center",
          alignItems: "center",
     },
});
