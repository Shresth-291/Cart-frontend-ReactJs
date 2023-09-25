import React from 'react'
import toast from 'react-hot-toast';
import {useDispatch} from 'react-redux'

const Home = () => {

    const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
    const img2 = 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d6f9e5e924564d57acbfad2100910bf0_9366/Galaxy_5_Shoes_Black_FY6718_01_standard.jpg'

    const productList = [
        {name: 'MacBook', price: 1200, imgSrc: img1, id: 'aFGTGTRBGjbvjhbfvfev'},
        {name: 'Black Shoes', price: 500, imgSrc: img2, id: 'kjnjbjjRBGjbvjhbfvfev'},
    ]

    const dispatch = useDispatch()

    const addtocart = (Option) => {     
        dispatch({
            type: 'addtoCart',
            payload: Option,
        })
        dispatch({type: 'calculateTotal'})
        toast.success('Added to Cart')
    }

  return (
    <div className='home'>
        {productList.map((i) => (
            <ProductCard name={i.name} id={i.id} price={i.price} handler={addtocart} imgSrc={i.imgSrc} />
        ) )}
    </div>
  )
}

const ProductCard = ({name, id, price, handler, imgSrc}) => (
    <div className='product-cart'>
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({name, id, price, imgSrc, quantity: 1})}>Add to Cart</button>
    </div>
)

export default Home