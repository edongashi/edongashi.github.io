## Algoritmet dhe Strukturat e të Dhënave – Java 2

---

## Përsëritje

- Çfarë janë pointerët?
- Në cilat raste na nevojiten?
- Kur na nevojitet alokimi dinamik?
- Ku dallojnë thirrjet përmes vlerës dhe referencës?

---

## Klasat

Supozojmë një strukturë të të dhënave `Pika` e cila paraqet dyshen `(x,y)` në rrafshin kartezian:

```cpp
struct Pika {
  double x;
  double y;
};
```

---

Shpesh kemi funksione të cilat ndërveprojnë me këtë strukturë:

```cpp
bool baraz(Pika p1, Pika p2) {
  return p1.x == p2.x && p1.y == p2.y;
}
```

---

```cpp
double distanca(Pika p1, Pika p2) {
  return sqrt(
    pow(p1.x - p2.x, 2) + pow(p1.y - p2.y, 2)
  );
}
```

---

```cpp
double distanca_nga_qendra(Pika p) {
  return sqrt(pow(p.x, 2) + pow(p.y, 2));
}
```

---

```cpp
string toString(Pika p) {
  stringstream ss;
  ss << "(" << p.x << ", " << p.y << ")";
  return ss.str();
}
```

---

```cpp
Pika konstrukto(double x, double y) {
  Pika p = { x, y };
  return p;
}
```

---

```cpp
Pika p1 = konstrukto(6.0, 3.5);
Pika p2 = konstrukto(4.2, 7.1);

cout << "Distanca mes pikes p1=" << toString(p1)
      << " dhe pikes p2=" << toString(p2)
      << " eshte d=" << distanca(p1, p2)
      << endl;

if (baraz(p1, p2)) {
  cout << "Pikat jane te barabarta.";
} else {
  cout << "Pikat jane te ndryshme.";
}
```

---

Stili i tillë i programimit njihet si **programim procedural**.

Ekziston një stil tjetër i programimit i cili grupon të dhënat dhe funksionet mbi to në një njësi të vetme që quhet **klasë**.

Stili i programimit me klasa quhet **programimi i orientuar në objekte (POO)**.

---

## Programimi i orientuar në objekte

Klasa përshkruan strukturën e të dhënave si dhe ofron funksione të cilat veprojnë mbi ato të dhëna.

Të dhënat e klasës njihen si **fusha** ndërsa funksionet e klasës njihen si **metoda**.

---

Të dhënat e klasës deklarohen sikur te strukturat:

```cpp
class Pika {
  double x;
  double y;
};
```

Realisht, në C++ nuk ka dallim teknik ndërmjet strukturës dhe klasës.

---

**Kontrollimi i qasjes (private, public)**

Fushat **private** mund të lexohen vetëm nga funksionet brenda klasës.

Fushat **publike** mund të lexohen nga cilido bllok.

---

```cpp
class Pika {
  public:  double x;
  private: double y;
};

int main() {
  Pika p;
  p.x = 5.0; // OK
  p.y = 3.5; // Gabim, ndalohet leximi nga blloku i jashtëm
  return 0;
}
```

---

Në disa raste dëshirojmë t'i mbajmë fushat **private** me qëllim të ndalimit të qasjes nga blloqet e jashtme.

Kjo është një veçori kritike për arritjen e **enkapsulimit**.

---

Nëse nuk ceket, klasat e kanë qasjen e nënkuptuar private, ndërsa strukturat e kanë publike.

Nuk ka dallim tjetër ndëmjet strukturave dhe klasave.

---

Funksionet e klasës deklarohen bashkë me të dhënat:

```cpp
class Pika {
private:
  double x;
  double y;

public:
  double distanca_nga_qendra() {
    return sqrt(pow(x, 2) + pow(y, 2));
  }
};
```

---

Thirrja e metodës bëhet përmes operatorit të qasjes sikur te fushat:

```cpp
Pika p = ...;

cout << p.distanca_nga_qendra();
```

Në këtë rast funksioni i merr vlerat e pikës `p`.

---

```cpp
class Pika {
  private: double x, y;
  public:  bool baraz(Pika tjeter) {
    return x == tjeter.x && tjeter.y == tjeter.y;
  }
};

int main() {
  Pika p1 = ..., p2 = ...;
  if (p1.baraz(p2)) cout << "Te njejta";
  else              cout << "Te ndryshme";
  return 0;
}
```

---

Vini re se si parametri i parë i funksionit sikur `p1` në `baraz(p1,p2)` tash bëhet implicit duke marrë formën `p1.baraz(p2)`.

Argumenti implicit që paraqet referencën kontekstuale të objektit aktual në POO quhet `this`.

---

Vlera kontekstuale `this` është pointer për variablën (objektin) aktual.

```cpp
class Personi {
private:
  string emri;
  int mosha;

public:
  void shtyp_infot() {
    cout << "Emri: "  << this->emri  << endl;
    cout << "Mosha: " << this->mosha << endl;
  }
};
```

---

Nëse kemi 2 variabla `p1` dhe `p2`, me funksione të zakonshme kemi shënuar:

```cpp
shtyp_infot(p1);
shtyp_infot(p2);
```

Me metoda (stili i POO) e shënojmë:

```cpp
p1.shtyp_infot();
p2.shtyp_infot();
```

---

Edhe pse po duket që thirrja `p1.shtyp_infot()` nuk po merr parametra,
ajo realisht e mban referencën e variablës `p1` gjatë thirrjes së funksionit.

