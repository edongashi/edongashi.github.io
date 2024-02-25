## Algoritmet dhe Strukturat e të Dhënave – Java 2

---

## Përsëritje

1. Dallimi ndërmjet `int x` dhe `int* x`?
2. L-value dhe R-value?
3. Operatorët `&` dhe `*`?
4. Stack dhe heap?

--

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java1/img5.png)

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int a = 5, b = 10;
int* x = &a;
int* y = &b;
a++;
*y += *x;
cout << a << ", " << b;
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int v[3] = { 4, 1, 7};
int x = *v;
int* y = &x;
*y = 5;
cout << x << ", " << v[0];
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int v[3] = { 4, 1, 7};
int* x = v;
int* y = v + 1;
cout << *(x + *y + 1);
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
struct Drejtkendeshi { int a; int b; };

int main() {
  Drejtkendeshi* d = new Drejtkendeshi{ 5, 3 };
  int* brinja = &(d->a);
  d->a = 7;
  d->b = 6;
  cout << *brinja;
}
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int* a = new int{ 5 };
int* b = new int{ 3 };
int* max = *a > *b ? a : b;
*a = 6;
*b = 8;
a = b;
cout << *max;
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int* a = new int{ 5 };
int* b = new int{ 3 };
int** max = *a > *b ? &a : &b;
*a = 6;
*b = 8;
a = b;
cout << **max;
```

---

## Referencat

---

Nëse kemi një l-value `a`, atëherë mund ta krijojmë një alias për `a` përmes deklarimit `tipi& b = a`.

```cpp
int a = 5;
int& b = a;
b = 3;
cout << a; // shfaqet 3
```

Aliasi `b` ka lokacion memorik të njëjtë me variablën `a`, prandaj paraqesin të njëjtin shënim.

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int a = 2;
int* ptr = &a;
int& b = a;
*ptr = 3;
cout << b;
```

Sikur te pointerët, simboli `&` te deklarimi i referencës ka kuptim tjetër nga operatori i adresës `&a`.

---

Referencat mund t'i përdorim në parametra të funksioneve.

```cpp
void nderro(int& a, int& b) {
  int temp = a;
  a = b;
  b = temp;
}

int main() {
  int x = 3, y = 5;
  nderro(x, y);
  cout << x << ", " << y; // Shfaqet 5, 3
  return 0;
}
```

---

**Bartja përmes vlerës dhe referencës**

- Parametrat e zakonshëm të funksioneve në C++ janë pass-by-value (përmes kopjimit).
- Nëse i deklarojmë si parametra referent, atëherë thirrja bëhet pass-by-reference (përmes adresës).

---

Kur kemi thirrje përmes referencës:

- Nuk kopjohet vlera e argumentit, por adresa e tij – parametri bëhet alias i argumentit.
- Argumenti duhet të jetë l-value – nuk mund të kemi alias në r-value.
- Nëse ndryshon vlera e argumentit, ndryshimet barten në bllokun thirrës.

---

**Detyrë:** Të shkruhet funksioni `llogarit` i cili llogarit shumën dhe prodhimin
nga `1` deri në `n`, dhe rezultatet i vendos në parametrat referent `s` dhe `p`.

```cpp
void llogarit(int n, int &s, int &p);
```

---

**Kthimi përmes referencës**

Një funksion poashtu mund të kthejë l-value përmes referencës.

```cpp
int& elementi(int* v, int i) {
  return v[i];
}

int main() {
  int vargu[5] = { 7, 4, 5, 8, 2 };
  elementi(vargu, 3) = -1;
  cout << vargu[3]; // shfaqet -1
  return 0;
}
```

---

**Kujdes:** Vlerat lokale nuk lejohen të kthehen, pasi që kanë jetëgjatësi vetëm në bllokun aktual.

```cpp
int& alfa() {
  int n = 5;
  return n; // gabim
}
```

---

**Referencat konstante**

Shpesh bartjen e bëjmë përmes referencës për ta evituar kopjimin që vie me bartjen përmes vlerës.

Deklarimi i variablës/parametrit si `const tipi&` mundëson krijimin e një aliasi të pandryshueshëm.

```cpp
void funksioni(const int& x) {
  const int &y = x;
}
```

---

**Rregulla djathtë-majtë për const**

Deklarimin e një tipi e lexojmë nga e djathta në të majtën.
Fjala kyçe `const` aplikohet në të dhënën më të afërt të majtë që shohim.

Përjashtim bën `const` e fundit në të majtë, me ç'rast e dhëna në të djathtë bëhet konstante.

```cpp
const int x;        // int konstant
int const x;        // int konstant
int *x;             // pointer në int
int const *x;       // pointer në int konstant
int *const x;       // pointer konstant në int
const int *const x; // pointer konstant në int konstant
```

---

Dërgimi dhe kthimi sipas referencës mund të bëhet edhe përmes pointerëve.

```cpp
int* elementi(int* v, int i) {
  return &v[i]; // ose v+i
}
```

Faktikisht, forma përmes `&` përkthehet nga kompajlleri në ekuivalentën e saj me pointerë.

---

Shembulli i mëparshëm me referenca konstante:

```cpp
void funksioni(const int& x) {
  const int &y = x;
}
```

është ekuivalent me:

```cpp
void funksioni(const int* const x) {
  const int* const y = x;
}
```

---

**Detyrë:** Të shkruhet funksioni `llogarit` i cili llogarit shumën dhe prodhimin
nga `1` deri në `n`, dhe rezultatet i vendos në adresat e pointerëve `*s` dhe `*p`.

```cpp
void llogarit(int n, int* s, int* p);
```

---

## Detyra shtesë

---

**Detyrë:** Të shkruhet funksioni `swap(a,b)` në variantin me pointerë dhe me referenca.

Të thirren te dy variantet nga `main` dhe të vrojtohen dallimet sintaksore.

---

**Detyrë:** Të shkruhet funksioni `max(v,n)` i cili pranon si parametra një varg të numrave të plotë dhe madhësinë e tij.

Funksioni si rezultat kthen një referencë për elementin maksimal në varg.

---

**Detyrë:** Të shkruhet funksioni `max(v,n)` sikur në detyrën paraprake, por duke kthyer pointer për elementin maksimal.

---

<!-- .slide: style="font-size:0.8em;" -->

**Detyrë:**

1. Të deklarohet struktura `Lista` me fushat `numrat[100]` dhe `nr_elemente`.
2. Lista mban deri maksimalisht 100 elemente, por vetëm `nr_elemente` e para i konsiderojmë se kanë shënime.
3. Të shkruhen funksionet `lexo(&lista,indeksi)`, `shto(&lista,numri)` dhe `zbraz(&lista)`.
4. Në `main` të deklarohet një listë e zbrazët dhe të thirren funksionet e sipërme.
