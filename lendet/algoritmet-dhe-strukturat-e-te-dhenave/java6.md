## Algoritmet dhe Strukturat e të Dhënave – Java 6

---

## Stack

Strukturë ku elementet "palohen" një mbi një.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java6/stack.png) <!-- .element: style="border:none;" -->

---

Në stack lejohet manipulimi me vetëm elementin më të sipërm (ang. top).

Operacionet bazike mbi stack:

- Push - shto element në maje të stackut.
- Pop - largo elementin nga maja e stackut.

---

Operacioni **Push**

Shto element të ri në maje të stackut.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java6/stack-push.png) <!-- .element: style="border:none;" -->

---

Operacioni **Pop**

Largo elementin nga maja e stackut.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java6/stack-pop.png) <!-- .element: style="border:none;" -->

---

Stack është implementim i parimit **LIFO**: last-in, first-out.

Elementi i fundit i shtuar në stack del i pari.

---

**Detyrë:** Të implementohet klasa `Stack<T>` me veprimet kryesore `push` dhe `pop`, si dhe veprimet tjera ndihmëse.

---

Në librarinë standarde stack ofrohet me tipin [`stack<T>`](https://en.cppreference.com/w/cpp/container/stack).

---

**Detyrë:** Të përdoret klasa e gatshme `stack<T>` dhe të krahasohet me implementimin nga detyra e kaluar.

---

## Queue

Strukturë ku elementet "renditen" njëra pas tjetrës.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java6/queue.png) <!-- .element: style="border:none;" -->

---

Në queue elementet e reja shtohen në fund, ndërsa largimi bëhet nga fillimi.

Analogji me radhët e pritjes në shitore, aeroport, bankë, etj.

Operacionet bazike mbi queue:

- Enqueue - shto element në fund të radhës.
- Dequeue - largo elementin nga fillimi i radhës.

---

Operacioni **Enqueue**

Shto element të ri në fund të radhës.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java6/queue-enqueue.png) <!-- .element: style="border:none;" -->

---

Operacioni **Dequeue**

Largo elementin nga fillimi i radhës.

![](/lendet/algoritmet-dhe-strukturat-e-te-dhenave/java6/queue-dequeue.png) <!-- .element: style="border:none;" -->

---

Radha (queue) është implementim i parimit **FIFO**: first-in, first-out.

Elementi më i hershëm i shtuar në radhë del i pari.

---

**Detyrë:** Të implementohet klasa `Queue<T>` me veprimet kryesore `enqueue` dhe `dequeue`, si dhe veprimet tjera ndihmëse.

---

Në librarinë standarde radha ofrohet me tipin [`queue<T>`](https://en.cppreference.com/w/cpp/container/queue).

---

**Detyrë:** Të përdoret klasa e gatshme `queue<T>` dhe të krahasohet me implementimin nga detyra e kaluar.
