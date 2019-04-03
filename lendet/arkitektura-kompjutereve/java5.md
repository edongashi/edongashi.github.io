# Bazat e programimit në gjuhë të ulëta

---

**Rikujtim:** Kompjuterët përdorin bazën numerike 2 për paraqitje të numrave - numrat binar.

- BIT - një shifër e vetme (0 ose 1).
- NIBBLE - grupi i 4 bitave.
- BYTE - grupi i 8 bitave.
- WORD - grupi i 2 bajtave.
- DOUBLE WORD - grupi i 4 bajtave.

---

![](http://i64.tinypic.com/2cet0gg.jpg) <!-- .element: style="max-height:400px;border:none;" -->

---

Kompjuteri ka:

- CPU - njësia procesorike dhe logjike.
- Memorien - varg bajtash ku secili bajt ka adresë unike.
- Busat - mundësojnë komunikimin mes komponenteve.

---

Brenda CPU gjenden njësi memorike të veçanta që njihen si **regjistra** dhe përdoren për ruajtje të përkohshme të të dhënave.

---

**Radhitja e vargjeve të bajtave në memorie**

- Big-endian - bajtat e rëndësisë së lartë ruhen së pari (në adresa të ulëta).
- Little-endian - bajtat e rëndësisë së ulët ruhen së pari (në adresa të ulëta).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Big-Endian.svg/538px-Big-Endian.svg.png) <!-- .element: style="max-height:250px;border:none;" -->
![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Little-Endian.svg/538px-Little-Endian.svg.png) <!-- .element: style="max-height:250px;border:none;" -->

---

**Procesori 8086** është mikroprocesor 16-bitësh i dizajnuar nga Intel ndërmjet viteve 1976-1978.

8086 ka qenë implementimi i parë i arkitekturës së instruksioneve x86, e cila është arkitektura më e përdorur sot.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Intel_C8086.jpg/640px-Intel_C8086.jpg) <!-- .element: style="max-height:250px;border:none;" -->

---

Procesori ekzekuton urdhëra të definuara në instruction setin (ISA).

Gjuha e ulët ku urdhërat jepen në nivel të ISA njihet si assembly language.

Vegla për emulim të 8086 - **emu8086**.

---

Notacioni i numrave në kod:

1. Numrat binar shënohen me prapashtesën `b`
2. Numrat heksadecimal fillojnë me `0` dhe kanë prapashtesën `h`
3. Numrat oktal kanë praprashtesën `o`

---

**Regjistrat e procesorit 8086**

![](/lendet/arkitektura-kompjutereve/8086_registers.png) <!-- .element: style="max-height:500px;border:none;" -->

---

Regjistrat mbajnë vlera 16-bitëshe.

Disa regjistra lejojnë qasjen në bajtin e ulët dhe të lartë.

**Shembull:** Regjistri `AX` është regjistër 16 bitësh ku `AH` paraqet 8 bitat e lartë ndërsa `AL` paraqet 8 bitat e ulët.

---

**Regjistrat e përgjitshëm të 8086**

- AX – regjistri akumulator (i ndarë në AH / AL).
- BX – regjistri bazë i adresave (i ndarë në BH / BL).
- CX - regjistri i numërimit ( i ndarë në CH / CL).
- DX – regjistri i të dhënave (i ndarë në DH / DL).
- SI – regjistri i indeksit të burimit.
- DI – regjistri i indeksit të destinacionit.
- BP – treguesi bazë.
- SP – treguesi i stackut.

---

**AX (AH/AL)** - regjistri akumulator

Përdoret për veprime aritmetikore dhe logjike. Në 8086 nuk jemi të obliguar t'i ruajmë rezultatet e llogaritjeve në akumulator.

---

**BX (BH/BL)** - regjistri bazë

Përdoret për të ruajtur adresat bazë gjatë qasjes në memorie.

---

**CX (CH/CL)** - regjistri i numërimit

Përdoret për të numëruar ciklet e unazës, anëtarët e vargut, etj.

---

**DX (DH/DL)** - regjistri i të dhënave

Përdoret për rezultatet e shumëzimit dhe pjesëtimit dhe specifikim të porteve në disa operacione hyrëse/dalëse.

---

**SI** - source index regjistri

Përdoret si pointer për adresim në të dhëna.

Llogaritet si shtesa (offset) e adresës që gjendet në `DS`.

---

**DI** - destination index regjistri

Përdoret si pointer për adresim në të dhëna.

Llogaritet si shtesa (offset) e adresës që gjendet në `ES`.

---

**BP** - base pointer

Përdoret për qasje në variablat lokale në stack.

Llogaritet si shtesa (offset) e adresës që gjendet në `SS`.

---

**SP** - stack pointer

Tregon adresën e elementit në maje të stackut.

Llogaritet si shtesa (offset) e adresës që gjendet në `SS`.

---

**Segment regjistrat të 8086**

Përdorën gjatë llogaritjes së adresave për qasje në memorie.

- CS - code segment, për programin aktual.
- DS - data segment, ku zakonisht ruhen variablat.
- ES - extra segment, që specifikohet nga programuesi.
- SS - stack segment, që tregon segmentin e stackut.

---

**Regjistrat special të 8086**

- IP - instruction pointer, paraqet shtesën (offset) e `CS` segmentit për ta adresuar instruksionin aktual.
- Flags (F) - paraqet statuset e procesorit pas veprimeve aritmetike/logjike.

---

<!-- .slide: style="font-size: 0.8em" -->

**Statuset e procesorit**

- Carry Flag (CF) - kur kemi unsigned overflow.
- Parity Flag (PF) - kur kemi numër çift bitash në rezultat.
- Auxiliary Flag (AF) - kur kemi unsigned overflow në nibble të ulët.
- Zero Flag (ZF) - kur rezultati është zero.
- Sign Flag (SF) - kur rezultati është negativ.
- Trap Flag (TF) - për debugim.
- Interrupt enable flag (IF) - lejimi i interrupteve të jashtme.
- Direction Flag (DF) - drejtimi i disa operacioneve.
- Overflow Flag (OF) - kur kemi signed overflow.
