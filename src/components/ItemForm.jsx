function ItemForm(props){

    return(
        <form onSubmit={props.add}>
            <input name='name' value={props.product.name} placeholder="Name"
            onChange={props.capture}/> <br/>
            <input name='price' value={props.product.price} placeholder="Price"
            onChange={props.capture}/> <br/>
            <input name='quantity' value={props.product.quantity} placeholder="Quantity"
            onChange={props.capture}/> <br/>
            <button type='submit'>Add</button>
        </form>
    )
}

export default ItemForm;
