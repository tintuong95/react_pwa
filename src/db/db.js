import Dexie from "dexie";


export const db = new Dexie("testdb")


db.version(1).stores({
    friends: "++id, name, age"
})