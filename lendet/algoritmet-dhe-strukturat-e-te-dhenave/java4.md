## Algoritmet dhe Strukturat e të Dhënave – Java 4

---

## Array listat

Vargjet me alokim statik kanë disa kufizime.

- Madhësia duhet të jetë konstante.
- Duhet ta dimë paraprakisht sa hapësirë (elemente) të rezervojmë.
- Nuk mund të shtojmë ose largojmë elemente.

---

**Lista** është një strukturë e të dhënave që mundëson:

- Mbajtjen e një numri variabil të elementeve.
- Shtim dhe largim të elementeve.
- Zmadhim dhe zvogëlim sipas nevojës.

---

Dy implementime kryesore të listave janë:

- Listat përmes vargjeve – **array list**.
- Listat me nyje të lidhura – **linked list**.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/lists.png)

---

Operacionet themelore që ofrojnë listat:

- Leximi i elementeve
- Shtimi i elementeve
- Zëvendësimi i elementeve
- Largimi i elementeve

---

## Array lista

Strukturë që mban një varg në të cilin ruhen elementet në formë të njëpasnjëshme.

---

**Leximi i elementit në pozitën `i`**

Merr elementin në indeksin `i` të vargut.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-read.png) <!-- .element: style="border:none;" -->

---

**Zëvendësimi i elementit në pozitën `i`**

Vendose elementin e ri në indeksin `i` të vargut.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-write.png) <!-- .element: style="border:none;" -->

---

**Shtimi i elementit në fund**

Vendos elementin në pozitën `n`.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-push.png) <!-- .element: style="border:none;" -->

---

**Shtimi i elementit në pozitën `i`**

Krijo hapësirë për elementin duke i shtyer elementet e mbetura në të djathtë.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-insert.png) <!-- .element: style="border:none;" -->

---

**Largimi i elementit në fund**

Largoje elementin nga pozita `n-1`.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-pop.png) <!-- .element: style="border:none;" -->

---

**Largimi i elementit në pozitën `i`**

Zhvendosi elementet e mbetura në të majtë.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-remove.png ) <!-- .element: style="border:none;" -->

---

**Tejkalimi i madhësisë së vargut**

Nëse për shkak të një operacioni shtimi tejkalohet madhësia e vargut,
duhet ta krijojmë një varg të ri me madhësi dyfishe të së vjetrit.

Të gjitha elementet kopjohen në vargun e ri, e pastaj kryhet operacioni.

---

**Detyrë:** Të shkruhet një version i thjeshtë i klasës array list e cila mban një varg të numrave të plotë.

Kapaciteti maksimal i listës të jetë numër fiks, psh. 100.

--

```cpp
#include <iostream>
using namespace std;

class ArrayList {
  private:
  int data[100];
  int n;

  public:
  ArrayList() {
    this->n = 0;
  }

  int at(int index) {
    if (index < 0 || index >= n) {
      throw "Jashte kufijve.";
    }

    return this->data[index];
  }

  void set(int index, int element) {
    if (index < 0 || index >= n) {
      throw "Jashte kufijve.";
    }

    this->data[index] = element;
  }

  int length() {
    return this->n;
  }

  void remove(int index) {
    if (index < 0 || index >= n) {
      throw "Jashte kufijve.";
    }

    for (int i = index; i < n - 1; i++) {
      this->data[i] = this->data[i + 1];
    }

    this->n--;
  }

  void add(int element) {
    if (this->n >= 100) {
      throw "Nuk ka hapesire.";
    }

    data[n] = element;
    this->n++;
  }

  void shtyp() {
    cout << "[ ";
    for (int i = 0; i < this->n; i++) {
      cout << this->data[i];
      if (i < this->n - 1) {
        cout << ", ";
      } else {
        cout << " ";
      }
    }

    cout << "]" << endl;
  }
};

int main() {
  ArrayList lista = ArrayList();
  lista.shtyp();
  // []

  lista.add(5);
  lista.shtyp();
  // [5]

  lista.add(10);
  lista.shtyp();
  // [5, 10]

  lista.add(-3);
  lista.shtyp();
  // [5, 10, -3]

  lista.set(1, 7);
  lista.shtyp();
  // [5, 7, -3]

  lista.add(15);
  lista.shtyp();
  // [5, 7, -3, 15]

  lista.add(25);
  lista.shtyp();
  // [5, 7, -3, 15, 25]

  lista.remove(2);
  lista.shtyp();
  // [5, 7, 15, 25]

  return 0;
}
```

---

**Detyrë:** Të avancohet klasa `ArrayList` ashtu që të ketë kapacitet dinamik.

--