Thirrjet `p1.shtyp_infot()` dhe `p2.shtyp_infot()` japin rezultate të ndryshme
pasi që ekzekutohen në kontekste të ndryshme.

---

### Konstruktorët

Variablat tipi i të cilave është klasë i quajmë **objekte** ose **instanca**.

Konstruktori është një funksion i veçantë i cili thirret gjatë krijimit të instancës.

Zakonisht përdoren për të inicializuar gjendjen e klasës duke i dhënë vlera fushave.

---

Konstruktori shkruhet si metodë e cila e ka emrin e klasës dhe nuk ka tip kthimi.

```cpp
class Pika {
private:
  double x;
  double y;

public:
  Pika(double x, double y) {
    this->x = x;
    this->y = y;
  }
};
```

Konstruktorët mund të mbingarkohen.

---

Kontruktori thirret gjatë krijimit të instancës.

Thirrjet e mëposhtme janë ekuivalente:

```cpp
int main() {
  Pika p1 = Pika(2.5, 3);
  Pika p2(2.5, 3);
  return 0;
}
```

---

Konstruktori më së shpeshti përdoret për të vendosur vlera në fusha.

```cpp
class Studenti {
private:
  int mosha;
  double notaMesatare;
public:
  Studenti(int mosha, double notaMesatare) {
    this->mosha = mosha;
    this->notaMesatare = notaMesatare;
  }
}
```

Vini re që mbishkrimin e identifikatorëve e tejkalojmë përmes qasjes eksplicite me `this`.

---

**Copy constructor**

Në C++ secila klasë ka një konstruktor special për kopjim të objektit.

Zakonisht kjo mund të shkaktojë sjellje të papritura, prandaj shpesh do ta ndalojmë.

```cpp
class Studenti {
public:
  // Konstruktori i kopjimit.
  Studenti(Studenti const&) { ... }
  // Operatori i shoqërimit.
  Studenti& operator=(Studenti const&) { ... }
};
```

---

**Destruktori** është bllok kodi që thirret:

- Kur tipi i alokuar në stack del nga scope.
- Kur fshihet pointeri për objektin e alokuar dinamikisht.

Zakonisht përdoret për lirim të resurseve.

---

Shkruhet në formën `~Klasa() { ... }`.

Nuk merr parametra e as nuk kthen asgjë.

```cpp
class Klasa {
private:
  int* data;

public:
  Klasa() { // Konstruktori
    this->data = new int { 0 };
  }

  ~Klasa() { // Destruktori
    delete this->data;
  }
};
```

---

**Enkapsulimi i fushave private**

Zakonisht e kontrollojmë qasjen në fusha me dy metoda publike `getX()` dhe `setX(x)`.

```cpp
class Studenti {
private:
  int mosha;

public:
  int getMosha() {
    return this->mosha;
  }

  void setMosha(int mosha) {
    this->mosha = mosha;
  }
};
```

---

**Detyrë:** Të shkruhet klasa `Studenti` e cila ka:

- Fushat private `emri`, `mbiemri`, `mosha`, `notat[5]`
- Konstruktor që inicializon fushat.
- Metodën `nota(i)` e cila merr notën në pozitën `i`.
- Metodën `notaMesatare()`.
- Metodën `emriPlote()` e cila kthen emrin dhe mbiemrin e bashkuar.
- Metodën `shtyp()` e cila i shtyp në ekran të dhënat e studentit.

---

**Detyrë:** Të shkruhet klasa `Pika` e cila ka:

- Fushat private `x` dhe `y` (nr. real).
- Konstruktorin inicializues `Pika(x,y)` dhe metodat mbështjellëse të fushave.
- Metodën `distanca(Pika tjeter)`.
- Metodën `shtyp()` që shtyp në ekran kordinatat në formën `(x,y)`, psh. `(4,3)`.

---

**Detyrë:** Të shkruhet klasa `Rrethi` e cila ka:

- Fushat private `rrezja` (nr. real) dhe `qendra` (e tipit `Pika` nga detyra e kaluar).
- Konstruktorin `Rrethi(qendra,rrezja)`.
- Metodat `siperfaqja()` dhe `perimetri()`.
- Metodën `distanca(Rrethi tjeter)` e cila e llogarit distancën mes qendrave të rrathëve.
- Metodën `shtyp()` që shtyp në ekran qendrën dhe rrezen e rrethit.

---

**Detyrë:** Të krijohet një varg me 5 instanca të tipit `Rrethi` nga detyra e kaluar.

- Të mbushet ky varg me objekte të inicializuara sipas dëshirës.
- Të gjendet rrethi me sipërfaqen më të madhe dhe të ruhet adresa e tij në një pointer.
- Të shtypet në ekran rrethi i adresuar nga pointeri përmes metodës `shtyp()`.

---

<!-- .slide: style="font-size:0.8em;" -->

**Detyrë:** Të shkruhet klasa `NumerKompleks` me veçoritë private
`re` dhe `im` si dhe anëtarët në vijim:

- Konstruktorin `NumerKompleks(re,im)`
- Metodat `shto(k)`, `zbrit(k)`, `shumezo(k)`, ku `k` është `NumerKompleks`.
- Mbingarkimet `shto(re,im)`, `zbrit(re,im)`, `shumezo(re,im)`.
- Metodat `shtyp()`, `toString()`.

Në `main` të deklarohen disa instanca të tipit
`NumerKompleks` dhe të kryhen llogaritje të ndryshme.
