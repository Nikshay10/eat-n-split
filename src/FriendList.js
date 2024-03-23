import Button from "./Button";

function Friend({friend}){
    return (
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance === 0 && <p className="">You and {friend.name} are even</p>}
        {friend.balance > 0 && <p className="green">{friend.name} owes you ${friend.balance}</p>}
        {friend.balance < 0 && <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>}
        <Button>Select</Button>
      </li>
  
    );
  }
  
export default function FriendList({friends}){
    return(
        <ul>
          {
            friends.map(friend => <Friend key={friend.id} friend={friend} />)
          }
        </ul>
    )
  }