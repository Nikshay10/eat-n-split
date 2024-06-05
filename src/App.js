import { useState } from "react";
import Button from "./Button";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];




export default function App(){
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [friendList, setFriendList] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)

  function addFriend(newFriend, event){
    event.preventDefault()

    if(!newFriend.name || !newFriend.image) return

    const id = newFriend.id
    newFriend.image = `${newFriend.image}?=${id}`
    setFriendList([...friendList, newFriend])
  }

  function handleShowAddFriend(){
    setShowAddFriend(!showAddFriend)
  }

  function handleSelect(friend){
    setSelectedFriend((selected) => selected?.id === friend.id ? null : friend)
    setShowAddFriend(false)
  }

  function handleSplitBill(balance){
    setFriendList(friendList.map(friend => {
      return friend.id === selectedFriend.id ? {...friend, balance: friend.balance + balance} : friend;
    }))
    setSelectedFriend(null)
  }

  return(
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friendList} onSelect={handleSelect} selectedFriend={selectedFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={addFriend}/>}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill key={selectedFriend.id} selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  )
}