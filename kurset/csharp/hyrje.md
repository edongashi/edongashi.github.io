# Gjuha Programuese C# #

---

Gjuhë e bazuar në C++, e ngjashme me Java.

E ndërtuar mbi platformën .NET.

Shumë-paradigmëshe, kryesisht e orientuar në objekte me disa veçori funksionale.

---

Tipet dhe variablat:

```cs
string emri = "Filan";
int mosha = 21;
bool student = true;
int[] notat = { 7, 9, 8, 10, 7 };
double notaMesatare = 8.2;
```

---

Shkruarja/leximi nga hyrja/dalja standarde:

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

Pika e hyrjës në program quhet `Main` dhe duhet të jetë metodë statike.

```cs
class Program {
  static void Main() {
    Console.WriteLine("Pershendetje!");
  }
}
```

---

Klasat:

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

Metodat dhe konstruktorët e klasës:

```cs
class Personi {
  private string emri;
  private int mosha;

  public Personi(string emri, int mosha) {
    this.emri = emri;
    this.mosha = mosha;
  }

  public void ShtypInfot() {
    System.Console.WriteLine("Emri: " + this.Emri);
    System.Console.WriteLine("Mosha: " + this.Mosha);
  }
}

class Program {
  static void Main() {
    Personi p = new Personi("Filan", 25);
    p.ShtypInfot();
  }
}
```
