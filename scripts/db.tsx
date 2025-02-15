import * as SQLite from 'expo-sqlite';

export const start_db = () => {
    const db = SQLite.openDatabaseSync('expense_tracker.db');
    // console.log("Started db")
    return db
}

export const init_db = async () => {
    const db = start_db()
    console.log("Creating table")
    try{
        await db.execAsync(`CREATE TABLE IF NOT EXISTS expenses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            item TEXT NOT NULL,
            category INTEGER NOT NULL,
            price INTEGER NOT NULL)
            `)
    }catch(error){
        console.log(error)
    }
    console.log("Created table")
    // const check = await db.getAllAsync(`SELECT * FROM expenses`)
    // console.log(check)
    // console.log("Hello from the db")
}

export const reset_db = async () => {
    const db = start_db()
    await db.execAsync(`DROP TABLE expenses`)
    init_db()
}

export const get_all_expenses = async () => {
    const db = start_db()
    const results = await db.getAllAsync(`SELECT * FROM expenses`)
    console.log("Expense list")
    console.log(results)
    return results
}

export const add_expense = async (category, item, price) => {
    const db = start_db()
    console.log("=== add_expense ===")
    console.log("Category: " + category)
    try{
        const result = await db.runAsync(`INSERT INTO expenses 
            (item, category, price) VALUES (? , ? , ?)`, item, category, price)
        console.log(result)
    }catch(error){
        console.log(error)
    }
    console.log("INSERT finished")
}