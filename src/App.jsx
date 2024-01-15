import { useState } from "react";
import ShoppingList from "./components/ShoppingList";



export default function App() {

    const [itemState, setItemState] = useState("");
    const [allItemsState, setallItemsState] = useState([]);

    function addItem() {
        setallItemsState([...allItemsState, itemState]);
    }


    return(
        <>
            <h1>React Shopping List</h1>
            <textarea name="item" onChange={(e)=>setItemState(e.target.value)} value={itemState}></textarea>
            <br />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {/* {<li>{itemState}</li>} */}
                {allItemsState.map((newItem, index)=>(
                    <li key={index}>{newItem}</li>
                ))}
            </ul>

            <ShoppingList />
        </>
    )
}