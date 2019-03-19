# Sistemet numerike

---

Numrat mund të shprehen në sisteme të ndryshme numerike.

Secila shifër në numër paraqet një vlerë që varet nga:

1. Shifra
2. Pozita e shifrës
3. Baza e sistemit numerik

---

Shifrat në anën e djathtë kanë vlerë më të vogël dhe njihen si shifra të rëndësisë së ulët.

Shifrat në anën e majtë kanë vlerë më të madhe dhe njihen si shifra të rëndësisë së lartë.

- Shifra më e parëndësishmja - më e djathta
- Shifra më e rëndësishmja - më e majta

---

**Sistemi decimal**

Sistem numerik me bazën $10$ ku shifrat janë $0-9$.

Numri $1234$ shprehet si shuma e shifrës shumëzuar për fuqinë e $10$ varësisht nga pozita ku gjendet.

$$
\begin{array}{rl}
& (1{\times}1000) + (2{\times}100) + (3{\times}10) + (4{\times}1) \\
= &(1{\times}10^3) + (2{\times}10^2) + (3{\times}10^1)  + (4{\times}1^0) \\
= &1000 + 200 + 30 + 1 \\
= &1234
\end{array}
$$

---

**Sistemet numerike në teknologji**

| Sistemi numerik | Baza | Shifrat  |
| --------------- | ---- | -------- |
| Binar           | 2    | 0, 1     |
| Oktal           | 8    | 0-7      |
| Heksadecimal    | 16   | 0-9, A-F |

---

**Sistemi binar**

- Përdor vetëm shifrat 0 dhe 1.
- Sistemi numerik me bazë 2.
- Secila pozitë paraqet një fuqi të 2-shit $2^x$ - numërimi i pozitës fillon nga 0.

---

**Shembull:** Shndërrimi i numrit $10101_2$ në decimal.

$$
\begin{array}{l}
10101_2 = (1{\cdot}2^4 + 0{\cdot}2^3 + 1{\cdot}2^2 + 0{\cdot}2^1 + 1{\cdot}2^0)_{10} \\
10101_2 = (16 + 0 + 4 + 0 + 1)_{10} \\
10101_2 = 21_{10} \\
\end{array}
$$

---

**Detyrë:** Të shndërrohen numrat binar në ekuivalentët e tyre decimal:

$$
00101110_2 \tag{1}
$$

$$
10001101_2 \tag{2}
$$

$$
01100100_2 \tag{3}
$$

$$
00011011_2 \tag{4}
$$

---

**Shembull:** Shndërrimi i numrit $75_{10}$ në binar.

$$
\begin{array}{rcrclll}
& & & & & 1001011\\
75 \div 2 & = & 37 & \text{mbetja} & 1 & \uparrow \\
37 \div 2 & = & 18 & \text{mbetja} & 1 & \uparrow \\
18 \div 2 & = & 9  & \text{mbetja} & 0 & \uparrow \\
9  \div 2 & = & 4  & \text{mbetja} & 1 & \uparrow \\
4  \div 2 & = & 2  & \text{mbetja} & 0 & \uparrow \\
2  \div 2 & = & 1  & \text{mbetja} & 0 & \uparrow \\
1  \div 2 & = & 0  & \text{mbetja} & 1 & \uparrow \\
\end{array}
$$

---

**Detyrë:** Të shndërrohen numrat decimal në ekuivalentët e tyre binar:

$$
183_{10} \tag{1}
$$

$$
33_{10} \tag{2}
$$

$$
82_{10} \tag{3}
$$

$$
145_{10} \tag{4}
$$

---

**Sistemi heksadecimal**

- Përdor shifrat $0-9$ dhe vazhdon me shifrat $A-F$.
- Sistemi numerik me bazë 16.
- Secila pozitë paraqet një fuqi të 16-shit $16^x$ - numërimi i pozitës fillon nga 0.

---

| Shifra | Vlera | Shifra | Vlera |
| ------ | ----- | ------ | ----- |
| 0      | 0     | 8      | 8     |
| 1      | 1     | 9      | 9     |
| 2      | 2     | A      | 10    |
| 3      | 3     | B      | 11    |
| 4      | 4     | C      | 12    |
| 5      | 5     | D      | 13    |
| 6      | 6     | E      | 14    |
| 7      | 7     | F      | 15    |

