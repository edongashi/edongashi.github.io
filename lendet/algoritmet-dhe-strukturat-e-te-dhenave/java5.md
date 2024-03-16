## Algoritmet dhe Strukturat e të Dhënave – Java 5

---

## Array listat

Vargjet me alokim statik kanë disa kufizime:

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

**Detyrë:** Të shkruhet një version i thjeshtë i klasës `ArrayList` e cila mban një varg të numrave të plotë.

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

Në librarinë standarde array lista ofrohet me tipin [`vector<T>`](https://en.cppreference.com/w/cpp/container/vector):

```cpp
#include <iostream>
#include <vector>

int main() {
  std::vector<int> v = { 8, 4, 5, 9 };

  v.push_back(6);
  v.push_back(9);
  v[2] = -1;

  for (int n : v) {
    std::cout << n << ' ';
  }
}
```

---

**Detyrë:** Të përdoret klasa e gatshme `vector<T>` për të shtuar, larguar, dhe zëvendësuar elemente sipas dëshirës.

Pas këtyre veprimeve, të shtypet lista në ekran.

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
