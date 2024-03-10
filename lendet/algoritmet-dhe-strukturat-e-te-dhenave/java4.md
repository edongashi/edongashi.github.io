## Algoritmet dhe Strukturat e të Dhënave – Java 4

---

## Përsëritje

- Çfarë janë klasat?
- Ku dallojnë **public** dhe **private**?
- Çfarë janë: fushat, konstruktorët, metodat?

---

<!-- .slide: style="font-size:0.8em;" -->

**Detyrë:** Të shkruhet klasa `Studenti` me fushat private `emri`, `mbiemri`, dhe `notat[5]`.

- Të shkruhen metodat `notaMesatare` dhe `emriPlote`.
- Të shkruhet konstruktori për inicializim të fushave.
- Të mbishkruhet konstruktori i kopjimit dhe operatori i shoqërimit.
- Në `main` të deklarohen dy studentë dhe të ruhet në një variabël studenti me notën mesatare më të madhe.
- Të shtypet në ekran emri i plotë i këtij studenti.

---

Kur mund të themi se dy objekte janë të njëjta?

- Kur kanë karakteristikat identike, apo
- Kur gjenden në adresën e njëjtë?

Nuk ka përgjigje definitive për këtë pyetje – varet nga konteksti i përdorimit.

---

Secila klasë në C++ ka një konstruktor të kopjimit.

Nëse nuk mbishkruhet, nënkuptohet si kopjim i të gjitha fushave përmes vlerës.

Kopja përmes vlerës quhet **kopje e cekët**, pasi që nuk kopjon objektet e referencuara nga pointerët.

**Kopja e thellë** kopjon edhe objektet e referencuara.

---

Shpesh do të dizajnojmë tipe të cilat nuk kemi dëshirë të kopjohen në mënyrë implicite.

Për këtë arsye e ndalojmë operatorin `=` dhe konstruktorin `T(T&)` me `delete`:

```cpp
class Studenti {
private:
  // Konstruktori i kopjimit.
  Studenti(const Studenti&) = delete;
  // Operatori i shoqërimit.
  Studenti& operator=(const Studenti&) = delete;
};
```

---

Tipet që nuk mund të kopjohen mund të bartën vetëm përmes referencës. Pse?

---

**Semantikat e lëvizjes**

Lëvizja e objektit nënkupton bartjen e pronësisë së resurseve që i menaxhon te një objekt tjetër.

Kjo është më efikase sesa kopjimi i thellë.

Objekti burimor "humb" pronësinë, duke ia pamundësuar lirimin e resurseve në destruktor.

---

Në C++ 11 është shtuar një tip i ri i referencës – referencat në R-Values.

Shënohet ngjashëm me referencat e zakonshme:

```cpp
void funksioni(Tipi&& rval) {
  ...
}
```

---

**Move constructori** mundëson bartjen e vlerave nga një R-Value të përkohshme në objektin e anës së majtë.

```cpp
class Studenti {
public:
  // Konstruktori i lëvizjes.
  Studenti(Studenti&& tjeter) { ... }
};
```

Kjo na nevojitet për të shmangur kopjimin e tipeve referente të alokuara statikisht.

---

Pra, për një tip referent i vendosim këto kushtëzime:

- Nuk lejohen kopjime implicite.
- E bartim vetëm përmes referencës.
- E kthejmë përmes referencës, ose
- E kthejmë përmes lëvizjes (shkëmbimit).

---

<!-- .slide: style="font-size:0.8em;" -->

**Detyrë:** Të shkruhet klasa `Varg` me anëtarët:

- Fushat private `data` e tipit `int*` dhe `n` e tipit `int`.
- Konstruktorin `Varg(*data, n)` i cili inicializon fushat përmes kopjimit.
- Konstruktorët për ndalim të kopjes por lejim të lëvizjes.
- Destruktorin `~Varg()` i cili liron memorien `data`.
- Funksionin `at(i)` i cili kthen elementin në pozitën `i`.
- Funksionin `length()` i cili kthen gjatësinë e vargut.

---

## Programimi gjenerik

Funksionet na kanë mundësuar ta gjeneralizojmë logjikën për çfarëdo vlere të parametrit `x`.

Ndonjëherë mund ta gjeneralizojmë një logjikë ose strukturë për çfarëdo tipi `T`.

---

