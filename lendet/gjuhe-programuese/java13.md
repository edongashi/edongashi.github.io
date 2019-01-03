# Gjuhë Programuese - Java 13

---

## Përsëritje

---

**Detyrë:** Çfarë shfaqet kur të ekzekutohet ky kod?

```cpp
int f(int a) {
  return a + 5;
}

int main() {
  cout << "a = " << f(3) + 2 * f(2) << endl;
  cout << "b = " << f(f(2)) << endl;
  return 0;
}
```

---

**Detyrë:** Të shkruhen dy funksione me emrin `max`. Njëri e gjen maksimumin e matricës ndërsa tjetri të vektorit.

---

**Detyrë:** Të deklarohet struktura `drejtkendesh(a,h)` e cila mban brinjet e drejtkendeshit. Të shkruhen funksionet `int perimetri(drejtkendesh)`, `int siperfaqja(drejtkendesh)`, `double diagonalja(drejtkendesh)`, dhe `drejtkendesh rrotullo(drejtkendesh)`.

---

**Detyrë:** Të deklarohet struktura `rezultati(piketShkrim, piketGoje)`. Të deklarohet struktura `notat` e cila mban 5 rezultate për lëndët e semestrit.

Pastaj të definohen funksionet `int nota(rezultati)`, `double notaMesatare(notat)`, `int provimeTeKaluara(notat)`.
