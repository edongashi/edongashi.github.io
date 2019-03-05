define(['react'], function (React) {
  const { useState } = require(React)

  function randomNumber(length) {
    let result = ''
    for (let i = 0; i < length; i++) {
      result += Math.round(Math.random())
    }

    return result
  }

  function BinaryGenerator() {
    const [length, setLength] = useState(8)
    const [num, setNum] = useState(randomNumber(length))
    return <div>
      <div>{num}</div>
      <button onClick={() => setNum(randomNumber(length))} />
    </div>
  }

  return BinaryGenerator
})
