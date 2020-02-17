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

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java4/img1.png)

---

Operacionet themelore që ofrojnë listat:

- Leximi i elementeve
- Shtimi i elementeve
- Zëvendësimi i elementeve
- Largimi i elementeve

---

## Array Lista

Strukturë që mban një varg

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
