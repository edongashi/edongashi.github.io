# Gjuhë Programuese - Java 10

---

## Funksionet (vazhdim)

---

**Rikujtim:** Funksioni është një bllok i parametrizuar i urdhërave i cili mund të kthejë vlerë.

```cpp
int mbledh(int a, int b) {
  return a + b;
}
```

$$
\text{mbledh}(a \in \mathbb{Z} , b \in \mathbb{Z}) = (a + b) \in \mathbb{Z}
$$

---

Variablat hyrëse i quajmë **parametra**, ndërsa vlerat konkrete gjatë thirrjes së funksionit i quajmë **argumente**.

```cpp
// mbledh merr parametrat a dhe b
int mbledh(int a, int b) {
  return a + b;
}

...
// mbledh eshte thirrur me argumentet 2 dhe 3
mbledh(2, 3);
```

---

**Variablat lokale**

Gjatë kryerjes së llogaritjeve brenda funksionit mund të përdorim variabla, psh. `int S = 0`.

Këto variabla shihen vetëm nga blloku aktual i funksionit, prandaj quhen **variabla lokale**.

---

**Shembull:**

```cpp
int shuma(int n) {
  int S = 0; // variabel lokale
  for (int i = 1; i <= n; i++) {
    S += i;
  }

  return S;
}

int main() {
  cout << S; // gabim!
  return 0;
}
```

---

**Variablat globale**

Variablat që shihen nga të gjitha funksionet quhen **variabla globale**.

**Shembull:** `cout` është variabël globale që i referohet daljes standarde.

---

**Shembull:**

```cpp
int S = 0;

void rritShumen(int v) {
  S += v;
}

int main() {
  rritShumen(4);
  cout << S << endl; // shfaqet 4
  rritShumen(3);
  cout << S << endl; // shfaqet 7
  return 0;
}
```

---

Variablat globale janë të rrezikshme pasi që gjithkush ka qasje që t'i ndryshojë.

Ndryshimi i papritur i ndonjë variable mund të shkaktojë defekte në program.

---

**Detyrë:** Të llogaritet shprehja e mëposhtme duke definuar dhe përdorur funksionin `shuma`.

$$
S = \sum_{i=3}^{8}{i} + \sum_{i=2}^{6}{i}
$$
