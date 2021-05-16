import { useState } from 'react'

const Body = () => {
  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
        Soy tu nuevo div con un valor de {count}
        <button onClick={handleCount}> Counter </button>
    </div>
  )
}
export default Body
