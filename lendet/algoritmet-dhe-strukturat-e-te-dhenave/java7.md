## Algoritmet dhe Strukturat e të Dhënave – Java 7

---

## Notacioni asimptotik – Big-O

Një funksion $f(n)$ themi se i takon bashkësisë
$\textrm{O}(g(n))$ nëse ekziston një $k>0$ e fundme ashtu që:

$$
0 \leq f(n) \leq kg(n)
$$

Për çdo $n > n_0$ ku $n_0$ është konstante e fundme.

---

Shkallët e rritjes për dy funksione mund t'i vlerësojmë me limitin e mëposhtëm:

$$
\lim_{n\to\infty}\frac{f(n)}{g(n)} \tag{1}
$$

Ekzistojnë 3 raste të mundshme varësisht nga vlera e shprehjes $(1)$.

---

Rasti 1:

$$
\lim_{n\to\infty}\frac{f(n)}{g(n)} = 0
$$

Në këtë rast funksioni $f$ ka shkallë të rritjes më të ulët sesa funksioni $g$.

---

Rasti 2:

$$
\lim_{n\to\infty}\frac{f(n)}{g(n)} = C \quad \text{ku}\ 0<C<\infty
$$

Në këtë rast funksioni $f$ ka shkallë të rritjes të njëjtë me funksionin $g$.

---

Rasti 3:

$$
\lim_{n\to\infty}\frac{f(n)}{g(n)} = \infty
$$

Në këtë rast funksioni $f$ ka shkallë të rritjes më të lartë sesa funksioni $g$.

---

Mund të themi se një funksion $f(n)$ i takon bashkësisë $O(g(n))$
nëse vlera e shprehjes $(1)$ del e fundme.

$$
\lim_{n\to\infty}\frac{f(n)}{g(n)} < \infty\ \Rightarrow\ f \in \textrm{O}(g(n))
$$

Pra, funksioni $f(n)$ i takon bashkësisë $\textrm{O}(g(n))$ nëse ka shkallë të njëjtë
ose më të ulët të rritjes sesa funksioni $g(n)$ (rastet 1 dhe 2).

---

Klasat e zakonshme të kompleksitetit që përdoren si referencë për big-O janë:

$$
\begin{array}{c}
\textrm{O}(1),
\ \textrm{O}(\log{n}),
\ \textrm{O}(n),
\ \textrm{O}(n\log{n}),\\
\ \textrm{O}(n^2),
\ \textrm{O}(n^3)
\ \dots\ \textrm{O}(n^p),
\ \textrm{O}(e^n),
\ \textrm{O}(n!)
\end{array}
$$

---

**Detyrë:** Të gjendet big-O e funksionit $f(n)$ në vazhdim.

$$
f(n) = \frac{n(n-1)}{2}
$$

---

**Detyrë:** Të gjendet big-O e funksionit $f(n)$ në vazhdim.

$$
f(n) = 2n + 3
$$

---

**Detyrë:** Të gjendet big-O e funksionit $f(n)$ në vazhdim.

$$
f(n) = 9999
$$

---

**Detyrë:** Të gjendet big-O e funksionit $f(n)$ në vazhdim.

$$
f(n) = n^3 + n^2 + n + 1
$$

---

**Detyrë:** Të gjendet big-O e funksionit $f(n)$ në vazhdim.

$$
f(n) = n + log(n)
$$

---

**Detyrë:** Të gjendet big-O e funksionit $f(n)$ në vazhdim.

$$
f(n) = 3n\ln(2n)
$$

---

**Detyrë:** Të gjendet big-O e funksionit $f(n)$ në vazhdim.

$$
f(n) = 2^n + n
$$

---

## Kompleksiteti kohor dhe hapësinor

Shkallët e rritjes i përdorim për të vlerësuar sa është i ngadalshëm
një algoritëm i cili përpunon një sasi të të dhënave $n$.

Kompleksiteti i ulët është më i dëshirueshëm. Pse?

---

Kompleksiteti kohor përshkruan sa zgjat ekzekutimi i algoritmit relativisht me madhësinë e problemit.

Kompleksiteti hapësinor përshkruan sa memorie i nevojitet algoritmit relativisht me madhësinë e problemit.

Zakonisht përdoret notacioni big-O për ta ditur kufirin e sipërm të rritjes (rastin më të keq).

---

Zakonisht nuk na intereson për kohën absolute të ekzekutimit të algoritmit, psh. në sekonda,
sepse kjo varet nga hardueri dhe detaje tjera të parëndësishme.

Neve na intereson shkalla e rritjes së kohës dhe hapësirës të algoritmit me zmadhimin e problemit.

Psh., shuma e vargut me $n$ elemente kërkon $n$ cikle të unazës,
ndërsa e matricës kërkon $n^2$ cikle të unazës.

---

**Detyrë:** Është dhënë funksioni $f(n)$ i cili llogarit shumën e vargut $v$ me $n$ elemente.

Të tregohet kompleksiteti kohor dhe hapësinor i këtij algoritmi përmes notacionit big-O.

---

**Detyrë:** Është dhënë funksioni $f(n)$ i cili llogarit shumën e matricës katrore $A_{n\times n}$.

Të tregohet kompleksiteti kohor dhe hapësinor i këtij algoritmi përmes notacionit big-O.

---

**Detyrë:** Janë dhënë funksionet: shuma e matricës, shuma e elementeve mbi diagonale të matricës.

Të tregohen kompleksitetet kohore dhe të krahasohen shkallët e rritjes së këtyre dy algoritmeve.

---

**Detyrë:** Të shkruhen dy versione të funksionit për llogaritjen e shumës së serisë $1\dots n$.

1. Versioni i parë kryen llogaritjen me unazë.
2. Versioni i dytë kryen llogaritjen përmes formulës së serisë aritmetike.

Të tregohen kompleksitetet kohore dhe të krahasohen shkallët e rritjes së këtyre dy algoritmeve.

---

**Detyrë:** Të diskutohet kompleksiteti i veprimeve mbi një varg të numrave me gjatësi $n$.

- Shuma.
- Minimumi, maksimumi.
- Plotësimi i kushtit nga një element.
- Plotësimi i kushtit nga secili element.
- Numërimi sa elemente plotësojnë kushtin.

---

**Detyrë:** Të diskutohet kompleksiteti i veprimeve të strukturës `ArrayList`
për metodat: `get`, `set`, `size`, `add`, `remove`, `insert`.

---

**Detyrë:** Të diskutohet kompleksiteti i veprimeve të strukturës `Stack`
për metodat: `push`, `pop`, `size`.

---

**Detyrë:** Të diskutohet kompleksiteti i veprimeve të strukturës `Queue`
për metodat: `enqueue`, `dequeue`, `size`.
