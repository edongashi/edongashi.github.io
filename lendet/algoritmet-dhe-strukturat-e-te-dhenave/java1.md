## Algoritmet dhe Strukturat e të Dhënave – Java 1

Edon Gashi

edon.gashi@uni-pr.edu

edongashi.github.io

---

## Përsëritje

---

Memoria është një varg bajtash ku ruhen shënime.

Secili bajt i memories ka një adresë unike.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java1/img2.png)

---

Zakonisht ne nuk i qasemi direkt vlerave në memorie.

Qasjen në të dhëna e bëjmë përmes **variablave**.

Kompajlleri kujdeset për shndërrimet e nevojshme.

---

Variabla është emërtim për një hapësirë memorike.

```cpp
int x = 5;
int y = 3;
int z = -2;
```

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java1/img1.png)

---

Variablat lokale alokohen në memorien e funksionit aktual – stack memoria.

Ato nuk shihen nga jashtë, si dhe humbasin në momentin qe mbyllet blloku i funksionit (stack frame).

Variablat lokale janë adresa memorike në një distancë fikse ndaj stack pointerit aktual.

---

## Pointerët dhe referencat

---

**Pointerët** janë variabla të tipit integer të cilat mbajnë një adresë.
Zakonisht në atë adresë ruhet ndonjë vlerë e tipit të caktuar, psh. `int`, `double`, etj.

Deklarimi i pointerit: `tipi* emri`.

Kodi në vazhdim i deklaron dy pointerë `x` dhe `y`.

```cpp
int* x;
double* y;
```

---

Pointeri është thjeshtë një variabël numerike që mban një adresë (32-bit ose 64-bit).

Kjo vlerë mund t'i nënshtrohet llogaritjeve aritmetikore si çdo integer tjetër.

```cpp
int* x;
x = 4; // sa për demonstrim
int* y;
y = x + 1; // merr vlerën 5
```

---

Nëse kemi një pointer `x` atëherë:

- Shprehja `x` e jep vlerën pointerit `x` (adresën).
- Shprehja `*x` e jep vlerën që gjendet në adresën `x`.

Operatori `*x` për cilindo pointer `x` njihet si **operator i dereferencimit**.

---

Është dhënë memoria në vazhdim si dhe pointeri `x` i cili ka vlerën 3.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java1/img3.png)

---

Vargu është pointer që tregon adresën e elementit të parë në rendin e elementeve.

```cpp
int vargu[5] = { 8, 2, 5, 7, 6 };
cout << *vargu;       // shfaqet 8
cout << *(vargu + 3); // shfaqet 7
cout << vargu[3];     // shfaqet 7
```

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java1/img4.png)

---

Nëse kemi një pointer `v`, psh. në një varg.

```cpp
int v[5] = { 3, 2, 1, 5, 6 };
```

Shprehjet `v[i]` dhe `*(v+i)` janë ekuivalente.

Shprehjet `v[0]`, `*v`, `*(v+0)` janë ekuivalente.

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int vargu[4] = { 2, 1, 0, 5 };
int s = 0;
for (int i = 0; i < 4; i++) {
  s += *(vargu + i);
}

