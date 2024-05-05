## Algoritmet dhe Strukturat e të Dhënave – Java 9

---

## Pemët

Te listat e lidhura nyjet lidhen me nyjën pasardhëse në zinxhir njëra pas tjetrës.

Nyja që ka më shumë se një pasardhës quhet **pemë**.

Ky është definicion rekursiv.

Nyja fillestare quhet rrënjë.

---

Pema që ka maksimalisht dy nyje pasardhëse quhet **pemë binare**.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java9/tree.png)

---

Terminologjia e pemëve:

- Nyja rrënjë - nyja fillestare.
- Nyja fëmijë - pasardhëse direkte e një nyje.
- Nyja prind - paraardhëse direkte e një nyje.
- Nyje para/pasardhëse - para/pasardhëse direkte ose indirekte e nyjës.
- Nyje e brendshme - nyje që ka nyje fëmijë.
- Nyje gjethe - nyje që nuk ka nyje fëmijë.

---

Lartësia e pemës është distanca më e gjatë nga rrënja deri tek një nyje gjethe.

Pema quhet e balancuar nëse:

1. Lartësia e fëmijës së majtë dhe të djathtë dallon maksimalisht për 1.
2. Fëmijët janë poashtu të balancuara.

---

Lartësia e pemës ka rëndësi për kërkim.

Rasti më i keq është kur i qasemi elementit më të largët.

Pema e balancuar gjithmonë garanton qasje në $O(\log n)$ sepse thellësitë janë të njëjta.

Pema e jo-balancuar në rastin më të keq shndërrohet në listë të lidhur me qasje $O(n)$.

---

Listat sekuenciale i kemi shëtitur me unaza. Për pemët kemi dy qasje kryesore:

1. Kërkimi në thellësi (depth-first search) - duke përdorur stack.
2. Kërkimi në gjerësi (breadth-first search) - duke përdorur queue.

---

Kërkimi në thellësi mund të bëhet me tri renditje:

1. Preorder - vizito nyjën aktuale, pemën e majtë, pemën e djathtë.
2. Inorder - vizito pemën e majtë, nyjën aktuale, pemën e djathtë.
3. Postorder - vizito pemën e majtë, pemën e djathtë, nyjën aktuale.

Kjo procedurë përsëritet rekursivisht.

---

Pema binare njihet si **pemë binare e kërkimit** nëse secila nyje e saj plotëson këto dy kushte:

1. Fëmija i majtë i nyjës ka vlerën më të vogël se nyja.
2. Fëmija i djathtë i nyjës ka vlerën më të madhe se nyja.

---

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java9/search-tree.png)

---

**Detyrë:** Të formohet pema binare e kërkimit nga sekuenca $5, 7, 1, 3, 4, 2, 9, 0$.

Pastaj:

1. Të kërkohet a ekzistojnë elementet $2, 7, 6, 9, -1$ në pemë. Të tregohet numri i hapave për secilin kërkim.
2. Të vizitohet pema me qasjet preorder, inorder, postorder.

---

**Detyrë:** Të implementohet pema binare e kërkimit dhe të instancohet me vlerat nga detyra e mëparshme.