```cpp
#include <iostream>
#define INITIAL_CAPACITY 4
using namespace std;

class ArrayList {
  private:
  int* data;
  int n;
  int capacity;

  void resize() {
    int newCapacity = 2 * capacity;
    int* newData    = new int[newCapacity];
    for (int i = 0; i < this->n; i++) {
      newData[i] = this->data[i];
    }

    delete[] this->data;
    this->data     = newData;
    this->capacity = newCapacity;
  }

  ArrayList(const ArrayList&) = delete;
  ArrayList& operator=(const ArrayList&) = delete;

  public:
  ArrayList() {
    this->n        = 0;
    this->capacity = INITIAL_CAPACITY;
    this->data     = new int[INITIAL_CAPACITY];
  }

  ArrayList(ArrayList&& rval) {
    this->n        = rval.n;
    this->capacity = rval.capacity;
    this->data     = rval.data;
    rval.data      = NULL;
  }

  ~ArrayList() {
    delete[] this->data;
  }

  int at(int index) {
    if (index < 0 || index >= this->n) {
      throw "Jashte kufijve.";
    }

    return this->data[index];
  }

  void set(int index, int element) {
    if (index < 0 || index >= this->n) {
      throw "Jashte kufijve.";
    }

    this->data[index] = element;
  }

  int length() {
    return this->n;
  }

  int getCapacity() {
    return this->capacity;
  }

  void remove(int index) {
    if (index < 0 || index >= this->n) {
      throw "Jashte kufijve.";
    }

    for (int i = index; i < n - 1; i++) {
      this->data[i] = this->data[i + 1];
    }

    this->n--;
  }

  void add(int element) {
    if (this->n >= this->capacity) {
      this->resize();
    }

    data[n] = element;
    this->n++;
  }

  void shtyp() {
    cout << "[ ";
    for (int i = 0; i < this->n; i++) {
      cout << this->data[i];
      if (i < this->n - 1) {
        cout << ", ";
      } else {
        cout << " ";
      }
    }

    cout << "]" << endl;
  }
};

int main() {
  ArrayList lista = ArrayList();

  lista.shtyp();
  cout << "Kapaciteti: " << lista.getCapacity() << endl;

  for (int i = 0; i < 10; i++) {
    lista.add(i + 1);
  }

  lista.shtyp();
  cout << "Kapaciteti: " << lista.getCapacity() << endl;

  return 0;
}
```

---

**Detyrë:** Të avancohet klasa `ArrayList` ashtu që të mbajë çfarëdo tipi `T`.

--

```cpp
#include <iostream>
#define INITIAL_CAPACITY 4
using namespace std;

template<typename T>
class ArrayList {
  private:
  T* data;
  int n;
  int capacity;

  void resize() {
    int newCapacity = 2 * capacity;
    T* newData      = new T[newCapacity];
    for (int i = 0; i < this->n; i++) {
      newData[i] = this->data[i];
    }

    delete[] this->data;
    this->data     = newData;
    this->capacity = newCapacity;
  }

  ArrayList(const ArrayList&) = delete;
  ArrayList& operator=(const ArrayList&) = delete;

  public:
  ArrayList() {
    this->n        = 0;
    this->capacity = INITIAL_CAPACITY;
    this->data     = new T[INITIAL_CAPACITY];
  }

  ArrayList(ArrayList&& rval) {
    this->n        = rval.n;
    this->capacity = rval.capacity;
    this->data     = rval.data;
    rval.data      = NULL;
  }

  ~ArrayList() {
    delete[] this->data;
  }

  T at(int index) {
    if (index < 0 || index >= this->n) {
      throw "Jashte kufijve.";
    }

    return this->data[index];
  }

  void set(int index, int element) {
    if (index < 0 || index >= this->n) {
      throw "Jashte kufijve.";
    }

    this->data[index] = element;
  }

  int length() {
    return this->n;
  }

  int getCapacity() {
    return this->capacity;
  }

  void remove(int index) {
    if (index < 0 || index >= this->n) {
      throw "Jashte kufijve.";
    }

    for (int i = index; i < n - 1; i++) {
      this->data[i] = this->data[i + 1];
    }

    this->n--;
  }

  ArrayList<T>& add(T element) {
    if (this->n >= this->capacity) {
      this->resize();
    }

    data[n] = element;
    this->n++;
    return *this;
  }

  void shtyp() {
    cout << "[ ";
    for (int i = 0; i < this->n; i++) {
      cout << this->data[i];
      if (i < this->n - 1) {
        cout << ", ";
      } else {
        cout << " ";
      }
    }

    cout << "]" << endl;
  }
};

int main() {
  ArrayList<int> lista_int = ArrayList<int>();
  lista_int.add(1);
  lista_int.add(2);
  lista_int.add(3);
  lista_int.shtyp();

  ArrayList<int> lista = ArrayList<int>();
  lista.add(5).add(3).add(10).add(11).shtyp();

  ArrayList<string> lista_str = ArrayList<string>();
  lista_str.add("Hello");
  lista_str.add("Howdy");
  lista_str.add("Hi");
  lista_str.shtyp();

  ArrayList<char> lista_char = ArrayList<char>();
  lista_char.add('a');
  lista_char.add('b');
  lista_char.add('c');
  cout << lista_char.length() << endl;
  cout << lista_char.at(1) << endl;

  return 0;
}
```

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
