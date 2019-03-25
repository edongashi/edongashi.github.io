# Numrat me presje të lëvizshme

---

Nëse përdorim 32 bita përmes 2-komplementit, kemi mundësi t'i paraqesim $2^{32}$ kombinime në intervalin $-2^{-31} \dots 2^{31}-1$.

![](/lendet/arkitektura-kompjutereve/int32.png) <!-- .element: style="max-height:300px;border:none;" -->

---

Nëse përdorim IEEE 754 formatin për të përafruar numra real, kemi mundësi të paraqesim intervalet:

- Numrat negativ: $-(-2-2^{-23}\times 2^{128}) \;\dots\; {-2}^{-127}$
- Numrat pozitiv: $2^{-127} \;\dots\; (2 - 2^{-23}) \times 2^{128}$

![](/lendet/arkitektura-kompjutereve/float32.png) <!-- .element: style="max-height:300px;border:none;" -->

---

<!-- .slide: style="font-size: 0.75em" -->

5 regjione mbesin të pa paraqitura

1. Numrat negativ më të vegjël se $-(-2-2^{-23}\times 2^{128})$ - overflow negativ.
2. Numrat Negativ më të mëdhenj se ${-2}^{-127}$ - underflow negativ.
3. Zeroja
4. Numrat pozitiv më të vegjël se $2^{-127}$ - underflow pozitiv.
5. Numrat pozitiv më të mëdhenj se $(2 - 2^{-23}) \times 2^{128}$ - oferflow pozitiv.

---

Problemet:

1. Formati i diskutuar deri më tash nuk ka mundësi ta paraqesë zeron.
2. Overflow ndodh kur rezultati ka vlerë absolute shumë të madhe.
3. Underflow ndodh kur rezultati ka vlerë absolute shumë të vogël.

Underflow mund të përafrohet me zero prandaj nuk paraqet aq humbje sa overflowi.
