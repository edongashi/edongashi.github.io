define([
  'react',
  '/public/js/nn-predict.js',
  '/public/js/use-debounce.js'
], function (React, predict, { useDebounce }) {
  const { useState, useEffect, useMemo } = React
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
          <th style={maxSize}>Çelësi</th>
          <th style={maxSize}>Probabiliteti</th>
        </tr>
        <tr>
          <td>{plainText[0].text}</td>
          <td style={maxSize}>{plainText[0].key}</td>
          <td style={maxSize}>{plainText[0].confidence}</td>
        </tr>
        <tr>
          <td>{plainText[1].text}</td>
          <td style={maxSize}>{plainText[1].key}</td>
          <td style={maxSize}>{plainText[1].confidence}</td>
        </tr>
        <tr>
          <td>{plainText[2].text}</td>
          <td style={maxSize}>{plainText[2].key}</td>
          <td style={maxSize}>{plainText[2].confidence}</td>
        </tr>
      </table>}
    </div>
  }

  CaesarDecryptor.title = 'Dekriptori i Kodit të Cezarit'
  return CaesarDecryptor
})
