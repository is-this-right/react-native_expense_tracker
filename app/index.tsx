import { View, StyleSheet, Button, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import Expense from "../components/Expense"

export default function Index(){
    return (
    <>
    <View style={styles.bg}>
        <Expense item="Milk" category="Food" price={10}/>
        <Link push href="/add_item" asChild>
        <Pressable style={styles.add_item}>
            <Text>Add Item</Text>
        </Pressable>
        </Link>
    </View>
    </>
    )
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor: "#0d1b2a",
        flex: 1,
    },
    add_item:{
        backgroundColor: "#F9F6EE"
    }
})