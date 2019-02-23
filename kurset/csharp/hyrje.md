# Gjuha Programuese C# #

---

Gjuhë e bazuar në C++, e ngjashme me Java.

E ndërtuar mbi platformën .NET.

Shumë-paradigmëshe, kryesisht e orientuar në objekte me disa veçori funksionale.

---

**Tipet dhe variablat**

```cs
string emri = "Filan";
int mosha = 21;
bool student = true;
int[] notat = { 7, 9, 8, 10, 7 };
double notaMesatare = 8.2;
```

Kur dihet tipi nga ana e djathtë, mund ta shkurtojmë deklarimin në `var`:

```cs
var x = 5; // int
var y = "Pershendetje"; // string
```

---

**Shkruarja/leximi nga hyrja/dalja standarde**

```cs
System.Console.WriteLine("Jepni emrin tuaj:");
string emri = System.Console.ReadLine();
System.Console.WriteLine("Pershendetje " + emri);
```

Ose shkurtimisht:

```cs
using System;
...
Console.WriteLine("Jepni emrin tuaj:");
string emri = Console.ReadLine();
Console.WriteLine("Pershendetje " + emri);
```

---

**Unazat dhe vektorët**

```cs
string[] lendet = { "Matematike", "Fizike", "Programim" };
foreach (string lenda in lendet) {
  Console.WriteLine("Lenda: " + lenda);
}

for (int i = 0; i < lendet.Length; i++) {
  Console.WriteLine("Lenda: " + lendet[i]);
}
```

---

**Numërimet - enum**

```cs
enum Drejtimi {
  Majtas,
  Lart,
  Djathtas,
  Poshte
}
```

---

**Metodat statike**

Në C# nuk kemi funksione globale. Në vend të tyre përdorim metoda statike.

```cs
class Funksionet {
  public static int Mbledh(int a, int b) {
    return a + b;
  }
}
```

Thirrja bëhet sipas `<Klasa>.<Metoda>()`

```cs
int rezultati = Funksionet.Mbledh(2, 3);
Console.WriteLine("Shuma 2+3 = " + rezultati);
```

---

**Blloku main**

Pika e hyrjës në program quhet `Main` dhe duhet të jetë metodë statike.

```cs
class Program {
  static void Main() {
    Console.WriteLine("Pershendetje!");
  }
}
```

---

**Klasat**

```cs
class Personi {
  public string Emri;
  public int Mosha;
}

class Program {
  static void Main() {
    Personi p = new Personi {
      Emri = "Filan",
      Mosha = 25
    };
  }
}
```

---

**Metodat dhe konstruktorët e klasës**

```cs
class Personi {
  private string emri;
  private int mosha;

  public Personi(string emri, int mosha) {
    this.emri = emri;
    this.mosha = mosha;
  }

  public void ShtypInfot() {
    System.Console.WriteLine("Emri: " + this.emri);
    System.Console.WriteLine("Mosha: " + this.mosha);
  }
}

class Program {
  static void Main() {
    Personi p = new Personi("Filan", 25);
    p.ShtypInfot();
  }
}
```

---

Veçoritë (properties) janë shkurtesë për çiftet get/set të metodave.

```cs
class Personi {
  private string emri;

  // Përmes veçorisë Emri
  public string Emri {
    get { return this.emri; }
    set { this.emri = value; }
  }

  // Përmes çiftit getEmri/setEmri
  public string getEmri() { return this.emri; }
  public void setEmri(string vlera) { this.emri = vlera; }
}

class Program {
  static void Main() {
    Personi p = new Personi();

    // Keta dy rreshta kryejne te njejten pune.
    p.Emri = "Filan";
    p.setEmri("Filan");
  }
}
```

---

Veçoritë automatike janë formë e shkurtër për të deklaruar variablën dhe metodat në një vend.

