define(['react'], function (React) {
  const { useState } = React

  function randomNumber(length) {
    let result = ''
    for (let i = 0; i < length; i++) {
      result += Math.round(Math.random())
    }

    return result
  }

  function BinaryGenerator() {
    const [length, setLength] = useState(8)
    const [numbers, setNumbers] = useState([randomNumber(length)])
    return <div>
      <h3>Gjenerator i numrave binar</h3>
      <button onClick={() => setNumbers([...numbers, randomNumber(length)])}>Gjenero</button>
      <button onClick={() => setNumbers([])}>Pastro</button>
      <ol>
        {numbers.map((num, i) => <li key={i}>{num}</li>)}
      </ol>
    </div>
  }

  return BinaryGenerator
})
