import Button from "./Button";

export default function FormSplitBill({selectedFriend}){
    console.log(selectedFriend)
    return(
      <form className="form-split-bill">
        <h2>Split bill with {selectedFriend.name}</h2>
        <label>💸 Bill value</label>
        <input type="text" />
  
        <label>🕴 Your expenses</label>
        <input type="text" />
  
        <label>🕺 {selectedFriend.name}'s Expenses</label>
        <input type="text" disabled/>
  
        <label>💰 Who is paying the bill</label>
        <select>
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
  
        <Button>Split Bill</Button>
      </form>
    )
  }