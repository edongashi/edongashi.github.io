define(['react', '/public/js/nn-predict.js'], function (React, predict) {
  const { useState, useEffect } = React

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value)
        }, delay)
        return () => {
          clearTimeout(handler)
        }
      },
      [value]
    )

    return debouncedValue
  }

  function CaesarDecryptor() {
    const [cipherText, setCipherText] = useState('')
    const debouncedCipherText = useDebounce(cipherText, 1000)
    const plainText = useMemo(() => predict(debouncedCipherText), [debouncedCipherText])
    return <div>
      <h3>Dekriptori i Kodit të Cezarit</h3>
      <textarea
        style={{
          boxSizing: 'border-box',
          width: '100%',
          resize: 'vertical'
        }}
        value={cipherText}
        onChange={e => setCipherText(e.target.value)} />
      <hr />
      {debouncedCipherText && <table>
        <tr>
          <th>Plaintext</th>
          <th>Probabiliteti</th>
        </tr>
        <tr>
          <td>{plainText[0].text}</td>
          <td>{plainText[0].confidence}</td>
        </tr>
        <tr>
          <td>{plainText[1].text}</td>
          <td>{plainText[1].confidence}</td>
        </tr>
        <tr>
          <td>{plainText[2].text}</td>
          <td>{plainText[2].confidence}</td>
        </tr>
      </table>}
    </div>
  }

  CaesarDecryptor.title = 'Dekriptori i Kodit të Cezarit'
  return CaesarDecryptor
})
