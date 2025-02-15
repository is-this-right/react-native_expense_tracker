import { View, StyleSheet, Button, Pressable, Text, FlatList } from "react-native";
import { Link } from "expo-router";
import Expense from "../components/Expense"
import { get_all_expenses, init_db, reset_db, start_db } from "@/scripts/db";
import { useEffect, useState } from "react";

type ExpenseProps = {
    item: string;
    category: string;
    price: any;
};

export default function Index(){
    console.log("Starting from index")
    init_db()
    const [data, setData] = useState([])
    useEffect( () => {
        const fetchData = async () => {
            try{
                const results = await get_all_expenses()
                setData(results)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])
    return (
    <>
    <View style={styles.bg}>
        <Expense item="Milk" category="Food" price={10}/>
        <FlatList 
        data={data}
        renderItem={ ({item}) => {
            console.log("=== Flatlist Item: ")
            console.log(item);
            return (<Expense item={item.item} category={item.category} price={item.price}/>)
        }}
        />
        <Link replace href="/add_item" asChild>
            <Pressable style={styles.add_item}>
                <Text>Add Item</Text>
            </Pressable>
        </Link>
        <Pressable onPress={ () => reset_db()} style={styles.reset}>
            <Text style={styles.reset_text}>Reset DB</Text>
        </Pressable>
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
    },
    reset: {
        flex: 0.1,
        backgroundColor: "#0945a0"
    },
    reset_text: {
        alignContent: "center",
        textAlign: "center",
        textAlignVertical: "center"
    }
})