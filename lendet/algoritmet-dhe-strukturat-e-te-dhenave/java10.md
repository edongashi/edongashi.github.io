## Algoritmet dhe Strukturat e të Dhënave – Java 10

---

## Heap (pirgu)

Pemë binare ku nyjet prind janë gjithmonë më të mëdha/vogla sesa nyjet fëmijë.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java10/max-heap.png)

---

Kemi dy lloje të heap:

- Max-heap - nyja prind më e madhe se nyjet fëmijë.
- Min-heap - nyja prind më e vogël se nyjet fëmijë.

Heap gjithmonë është pemë e balancuar.

---

Përmes heap implementojmë **priority queue** (radhët me prioritet).

Radha e tillë nuk është FIFO, por kthen elementin e parë me vlerën më të madhe/vogël.

Poashtu, heap përdoren në **heapsort** për renditje të vargut.

---

Elementet e heap mund të ruhen në formë kompakte në varg.

- Indeksi i rrënjës është gjithmonë $0$.
- Indeksi i prindit për një nyje me indeks $i$ është $\lfloor\dfrac{i-1}{2}\rfloor$
- Indeksi i fëmijës së majtë është $2{\times}i + 1$.
- Indeksi i fëmijës së djathtë është $2{\times}i + 2$.

---

Insertimi në heap bëhet duke shtuar elementin e ri në pozitën e parë të lirë në fund.

Pas insertimit, heap korigjohet duke krahasuar dhe shkëmbyer elementin me nyjën prind.

Korigjimi përsëritet rekursivisht deri sa të rikthehet renditja në pemë, potencialisht deri te rrënja.

---

Zakonisht nga heap largojmë vetëm rrënjën.

Për ta larguar, e shkëmbejmë atë me nyjën më të fundit në varg.

Në këtë rast, pema korigjohet nga lart-poshtë. Shkëmbimi bëhet me fëmiun që ka vlerën maksimale/minimale (varësisht nga lloji i heap).

---

Insertimi në heap është $O(\log{n})$.

Largimi i rrënjës nga heap poashtu bëhet në $O(\log{n})$.

Largimi i rrënjës paraqet operacionin dequeue/pop të radhës me prioritet.

---

**Detyrë:** Të formohet pirgu maksimal dhe minimal nga sekuenca në vazhdim:

$$
5, 6, 1, 4, 7, 9, 2, 3, 8
$$

---

**Detyrë:** Të implementohet max-heap ose min-heap dhe të instancohet me vlerat nga detyra e mëparshme.

---

Në librarinë standarde heap ofrohet me tipin [`priority_queue<T>`](https://en.cppreference.com/w/cpp/container/priority_queue).

---

**Detyrë:** Të përdoret klasa e gatshme `priority_queue<T>` dhe të krahasohet me implementimin nga detyra e kaluar.
