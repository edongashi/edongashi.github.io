# Gjuhë Programuese - Java 8

---

## Përsëritje

---

**Detyrë:** Të mbushet nga tastiera një varg me 7 numra të plotë. Të shfaqen numrat e atij vargu të cilët janë të plotëpjestueshem me 3.

---

## Matricat

Matrica është varg dy-dimenzional - me rreshta dhe kolona.

---

Nga matematika, matricat janë struktura të formës:

$$
A_{m,n} = 
\begin{pmatrix}
a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
\vdots  & \vdots  & \ddots & \vdots  \\
a_{m,1} & a_{m,2} & \cdots & a_{m,n} 
\end{pmatrix}
$$

---

Në C++, rreshtat dhe kolonat fillojnë me indeksin $0$:

$$
A_{m,n} = 
\begin{pmatrix}
a_{0,0} & a_{0,1} & \cdots & a_{0,n-1} \\
a_{1,0} & a_{1,1} & \cdots & a_{1,n-1} \\
\vdots  & \vdots  & \ddots & \vdots  \\
a_{m-1,0} & a_{m-1,1} & \cdots & a_{m-1,n-1} 
\end{pmatrix}
$$

---

**Shembull:** Deklarimi i matricës

$$
A_{3,4} =
\begin{pmatrix}
2 & 4 & 7 & 1 \\
5 & -1 & 3 & 5 \\
3 & 2 & 1 & 14
\end{pmatrix}
$$

```cpp
int A[3][4] = {
  { 2,  4,  7,  1 },
  { 5, -1,  3,  5 },
  { 3,  2,  1, 14 }
};
```

---

Leximi dhe shkrimi i anëtarëve:

```cpp
int A[3][4] = {
  { 2,  4,  7,  1 },
  { 5, -1,  3,  5 },
  { 3,  2,  1, 14 }
};

int vlera = A[1][3]; // vlera = 5
A[2][0] = 13;
```

---

Për ta llogaritur shumën e matricës mbledhim shumat e secilit rresht:

$$
S = \sum_{i=1}^{m}{\sum_{j=1}^{n}{a_{i,j}}}
$$

---

**Detyrë:** Të inicializohet matrica

$$
A_{2,3} =
\begin{pmatrix}
1 & 2 & 6 \\
5 & 7 & 4
\end{pmatrix}
$$

1. Të shfaqen të gjithë anëtarët e matricës.
2. Të llogaritet shuma e anëtarëve.
3. Të gjendet anëtari më i madh dhe më i vogël.

--

Të shfaqen të gjithë anëtarët e matricës.

```cpp
#include <iostream>
using namespace std;

int main() {
  const int m = 2;
  const int n = 3;
  int A[2][3] = {
    { 1, 2, 6 },
    { 5, 7, 4 }
  };

  for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
      cout << A[i][j] << " ";
    }

    cout << endl;
  }

  return 0;
}
```

--

Të llogaritet shuma e anëtarëve.

```cpp
#include <iostream>
using namespace std;

int main() {
  const int m = 2;
  const int n = 3;
  int A[2][3] = {
    { 1, 2, 6 },
    { 5, 7, 4 }
  };

  int S = 0;

  for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
      S += A[i][j];
    }
  }

  cout << "S=" << S << endl;
  return 0;
}
```

--

Të gjendet anëtari më i madh dhe më i vogël.

```cpp
#include <iostream>
using namespace std;

int main() {
  const int m = 2;
  const int n = 3;
  int A[2][3] = {
    { 1, 2, 6 },
    { 5, 7, 4 }
  };

  int max = A[0][0];
  int min = A[0][0];

  for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
      if (A[i][j] > max) {
        max = A[i][j];
      }

      if (A[i][j] < min) {
        min = A[i][j];
      }
    }
  }

  cout << "Maksimumi: " << max << endl
       << "Minimumi: " << min << endl;
  return 0;
}
```

---

Matrica nuk ekziston në realitet! Ajo ruhet si varg i gjatë i elementeve në memorie.

$$
A_{2,3} = 
\begin{pmatrix}
a_{0,0} & a_{0,1} & a_{0,2} \\
a_{1,0} & a_{1,1} & a_{1,2} \\
\end{pmatrix}
$$