---

**Shndërrimi decimal-heksadecimal:** Sikur procesi decimal-binar me dallimin që pjestojmë me 16.

**Shndërrimi heksadecimal-decimal:** Secila pozitë paraqet një fuqi të 16-shit $16^x$ - numërimi i pozitës fillon nga 0.

---

**Detyrë:** Të shndërrohen numrat heksadecimal në ekuivalentët e tyre decimal:

$$
\text{8B1A}_{16} \tag{1}
$$

$$
\text{D54F}_{16} \tag{2}
$$

$$
\text{2AE067}_{16} \tag{3}
$$

$$
\text{E3A1C0}_{16} \tag{4}
$$

---

**Detyrë:** Të shndërrohen numrat decimal në ekuivalentët e tyre heksadecimal:

$$
43_{10} \tag{1}
$$

$$
85_{10} \tag{2}
$$

$$
241_{10} \tag{3}
$$

$$
135_{10} \tag{4}
$$

---

**Shndërrimi decimal-oktal:** Sikur procesi decimal-binar me dallimin që pjestojmë me 8.

**Shndërrimi oktal-decimal:** Secila pozitë paraqet një fuqi të 8-shit $8^x$ - numërimi i pozitës fillon nga 0.

---

**Detyrë:** Të shndërrohen numrat oktal në ekuivalentët e tyre decimal:

$$
35_{8} \tag{1}
$$

$$
103_{8} \tag{2}
$$

$$
3257_{8} \tag{3}
$$

$$
243_{8} \tag{4}
$$

---

**Detyrë:** Të shndërrohen numrat decimal në ekuivalentët e tyre oktal:

$$
47_{10} \tag{1}
$$

$$
175_{10} \tag{2}
$$

$$
221_{10} \tag{3}
$$

$$
100_{10} \tag{4}
$$

---

**Shndërrimi direkt heksadecimal-binar**

Numrat binar mund të shndërrohen drejtpërdrejt në heksadecimal duke marrë nga 4 shifra binare dhe duke i shndërruar në ekuivalentin e tyre heksadecimal.

E njejta vlen anasjelltas, ku secila shifër heksadecimale shndërrohet në ekuivalentin binar 4-shifror.

---

**Detyrë:** Të shndërrohen numrat në vijim në ekuivalentin e tyre binar:

$$
\text{1AC3BF}_{16} \tag{1}
$$

$$
\text{2EFF50}_{16} \tag{2}
$$

$$
\text{55A201}_{16} \tag{3}
$$

$$
\text{C2AD01}_{16} \tag{4}
$$

---

**Detyrë:** Të shndërrohen numrat në vijim në ekuivalentin e tyre heksadecimal:

$$
1101001110011111_2 \tag{1}
$$

$$
1100001011100001_2 \tag{2}
$$

$$
0010010001010101_2 \tag{3}
$$

$$
0010110110101111_2 \tag{4}
$$

---

**Shndërrimi direkt oktal-binar**

Për shndërrim direkt oktal-binar aplikohet e njejta metodë sikur me shndërrimin heksadecimal-binar, por duke marrë segmente 3-shifrore binare.

---

## Komplementi i numrave binar

- 1-komplementi i një numri binar paraqet numrin i cili ka të gjithë bitat e invertuar.
- 2-komplementi i një numri binar paraqet 1-komplementin e rritur për 1.

---

**Detyrë:** Të gjendet 1-komplementi dhe 2-komplementi i numrave në vijim:

$$
10001111_2 \tag{1}
$$

$$
10010101_2 \tag{2}
$$

$$
01010101_2 \tag{3}
$$

$$
10100111_2 \tag{4}
$$

---

**2-komplementi dhe numrat negativ**

Për numra të kufizuar në një gjatësi 2 komplementi mund të shërbejë si paraqitje e numrave me vlerë negative.

|  b7   |  b6   |  b5   |  b4   |  b3   |  b2   |  b1   |  b0   |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| -128  |  64   |  32   |  16   |   8   |   4   |   2   |   1   |

---

**Detyrë:** Të paraqiten përmes 2-komplementit numrat negativ në vijim:

$$
-43_{10} \tag{1}
$$

