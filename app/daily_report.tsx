import { View, StyleSheet, Button, Pressable, Text, FlatList } from "react-native";
import { Link } from "expo-router";
import Daily_Expense from "../components/Daily_Expense"
import { get_day_expenses, init_db, reset_db, start_db } from "@/scripts/db";
import { useEffect, useState } from "react";

type ExpenseProps = {
    item: string;
    category: string;
    price: any;
    date_of_purchase: string;
};

export default function daily_report(){
    console.log("Starting from index")
    init_db()
    const [data, setData] = useState([])
    useEffect( () => {
        const fetchData = async () => {
            try{
                const results = await get_day_expenses()
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
        <Daily_Expense item="Milk" category="Food" price={10}/>
        <FlatList 
        data={data}
        renderItem={ ({item}) => {
            console.log("=== Flatlist Item: ")
            console.log(item);
            return (<Daily_Expense item={item.item} category={item.category} price={item.price}/>)
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
        backgroundColor: "#F9F6EE",
        height: 40,
        borderStyle: "dotted",
        borderBlockColor: "#0C0C0C"
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