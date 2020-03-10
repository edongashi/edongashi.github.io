## Algoritmet dhe Strukturat e të Dhënave – Java 3

---

Kur mund të themi që dy objekte janë të njejta?

- Kur kanë karakteristikat identike, apo
- Kur gjenden në adresën e njejtë?

Nuk ka përgjigje definitive për këtë pyetje – varet nga konteksti i përdorimit.

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

Objekti burimor e "humb" pronësinë duke ia pamundësuar lirimin e resurseve në destruktor.

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

Kjo na nevojitet për të shmangur kopjimin e tipeve e referente të alokuara statikisht.

---

Pra, për një tip referent i vendosim këto kushtëzime:

- Nuk lejohen kopjime implicite.
- E bartim vetëm përmes referencës.
- E kthejmë përmes referencës, ose
- E kthejmë përmes shkëmbimit (lëvizjes).

---

<!-- .slide: style="font-size:0.8em;" -->

**Detyrë:** Të shkruhet klasa `Varg` me anëtarët:

- Fushat private `data` e tipit `int*` dhe `n` e tipit `int`.
- Konstruktorin `Varg(*data, n)` i cili i inicializon fushat përmes kopjimit.
- Konstruktorët për ndalim të kopjes por lejim të lëvizjes.
- Destruktorin `~Varg()` i cili e liron memorien `data`.
- Funksionin `at(i)` i cili e kthen elementin në pozitën `i`.
- Funksionin `length()` i cili e kthen gjatësinë e vargut.

---

## Polimorfizmi parametrik

Funksionet na kanë mundësuar të gjeneralizojmë logjikën për çfarëdo vlere të parametrit `x`.

Ndonjëherë mund ta gjeneralizojmë një logjikë ose strukturë për çfarëdo tipi `T`.

---

Funksioni që mund të aplikohet mbi tipe të ndryshme quhet funksion polimorfik.

Struktura e të dhënave që mund të mbajë tipe të ndryshme quhet tip i të dhënave polimorfik.

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

Shumë tipe të ndryshme të të dhënave ndajnë natyrë të njejtë të sjelljes.

Funksionet e gjeneralizuara e nxjerrin të përbashkët këtë logjikë.
Në vend se të kemi shumë mbingarkime ndonjëherë mund ta kemi një funksion të vetëm.

---

**Shembull:** Numrat, stringjet, dhe vargjet i takojnë klasës **monoid** për nga operatori i kombinimit (`+`).

```cpp
template<typename Monoid>
Monoid kombino(Monoid a, Monoid b) {
  return a + b;
}

int main() {
  cout << kombino<int>(3, 5) << endl;
  cout << kombino<double>(1.5, 2.0) << endl;
  cout << kombino<string>("Pershendetje ", "bote!") << endl;
  return 0;
}
```

---

**Detyrë:** Të shkruhet funksioni `swap(T& a, T& b)` i cili i ndërron vendet e dy variablave të tipit `T`.

---

**Detyrë:** Të gjeneralizohet tipi `Varg` ashtu që të mbajë çfarëdo tipi `T`, pra `Varg<T>`.

---

**Specializimi i template**

Nganjëherë implementimi i përgjithshëm nuk përputhet për një tip specifik.

Përmes specializimit mund të mbishkruajmë implementimin bazë.

---

**Shembull:** Booleanet formojnë monoid përmes operatorit **ose** dhe elementit njësi **false**.

```cpp
template<typename Monoid>
Monoid njesia();

template<typename Monoid>
Monoid kombino(Monoid a, Monoid b) {
  return a + b;
}

template<>
bool njesia<bool>() { return false; }

template<>
bool kombino<bool>(bool a, bool b) {
  return a || b;
}
```

---

**Detyrë:** Të shkruhet funksioni `shuma` i cili e akumulon një varg `T[]` (ku T është monoid) në një rezultat të vetëm `T` përmes operatorit të kombinimit.

--

```cpp
#include <iostream>
#include <string>
using namespace std;

template<typename Monoid>
Monoid njesia();

template<typename Monoid>
Monoid kombino(Monoid a, Monoid b) {
  return a + b;
}

template<> int njesia<int>() { return 0; }
template<> double njesia<double>() { return 0.0; }
template<> string njesia<string>() { return ""; }

template<typename Monoid>
Monoid shuma(Monoid vargu[], int n) {
  Monoid acc = njesia<Monoid>();
  for (int i = 0; i < n; i++) {
    acc = kombino(acc, vargu[i]);
  }

  return acc;
}

int main() {
  int nr_plote[5] = { 1, 3, -2, 5, 4 };
  double nr_presje[3] = { 1.5, 2.3, 4.0 };
  string stringjet[4] = { "Pershendetje", " ", "bote", "!" };

  cout << shuma(nr_plote, 5) << endl;
  cout << shuma(nr_presje, 3) << endl;
  cout << shuma(stringjet, 4) << endl;

  return 0;
}
```

