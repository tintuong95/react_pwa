import { useState } from "react";
import { db } from "../db/db";

export function AddFriendForm({ defaultAfe } = { defaultAfe: 21 }) {


    const [name, setName] = useState("");
    const [age, setAge] = useState(defaultAfe);
    const [status, setStatus] = useState("")

    async function addFriend() {
        try {
            const id = await db.friends.add({
                name, age
            })
            setStatus("add success !")

        } catch (e) {
            console.log(e)
        }

    }

    return <>
        <h1>{status}</h1>
        Name:
        <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
        />
        Age:
        <input
            type="number"
            value={age}
            onChange={ev => setAge(Number(ev.target.value))}
        />

        <button onClick={addFriend}>
            Add
        </button>
    </>
}