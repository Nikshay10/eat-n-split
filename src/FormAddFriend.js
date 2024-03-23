import { useState } from "react"
import Button from "./Button"

export default function FormAddFriend({onAddFriend}){
    const [friend, setFriend] = useState({id: crypto.randomUUID, name: '', image: 'https://i.pravatar.cc/48',  balance: 0})
  
    return(
      <form className="form-add-friend" onSubmit={(event) => onAddFriend(friend, event)}>
        <label>🕺 Friend name</label>
        <input type="text" 
          onChange={(e) => setFriend({...friend, name: e.target.value}) } 
          value={friend.name}
        />
  
        <label>🌆Image URL</label>
        <input 
          type="text" 
          onChange={(e) => setFriend({...friend, image: e.target.value})} 
          value={friend.image}
        />
  
        <Button>Add</Button>
      </form>
    )
  }