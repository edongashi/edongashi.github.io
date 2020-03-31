## Algoritmet dhe Strukturat e të Dhënave – Java 5

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
\lim_{n\to+\infty}\frac{f(n)}{g(n)} \tag{1}
$$

Ekzistojnë 3 raste të mundshme varësisht nga vlera e shprehjes $(1)$.

---

Rasti 1:

$$
\lim_{n\to+\infty}\frac{f(n)}{g(n)} = 0
$$

Në këtë rast funksioni $f$ ka shkallë të rritjes më të ulët sesa funksioni $g$.

---

Rasti 2:

$$
\lim_{n\to+\infty}\frac{f(n)}{g(n)} = C \quad \text{ku}\ 0<C<+\infty
$$

Në këtë rast funksioni $f$ ka shkallë të rritjes të njejtë me funksionin $g$.

---

Rasti 3:

$$
\lim_{n\to+\infty}\frac{f(n)}{g(n)} = +\infty
$$

Në këtë rast funksioni $f$ ka shkallë të rritjes më të lartë sesa funksioni $g$.

---

Mund të themi që një funksion $f(n)$ i takon bashkësisë $O(g(n))$
nëse vlera e shprehjes $(1)$ del e fundme.

$$
\lim_{n\to+\infty}\frac{f(n)}{g(n)} < +\infty\ \Rightarrow\ f \in \textrm{O}(g(n))
$$

Pra për dallim nga $\textrm{o}(g(n))$ (Little-O), Big-O lejon që
funksioni $f(n)$ t'i takojë bashkësisë $\textrm{O}(g(n))$ nëse ka
shkallë të njejtë ose më të ulët të rritjes sesa funksioni $g(n)$.

---

Klasat e zakonshme të kompleksitetit që përdoren si referencë janë:

$$
\textrm{O}(1),
\ \textrm{O}(\log{n}),
\ \textrm{O}(n),
\ \textrm{O}(n\log{n}),
\ \textrm{O}(n^2),
\\\textrm{O}(n^3)
\ \dots\ \textrm{O}(n^p),
\ \textrm{O}(e^n),
\ \textrm{O}(n!)
$$

---

## Kompleksiteti kohor dhe hapësinor

Shkallët e rritjes i përdorim për të vlerësuar sa është i ngadalshëm
një algoritëm i cili përpunon një sasi të të dhënave $n$.

Kompleksiteti i ulët është më i dëshirueshëm. Pse?

---

Kompleksiteti kohor tregon rastin më të keq të hapave që duhet t'i ndërmarrë algoritmi.

Komplesiteti hapësinor tregon memorien maksimale të nevojshme për të kryer punën algoritmi.

---

**Detyrë:** Është dhënë funksioni $f(n)$ i cili e llogarit shumën e vargut $v$ me $n$ elemente.

Të tregohet kompleksiteti kohor dhe hapësinor i këtij algoritmi.

---

**Detyrë:** Është dhënë funksioni $f(n)$ i cili e llogarit shumën e matricës katrore $A_{n\times n}$.

Të tregohet kompleksiteti kohor dhe hapësinor i këtij algoritmi.

---

**Detyrë:** Janë dhënë funksionet: shuma e matricës, shuma e elementeve mbi diagonale të matricës.

Të krahasohet kompleksiteti kohor i këtyre dy algoritmeve.

---

**Detyrë:** Të shkruhen dy versione të funksionit që llogarit shumën e numrave $1\dots n$.
Versioni i parë e kryen llogaritjen me unazë.
Versioni i dytë e kryen llogaritjen përmes formulës së serisë aritmetikore.

Të krahasohet kompleksiteti kohor i këtyre dy algoritmeve.

---

**Detyrë:** Të diskutohet kompleksiteti i veprimeve mbi një varg të numrave me gjatësi $n$.

- Shuma.
- Minimumi, maksimumi.
- Plotësimi i kushtit nga një element.
- Plotësimi i kushtit nga secili element.
- Numërimi sa elemente plotësojnë kushtin.

---

**Detyrë:** Të shkruhen dhe të analizohet kompleksiteti i funksioneve të array listës:

- `get`, `set`, `size`, `add`, `remove`, `insert`,
- `each`, `map`, `filter`, `find`, `count`, `any`, `all`, `reduce`, `fold`.

---

**Detyrë:** Të avancohet klasa `ArrayList<T>` me funksione të rendit të lartë.

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
