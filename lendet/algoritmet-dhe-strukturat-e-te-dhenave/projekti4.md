---
title: Projekti 4
noslides: true
suppresshooks: true
---

# Projekti 4 -- Stack, queue, listat

## Kërkesa 1

Të shkruhet klasa `Stack<T>` me metodat:

- `void push(T)` - e vendos një element në maje të stack.
- `T pop()` - e largon elementin nga maja e stackut dhe e kthen.
- `T peek()` - e kthen elementin nga maja e stack (por nuk e largon).
- `int size()` - e kthen numrin e elementeve të pranishëm në stack.

Të demonstrohet përdorimi i klasës në `main` me ndonjë shembull sipas dëshirës.

**Pikë shtesë** Të bëhet menaxhimi dinamik i kapacitetit të stack.

## Kërkesa 2

Të shkruhet klasa `Queue<T>` me metodat:

- `void enqueue(T)` - e vendos një element në fund të queue.
- `T dequeue()` - e largon elementin nga fillimi i queue dhe e kthen.
- `T peek()` - e kthen elementin nga fillimi i queue (por nuk e largon).
- `int size()` - e kthen numrin e elementeve të pranishëm në queue.

Të demonstrohet përdorimi i klasës në `main` me ndonjë shembull sipas dëshirës.

**Pikë shtesë** Të bëhet menaxhimi dinamik i kapacitetit të queue.

## Kërkesa 3

Është dhënë struktura `Node` e cila e paraqet kokën e një liste të lidhur njëfishe.

```cpp
struct Node {
  int value;
  Node* next;
}
```

Të shkruhen funksionet në vazhdim (jashtë strukturës):

- `Node* add_front(int value, Node* list)` - e shton një element me vlerën `value` në fillim të listës `list` dhe e kthen pointerin e kokës së re.
  Parametri `list` guxon të jetë `NULL` prandaj funksioni duhet ta trajtojë edhe atë rast.
- `int head(Node* list)` - e kthen vlerën e elementit të parë në listë.
- `int size(Node* list)` - e kthen numrin e elementeve në listë.
- `int sum(Node* list)` - e kthen shumën e vlerave në listë.
- `bool exists(int value, Node* list)` - tregon a ekziston vlera në listë.
- `void print(Node* list)` - e shtyp në ekran listën në formatin: `3, -4, 2, 7` (vlerat janë vetëm shembull).
- `Node* copy(Node* list)` - e kopjon tërësisht listën dhe e kthen pointerin për kokën e listës së kopjuar.
- `void destroy(Node* list)` - e liron memorien e të gjitha nyjeve të alokuara në listë.

Në **main** të krijohet një listë dhe të mbushet me vlera sipas dëshirës.
Të thirren funksionet e deklaruara dhe të shtypen rezultatet e tyre në ekran.

Për secilin nga funksionet `head`, `size`, `sum`, `exists`, `print`, `copy`
të tregohet kompleksiteti kohor i rastit më të mirë dhe atij më të keq.

Rregullat që duhet t'i ndjekni gjatë implementimit të programit:

- Nuk duhet të përdorni unaza (for, while, do-while, goto) në asnjë pjesë të programit, por vetëm rekursionin.
- Nuk duhet të deklaroni funksione tjera ndihmëse jashtë atyre të cekura në detyrë.
- Nuk duhet të përdorni asnjë librari të gatshme.
- Para se të përfundojë programi duhet ta lironi të gjithë memorien e alokuar dinamikisht përmes `destroy`.

## Vlerësimi

Nuk jeni të obliguar të ofroni zgjidhje për të gjitha kërkesat në këtë detyrë.

Secila kërkesë mban 1/3 të pikëve totale dhe llogaritja e totalit bëhet duke i mbledhur pikët e kërkesave të zgjidhura në mënyrë korrekte.

## Dorëzimi

Dorëzimi duhet të bëhet përmes Google Classroom.