```cs
// Mënyra e shkurtër përmes auto properties:
class Personi1 {
  public string Emri { get; set; }
  public int Mosha { get; set; }
}

// Mënyra e gjatë:
class Personi2 {
  private string emri;
  private int mosha;

  public string Emri {
    get { return this.emri; }
    set { this.emri = value; }
  }

  public int Mosha {
    get { return this.mosha; }
    set { this.mosha = value; }
  }
}

class Program {
  static void Main() {
    Personi1 p = new Personi1();
    p.Emri = "Filan";
    p.Mosha = 25;
  }
}
```

---

**Kontrollimi i qasjes për klasa dhe struktura**

- `public` - shihet nga kudo.
- `internal` - shihet nga vetëm libraria ku gjendet tipi.

Për tipe brenda tipeve ekziston edhe `private` për dukshmëri vetëm nga tipi deklarues.

---

**Kontrollimi i qasjes për anëtarët e klasës/strukturës**

- `public` - nga kudo.
- `private` - vetëm nga tipi i njejtë.
- `protected` - nga tipi i njejtë ose tipet fëmij.
- `internal` - vetëm nga libraria e njejtë.
- `protected internal` - nga libraria e njejtë ose tipet fëmij.
- `private protected` - nga tipi i njejtë ose tipet fëmij në librarinë e njejtë.

---

**Llojet e klasave**

- `static` - nuk mund të instancohet asnjëherë, përmban vetëm anëtarë statik.
- `abstract` - nuk mund të instancohet pa ndonjë implementim konkret.
- `sealed` - konkrete dhe nuk mund të trashëgohet.

---

**Ndërfaqet (interface)**

Ndërfaqja është kontratë e operacioneve. Emërtohet duke filluar me shkronjën `I`.

```cs
interface IOperacionMatematikor {
  double Transformo(double x);
}

class Katrori : IOperacionMatematikor {
  public double Transformo(double x) {
    return Math.Pow(x, 2);
  }
}

class RrenjaKatrore : IOperacionMatematikor {
  public double Transformo(double x) {
    return Math.Sqrt(x);
  }
}

class Program {
  static void Main() {
    IOperacioniMatematikor f = new Katrori();
    double y = f.Transformo(5.0); // == 25
  }
}
```

---

**Koleksionet**

Cilido tip që ofron ndërfaqen `IEnumerable` mund të shëtitet me unazën `foreach`.

```cs
List<int> numrat = new List<int>();
numrat.Add(3);
numrat.Add(5);
numrat.Add(-1);
foreach (int numri in numrat) {
  Console.WriteLine("Numri: " + numri);
}
```

---

**Lambda - funksionet anonime**

Lambda është vlerë që i referohet një funksioni anonim.

```cs
// Transformim int -> int
Func<int, int> katrori = x => x * x;
int x = 5;
int y = katrori(x);
```

---

**LINQ - pyetësorët brenda gjuhës**

Formë deklarative për transformimin e koleksioneve.

```cs
int[] numrat = { 3, -2, 6, 7, 1, -3, 4 };
var vlerat =
  numrat
    .Where(x => x > 0)  // marrim vetëm numrat pozitiv.
    .Select(x => x * 3) // shumezojme numrat për 3.
    .ToArray()          // kthejmë rezultatin në array.
```

---

**Polimorfizmi parametrik - generics**

Përmes tipeve gjenerike mund të krijojmë abstraksione mbi çfarëdo tipi.

```cs
class PemaBinare<T> {
  public T Vlera;
  public PemaBinare<T> Majtas;
  public PemaBinare<T> Djathtas;

  public PemaBinare(T vlera) {
    this.vlera = vlera;
  }
}

class Program {
  static void Main() {
    var rrenja = new PemaBinare<int>(5) {
      Majtas = new PemaBinare<int>(3),
      Djathtas = new PemaBinare<int>(9)
    };
  }
}
```

---

Shembuj të tipeve të gatshme gjenerike:

```cs
var dict = new Dictionary<int, string>();
var list = new List<string>();
var set = new HashSet<int>();
```