Funksioni që mund të aplikohet mbi tipe të ndryshme quhet funksion gjenerik (ang. **generic**).

Struktura e të dhënave që mund të mbajë tipe të ndryshme quhet tip i të dhënave gjenerik.

---

Në C++ gjeneralizimi i funksioneve dhe tipeve arrihet përmes **templates** (shablloneve).

Sintaksa:

```cpp
template<typename T1, typename T2, typename TRez, ...>
TRez funksioni(T1 arg1, T2 arg2, ...) {
  ...
}

template<typename T>
struct Tipi {
  T fusha;
};
```

---

**Shembull:** Struktura `Varg<T>` mban një varg dhe gjatësinë e saj për çfarëdo tipi `T`:

```cpp
template<typename T>
struct Varg {
  T* data;
  int n;
};

int main() {
  int ptr1[4] = { 1, 2, 3, 4 };
  char ptr2[3] = { 'a', 'b', 'c' };
  Varg<int>  v1 = {ptr1, 4};
  Varg<char> v2 = {ptr2, 3};
  return 0;
}
```

---

Shumë tipe të ndryshme të të dhënave ndajnë natyrë të njëjtë të sjelljes.
Funksionet e gjeneralizuara e nxjerrin të përbashkët këtë logjikë.

Në vend se të kemi shumë mbingarkime, ndonjëherë mund ta kemi një funksion të vetëm.

---

**Detyrë:** Të shkruhet funksioni `swap(T& a, T& b)` i cili ndërron vendet e dy variablave të tipit `T`.

---

**Detyrë:** Të gjeneralizohet tipi `Varg` ashtu që të mbajë çfarëdo tipi `T`, pra `Varg<T>`.

---

Shpesh kompajlleri kupton llojin e variablës prej vlerës së inicializuar nga ana e djathtë.

Në këto raste variablën mund ta deklarojmë si **auto**.

```cpp
auto x = 3;              // int
auto y = 1.5;            // double
auto z = "pershendetje"; // const char*
```

---

**Detyrë:** Të tregohen tipet e variablave në vijim.

```cpp
auto a = 5;
auto b = a / 2.0;
auto c = (b > 3.0);
auto d = a % 2;
auto e = (c ? 'x' : 'y');
```

---

## Funksionet anonime

Kur një funksion përdoret si shprehje atëherë njihet si funksion anonim ose lambda shprehje.

Këto shprehje nuk janë doemos të lidhura me ndonjë identifikator.

---

Funksioni si shprehje ka tipin `function<U(T)>`.

Ky funksion merr një argument `T` dhe kthen një vlerë `U`.

Ky tip gjendet në headerin `<functional>`.

---

Sintaksa për lambda shprehje:

```cpp
[konteksti](tipi1 arg1, tipi2 arg2, ...) -> tipi_kthyes {
  ...
  return ...;
}
```

Kur tipi kthyes është i nënkuptuar nga kompajlleri mund të mos shkruhet fare.

---

**Shembull:** Lambda që teston a është argumenti çift.

```cpp
[](int x) -> bool { return x % 2 == 0; }
```

Ose shkurtimisht:

```cpp
[](int x) { return x % 2 == 0; }
```

---

Kur dëshirojmë ta përdorim një lambda zakonisht e lidhim për ndonjë variabël:

```cpp
function<bool(int)> eshte_cift = [](int x) -> bool {
  return x % 2 == 0;
};
```

Ose shkurtimisht:

```cpp
auto eshte_cift = [](int x) { return x % 2 == 0; };
```

---

Zakonisht jemi mësuar që variablat të mbajnë shënime. Në këto shembuj variablat po mbajnë funksione.

Lambdat ruhen si instanca të tipeve speciale të quajtura **function object** ose **functor**.

---

**Shembull:** Thirrja e funksionit anonim.

```cpp
#include <iostream>
using namespace std;

int main() {
  auto eshte_cift = [](int x) { return x % 2 == 0; };

  if (eshte_cift(2)) {
    cout << "Numer cift." << endl;
  } else {
    cout << "Numer tek."  << endl;
  }
  return 0;
}
```

---

**Detyrë:** Të tregohet dalja në ekran për kodin në vazhdim.

```cpp
auto funks1 = [](int x) { return x + 2; };
auto funks2 = [](int x) { return x - 1; };
auto f = (2 > 3) ? (funks1) : (funks2);
cout << f(4);
```

