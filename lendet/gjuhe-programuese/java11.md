# Gjuhë Programuese - Java 11

---

## Funksionet (vazhdim)

---

**Rikujtim:** Funksioni është një bllok i parametrizuar i urdhërave i cili mund të kthejë vlerë.

```cpp
int mbledh(int a, int b) {
  return a + b;
}
```

$$
\text{mbledh}(a \in \mathbb{Z} , b \in \mathbb{Z}) = (a + b) \in \mathbb{Z}
$$

---

Funksioni ka **domenin** dhe **rangun**.

- Domeni - cilat vlera i pranon funksioni?
- Rangu - çfare vlera kthen funksioni?

---

Funksioni në C++ nuk identifikohet vetëm nga **emri** por edhe nga **domeni**.

$$
\text{max}(a \in \mathbb{Z}, b \in \mathbb{Z}) \in \mathbb{Z}
$$

dhe:

$$
\text{max}(a \in \mathbb{Z}, b \in \mathbb{Z}, c \in \mathbb{Z}) \in \mathbb{Z}
$$

janë të ndryshme, edhe pse kanë emër të njejtë.

---

Konkretisht, kodi i mëposhtëm kompajllohet pa gabime.

```cpp
int max(int a, int b) {
  return a > b ? a : b;
}

int max(int a, int b, int c) {
  int max = a > b ? a : b;
  return max > c ? max : c;
}
```

Kjo lejohet sepse funksionet kanë domen të ndryshëm, edhe pse emri është i njejti.

---

Gjatë thirrjes së funksioneve të mbingarkuara, kompajlleri e identifikon funksionin e duhur duke shikuar **tipet** dhe **numrin** e argumenteve.

Mbingarkimet janë të dobishme kur kemi një bashkësi të veprimeve të ngjashme.

---

Shembull:

```cpp
double shuma(double a, double b) {
  return a + b;
}

int shuma(int a, int b) {
  return a + b;
}
```

Natyra e funksioneve `shuma` e llogaritë shumën e numrave `a` dhe `b`.

---

**Kujdes!** Funksioni nuk guxon të mbingarkohet vetëm përmes tipit kthyes:

```cpp
int shuma(int a, int b);
double shuma(int a, int b); // Gabim!
```

**Rikujtim:** Funksioni identifikohet nga **emri** dhe **parametrat** (domeni).

---

**Detyrë:** Të krijohet natyra e funksioneve `shuma`, ku funksionet marrin 2, 3, dhe 4 parametra të `int`.

E njejta të përsëritet edhe për tipin `double`.

---

**Detyrë:** Të krijohet funksioni diskret dhe kontinual `y(x)` për shprehjen në vijim:

$$
y(x) = \dfrac{2x}{3}
$$

Të thirret ky funksion me vlerat `5` dhe `5.0` dhe të shfaqen rezultatet.

---

**Direktivat paraprocesorike**

Rreshtat që fillojnë me `#` njihen si urdhëra paraprocesorik.

---

Urdhërat paraprocesorik ekzekutohen para se të fillojë kompajllimi i programit.

Një urdhër i thjeshtë është `#DEFINE` i cili zëvendëson tekstin me diçka tjetër - sikur find and replace në programet tekstuale.

---

**Shembull:**

```cpp
#define PI 3.14

...

cout << 2 * PI
```

Kudo që shihet `PI` zëvendësohet me 3.14

---

**Detyrë:** Të shkruhet funksionet `siperfaqja` dhe `perimetri` të cilat pranojnë vlerën e rrezës `r` dhe kthejnë sipërfaqen dhe perimetrin e rrethit. Vlera PI të definohet përmes `#define`.

---

Definimet shpesh përdoren për t'iu shoqëruar emra vlerave konstante numerike, psh PI.

Përveç kësaj, definimet janë të përshtatshme për t'i dhënë kuptim numrave sipas nevojave tona.

---

**Shembull:** Definimi i ngjyrave të semaforit:

```cpp
#define KUQE 0
#define VERDHE 1
#define GJELBER 2

void statusi(int ngjyra) {
  switch (ngjyra) {
    case KUQE:    cout << "Stop.";        break;
    case VERDHE:  cout << "Gati.";        break;
    case GJELBER: cout << "Nisu.";        break;
    default:      cout << "S'ka kuptim."; break;
  }
}
```

---

Më e kapshme është të themi `KUQE`, `VERDHE`, `GJELBER` sesa `0`, `1`,` 2`.

Gjithashtu zvogëlohet shanca për gabime.

---

Me këtë filozofi punojnë shkronjat dhe simbolet në kompjuter.

Shkronjës `A` i shoqërohet numri `65`, shkronjës `B` i shoqërohet numri `66`, etj...

---

Zëvendësimet përmes `#define` mund të jenë edhe parametrike. Këto njihen si macro, dhe zakonisht nuk preferohet përdorimi i tyre.

```cpp
#define max(a, b) (a > b ? a : b)

...

cout << max(2, 3);
```

Edhe pse thirrja e macros duket si funksion i zakonshëm, ajo në realitet zëvendësohet para kompajllimit me trupin e makros.

---

**Detyrë:** Të shkruhet macro `abs(x)` e cila zëvendësohet me shprehjen për vlerën absolute të x.

---

## Detyra shtesë

---

Të shkruhen funksionet e mbingarkuara `shuma`. Funksioni i parë merr një varg ndërsa i dyti merr një matricë. Të dy funksionet kthejnë shumën e strukturës së dërguar.

---

Të shkruhet programi i cili definon të gjitha ditët e javës si konstante, dhe përmes një funksioni të bëhet switch vlera e ditës dhe shfaqet dita përkatëse.

---

Të shkruhet funksioni i cili llogarit determinantën e matricës katrore të madhësisë 3.

---

Të shkruhet funksioni i cili llogarit shprehjen:

$$
f(n,x) = \begin{cases}
\sum_{i=1}^{n}{i} \quad & x \geq 0 \\
\prod_{i=1}^{n}{i} \quad & x < 0
\end{cases}
$$

---

Të shkruhen funksioni i cili llogarit produktin skalar të dy vargjeve.
