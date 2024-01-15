function Product(props){

    let subtotal = props.price * props.quantity
    return (
        <tr>
            <td>{props.name}</td>
            <td>{Number(props.price).toFixed(2)}</td>
            <td>{Number(props.quantity).toFixed(2)}</td>
            <td>{Number(subtotal).toFixed(2)}</td>
            <td><button onClick={props.deleteItem}>Delete</button></td>
        </tr>
    );
}

export default Product;
