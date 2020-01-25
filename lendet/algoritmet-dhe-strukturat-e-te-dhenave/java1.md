## Algoritmet dhe Strukturat e të Dhënave - Java 1

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

Variablat lokale alokohen në memorien e funksionit aktual -- stack memoria.

Ato nuk shihen nga jashtë, si dhe humbasin në momentin qe mbyllet blloku i funksionit (stack frame).

Variablat lokale janë adresat memorike në një distancë fikse ndaj stack pointerit aktual.

---

## Pointerët

---

**Pointerët** janë variabla të tipit integer të cilat mbajnë një adresë.
Zakonisht në atë adresë ruhet ndonjë vlerë e tipit të caktuar, psh. `int`, `double`, etj.

Deklarimi i pointerit: `tipi *emri`.

Kodi në vazhdim i deklaron dy pointerë `x` dhe `y`.

```cpp
int *x;
double *y;
```

---

Pointeri është thjeshtë një variabël numerike që mban një adresë.

Kjo vlerë mund t'i nënshtrohet llogaritjeve aritmetikore si çdo integer tjetër.

```cpp
int *x;
x = 4; // sa për demonstrim
int *y;
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

Shprehjet `v[0]`, `*v`, `*(v+0)` janë ekuivalente,

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
int *ptr1 = vargu + 1;
int *ptr2 = vargu + 3;
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
int *ptr = &a;
cout << *ptr; // shfaqet 5
```

---

**Përmbledhje - pointerët**

Deklarimi `int *x = &a` tregon që kemi një pointer `x` për një shënim `a` të tipit `int`.

Shprehja `x` tregon adresën ku gjendet shënimi `a`.

Shprehja `*x` tregon vlerën që gjendet në atë adresë, dmth. vlerën e shënimit `a`.

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int a = 5;
int b = 8;
int *x = &a;
int *y = (*x % 2 == 0) ? (&a) : (&b);
cout << *x + *y;
```

---

## Referencat

Nëse kemi një l-value `a`, atëherë mund të krijojmë një alias për `a` përmes deklarimit `tipi &b = a`.

```cpp
int a = 5;
int &b = a;
b = 3;
cout << a; // shfaqet 3
```

Aliasi `b` ka lokacion memorik të njejtë me variablën `a`, prandaj paraqesin të njejtin shënim.

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
int a = 2;
int *ptr = &a;
int &b = a;
*ptr = 3;
cout << b;
```

Sikur te pointerët, simboli `&` te deklarimi i referencës ka kuptim tjetër me operatorin e adresës `&a`.

---

Referencat mund t'i përdorim në parametra të funksioneve.

```cpp
void nderro(int &a, int &b) {
  int temp = a;
  b = a;
  a = temp;
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

- Parametrat normale të funksioneve në C++ janë pass-by-value (përmes kopjimit).
- Nëse i deklarojmë si parametra referent, atëherë thirrja bëhet pass-by-reference (përmes adresës).

---

Kur kemi thirrje përmes referencës:

- Nuk kopjohet vlera e argumentit, por adresa e tij -- parametri bëhet alias i argumentit.
- Argumenti duhet të jetë l-value -- nuk mund të kemi alias në r-value.
- Nëse ndryshon vlera e argumentit, ndryshimet barten në bllokun thirrës.
