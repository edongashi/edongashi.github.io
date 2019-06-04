define([
  'react',
  'openpgp',
  '/public/js/use-debounce.js'
], function (React, openpgp, { useDebounce }) {
  const { useState, useEffect } = React

  const initialMessage = `-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA1

Pershendetje nga FIEK!
-----BEGIN PGP SIGNATURE-----

iJwEAQECAAYFAlzz7GUACgkQBpJaWrMCCxjzugP/V2WaLShf6IU5ZF028G7rpeB8
IoWP5x7fpkzacnVrdan0Iw5/ze5nxb12GFuhzgQQhDHtry6LPqqs/TkRJbSDaoSS
Y3C+zkY+hCRymTy6Q1gva3ceAGlHUSChuNJevZsk+mt6f8Kz3ea1UQ++94XLlg12
D5sPSQmauwM63SLjcaA=
=mzAh
-----END PGP SIGNATURE-----`

  const initialSignature = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mI0EXPPsKAEEAMJynCP1s0PzG4hvV55uQ7ZiVp7NiK5FoQoMZVR0T+tME93CIe4H
k5QgnTZllJaurKkKTjBcxdxKHEmAkzxoqX8EoxF+JZor4kn3QGvr1xOfXz8v5TQQ
9fjQ75MlJGUHWtR6glsMM8gLG2smD++EEkBYKMVXzcvM9IMtcyN5so+7ABEBAAG0
IkVkb24gR2FzaGkgPGVkb24uZ2FzaGlAdW5pLXByLmVkdT6IvgQTAQIAKAUCXPPs
KAIbAwUJACeNAAYLCQgHAwIGFQgCCQoLBBYCAwECHgECF4AACgkQBpJaWrMCCxhG
KgP9GnNIZ89zTMjqqwcdgFWCQrUbVb4MKsaWdVh5BwOjeVYbe+vSVQE52ZtMLHxk
zH1xA4bl/1TVip67ewz0ysf+v1xds3mvMtnGEJKUuIGAFjLo194shisoT9zoS7dl
Jv1oCOdl7RooeBADLdMFawhC3cvwN/lD0U0KD3CmDE4PMai4jQRc8+woAQQA2k4d
Br37/o0YWPe92fq4HDmekY5FuOeADADllwgkZ2wzLa6B8W4A6ck3Eftj78B7UBAV
gHg45JPUoYlIKMiYieCeTNOTWXafsH1vNIRELdMkTwmoNtgjqCfg8123twvyKVVO
o+dpW8QrpePEO7WsPzd7kukC3MC2tvk3y5DodpcAEQEAAYilBBgBAgAPBQJc8+wo
AhsMBQkAJ40AAAoJEAaSWlqzAgsYjvQD/jOn8hAENNx5EGFstQM3FsdYwx8OVnrb
t5hwjdOQpNf3Yf6xFjjIsUsDiKkiy+INCH7uu+fa4Lp5JT7ryEfgJWPg0rjqSKA/
OdtGpmz2nPiogOxBCiOpg/iBP+j++G8dzHZ6+mj43rnelDxLLpMvxXqXqV3T33ch
NbSZiuIAN8pC
=uST/
-----END PGP PUBLIC KEY BLOCK-----`

  function formatVerification(data) {
    if (!data) {
      return {
        state: 'initial'
      }
    }

    const { keys, message, verification } = data
    const signature = verification.signatures && verification.signatures[0]
    if (!signature) {
      return {
        state: 'error',
        error: 'Nuk u gjet nënshkrimi i mesazhit'
      }
    }

    return {
      state: 'verified',
      signature: {
        valid: !!signature.valid,
        created: message.signature.packets[0].created.toGMTString(),
        keyid: signature.keyid.toHex()
      },
      keys: keys.map(k => {
        const user = k.users[0] && k.users[0].userId || { userid: '?' }
        return ({
          keyid: k.keyPacket.keyid.toHex(),
          user: user.userid || user.email || user.name || '?'
        })
      })
    }
  }

  function usePgpDetails(message, pubkey) {
    const [info, setInfo] = useState({
      state: 'initial'
    })

    useEffect(
      () => {
        let aborted = false
        const dispose = () => aborted = true

        if (!message || !pubkey || !message.trim() || !pubkey.trim()) {
          setInfo({
            state: 'initial'
          })

          return dispose
        }

        async function verify() {
          try {
            const keys = (await openpgp.key.readArmored(pubkey)).keys
            const options = {
              message: await openpgp.cleartext.readArmored(message),
              publicKeys: keys
            }

            const verification = await openpgp.verify(options)
            if (!aborted) {
              setInfo(formatVerification({
                message: options.message,
                keys,
                verification
              }))
            }
          } catch (error) {
            if (!aborted) {
              setInfo({
                state: 'error',
                error
              })
            }
          }
        }

        verify()
        return dispose
      },
      [message, pubkey]
    )

    return info
  }

  const maxSize = { maxWidth: '20%', width: '20%' }

  const textareaStyle = {
    boxSizing: 'border-box',
    width: '100%',
    resize: 'vertical'
  }

  function stringifyError(e) {
    if (e && e.message) {
      return e.message
    } else if (typeof e === 'string') {
      return e
    } else {
      return null
    }
  }

  function VerificationStatus({ info }) {
    switch (info.state) {
      case 'error':
        console.error(info.error)
        return <div>
          Gabim: {stringifyError(info.error)}
        </div>
      case 'verified':
        const { signature, keys } = info
        return <div>
          <h3>Të dhënat e nënshkrimit</h3>
          <table>
            <thead>
              <tr>
                <th>valid</th>
                <th>created</th>
                <th>keyid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{signature.valid.toString()}</td>
                <td>{signature.created}</td>
                <td>{signature.keyid}</td>
              </tr>
            </tbody>
          </table>
          <h3>Çelësat</h3>
          <table>
            <thead>
              <tr>
                <th>keyid</th>
                <th>user</th>
              </tr>
            </thead>
            <tbody>
              {keys.map((k, i) => (<tr key={i}>
                <td>{k.keyid}</td>
                <td>{k.user}</td>
              </tr>))}
            </tbody>
          </table>
        </div>
      case 'initial':
      default:
        return <div>
          Jepni mesazhin dhe çelësin.
        </div>
    }
  }

  function normalize(msg) {
    if (typeof msg === 'string') {
      return msg.replace(/\r?\n\r?\n/gm, '\n')
    } else {
      return ''
    }
  }

  function PgpVerify() {
    const [messageVolatile, setMessage] = useState(initialMessage)
    const [pubkeyVolatile, setPubkey] = useState(initialSignature)
    const [message] = useDebounce(messageVolatile, 500)
    const [pubkey] = useDebounce(pubkeyVolatile, 500)
    const info = usePgpDetails(message, pubkey)
    return <div style={{ marginBottom: '48px' }}>
      <h3>Verifkuesi i PGP nënshkrimit</h3>
      <label>Teksti i nënshkruar</label>
      <textarea
        rows={14}
        style={textareaStyle}
        value={messageVolatile}
        onChange={e => setMessage(e.target.value)} />
      <br />
      <button onClick={() => setMessage(normalize(messageVolatile))}>Normalizo newline</button>
      <br />
      <label>Çelësi publik</label>
      <textarea
        rows={14}
        style={textareaStyle}
        value={pubkeyVolatile}
        onChange={e => setPubkey(e.target.value)} />
      <hr />
      <VerificationStatus info={info} />
    </div>
  }

  PgpVerify.title = 'Verifkuesi i PGP nënshkrimit'
  return PgpVerify
})
