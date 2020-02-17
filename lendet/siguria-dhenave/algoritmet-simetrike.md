# Algoritmet Simetrike

---

**Kriptimi simetrik** është algoritëm i bazuar në çelësa sekret përmes së cilëve e transformon plaintextin/ciphertextin.

Llojet:

- Block cipher - punon në blloqe bitash.
- Stream cipher - punon në nivel të bitave.

---

**Karakteristikat e algorimeteve simetrike**

- I njejti çelës për enkriptim dhe dekriptim.
- Çelësi është sekret dhe ka madhësi të caktuar.
- Të shpejtë.

---

Algoritmi i mirë i enkriptimit e humb sa më shumë strukturën e plaintextit gjatë pasqyrimit në ciphertext.

- Konfuzioni - ciphertexti dhe çelësi kanë relacion kompleks dhe të pakuptueshëm.
- Difuzioni - ndryshimi i vogël në plaintext shkakton ndryshime të mëdha në ciphertext.

---

**DES Algoritmi** (Data Encryption Standard)

- Algoritëm simetrik me çelësa 64-bit (56-bit efektiv).
- Hapësira e çelësave e vogël për standardet e sotme. ($2^{56}$)
- Block cipher me 64-bit blloqe.
- 16 raunde të Feistel cikleve - 16 nënçelësa 48-bitësh.

---

**DES Algoritmi**

![](https://www.researchgate.net/profile/Muhammad_Mushtaq31/publication/321494910/figure/fig4/AS:568031052079106@1512440564997/Data-Encryption-Standard-DES-Algorithm.png) <!-- .element: style="max-height:500px;border:none;" -->

---

**Feistel funksioni (f)** merr gjysëm-bllokun, e zgjeron në 48 bita, e XOR me nënçelësin.

Rezultati ndahet nga 6 bita dhe futet në S-Boxët.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Data_Encription_Standard_Flow_Diagram.svg/589px-Data_Encription_Standard_Flow_Diagram.svg.png) <!-- .element: style="max-height:400px;border:none;" -->

---

**Substitution box (S-Box)** kanë për qëllim humbjen e linearitetit mes hyrjes dhe daljes.

Supozojmë hyrjen $011011$, dalja është $1001$.

![](/lendet/siguria-dhenave/sbox.png) <!-- .element: style="max-height:300px;border:none;" -->

---

**Modet e operimit**

- **Electronic Codebook (ECB)** - blloqet transformohen veç e veç.
- **Cipher Block Chaining (CBC)** - blloqet bëhen XOR me blloqet e kaluara.
- **CFB, OFB, CTR** - mode tjera.

ECB është më e pasigurt sepse plaintexti i njejtë gjithmonë jep ciphertext të njejtë.

---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/ECB_encryption.svg/800px-ECB_encryption.svg.png) <!-- .element: style="max-height:250px;border:none;" -->

![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/ECB_decryption.svg/800px-ECB_decryption.svg.png) <!-- .element: style="max-height:250px;border:none;" -->

---


![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/CBC_encryption.svg/800px-CBC_encryption.svg.png) <!-- .element: style="max-height:250px;border:none;" -->

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/CBC_decryption.svg/800px-CBC_decryption.svg.png) <!-- .element: style="max-height:250px;border:none;" -->

---

**Triple DES (3DES)**

Për shkak të hapësirës së vogël të çelësave, 3DES e aplikon algoritmin 3 herë me 3 çelësa të ndryshëm sipas formulës:

$$
\text{ciphertext} = E_{K3}(D_{K2}(E_{K1}(\text{plaintext})))
$$

$$
\text{plaintext} = D_{K1}(E_{K2}(D_{K3}(\text{ciphertext})))
$$

---

3 opsione të çelësave në Triple DES:

1. 3 çelësa të ndryshëm $K_1 \neq K_2 \neq K_3$, $3\times 56=168$ bita unik.
2. $K_3=K_1$, $2\times 56 = 112$ bita unik.
3. $K_1=K_2=K_3$ ekuivalent me DES (56 bit).

---

**DES në .NET**

$$
\begin{array}{c}
\texttt{Object} \\
\uparrow \\
\texttt{SymmetricAlgorithm} \\
\uparrow \\
\texttt{DES} \\
\uparrow \\
\texttt{DESCryptoServiceProvider}
\end{array}
$$

---

Klasa [SymmetricAlgorithm](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.symmetricalgorithm) paraqet bazë abstrakte për algoritmet simetrike.

Anëtarët e rëndësishëm:

- `CreateEncryptor()`
- `CreateDecryptor()`
- `IV`, `Key`, `Mode`, `Padding`
- `LegalKeySizes`, `LegalBlockSizes`

---

Klasa [DES](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.des) paraqet bazën abstrakte të DES algoritmit.

Klasa [DESCryptoServiceProvider](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.descryptoserviceprovider) paraqet një implementim të DES algoritmit.

---

`CreateEncryptor` dhe `CreateDecryptor` kthejnë një [ICryptoTransform](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.icryptotransform) i cili kryen operacionet mbi blloqe.

Nëse punojmë me stream të bajtave kemi mundësi t'i lidhim streamat tonë me [CryptoStream](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.cryptostream) i cili inicializohet me ndonjë `ICryptoTransform`.
