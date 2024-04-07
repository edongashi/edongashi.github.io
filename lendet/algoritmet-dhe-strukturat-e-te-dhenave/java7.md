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

Kompleksiteti kohor përshkruan sa zgjatë ekzekutimi i algoritmit relativisht me madhësinë e problemit.

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

---

Kur kemi mësuar për funksionet anonime, kemi thënë se funksioni që pranon ose kthen një funksion
njihet si *funksion i rendit të lartë*.

Këto funksione janë të dobishme për të abstraktuar veprimet mbi lista dhe struktura tjera
të të dhënave.

---

<!-- .slide: style="font-size:0.8em;" -->

Disa nga funksionet e rendit të lartë për lista janë:

- `map(f)` - kthe një listë të re ku secili element `x` bëhet `f(x)`.
- `filter(f)` - kthe një listë të re që përmban vetëm elementet `x` që plotësojnë kushtin `f(x)`.
- `count(f)` - numëro sa elemente `x` plotësojnë kushtin `f(x)`.
- `all(f)` - a plotësojnë **të gjitha** elementet `x` kushtin `f(x)`?
- `any(f)` - a plotëson **ndonjë** element `x` kushtin `f(x)`?

---

**Detyrë:** Të avancohet klasa `ArrayList<T>` me funksionet e rendit të lartë `each`, `map`, `filter`, `find`, `count`, `any`, `all`, `reduce`, `fold`, etj.

Të diskutohet kompleksiteti kohor dhe hapësinor i këtyre funksioneve.

--

```cpp
#include <functional>
#include <iostream>
#define INITIAL_CAPACITY 4
#define fn(arg, expr) ([](auto arg) { return (expr); })
using namespace std;

template<typename T, typename U>
using func = function<U(T)>;

template<typename T1, typename T2, typename U>
using func2 = function<U(T1, T2)>;

template<typename F, typename T>
using result = typename result_of<F&(T&)>::type;

template<typename T>
class ArrayList {
  private:
  T* data;
  int n;
  int capacity;

  void checkIndex(int index) {
    if (index < 0 || index >= n) {
      throw "Out of bounds.";
    }
  }

  void resize() {
    int newCapacity = this->capacity * 2;
    T* newData      = new T[newCapacity];
    for (int i = 0; i < this->n; i++) {
      newData[i] = this->data[i];
    }

    delete[] this->data;
    this->capacity = newCapacity;
    this->data     = newData;
  }

  ArrayList(const ArrayList&) = delete;
  ArrayList& operator=(const ArrayList&) = delete;

  public:
  ArrayList() {
    this->capacity = INITIAL_CAPACITY;
    this->data     = new T[INITIAL_CAPACITY];
    this->n        = 0;
  }

  ArrayList(ArrayList&& rval) {
    this->capacity = rval.capacity;
    this->data     = rval.data;
    this->n        = rval.n;
    rval.data      = NULL;
  }

  ~ArrayList() {
    delete[] this->data;
  }

  T get(int index) {
    this->checkIndex(index);
    return this->data[index];
  }

  void set(int index, T element) {
    this->checkIndex(index);
    this->data[index] = element;
  }

  int length() {
    return this->n;
  }

  void add(T element) {
    if (this->n == this->capacity) {
      this->resize();
    }

    this->data[n++] = element;
  }

  void insert(int index, T element) {
    if (index == this->n) {
      this->add(element);
      return;
    }

    this->checkIndex(index);
    if (this->n == this->capacity) {
      this->resize();
    }

    for (int i = this->n; i > index; i--) {
      this->data[i] = this->data[i - 1];
    }

    this->data[index] = element;
    this->n++;
  }

  void remove(int index) {
    this->checkIndex(index);
    for (int i = index; i < n - 1; i++) {
      this->data[i] = this->data[i + 1];
    }

    this->n--;
  }

  template<typename F, typename U = result<F, T>>
  ArrayList<U> map(F f) {
    ArrayList<U> result = ArrayList<U>();

    for (int i = 0; i < this->n; i++) {
      result.add(f(this->data[i]));
    }

    return result;
  }

  ArrayList<T> filter(func<T, bool> predicate) {
    ArrayList<T> result = ArrayList<T>();

    for (int i = 0; i < this->n; i++) {
      if (predicate(this->data[i])) {
        result.add(this->data[i]);
      }
    }

    return result;
  }

  int count(func<T, bool> predicate) {
    int c = 0;
    for (int i = 0; i < this->n; i++) {
      if (predicate(this->data[i])) {
        c++;
      }
    }

    return c;
  }

  // f :: (T, T) -> T
  T reduce(func2<T, T, T> f) {
    if (this->n == 0) {
      throw "Nuk ka elemente.";
    }

    T acc = this->data[0];
    for (int i = 1; i < this->n; i++) {
      acc = f(acc, this->data[i]);
    }

    return acc;
  }

  // f :: (Acc, T) -> Acc
  template<typename F, typename Acc>
  Acc fold(F f, Acc seed) {
    Acc acc = seed;
    for (int i = 0; i < this->n; i++) {
      acc = f(acc, this->data[i]);
    }

    return acc;
  }

  bool any(func<T, bool> predicate) {
    for (int i = 0; i < this->n; i++) {
      if (predicate(this->data[i])) {
        return true;
      }
    }

    return false;
  }

  bool all(func<T, bool> predicate) {
    for (int i = 0; i < this->n; i++) {
      if (!predicate(this->data[i])) {
        return false;
      }
    }

    return true;
  }

  ArrayList<T>& print() {
    cout << "[";
    for (int i = 0; i < this->n; i++) {
      cout << this->data[i];
      if (i < this->n - 1) {
        cout << ", ";
      }
    }

    cout << "]" << endl;
    return *this;
  }
};
```