---

Shpesh kompajlleri e kupton llojin e variablës prej vlerës së inicializuar nga ana e djathtë.

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

Funksioni si shprehje e ka tipin `function<U(T)>`.

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

**Shembull:** Funksioni që kompozon dy funksione:

```cpp
typedef function<int(int)> fun;
fun kompozo(fun f, fun g) {
  return [f, g](int x) {
    return f(g(x));
  };
}
...
fun h = kompozo(
  [](int x) { return x + 3; },
  [](int x) { return 2 * x; }
);
cout << h(6);
```

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

Në C++ mund ta imitojmë me `#define`:

```cpp
#define lambda(arg, expr) ([](auto arg) { return (expr); })

lambda(x, x * x) // x => x * x
```

Interpretohet si transformim $x \Rightarrow x^2$.

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

**Detyrë:** Të shkruhet funksioni i rendit të lartë `shuma(n,f)` i cili e llogarit shumën $\sum{f(i)}$ për $i\in 1\dots n$.

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

**Detyrë:** Të shkruhet funksioni i rendit të lartë `bool ekziston(T[], n, func<T,bool> f)`
i cili e teston vargun nëse ndonjëri nga elementet e tij plotësojnë predikatin e dhënë.

--

```cpp
#include <iostream>
#include <string>
#define lambda(arg, expr) ([](auto arg) { return (expr); })
using namespace std;

// Fatkeqësisht nuk mund ta shprehim F si function<bool(T)>

template<typename T, typename F> // F :: T -> bool
bool ekziston(T vargu[], int n, F kushti) {
  for (int i = 0; i < n; i++) {
    if (kushti(vargu[i])) {
      return true;
    }
  }

  return false;
}

int main() {
  int v[5] = { 1, 3, -2, 5, 4 };
  cout << ekziston(v, 5, lambda(x, x > 12)) << endl;
  cout << ekziston(v, 5, lambda(x, x % 2 == 0)) << endl;

  string stringjet[3] = { "abc", "tekst i gjate", "123" };
  cout << ekziston(stringjet, 3, lambda(s, s.length() > 10)) << endl;

  return 0;
}
```

---

Në C++ është e vështirë të shprehen tipet mbi tipe.

Për një tip funksioni `F` të aplikuar me një parameter `T`,
tipin kthyes mund t'ia nënkuptojmë (infer) përmes tipit të mapuar `result<F,T>`.

```cpp
template<typename F, typename T>
using result = typename result_of<F&(T&)>::type;
```

---

## Detyra shtesë

---

**Detyrë:** Të shkruhet funksioni `map_reduce(v,n,f)` i cili merr një varg të monoidëve `v` dhe një lambda `f`.

Ky funksion së pari i pasqyron (mapon) të dhënat me një funksion $f$, dhe pastaj i kombinon (redukton).

---

**Detyrë:** Të shkruhet funksioni i rendit të lartë `bind` i cili e kthen rezultatin e thirrjes
`f(*t)` vetëm kur argumenti `t` nuk është `NULL`. Në rastet tjera të kthehet `NULL` pointer i tipit `U*`.

```cpp
U* bind(T* t, func<T, U*> f)
```

--

```cpp
#include <iostream>
#include <math.h>
using namespace std;

template<typename F, typename T>
using result = typename result_of<F&(T&)>::type;

template<typename F, typename T>
using deref_result = typename remove_pointer<result<F, T>>::type;

template<typename T, typename F, typename U = deref_result<F, T>>
// F :: T -> U*
U* bind(T* t, F f) {
  if (t != NULL) {
    U* rez = f(*t);
    return rez;
  } else {
    return NULL;
  }
}

int main() {
  auto f = [](int x) -> double* {
    if (x < 0) {
      return NULL;
    } else {
      return new double { sqrt(x) };
    }
  };

  int* a = new int { 9 };
  int* b = new int { -1 };
  int* c = NULL;

  double* sqrt_a = bind(a, f); // 3
  double* sqrt_b = bind(b, f); // NULL
  double* sqrt_c = bind(c, f); // NULL

  // Shtyp një vlerë që ekziston.
  auto print = [](double x) -> void* {
    cout << x << endl;
    return NULL;
  };

  bind(sqrt_a, print); // shtypet sepse ekziston
  bind(sqrt_b, print); // nuk shtypet
  bind(sqrt_c, print); // nuk shtypet

  delete sqrt_a;
  delete sqrt_b; // no-op
  delete sqrt_c; // no-op
  delete a;
  delete b;

  return 0;
}
```
