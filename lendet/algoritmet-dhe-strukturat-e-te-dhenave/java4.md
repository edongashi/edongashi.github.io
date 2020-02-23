## Algoritmet dhe Strukturat e të Dhënave – Java 4

---

## Listat

Vargjet me alokim statik kanë disa kufizime.

- Madhësia duhet të jetë konstante.
- Duhet ta dimë paraprakisht sa hapësirë (elemente) të rezervojmë.
- Nuk mund të shtojmë ose largojmë elemente.

---

**Lista** është një strukturë e të dhënave që mundëson:

- Mbajtjen e një numri variabil të elementeve.
- Shtim dhe largim të elementeve.
- Zmadhim dhe zvogëlim sipas nevojës.

---

Dy implementime kryesore të listave janë:

- Listat përmes vargjeve – **array list**.
- Listat me nyje të lidhura – **linked list**.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/lists.png)

---

Operacionet themelore që ofrojnë listat:

- Leximi i elementeve
- Shtimi i elementeve
- Zëvendësimi i elementeve
- Largimi i elementeve

---

## Array Lista

Strukturë që mban një varg në të cilin ruhen elementet në formë të njëpasnjëshme.

---

**Leximi i elementit në pozitën `i`**

Merr elementin në indeksin `i` të vargut.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-read.png) <!-- .element: style="border:none;" -->

---

**Zëvendësimi i elementit në pozitën `i`**

Vendose elementin e ri në indeksin `i` të vargut.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-write.png) <!-- .element: style="border:none;" -->

---

**Shtimi i elementit në fund**

Vendos elementin në pozitën `n`.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-push.png) <!-- .element: style="border:none;" -->

---

**Shtimi i elementit në pozitën `i`**

Krijo hapësirë për elementin duke i shtyer elementet e mbetura në të djathtë.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-insert.png) <!-- .element: style="border:none;" -->

---

**Largimi i elementit në fund**

Largoje elementin nga pozita `n-1`.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-pop.png) <!-- .element: style="border:none;" -->

---

**Largimi i elementit në pozitën `i`**

Zhvendosi elementet e mbetura në të majtë.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/array-remove.png ) <!-- .element: style="border:none;" -->

---

**Tejkalimi i madhësisë së vargut**

Nëse për shkak të një operacioni shtimi tejkalohet madhësia e vargut,
duhet ta krijojmë një varg të ri me madhësi dyfishe të së vjetrit.

Të gjitha elementet kopjohen në vargun e ri, e pastaj kryhet operacioni.

---

<!-- .slide: style="font-size:0.8em;" -->

| Operacioni                  | Array List | Linked List     |
| --------------------------- | ---------- | --------------- |
| Leximi i rastit             | shpejtë    | ngadalshëm      |
| Shtimi në fund              | shpejtë    | varet nga impl. |
| Shtimi në fillim            | ngadalshëm | shpejtë         |
| Shtimi në pozita të rastit  | ngadalshëm | mesatare        |
| Fshirja në fund             | shpejtë    | varet nga impl. |
| Fshirja në fillim           | ngadalshëm | shpejtë         |
| Fshirja në pozita të rastit | ngadalshëm | mesatare        |
