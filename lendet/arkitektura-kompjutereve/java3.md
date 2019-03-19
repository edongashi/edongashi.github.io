# Numrat me presje të lëvizshme

---

Përmes formatit binar të 2-komplementit kemi arritur të paraqesim numra të plotë pozitiv dhe negativ në një interval të caktuar.

Shtrohet pyetja si duhet të paraqiten numrat jo të plotë?

---

Nëse paraqesim numrat si dy komponente - të majtë dhe të djathtë të presjes, kemi formatin:

$$
bbbb\;.\;bbbb
$$

Ky format ka probleme pasi që nuk mund të paraqesë numra shumë të mëdhenj ose shumë të vegjël.

---

**Konvertimi binar - decimal**

Konvertimi binar-decimal për pjesën e plotë është i njejtë, ndërsa për pjesën pas presjes fuqitë merren negative.

$$
\dots \;\overbrace{1}^{2^{3}}\;\overbrace{1}^{2^{2}}\;\overbrace{0}^{2^{1}}\;\overbrace{0}^{2^{0}}\;.\;\overbrace{0}^{2^{-1}}\;\overbrace{1}^{2^{-2}}\;\overbrace{0}^{2^{-3}}\;\overbrace{1}^{2^{-4}} \dots
$$

---

**Detyrë:** Të konvertohen numrat binar në ekuivalentët e tyre decimal:

$$
1001.01010110_2 \tag{1}
$$

$$
0111.11000101_2 \tag{2}
$$

$$
0011.10001001_2 \tag{3}
$$

$$
1011.01000101_2 \tag{4}
$$

---

**Konvertimi decimal - binar**

- Pjesa e plotë - pjestojmë me 2 duke marrur mbetjen. Numri lexohet nga poshtë-lart.
- Pjesa pas presjes - shumëzojmë me 2 duke marrur pjesën e plotë. Numri lexohet nga lart-poshtë.

Procesi për pjesën pas presjes mund të ndërpritet pas një numri të caktuar të hapave. Kjo shkakton humbje të saktësisë por kursim të bitave.

---

**Detyrë:** Të konvertohen numrat decimal në ekuivalentët e tyre binar:

$$
11.5625_{10} \tag{1}
$$

$$
19.125_{10} \tag{2}
$$

$$
1.3_{10} \tag{3}
$$

$$
23.75_{10} \tag{4}
$$

---

Problemi i presjes fikse mund të tejkalohet duke i paraqitur numrat në format shkencor të formës:

$$
\pm S \times B^{\pm E}
$$

- Shenja e numrit (pozitive ose negative)
- $S$ - significand (fraksioni)
- $B$ - baza numerike
- $E$ - eksponenti (pozitiv ose negativ)

---

Duke përdorur formën $\pm S \times B^{\pm E}$ presjen e lëvizim duke kontrolluar vlerën e eksponentit $E$, ndërsa $S$ ka format fiks të formës $d.ddd\dots$

**Shembull**: Forma shkencore me bazën 10:

$$
2.76 \times 10^{15} \\
1.50 \times 10^{-3} \\
4.00 \times 10^{2}
$$

---

Numri i formës $\pm S \times B^{\pm E}$ mund të paraqitet përmes komponenteve binare:

- Shenja paraqitet si 1 bit (0=pozitiv, 1=negativ).
- Significand (fraksioni, argumenti) $S$ paraqitet si numër i plotë me gjatësi fikse me 1 bit majtas presjes $b.bbb\dots$
- Baza $B=2$ në formë implicite.
- Eksponenti $E$ paraqitet si numër i plotë pozitiv ose negativ.

---

**Detyrë:** Të konvertohen numrat binar në ekuivalentët e tyre decimal:

$$
1.1010 \times 2^{-2} \tag{1}
$$

$$
0.101101 \times 2^{1} \tag{2}
$$

$$
1.111001 \times 2^{3} \tag{3}
$$

$$
0.1 \times 2^{6} \tag{4}
$$

---

**Standardi IEEE 754** është forma më e zakonshme e paraqitjes së numrave me presje të lëvizshme. Numri paraqitet si bashkësi e 32 bitave (single-precision) dhe 64 bitave (double-precision).

![](/lendet/arkitektura-kompjutereve/IEEE_754.png) <!-- .element: style="max-height:400px;border:none;" -->

---

**Shenja** ka 1 bit, ku:

- 0 paraqet numër pozitiv
- 1 paraqet numër negativ

Kur numri paraqet zero, në formatin float kemi zero pozitive dhe zero negative ($+0$ dhe $-0$). Pse?

---

**Eksponenti** $E$ paraqet eksponentin e 2-shit që i shumëzohet thyesës. Në single-precision ka $k=8$ bita.

Vlera e eksponentit nuk paraqet numër të zakonshëm binar, por vlerë të **shtyrë (biased)** për një vlerë fikse.

Zakonisht $\text{bias}=(2^{k-1}-1)$, ku $k$ - numri i bitave. Në float kjo vlerë është 127, që dmth vlerat efektive tërhiqen nga $[0\dots 255]$ në $[-127\dots 128]$. Pse?

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

**Significand (fraksioni)** $S$ paraqet pjesën numerike me presje fikse e cila shumëzohet për $2^\pm E$.

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

**Numër i normalizuar** është numri i cili ka shifrën e rëndësisë më të madhe jo-zero.

Për një numër binar themi që është i normalizuar atëherë kur biti më i rëndësishëm është 1.

---

Siç u tha më herët, në paraqitjen e $S$ me presje fikse kemi 1 shifër majtas pikës.

Në këtë rast numri binar i normalizuar ka formën:

$$
\pm 1.bbb\dots b \times 2^{\pm E}
$$

---

**Detyrë:** Të normalizohen numrat e dhënë binar:

$$
101.11010 \times 2^{2} \tag{1}
$$

$$
00001101 \times 2^{-1} \tag{2}
$$

$$
0.111100 \times 2^{-5} \tag{3}
$$

$$
111010.01 \times 2^{4} \tag{4}
$$

---

Pasi që numri ruhet në formë të normalizuar, gjithmonë dihet që pjesa e plotë ka vlerën 1.

Për këtë arsye në IEEE 754 nuk ruhet numri në të majtë të presjes. Të gjithë 23 bitat përdorën për ta paraqitur një numër në intervalin gjysmë të hapur $[1,2)$.

$$
1.b_{22} b_{21} b_{20} \dots b_{0}
$$

---

**Përmbledhje për IEEE 754**

- Shenja - 1 bit (0=pozitive, 1=negative)
- Fraksioni - 23 bit për pjesën pas presjes $1.bbb\dots$ (nuk ruhet 1-shi).
- Eksponenti - numër i plotë 8 bitsh i rritur për 127.
- Baza - gjithmonë 2.

![](/lendet/arkitektura-kompjutereve/IEEE_754.png) <!-- .element: style="max-height:400px;border:none;" -->

---

**Detyrë:** Të paraqiten numrat decimal sipas formatit IEEE 754:

$$
42.78125_{10} \tag{1}
$$

$$
5.625_{10} \tag{2}
$$

$$
44.25_{10} \tag{3}
$$

$$
5.0_{10} \tag{3}
$$

---

**Detyrë:** Të konvertohet numri i formatit IEEE 754 në ekuivalentin decimal:

$$
0\;10000010\;10001010000000000000000_2 \tag{1}
$$

$$
1\;10000000\;00000000000000000000000_2 \tag{2}
$$

$$
1\;10001010\;01001110010110000000000_2 \tag{3}
$$

$$
0\;10000010\;10010000000000000000000_2 \tag{4}
$$
