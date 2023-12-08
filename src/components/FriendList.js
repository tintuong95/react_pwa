import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../db/db"

export default function FriendList() {
    const friends = useLiveQuery(() => db.friends.toArray());
    console.log("friend", friends)
    if (!friends) return null;

    return <ul>
        {friends.map(friend =>
            <li key={friend.id}>
                {friend.name}, {friend.age}
            </li>)
        }
    </ul>;
}