$$
-15_{10} \tag{2}
$$

$$
-9_{10} \tag{3}
$$

$$
-132_{10} \tag{4}
$$

---

## Aritmetika e numrave binar

---

**Mbledhja**

$$
\begin{array}{c}
             & \tiny{1} & \tiny{1} & \tiny{ } & \tiny{ } \\
             & 0        & 1        & 1        & 0        \\
\kern-0.5em+ & 0        & 0        & 1        & 1        \\
\hline       & 1        & 0        & 0        & 1
\end{array}
$$

---

**Detyrë:** Të llogariten shprehjet:

$$
00001110_2 + 01000110_2 \tag{1}
$$

$$
10111010_2 + 01001101_2 \tag{2}
$$

$$
00011100_2 + 00101010_2 \tag{3}
$$

$$
01100100_2 + 00100110_2 \tag{4}
$$

---

**Zbritja**

$$
\begin{array}{c}
             & \tiny{ } & \tiny{ } & \tiny{2} & \tiny{ } \\[-.5em]
             & \tiny{ } & \tiny{0} & \tiny{0} & \tiny{2} \\
             & 0        & 1        & 1        & 0        \\
\kern-0.5em- & 0        & 0        & 1        & 1        \\
\hline       & 0        & 0        & 1        & 1
\end{array}
$$

---

**Detyrë:** Të llogariten shprehjet:

$$
01100010_2 - 00101001_2 \tag{1}
$$

$$
11011100_2 - 00100100_2 \tag{2}
$$

$$
00100100_2 - 00101001_2 \tag{3}
$$

$$
01101101_2 - 01101010_2 \tag{4}
$$

---

**Zbritja përmes 2-komplementit**

Ndryshimi $a-b$ mund të shprehet si $a+(-b)$, ku $-b$ llogaritet përmes 2-komplementit të numrit $b$.

---

**Detyrë:** Të llogariten shprehjet duke e shprehur ndryshimin si shumë me 2-komplementin e zbritësit:

$$
01011100_2 - 00001101_2 \tag{1}
$$

$$
01000010_2 - 00111111_2 \tag{2}
$$

$$
01001101_2 - 00100010_2 \tag{3}
$$

$$
01011010_2 - 01100011_2 \tag{4}
$$

---

**Shumëzimi**

$$
\begin{array}{c}
             &   &   &        & 0 & 0 & 1 & 0 \\
             &   &   & \times & 0 & 1 & 1 & 0 \\
\hline       &   &   &        & 0 & 0 & 0 & 0 \\
             &   &   & 0      & 0 & 1 & 0 \\
             &   & 0 & 0      & 1 & 0 \\
\kern-0.5em+ & 0 & 0 & 0      & 0 \\
\hline       & 0 & 0 & 0      & 1 & 1 & 0 & 0
\end{array}
$$

---

**Detyrë:** Të llogariten shprehjet:

$$
00011111_2 \times 0101_2 \tag{1}
$$

$$
00111011_2 \times 0011_2 \tag{2}
$$

$$
00101101_2 \times 0100_2 \tag{3}
$$

$$
00001011_2 \times 0111_2 \tag{4}
$$

---

**Pjesëtimi**

$$
\begin{array}{ll}
\phantom{-}1101                       & \kern-1em \div 10 = 0110 \text{ M } 1 \\
\underline{-10\phantom{00}}           & \\
\phantom{-}010\phantom{0}             & \\
\underline{-\phantom{0}10\phantom{0}} & \\
\phantom{-}\phantom{0}001             & \\
\end{array}
$$

---

**Detyrë:** Të llogariten shprehjet:

$$
01001101_2 \div 0101_2 \tag{1}
$$

$$
00111100_2 \div 0011_2 \tag{2}
$$

$$
01000100_2 \div 0100_2 \tag{3}
$$

$$
01010001_2 \div 0110_2 \tag{4}
$$

---

**Detyrë:** Të llogariten shprehjet:

$$
01010111_2 \land 10010110_2 \tag{1}
$$

$$
11110011_2 \lor 01000111_2 \tag{2}
$$

$$
01011000_2 \oplus 10011101_2 \tag{3}
$$

$$
00110101_2 \otimes 11110111_2 \tag{4}
$$
