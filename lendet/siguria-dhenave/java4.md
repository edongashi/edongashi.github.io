# Algoritmet Asimetrike

---

**Kriptimi asimetrik** është algoritëm kriptografik tek i cili enkriptimi dhe dekriptimi bëhen me çelësa të ndryshëm.

Ndryshe njihet si **public-key cryptography**.

---

Supozojmë komunikimin mes palës **A** dhe **B**.

Gjatë shkëmbimit të informacionit me kriptografi publike, identifikojmë 4 çelësa:

- Çelësat publik $K_\text{a-publik}$ dhe $K_\text{b-publik}$
- Çelësat privat $K_\text{a-privat}$ dhe $K_\text{b-privat}$

---

**Dërgimi i mesazhit nga A në B**

Për të dërguar mesazh, pala $A$ e enkripton mesazhin $m$ me çelësin publik të palës $B$ dhe fiton ciphertext $c$:

$c = E_\text{a-publik}(m)$

Pala $B$ e dekripton ciphertext duke e deshifruar ciphertextin përmes çelësit privat të vet:

$m = D_\text{b-privat}(c)$

---

**RSA (Rivest–Shamir–Adleman)**

Algoritëm asimetrik që bazohet në vështirësinë e faktorizimit të numrave të thjeshtë.

---

**Gjenerimi i çiftit të çelësave**

**Hapi 1:** Zgjedhim 2 numra të thjeshtë $p$ dhe $q$.

Numrat duhet të jenë të rastit, të mëdhenj, dhe të ndryshëm në gjatësi deri në disa shifra.

---

**Hapi 2:** Llogarisim $n = p\times q$

$n$ përdoret si perioda gjatë modulimit të çelësit publik dhe privat.

---

**Hapi 3:** Llogarisim faktorin e Eulerit $\phi(n)$ përmes:

$$
\phi (n) = (p-1) \times (q-1)
$$

Metoda tjetër është të llogarisim $\lambda (n)$.

---

**Hapi 4:** Zgjedhim një numër të rastësishëm $e$ të tillë që $1 < e < \phi(n)$ dhe nuk ka faktor të përbashkët me $\phi(n)$ të ndryshëm nga $1$.

$e$ është eksponenti i çelësit publik.

---

**Hapi 5:** Zgjedhim një numër $d$ i cili paraqet eksponentin privat dhe plotëson relacionin:

$$
d\times e \equiv 1 \mod{\phi(n)}
$$

Një mundësi është përmes ekuacionit:

$$
d\times e = 1 + k\phi(n)
$$

Duke marrë një numër të plotë $k$ dhe duke e zgjidhur ekuacionin për $d$.

---

**Enkriptimi** bëhet duke llogaritur shpehjen:

$$
c = m^e \mod{n}
$$

Gjithkush mund ta bëjë enkriptimin pasi që $n$ dhe $e$ janë të dhëna publike.

---

**Dekriptimi** bëhet duke llogaritur shprehjen:

$$
m = c^d \mod{n}
$$

Vetëm pronari i çelësit privat e di vlerën e $d$ dhe mund ta kryejë operacionin.

---

Gjatë ruajtjes së çelësit privat, shpesh ruhen edhe vlerat:

- Numrat e thjeshtë $p$ dhe $q$ që kanë gjeneruar çelësin
- $d_p = d \mod{(p-1)}$
- $d_Q=d \mod{(q-1)}$
- $q_{\text{inv}} = q^{-1} \mod{p}$

---

**Sulmimi i RSA** kërkon gjetjen e eksponentit privat $d$.

Për ta gjetur $d$ duhet të zbërthehet numri $n$ në prodhimin e dy numrave të thjeshtë $p$ dhe $q$. Ky problem është np-complete, prandaj nuk ka mënyrë të lehtë të zbërthimit.

---

**Detyrë:** Të enkriptohet dhe pastaj të dekriptohet përmes RSA mesazhi $m=123$ duke u nisur nga numrat e thjeshtë $p=61$ dhe $q=53$.

--

Algoritëm efikas për fuqizimin modular $a^b\mod{n}$:

```javascript
function expmod(a, b, n) {
  a = a % n
  let result = 1
  let x = a

  while(b > 0){
    let lsb = b % 2
    b = Math.floor(b / 2)

    if (lsb == 1) {
      result = result * x
      result = result % n
    }

    x = x * x
    x = x % n
  }

  return result
}
```
