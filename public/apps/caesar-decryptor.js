define(['react', '/public/js/nn-predict.js'], function (React, predict) {
  const { useState, useEffect, useMemo } = React

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

  const maxSize = { maxWidth: '20%', width: '20%' }

  function CaesarDecryptor() {
    const [cipherText, setCipherText] = useState('')
    const debouncedCipherText = useDebounce(cipherText, 500)
    const plainText = useMemo(() => predict(debouncedCipherText), [debouncedCipherText])
    return <div>
      <h3>Dekriptori i Kodit të Cezarit</h3>
      <textarea
        rows={4}
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
          <th style={maxSize}>Probabiliteti</th>
        </tr>
        <tr>
          <td>{plainText[0].text}</td>
          <td style={maxSize}>{plainText[0].confidence}</td>
        </tr>
        <tr>
          <td>{plainText[1].text}</td>
          <td style={maxSize}>{plainText[1].confidence}</td>
        </tr>
        <tr>
          <td>{plainText[2].text}</td>
          <td style={maxSize}>{plainText[2].confidence}</td>
        </tr>
      </table>}
    </div>
  }

  CaesarDecryptor.title = 'Dekriptori i Kodit të Cezarit'
  return CaesarDecryptor
})
