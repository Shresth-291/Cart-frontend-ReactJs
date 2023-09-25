import React from 'react'
import {AiFillDelete} from 'react-icons/ai/index'
import {useSelector, useDispatch} from 'react-redux'

const Cart = () => {

//     const img1 =
//   "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

  const {cartItems, subTotal, shipping, tax, total} = useSelector(state=>state.cart)

    const dispatch = useDispatch()

    const increment = (id) => {
        dispatch({
            type: 'addtoCart',
            payload: {id},
        })
        dispatch({type: 'calculateTotal'})
    }
    const decrement = (id) => {
        dispatch({
            type: 'decrement',
            payload: id,
        })
        dispatch({type: 'calculateTotal'})
    }
    const deleteHandler = (id) => {
        dispatch({
            type: 'deleteHandler',
            payload: id,
        })
        dispatch({type: 'calculateTotal'})
    }

  return (
    <div className="cart">
        <main>
            {
                cartItems.length > 0 ? (
                    cartItems.map(i=>(
                        <CartItems imgSrc={i.imgSrc} name={i.name} price={i.price} qty={i.quantity} id={i.id} key={i.id} decrement={decrement} increment={increment} deleteHandler={deleteHandler}/>
                    ))
                ) : <h1>No items yet.</h1>
            }
        </main>

        <aside>
            <h2>Subtotal: ${subTotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
        </aside>
    </div>
  )
}

const CartItems = ({imgSrc, name, price, qty, decrement, increment, deleteHandler, id}) => (
    <div className="cartItem">
        <img src={imgSrc} alt='Item' />

        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>

        <div>
            <button onClick={() => {decrement(id)}}>-</button>
            <p>{qty}</p>
            <button onClick={() => {increment(id)}}>+</button>
        </div>

        <AiFillDelete onClick={() => {deleteHandler(id)}} />
    </div>
)

export default Cart