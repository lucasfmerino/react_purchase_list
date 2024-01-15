// import './ShoppingList.css';
import { useState } from 'react';
import Product from './Product';
import ItemForm from './ItemForm';


function ShoppingList() {

    const [product, setProduct] = useState({'name':'', 'price':'', 'quantity':''})
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)

    function add(e){
        e.preventDefault()
        setList([...list, product])
        setTotal(total + (product.price * product.quantity))
        setProduct({'name':'', 'price':'', 'quantity':''})
    }

    function capture(e){
        setProduct({...product, [e.target.name]: e.target.value})
    }

    function deleteItem(p){
        setTotal(total - (p.price * p.quantity))
        let newList = list.filter((prod)=> prod !== p)
        setList(newList)
    }

    return (
        <div className="ShoppingList">
            <h2>Products</h2>
            <fieldset>
                <legend>Add Product</legend>
                <ItemForm product={product} add={add} capture={capture}/>
            </fieldset>
            <br/>
            <table border="1" cellPadding={0}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>SubTotal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                list.map((p,i)=>(
                    <Product key={i}
                    name={p.name}
                    price={p.price}
                    quantity={p.quantity}
                    deleteItem={deleteItem.bind(this, p)}
                    />
                ))
            }
            </tbody>
            </table>
            <p>Total: {total.toFixed(2)}</p>
        </div>
    );
}

export default ShoppingList;