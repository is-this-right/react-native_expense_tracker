import { View, Text, StyleSheet } from "react-native";

type ExpenseProps = {
     item: string;
     category: string;
     price: any;
};

export default function Expense(props: ExpenseProps) {
     return (
          <>
               <View style={styles.bg}>
                    <View style={styles.item}>
                         <Text>{props.item}</Text>
                    </View>
                    <View style={styles.details}>
                         <Text>{props.category}</Text>
                    </View>
                    <View style={styles.details}>
                         <Text>{props.price}</Text>
                    </View>
               </View>
          </>
     );
}

const styles = StyleSheet.create({
     bg: {
          backgroundColor: "#F9F6EE",
          flexDirection: "row"
     },
     item:{
        flex: 0.5
     },
     details:{
        flex: 0.25
     }
});
