# Numrat me presje të lëvizshme

---

Përmes formatit binar të 2-komplementit kemi arritur të paraqesim numra të plotë pozitiv dhe negativ në një interval të caktuar.

Shtrohet pyetja si duhet të paraqiten numrat jo të plotë?

---

Nëse paraqesim numrat si dy komponente - të majtë dhe të djathtë të presjes, kemi formatin:

$$
bbbb.bbbb
$$

Ky format ka probleme pasi që nuk mund të paraqesë numra shumë të mëdhenj ose shumë të vegjël.

---

Problemi i tillë mund të tejkalohet duke i paraqitur numrat në formë shkencore të formës:

$$
\pm S \times B^{\pm E}
$$

- Shenja e numrit (pozitive ose negative)
- $S$ - significand (thyesa)
- $B$ - baza numerike
- $E$ - eksponenti (pozitiv ose negativ)

---

Duke përdorur formën $\pm S \times B^{\pm E}$ presjen e lëvizim duke kontrolluar vlerën e eksponentit $E$, ndërsa $S$ ka format fiks të formës $d.ddd\dots$

**Shembull**: Forma shkencore me bazën 10:

$$
2.76 \times 10^{15} \\
1.50 \times 10^{-3} \\
4 \times 10^{2}
$$

---

Numri i formës $\pm S \times B^{\pm E}$ mund të paraqitet përmes komponenteve binare:

- Shenja paraqitet si 1 bit (0=pozitiv, 1=negativ).
- Significand (fraksioni, argumenti) $S$ paraqitet si numër i plotë me gjatësi fikse me 1 bit majtas presjes $b.bbb\dots$
- Baza $B=2$ në formë implicite.
- Eksponenti $E$ paraqitet si numër i plotë pozitiv ose negativ.

---

Standardi IEEE 754 është forma më e zakonshme e paraqitjes së numrave me presje të lëvizshme. Numri paraqitet si bashkësi e 32 bitave (single-precision) dhe 64 bitave (double-precision).

![](/lendet/arkitektura-kompjutereve/IEEE_754.png) <!-- .element: style="max-height:400px;border:none;" -->

---

**Shenja** ka 1 bit, ku:

- 0 paraqet numër pozitiv
- 1 paraqet numër negativ

Kur numri paraqet zero, në formatin float kemi zero pozitive dhe zero negative ($+0$ dhe $-0$). Pse?

---

**Eksponenti** $E$ paraqet eksponentin e 2-shit që i shumëzohet thyesës. Në single-precision mban $k=8$ bita.

Vlera e eksponentit nuk paraqet numër të zakonshëm binar, por vlerë të **shtyrë (biased)** për një vlerë fikse.

Zakonisht $\text{bias}=2^{k-1}-1$, ku $k$ - numri i bitave të numrit. Në float kjo vlerë është 127.

---

Nëse numri pa shenjë 8-bitësh paraqet intervalin e numrave $0\dots255$, atëherë vlera efektive e eksponentit llogaritet duke e zbritur për 127.

**Detyrë:** Të llogaritet vlera efektive e eksponentit për paraqitjet binare:

$$
E=11011110_2 \tag{1}
$$

$$
E=10100011_2 \tag{2}
$$

---

**Significand (fraksioni, argumenti)** $S$ paraqet pjesën numerike me presje e cila shumëzohet për $2^E$.

Më herët është hasur termi *mantissa* për $S$, por më nuk preferohet përdorimi i saj.

---

Numri i njejtë me presje të lëvizshme mund të shprehet në forma të ndryshme.

**Detyrë:** Të vërtetohet që numrat në vijim janë ekuivalent:

$$
0.110 \times 2^5 \tag{1}
$$

$$
110 \times 2^2 \tag{2}
$$

$$
0.0110 \times 2^6 \tag{3}
$$

---

Për të shmangur paraqitjet e ndryshme të vlerës së njejtë rekomandohet **normalizimi** i numrit.

**Numri i normalizuar** është numri tek i cili shifra e rëndësisë më të madhe nuk është zero.

Për një numër binar themi që është i normalizuar atëherë kur biti më i rëndësishëm është 1.

---

Siç u tha më herët, në paraqitjen e $S$ me presje fikse kemi 1 shifër majtas pikës.

Në këtë rast numri binar i normalizuar ka formën:

$$
\pm 1.bbb\dots b \times 2^{\pm E}
$$
