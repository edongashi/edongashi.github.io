## Algoritmet dhe Strukturat e të Dhënave – Java 4

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
