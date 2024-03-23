import Button from "./Button";

export default function FormSplitBill(){
    return(
      <form className="form-split-bill">
        <h2>Split bill with x</h2>
        <label>💸 Bill value</label>
        <input type="text" />
  
        <label>🕴 Your expenses</label>
        <input type="text" />
  
        <label>🕺 X's Expenses</label>
        <input type="text" disabled/>
  
        <label>💰 Who is paying the bill</label>
        <select>
          <option value="user">You</option>
          <option value="friend">X</option>
        </select>
  
        <Button>Split Bill</Button>
      </form>
    )
  }