cout << s;
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int vargu[4] = { 3, 7, 1, -2 };
int* ptr1 = vargu + 1;
int* ptr2 = vargu + 3;
cout << *ptr1 + *(ptr2 - 1);
```

**Kujdes:** Ylli (`*`) gjatë deklarimit ka kuptim tjetër prej yllit gjatë dereferencimit.

---

**L-Values**

Rikujtim: Cilado shprehje që mund të paraqitet në anën e majtë të shoqërimit (`=`) quhet l-value.

Vlerat numerike dhe rezultatet e llogaritjeve nuk mund të paraqiten në anën e majtë:

```cpp
2 + 3 = a; // gabim
```

---

**Operatori &**

Përmes operatorit `&` mund t'ia marrim adresën e një l-value.
Ky operator kthen një pointer për adresën memorike ku gjendet shprehja.

```cpp
int a = 5;
int* ptr = &a;
cout << *ptr; // shfaqet 5
```

---

**Përmbledhje – pointerët**

Deklarimi `int *x = &a` tregon që kemi një pointer `x` për një shënim `a` të tipit `int`.

Shprehja `x` tregon adresën ku gjendet shënimi `a`.

Shprehja `*x` tregon vlerën që gjendet në atë adresë, dmth. vlerën e shënimit `a`.

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int a = 5;
int b = 8;
int* x = &a;
int* y = ((*x) % 2 == 0) ? (&a) : (&b);
cout << *x + *y;
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int a = 4;
int b = *(&a);
cout << b;
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
double v[5] = { -2, 5.3, 3, 1, 2.2 };
double* ptr = v + 1;
cout << ptr[0] + ptr[2];
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int v[5] = { -2, 5, 3, 1, 2 };
int* ptr = v + 2;
int* a = &ptr[-1];
int* b = &v[3];
(*a)++;
*b = ptr[-2];
cout << v[0] + v[1] + v[2] + v[3] + v[4];
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int v[5] = { -2, 5, 3, 1, 2 };
int* ptr = v;
int a = *(ptr++);
int b = *ptr;
cout << a + b;
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int a = 1, b = 2, c = 3;
int *x = &a, *y = &b, *z = &c;
y = z;
z = x;
x = y;
cout << *x << ", " << *y << ", " << *z;
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int a = 1, b = 2, c = 3;
int *x = &a, *y = &b, *z = &c;
int* v[3] = { x, y, z };
cout << *(v[1]);
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int a = 4, b = 5;
int* x = &a, *y = &b;
int** ptr = (a > b) ? (&x) : (&y);
cout << **ptr;
```

---

**Pointerët në struktura**

Pointerët mund të adresojnë edhe tipe komplekse.

Qasja në anëtarët bëhet përmes operatorit `->`.

```cpp
struct Drejtkendeshi { int gjeresia; int lartesia; };

int main() {
  Drejtkendeshi a = { 3, 4 };
  Drejtkendeshi* ptr = &a;
  cout << "Gjeresia: " << (*ptr).gjeresia << endl;
  cout << "Lartesia: " << ptr->lartesia << endl;
  return 0;
}
```

---

### Memoria dinamike

Shpesh nuk e dimë sa hapësirë na nevojitet për shënime, psh. gjatësia e vargut.

Me operatorin `new` kërkojmë nga sistemi operativ një bllok të memories me madhësi të dëshiruar.

---

Rezultati i `new` është një **pointer** për bllokun e bajtave të alokuar në **heap**.

**Heap memoria** është memorie e procesit e cila jeton më gjatë sesa blloku i funksionit.

Zakonisht pointerët nuk na nevojiten për vlera lokale, por për vlera në heap.

---

Sintaksa: `new tipi` për një element, `new tipi[n]` për varg.
Rezultati i operacionit është pointer `*tipi`.

**Shembull:** Alokimi dinamik i një vargu:

```cpp
int n;
cout << "Sa elemente i deshironi ne varg? ";
cin >> n;
int* vargu = new int[n];
// vargu[0], vargu[1], ... vargu[n - 1]
```

---

**Shembull:** Alokimi dinamik i një strukture:

```cpp
struct Drejtkendeshi { int gjeresia; int lartesia; };

Drejtkendeshi* krijo(int a, int b) {
  Drejtkendeshi* rez = new Drejtkendeshi;
  rez->gjeresia = a;
  rez->lartesia = b;
  return rez;
}

int main() {
  Drejtkendeshi* x = krijo(2, 3);
  cout << x->lartesia;
  return 0;
}
```

---

Stack quajmë memorien statike të bllokut të funksionit.

Heap quajmë memorien e përbashkët të procesit.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java1/img5.png)

---

Operatori `new` është i rrezikshëm, pasi që memoria e alokuar nuk fshihet vetvetiu (edhe pas përfundimit të bllokut aktual).

Fshirja e memories së alokuar dinamikisht bëhet përmes `delete` (një element) dhe `delete[]` (varg).

