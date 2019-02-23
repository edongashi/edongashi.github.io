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

**Modifikatorët e klasave**

- `static` - nuk mund të instancohet asnjëherë, përmban vetëm anëtarë statik.
- `abstract` - nuk mund të instancohet pa ndonjë implementim konkret.
- `sealed` - konkrete dhe nuk mund të trashëgohet.
