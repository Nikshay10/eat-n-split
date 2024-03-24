import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({selectedFriend, onSplitBill}){
  const [billValue, setBillValue] = useState("")
  const [paidByUser, setPaidByUser] = useState("")
  const [whoIsPaying, setWhoIsPaying] = useState("user")

  const paidByFriend = billValue && Number(billValue) - Number(paidByUser)

  function handleSubmit(e){
    e.preventDefault() 
    if(!billValue || !paidByUser) return;

    onSplitBill(whoIsPaying === 'user' ?  Number(paidByUser) : -Number(paidByFriend))
  }

  return(
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {selectedFriend.name}</h2>
      <label>💸 Bill value</label>
      <input 
        type="text" 
        onChange={e=>setBillValue(e.target.value)}
        value={billValue}
      />
  
      <label>🕴 Your expenses</label>
      <input 
        type="text" 
        onChange={e=>setPaidByUser(e.target.value)}
        value={paidByUser}
      />
  
      <label>🕺 {selectedFriend.name}'s Expenses</label>
      <input type="text" disabled value={paidByFriend}/>
  
      <label>💰 Who is paying the bill</label>
      <select value={whoIsPaying} onChange={e=>setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
  
      <Button>Split Bill</Button>
    </form>
  )
}