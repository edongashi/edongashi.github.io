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
& (1\times1000) + (2\times100) + (3\times10) + (4\times1) \\
= &(1\times10^3) + (2\times10^2) + (3\times10^1)  + (4\times1^0) \\
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

- Përdor vetëm shifrat 0 dhe 1
- Sistemi numerik me bazë 2
- Secila pozitë paraqet një fuqi të 2-shit $2^x$ - numërimi i pozitës fillon nga 0

---

**Shembull:** Shndërrimi i numrit $10101_2$ në decimal.

$$
\begin{array}{cl}
& 10101_2 = (1\times2^4 + 0\times2^3 + 1\times2^2 + 0\times2^1 + 1\times2^1)_{10} \\
& 10101_2 = (16 + 0 + 4 + 0 + 1)_{10} \\
& 10101_2 = 21_{10} \\
\end{array}
$$

---

**Detyra** Të shndërrohen numrat binar në ekuivalentët e tyre decimal:

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

**Detyra** Të shndërrohen numrat decimal në ekuivalentët e tyre binar:

$$
183_{10} \tag{1}
$$

$$
82_{10} \tag{2}
$$

$$
145_{10} \tag{3}
$$

$$
33_{10} \tag{4}
$$
