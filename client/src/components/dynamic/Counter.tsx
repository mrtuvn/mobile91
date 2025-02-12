'use client'
import React from 'react'

const Bunny = () => {
  const [count, setCount] = React.useState(0)

  const handleClick = () => {
    return setCount((prev) => prev + 1)
  }

  const handleDecreaseClick = () => {
    return setCount((prev) => prev - 1)
  }

  React.useEffect(() => {
    console.log('test')
  }, [])

  return (
    <div>
      <div>Count: {count}</div>

      <button
        className="button btn primary border-1px rounded-full bg-gray-400 p-1 px-2 text-white"
        onClick={handleClick}
      >
        Increase
      </button>

      <button
        className="button btn primary border-1px rounded-full bg-pink-400 p-1 px-2 text-white"
        onClick={handleDecreaseClick}
      >
        Decrease
      </button>
    </div>
  )
}

export default Bunny