---

**Shembull:** Alokimi dinamik për variablën `n` dhe vargun `vargu[n]`, dhe pastaj fshierja e tyre:

```cpp
int main() {
  int* n = new int;
  cout << "Sa elemente i deshironi ne varg? ";
  cin >> *n;
  int* vargu = new int[*n];

  // ... kryejmë llogaritje

  // pastrojmë memorien
  delete n;
  delete[] vargu;
  return 0;
}
```

---

**Null pointeri**

Ndonjëherë na duhet të tregojmë që pointeri nuk paraqet asnjë lokacion memorik.

Në këto raste vlera e pointerit e merr vleren 0, që zakonisht quhet `NULL`.

```cpp
int* x = NULL; // nuk ka vlerë.
```

NULL pointeri nuk mund të dereferencohet.

---

## Referencat

Nëse kemi një l-value `a`, atëherë mund të krijojmë një alias për `a` përmes deklarimit `tipi& b = a`.

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

Sikur te pointerët, simboli `&` te deklarimi i referencës ka kuptim tjetër me operatorin e adresës `&a`.

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

**Detyrë:** Të shkruhet funksioni `llogarit` i cili e llogarit shumën dhe prodhimin
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

**Kujdes:** Vlerat lokale nuk guxojnë të kthehen, pasi që kanë jetëgjatësi vetëm në bllokun aktual.

```cpp
int& alfa() {
  int n = 5;
  return n; // gabim
}
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

**Detyrë:** Të shkruhet funksioni `llogarit` i cili e llogarit shumën dhe prodhimin
nga `1` deri në `n`, dhe rezultatet i vendos në adresat e pointerëve `*s` dhe `*p`.

```cpp
void llogarit(int n, int* s, int* p);
```

---

## Detyra shtesë

---

**Detyrë:** Të shkruhet funksioni `swap(a, b)` në variantin me pointerë dhe me referenca.

Të thirren te dy variantet nga `main` dhe të vrojtohen dallimet sintaksore.

---

**Detyrë:** Të shkruhet funksioni `kopjo(v[], n)` i cili kopjon një varg dhe kthen një pointer për kopjen e vargut.

---

<!-- .slide: style="font-size:0.8em;" -->

**Detyrë**

- Të deklarohet struktura `Drejtkendeshi`.
- Të shkruhet funksioni `lexo()`, i cili dinamikisht alokon një drejtkëndësh dhe e mbush me vlera nga tastiera.
- Në `main` të krijohet një varg prej `n` drejtkëndëshave (`n` të lexohet nga tastiera). Të mbushet vargu nga tastiera përmes funksionit `lexo`.
- Të gjendet sipërfaqja totale e të gjithë drejtkëndëshave (përmes funksionit `siperfaqja`).
- Të lirohen të gjitha resurset e alokuara.

--

```cpp
#include <iostream>
using namespace std;

struct Drejtkendeshi { int a; int b; };

Drejtkendeshi* lexo() {
  int a, b;
  cout << "Shtyp a: ";
  cin >> a;
  cout << "Shtyp b: ";
  cin >> b;
  return new Drejtkendeshi { a, b };
}

int siperfaqja(Drejtkendeshi *d) {
  return d->a * d->b;
}

int main() {
  int n;
  cout << "Jepni numrin e drejtkendeshave: ";
  cin >> n;
  Drejtkendeshi** drejtkendeshat = new Drejtkendeshi*[n];
  for (int i = 0; i < n; i++) {
    cout << "Drejtkendeshi " << (i + 1) << endl;
    drejtkendeshat[i] = lexo();
  }

  int s = 0;
  for (int i = 0; i < n; i++) {
    s += siperfaqja(drejtkendeshat[i]);
  }

  cout << "Siperfaqja totale: " << s;

  for (int i = 0; i < n; i++) {
    // Lirimi i alokimeve individuale.
    delete drejtkendeshat[i];
  }

  // Lirimi i vargut të pointerëve.
  delete[] drejtkendeshat;
  return 0;
}
```
