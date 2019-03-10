# Teknikat klasike të enkriptimit

---

## Konceptet bazike të kriptografisë

---

**Kriptografia**

Lëmia që merret me aplikimin dhe studimin e teknikave për komunikim të sigurt në prani të palëve të treta.

---

**Plaintext**

Informata e pa-fshehur e cila mund të kuptohet nga kushdo.

"Takohemi nesër pasdite."

---

**Ciphertext**

Kur plaintext përpunohet me ndonjë algoritëm kriptografik fitojmë ciphertextin, i cili duhet të jetë i pakuptueshëm për palët e treta.

"Ahrvoltp ulzly whzkpal."

---

**Enkriptimi**

Procesi i shndërrimit të plaintextit në ciphertext, zakonisht duke shfrytëzuar një "çelës" $k$.

$$
e(\text{plaintext}) = \text{ciphertext}
$$

---

**Dekriptimi**

Procesi i kundërt i enkriptimit, pra shndërrimi nga ciphertext në plaintext.

$$
d(\text{ciphertext}) = \text{plaintext}
$$

---

**Cipher**

Algoritmi kriptografik i cili specifikon detajet se si duhet të bëhet enkriptimi dhe/ose dekriptimi.

---

**Çelësi**

Shumë algoritme përdorin një shifër sekrete për ta bërë unik procesin e enkriptimit.

Algoritmi i njejtë jep rezultate të ndryshme nëse përdoret çelës tjetër.

---

**Kriptoanaliza**

Studimi i sigurisë së sistemeve kriptografike dhe përpjekja e thyerjes së tyre.

---

## Algoritmet klasike kriptografike

Për plane dhe urdhëra ushtarake është paraqitur nevoja e fshehjes së informacionit nga armiku.

---

**Enigma** - [video](https://www.youtube.com/watch?v=G2_Q9FoD-oQ)

Përdorur gjatë luftës së dytë botërore nga Gjermania.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/EnigmaMachineLabeled.jpg/449px-EnigmaMachineLabeled.jpg) <!-- .element: style="max-height:400px;border:none;" -->

---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Enigma-action.svg/500px-Enigma-action.svg.png) <!-- .element: style="max-height:500px;border:none;" -->

---