---

**Detyrë:** Të deklarohen 3 lambda për veprimet:

- Katrori i numrit.
- Vlera absolute e numrit.
- Trefishi i numrit.

Në `main` të lidhen këto vlera për variabla lokale dhe të thirren me ndonjë argument sipas dëshirës.

---

Pasi që lambdat janë shprehje, ato mund të përdoren si parametra dhe vlera kthyese të funksioneve.

Funksionet që pranojnë ose kthejnë funksione tjera njihen si **funksione të rendit të lartë**.

Në të ardhmën do të mësojmë funksione të shpeshta si `map`, `filter`, `reduce`, `any`, `all`, etj.

---

**Shembull:** Funksioni që teston a vlen një predikat për një argument të dhënë.

```cpp
void testo(int vlera, function<bool(int)> predikati) {
  if (predikati(vlera)) {
    cout << "Kushti vlen." << endl;
  } else {
    cout << "Kushti nuk vlen" << endl;
  }
}
...
testo(7, [](int x) { return x > 5; });
testo(2, [](int x) { return x > 5; });
testo(3, [](int x) { return x % 2 == 0; });
```

---

**Detyrë:** Të shkruhet funksioni `ekziston(v,n,f)`, i cili pranon një varg të numrave
dhe kthen `true` nëse së paku ndonjëri prej tyre përmbush kushtin `f` (predikatin).

---

**Konteksti i funksionit anonim**

Trupi i lambdës mund të referencojë vlera nga blloku i deklarimit të saj.

Kapja mund të bëhet përmes vlerës ose përmes referencës.

Instanca e funksionit bashkë me rrethinën e saj (vlerat e kapura) njihet si **closure**.

---

Kapja përmes vlerës dhe referencës:

```cpp
int shtesa = 2;
auto zmadho_val = [shtesa](int x)  { return x + shtesa; };
auto zmadho_ref = [&shtesa](int x) { return x + shtesa; };
shtesa++;
cout << zmadho_val(5) << endl;
cout << zmadho_ref(5) << endl;
```

---

Ekzistojnë dy sintaksa shkurtesë:

- `[=]` i kap automatikisht vlerat e përdorura përmes **vlerës**.
- `[&]` i kap automatikisht vlerat e përdorura përmes **referencës**.

---

Në shumë gjuhë lambdat shënohen me sintaksen shigjetë: $x => \text{trupi}(x)$.

Funksionin katrori mund ta interpretojmë si transformimin: $x \Rightarrow x^2$.

---

Në C++, sintaksën me shigjetë mund ta imitojmë përmes `#define`:

```cpp
#define lambda(arg, expr) ([](auto arg) { return (expr); })

lambda(x, x * x) // x => x * x
```

---

Tipin `function<U(T)>` mund ta shkruajmë edhe si:

```cpp
template<typename T, typename U>
using func = function<U(T)>;
```

Psh. tipi `func<int,bool>` paraqet funksionin që merr një `int` dhe kthen një `bool`.

```cpp
func<int, bool> eshte_cift = lambda(x, x % 2 == 0);
```

---

**Detyrë:** Të shkruhet funksioni i rendit të lartë `shuma(n,f)` i cili llogarit shumën $\sum{f(i)}$ për $i\in 1\dots n$.

$$
\text{shuma}(n, f) = \sum_{i=1}^{n}{f(i)}
$$

--

```cpp
#include <iostream>
#include <functional>
#define lambda(arg, expr) ([](auto arg) { return (expr); })
using namespace std;

template<typename T, typename U>
using func = function<U(T)>;

int shuma(int n, func<int, int> f) {
  int s = 0;
  for (int i = 1; i <= n; i++) {
    s += f(i);
  }

  return s;
}

int main() {
  int n;
  cout << "Shtyp n: ";
  cin >> n;

  // Sintaksa e zakonshme
  cout << shuma(n, [](int i) { return 3 * i + 2; }) << endl;
  cout << shuma(n, [](int x) { return x * x; }) << endl;

  // Macro
  cout << shuma(n, lambda(i, 3 * i + 2)) << endl;
  cout << shuma(n, lambda(x, x * x)) << endl;

  return 0;
}
```

---

**Detyrë:** Të shtohet metoda `ekziston(f)` në klasën `Varg<T>`.
