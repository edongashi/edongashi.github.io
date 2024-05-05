## Algoritmet dhe Strukturat e të Dhënave – Java 8

---

## Përsëritje

---

**Lista** është një strukturë e të dhënave që mundëson:

- Mbajtjen e një numri variabil të elementeve.
- Shtim dhe largim të elementeve.
- Zmadhim dhe zvogëlim sipas nevojës.

---

Dy implementime kryesore të listave janë:

- Listat përmes vargjeve – **array list** ([java 5](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java5))
- Listat me nyje të lidhura – **linked list**.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java5/lists.png)

---

Operacionet themelore që ofrojnë listat:

- Leximi i elementeve
- Shtimi i elementeve
- Zëvendësimi i elementeve
- Largimi i elementeve

---

## Listat e lidhura

Strukturë që lidh në zinxhir elementet një pas një.

---

Në implementimin e array listës, elementet ruheshin në një varg me kapacitet të fiksuar.

Për dallim, lista e lidhur alokon secilin element veçmas. Këto elemente i quajmë nyje.

Secila nyje mban elementin e listës si dhe pointerin për nyjen e ardhshme.

---

Nyja e listës së lidhur modelohet si:

```cpp
struct Nyje {
  T data;
  Nyje *next;
};
```

Ky është definicion rekursiv, pasi që secila nyje mund të imagjinohet si "koka" dhe "bishti", ku bishti është listë në veti.

---

Nëse një nyje nuk ka element pas saj, pointeri për `next` vendoset `NULL`.

Lista vizitohet duke filluar nga nyja e parë dhe duke ndjekur zinxhirin deri sa të arrihet `NULL`.

Kjo nënkupton që lista e lidhur nuk ofron qasje të rastit (random access).

---

Listat e lidhura mund të jenë një-drejtimëshe (singly linked list) ose dy-drejtimëshe (doubly linked list).

Ne do të fokusohemi në listën e lidhur një-fishe:

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java8/linked-list.png)

---

**Detyrë:** Të implementohet lista e lidhur me funksionet për manipulim të elementeve.

---

Në implementime mund të vrojtojmë dallimet në kompleksitet ndërmjet array listës dhe linked listës.

Përveç dallimeve në nivel të algoritmit, lista e lidhur vuan nga mungesa e lokalitetit në memorie.

Për këtë arsye, zakonisht listat e lidhura nuk preferohen në raste ku kërkohet performancë e lartë.

---

<!-- .slide: style="font-size:0.8em;" -->

| Operacioni                  | Array list | Linked list     |
| --------------------------- | ---------- | --------------- |
| Leximi i rastit             | shpejtë    | ngadalshëm      |
| Shtimi në fund              | shpejtë    | varet nga impl. |
| Shtimi në fillim            | ngadalshëm | shpejtë         |
| Shtimi në pozita të rastit  | ngadalshëm | mesatare        |
| Fshirja në fund             | shpejtë    | varet nga impl. |
| Fshirja në fillim           | ngadalshëm | shpejtë         |
| Fshirja në pozita të rastit | ngadalshëm | mesatare        |