![](https://upload.wikimedia.org/wikipedia/commons/2/27/Enigma-plugboard.jpg) <!-- .element: style="max-height:500px;border:none;" -->

---

**Kodi i Cezarit**

Algoritëm i lashtë kriptografik.

Mesazhet fshehen duke shtyer secilën shkronjë për disa vende në alfabet.

Shkronjat në fund të alfabetit "rrotullohen" në fillim.

---

**Shembull** Nëse shtyejmë secilën shkronjë të alfabetit për 3 vende, atëherë shkronja $A$ bëhet $D$, shkronja $B$ bëhet $E$, ... ndërsa shkronja $Z$ bëhet $C$.

```text
plaintext:  sulmojme neser ne mengjes
ciphertext: vxoprmph qhvhu qh phqjmhv
```

---

Kodi i Cezarit është **algoritëm i zëvendësimit (substitution cipher)** monoalfabetik, ku secila shkronjë e plaintextit pasqyrohet në një shkronjë të ciphertextit.

![](https://upload.wikimedia.org/wikipedia/commons/7/75/Caesar_substition_cipher.png) <!-- .element: style="max-height:350px;border:none;" -->

---

**Përshkrimi matematik**

Për një çelës $k$ dhe çdo shkronjë të alfabetit $x$:

$$
x \in \lbrace a=0, b=1, c=2, \dots, z=25 \rbrace
$$

Procesi i enkriptimit definohet si:

$$
e(x) = (x + k) \pmod{26}
$$

Procesi i dekriptimit definohet si:

$$
d(x) = (x - k) \pmod{26}
$$

---

**Detyrë:** Të enkriptohet me dorë fjala `pershendetje` duke përdorur çelësin $k=1$.

---

**Detyrë:** Të shkruhet programi që mundëson enkriptimin dhe dekriptimin përmes kodit të Cezarit.

---

**Key space - hapësira e çelësave**

Bashkësia e të gjithë çelësave të mundshëm për një algoritëm kriptografik.

Në kodin e Cezarit $|S|=25$. Pse?

---

**Sulmet brute-force**

Ky lloji sulmi përpjeket ta dekriptojë ciphertextin duke provuar secilin kombinim të çelësit në key space.

Nëse key space është e vogël atëherë cipheri mund të thyhet më shpejt. Pse?

---

**Detyrë:** Të shkruhet programi i cili e thyen kodin e Cezarit duke provuar secilin kombinim të mundshëm të çelësit.

---

Përveç numrit të vogël të çelësave të mundshëm, kodi i Cezarit është shumë i pasigurt pasi që procesi i enkriptimit e ruan natyrën dhe strukturën e plaintextit.

---

**Analiza frekuencore**

Një karakteristikë që pasqyrohet në ciphertext është frekuenca e shkronjave.

Nëse në gjuhën shqipe më së shpeshti paraqitet shkronja "e", dhe në ciphertext më së shpeshti paraqitet shkronja "g", mund të supozojmë që çelësi është $k=2$. Pse?

---

**Pyetje**

1. Të shpjegohen termet: kriptografi, enkriptim, dekriptim, plaintext, ciphertext, çelës.
2. Çfarë është hapësira e çelësave?
3. Të shpjegohen sulmet brute-force dhe sulmet përmes analizës frekuencore.

---

**Vigenère Cipher**

Version polialfabetik i kodit të Cezarit i cili shfrytëzon si çelës një listë të zhvendosjeve në vend se vetëm një vlere.

Për shembull, çelësi $\lbrace 3,2,5 \rbrace$ e shtyen shkronjën e parë për 3, shkronjën e dytë për 2, shkronjën e tretë për 5, shkronjën e katërt për 3 ...

---

I paraqitur së pari në vitin 1553, ky kod ka qenë i pathyeshëm për tre shekuj deri në vitin 1863.

Për këtë arsye ka marrë thirrjen "le chiffre indéchiffrable" - shifra e padeshifrueshme.

---

**Shembull:** Çelësi "fiek" ka vlerat $\lbrace 6, 9, 5, 11 \rbrace$. Enkriptimi i fjalës "pershendetje" me këtë çelës:

```text
celesi:     fiekfiekfiek
plaintext:  pershendetje
ciphertext: umvcmmrnjbno
```

---

Ky algoritëm ka hapësirë të çelësave shumë më të madhe dhe është më i rezistueshëm ndaj sulmeve frekuencore.

Megjithatë është i pasigurt pasi që çelësi ka natyrë përsëritëse dhe mund të sulmohet si një varg kodesh të Cezarit me çelësa të ndryshëm.

---

**Detyrë:** Të shkruhet programi që mundëson enkriptimin dhe dekriptimin përmes kodit të Vigenère.

---

**One-time pad (OTP)**

Teknikë e pathyeshme e enkriptimit.

Kombinon plaintext me një çelës të gjatësisë sa plaintexti.

Plaintexti dhe çelësi zakonisht kombinohen përmes mbledhjes modulare ose XOR ($\oplus$).

---

[Shembull](https://en.wikipedia.org/wiki/One-time_pad#Example): enkriptimi i tekstit "HELLO" duke shfrytëzuar çelësin "XMCKL" sipas formulës:

```text
      H       E       L       L       O  msg
   7 (H)   4 (E)  11 (L)  11 (L)  14 (O) msg
+ 23 (X)  12 (M)   2 (C)  10 (K)  11 (L) key
= 30      16      13      21      25     msg + key
=  4 (E)  16 (Q)  13 (N)  21 (V)  25 (Z) (msg + key) mod 26
      E       Q       N       V       Z  → ciphertext
```

---

**[OTP përmes XOR](https://www.khanacademy.org/computing/computer-science/cryptography/ciphers/a/xor-and-the-one-time-pad)** - XOR mund të interpretohet si mbledhje modulare në nivel të bitit.

Enkriptimi jepet sipas shprehjes (1):

$$
c = m \oplus k \tag{1}
$$

Dekriptimi jepet sipas shprehjes (2):

$$
m = c \oplus k \tag{2}
$$

Ku $m$ - plaintext, $k$ - çelësi, $c$ - ciphertext.

---

**Detyrë:** Të implementohet programi për OTP në nivel të alfabetit përmes mbledhjes modulare si dhe në nivel të bajtave përmes XOR.

---

Për OTP çelësi duhet të jetë i gjatë sa plaintexti dhe të dihet paraprakisht nga të dy palët.

**Problem:** Çelësi mund të përdoret vetëm një herë. Pse?

**Problem:** Nëse kemi mundësi ta ndajmë në mënyrë të sigurt një informatë (çelësi) të gjatë aq sa është mesazhi ynë (plaintexti), atëherë pse mos ta ndajmë direkt plaintextin në atë medium?

---

**Playfair Cipher**

Enkripton tekstin duke i grupuar shkronjat në dyshe dhe duke i kombinuar përmes një matrice $5 \times 5$.

Dy shkronja të alfabetit (zakonisht I dhe J) duhet të bashkohen ashtu që të mbushet tabela me 25 karaktere.

---

**Hapi 1: Tabela e çelësit**

Merret një fjalë si çelës dhe fillohen të mbushet matrica nga lart majtas me shkronjat unike në atë fjalë. Pjesa tjetër mbushet me simbolet e mbetura në alfabet.

---

**Shembull:** Çelësi SIGURIA:

<table>
<tr><td><strong>S</strong></td><td><strong>I/J</strong></td><td><strong>G</strong></td><td><strong>U</strong></td><td><strong>R</strong></td></tr>
<tr><td><strong>A</strong></td><td>B</td><td>C</td><td>D</td><td>E</td></tr>
<tr><td>F</td><td>H</td><td>K</td><td>L</td><td>M</td></tr>
<tr><td>N</td><td>O</td><td>P</td><td>Q</td><td>T</td></tr>
<tr><td>V</td><td>W</td><td>X</td><td>Y</td><td>Z</td></tr>
<table>

---

**Hapi 2: Çiftëzimi**

Ndahet plaintexti në çifte shkronjash. Nëse numri i shkronjave është tek atëherë shtohet një X në fund.

**Shembull:** Teksti SHKOLLA:

```text
Plaintext: SHKOLLA
Grupimi:   SH KO LL AX
```

---

**Hapi 3: Enkriptimi** - [shiko shembullin](https://en.wikipedia.org/wiki/Playfair_cipher#Example)

Për çdo çift shkronjash ndjeken 4 rregulla gjatë enkriptimit të tekstit

---

**Rregulla 1**

Nëse shkronjat e plaintext janë të njejta (psh. LL) atëherë shkronja e dytë bëhet X.

```text
Grupimi:   SH KO LL AX
Korigjimi: SH KO LX AX
```

---

**Rregulla 2**

Nëse shkronjat gjenden në rresht të njejtë të tabelës atëherë shtyhen për një kolonë djathtas.

Nëse shkronja gjendet në kolonën e fundit atëherë del në kolonën e parë.

![](https://upload.wikimedia.org/wikipedia/commons/2/29/Playfair_Cipher_10_EX_to_XD.png) <!-- .element: style="max-height:300px;border:none;" -->

---

**Rregulla 3**

Nëse shkronjat gjenden në kolonë të njejtë të tabelës atëherë shtyhen për një rresht teposhtë.

Nëse shkronja gjendet në rresht të fundit atëherë del në rreshtin e parë.

![](https://upload.wikimedia.org/wikipedia/commons/4/44/Playfair_Cipher_02_DE_to_OD.png) <!-- .element: style="max-height:300px;border:none;" -->

---

**Rregulla 4**

Nëse shkronjat gjenden në rreshta dhe kolona të ndryshme, atëherë zëvendësohen sipas rendit:

- Shkronja e parë zëvendësohet me shkronjën në rresht të njejtë por në kolonën e shkronjës së dytë.
- Shkronja e dytë zëvendësohet me shkronjën në rresht të njejtë por në kolonen e shkronjës së parë.


---

Kujdes - shkronja e majtë e çiftit zhvendoset e para dhe vendoset në ciphertext, pastaj e dyta.

![](https://upload.wikimedia.org/wikipedia/commons/f/fb/Playfair_Cipher_04_EG_to_XD.png) <!-- .element: style="max-height:300px;border:none;" -->

---

**Dekriptimi**

Aplikohen rregullat 2, 3, 4 në kahje të kundërt. Në plaintextin e fituar largohen shkronjat X të cilat nuk kanë kuptim.

---

**Detyrë:** Të shkruhet programi i cili bën enkriptimin dhe dekriptimin përmes Playfair cipherit.
