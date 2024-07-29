import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(1)

  const nextProduct = () => {
    setCount(count + 1)
  }
  const prevProduct = () => {
    if (count <= 1) {
      setCount(1)
    } else {
      setCount(count - 1)
    }
  }

  const getAllProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${count}`)
      const json = await response.json()
      setProducts(json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [count])

  return (
    <>
      <div>
        <h1>Functional React</h1>
        <button onClick={prevProduct}>Prev</button>
        <button onClick={nextProduct}>Next</button>
        <p>{count}</p>
        <div>
          <h3>{products.title}</h3>
          <p>{products.description}</p>
        </div>
        {/* <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </>
  )
}

export default App
