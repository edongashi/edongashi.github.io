define([
  'react',
  'openpgp',
  '/public/js/react-json-viewer.js',
  '/public/js/use-debounce.js'
], function (React, openpgp, JSONViewer, { useDebounce }) {
  const { useState, useEffect } = React

  const initialMessage = `-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA1

Pershendetje nga Filan Fisteku, student i FIEK.
-----BEGIN PGP SIGNATURE-----

iJwEAQECAAYFAlzykJgACgkQ7K/qKlCiAHd1PgP/f4pCjZSx6Lt59SmpP9FhKqZF
AbYd42kHdS3a6USAgCKNQe51ruHKIJILHqleYto9tPe7yNU5YNwwMDXTwnWV8Bvk
iSW7O86m44QHsLUUpnNVBYMqg10eoZsfsDyoZWo5ANHhR+gcjAyZBh2B9i2DKEe0
5AuHFge5yH/d8Pf529I=
=x0kl
-----END PGP SIGNATURE-----`

  const initialSignature = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mI0EXPKQdwEEAOe7LAcxhvAvkPPRbFrWr3IYVIP93g2Cu73jTMOIJtaqzr3i2LuK
8FttqMn9IIq8lOgIjvuZVjLpyBbpzObjRd6bjRzZBylCwKMS48yIo43AHGxggzJj
wH25Lsl133OaPZjwZjpMkp3SIBk0MeJgfnUpcFnADF9O/kcFZUWAfuh7ABEBAAG0
LEVkb24gR2FzaGkgKHNpZ3VyaWEpIDxlZG9uLmdhc2hpQHVuaS1wci5lZHU+iL4E
EwECACgFAlzykHcCGwMFCQAnjQAGCwkIBwMCBhUIAgkKCwQWAgMBAh4BAheAAAoJ
EOyv6ipQogB3vckD/2s6UqN9U0m2VdlWjxGPDD/f2jcHU5z7fZ8LbIROg0VEwsE3
UcOo7PEyDFlDHTfi+8h2+hSD9HMpaV9VYTG6F9DBeapfgazPshPMOw1pLgODeJIU
4Cjk4FVebOTdirsKUJn/IWQITNN4/Og3TCeFjudfxw5xXQ1yGPlNk/7yJ5/uuI0E
XPKQdwEEAKzK3VIaRgckE+HF+vZ61hDXJnMd2ex8YcPEL4ijsIr2Avv35hbeyZTL
NuJN9ZhGmeKRx8HbgnE4iQtazVXU0Pcp6mOzC2Ygx/l0UgKwWD3QMLd+GXOaPNEr
CaYpkmxgkmy7YIddwclz3pDm9iBraAVFBUapT7c4f8DoA688DSyFABEBAAGIpQQY
AQIADwUCXPKQdwIbDAUJACeNAAAKCRDsr+oqUKIAd+FlBACAvV91CahTkemq4fWJ
qx9GrggPds0uQY/UF8s11K39wuUvW8oCZCTaBkYE0T6szBqY8pB/gOx8blg7/tST
Zy7JnHXUzCYwU+YJIBMBvr6jO3z7DdejnepmWQlKnINa5iQKjj5XW8HyVJyECqLP
psq4cxU2pUwcZSnLte/6usnE0g==
=ogSl
-----END PGP PUBLIC KEY BLOCK-----`

  function formatVerification(data) {
    if (!data) {
      return {
        state: 'initial'
      }
    }

    const keys = data.keys
    const message = data.message
    const verification = data.verification
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
        valid: signature.valid,
        created: message.signature.packets[0].created.toGMTString(),
        keyid: signature.keyid.toHex()
      },
      keys: keys.map(k =>
        ({
          keyid: k.keyPacket.keyid.toHex(),
          users: k.users.map(u => u.userId.userid || u.userId.email || u.userId.name || '?')
        })
      )
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
        return <div>
          <h3>Të dhënat e nënshkrimit</h3>
          <JSONViewer json={info.signature} />
          <h3>Çelësat</h3>
          <JSONViewer json={info.keys} />
        </div>
      case 'initial':
      default:
        return <div>
          Jepni mesazhin dhe çelësin.
        </div>
    }
  }

  function PgpVerify() {
    const [messageVolatile, setMessage] = useState(initialMessage)
    const [pubkeyVolatile, setPubkey] = useState(initialSignature)
    const [message] = useDebounce(messageVolatile, 500)
    const [pubkey] = useDebounce(pubkeyVolatile, 500)
    const info = usePgpDetails(message, pubkey)
    return <div>
      <h3>Verifkuesi i PGP nënshkrimit</h3>
      <label>Teksti i nënshkruar</label>
      <textarea
        rows={16}
        style={textareaStyle}
        value={messageVolatile}
        onChange={e => setMessage(e.target.value)} />
      <br />
      <label>Çelësi publik</label>
      <textarea
        rows={16}
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