Në memorie ruhet si:

$$
V_6 = \lbrace 
\overbrace{a_{0,0}, a_{0,1}, a_{0,2}}^{\text{Rreshti 1}}, 
\overbrace{a_{1,0}, a_{1,1}, a_{1,2}}^{\text{Rreshti 2}}
\rbrace
$$

Kompajlleri kujdeset që t'i transformojë indekset gjatë qasjes.

---

Le të jetë $(i,j)$ dyshja rresht-kolonë, ndërsa $x$ indeksi në vargun i cili mban matricën e madhësisë $m\times n$.

Transformimi $(i,j)\rightarrow x:$

$$
x = i \times n + j \tag{1}
$$

Transformimi $x \rightarrow  (i,j):$

$$
i = \left\lfloor \frac{x}{n} \right\rfloor \tag{2}
$$

$$
j = x \bmod n \tag{3}
$$

---

**Detyrë:** Të deklarohet një matricë e rendit $m\times n$ ku $m=3$ dhe $n=4$. Vlerat e elementeve duhet të jepen sipas formulës:

$$
\forall (i,j) : A_{i,j}=i\times n + j
$$

Të shfaqet në ekran kjo matricë duke rezervuar 3 kolona për secilin element.

---

**Detyrë:** Të deklarohet një matricë e rendit $3\times 4$. Të mbushet kjo matricë nga tastiera.

Të shfaqet në ekran kjo matricë duke rezervuar 3 kolona për secilin element.

---

**Matrica katrore**

Matrica e formës $A_{n,n}$ quhet matricë katrore e madhësisë $n$.


$$
A_{n,n} = 
\begin{pmatrix}
a_{0,0} & a_{0,1} & \cdots & a_{0,n-1} \\
a_{1,0} & a_{1,1} & \cdots & a_{1,n-1} \\
\vdots  & \vdots  & \ddots & \vdots  \\
a_{n-1,0} & a_{n-1,1} & \cdots & a_{n-1,n-1} 
\end{pmatrix}
$$

---

Te matrica katrore, diagonalja e ndanë matricën në dy pjesë të barabarta. Kjo përdoret shpesh për të ruajtur distanca:

$$
D_{n,n} = \begin{pmatrix}
0 & 15 & 7 \\
15 & 0 & 8 \\
7 & 8 & 0
\end{pmatrix}
$$

Ku distanca nga nyja $p$ në nyjën $q$ është:

$$
d(p,q) = d(q,p) = A_{p,q} = A_{q,p}
$$

Matrica që tregon këtë veçori njihet si matricë simetrike.

---

Le të jetë $A_{i,j}$ cilido anëtar i matricës. Në matricë anëtarët i klasifikojmë në 3 regjione.

1. Anëtarët $\color{green}{\text{mbi}}$ diagonale, $\forall A_{i,j}\;:\;i < j$
2. Anëtarët $\color{orange}{\text{në}}$ diagonale, $\forall A_{i,j}\;:\;i = j$
3. Anëtarët $\color{red}{\text{nën}}$ diagonale, $\forall A_{i,j}\;:\;i > j$

$$
A_{3,3} = \begin{pmatrix}
\color{orange}{a_{1,1}} & \color{green}{a_{1,2}} & \color{green}{a_{1,3}} \\
\color{red}{a_{2,1}} & \color{orange}{a_{2,2}} & \color{green}{a_{2,3}} \\
\color{red}{a_{3,1}} & \color{red}{a_{3,2}} & \color{orange}{a_{3,3}} \\
\end{pmatrix}
$$

---

**Detyrë:** Të krijohet matrica katrore $n=5$.

1. Elementet mbi diagonale duhet ta kenë vlerën $-1$.
2. Elementet në diagonale duhet ta kenë vlerën $0$.
3. Elementet nën diagonale duhet ta kenë vlerën $1$.

Të shfaqet në ekran kjo matricë duke rezervuar 3 kolona për secilin element.

---

## Sortimi i vektorit

---

**Detyrë:** Është dhënë vektori $V_n=\lbrace 7, 2, 1, 5, 9, 6 \rbrace$. Të sortohen anëtarët e këtij vektori duke filluar nga më i vogli deri te më i madhi.
