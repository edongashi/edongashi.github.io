# Adresimi

---

Për shkak që 8086 është procesor 16-bitësh, përdorimi i vetëm një regjistri për të mbajtur adresa memorike ofron hapësirë të vogël kombinimesh ($2^{16}$).

Për këtë arsye është përdorur adresimi përmes segmentimit.

---

Adresa ndahet në **segment** dhe **offset**.

Adresat i shënojmë në formatin `SEG:OFF`, e cila jep adresën ekuivalente `10H * SEG + OFF`

**Shembull:** `5A73:235B`

---

## [Mënyrat e adresimit](https://www.geeksforgeeks.org/addressing-modes-8086-microprocessor)

---

**Register mode**

Të dy operandët janë regjistra.

```x86asm
MOV AX, BX
XOR AX, DX
ADD AL, BL
```

---

**Immediate mode**

Burimi është vlerë 8-bitëshe ose 16-bitëshe. Destinacioni nuk mund të jetë vlerë imediate.

```x86asm
MOV AX, 2000
MOV CL, 0A
ADD AL, 45
AND AX, 0000
```

---

**Shënim:** Për të vendosur vlera në segment regjistër na duhet që operandi i dytë të jetë regjistër.

```x86asm
MOV AX, 2000
MOV CS, AX
```

---

**Displacement/direct mode**

Në këtë modë merret/vendoset vlera nga një adresë që paraqet zhvendosjen. Zhvendosja është relative ndaj `DS`.

```x86asm
MOV AX, [DISP]
MOV AX, [0500]
```

---

**Register indirect mode**

Në këtë modë adresa efektive llogaritet duke marrë adresën nga `BX`, `BP`, `SI`, `DI` bashkë me segmentin përkatës.

```x86asm
MOV AX, [DI]
ADD AL, [BX]
MOV AX, [SI]
```

---

**Based indexed mode**

Adresa llogaritet si shuma e një regjistri bazë (**BX**, **BP**) dhe një indeks regjistri (**SI**, **DI**) bashkë me segmentin përkatës.

```x86asm
MOV AL, [BP+SI]
MOV AX, [BX+DI]
```

---

**Indexed mode**

Adresa merret nga indeks regjistri (**SI**, **DI**) duke u mbledhur me një zhvendosje (bashkë me segmentin përkatës).

```x86asm
MOV AX, [SI+2000]
MOV AL, [DI+3000]
```

---

**Based mode**

Adresa merret nga regjistri bazë (**BX**, **BP**) duke u mbledhur me një zhvendosje.

```x86asm
MOV AL, [BP+0100]
```

---

**Based indexed displacement mode**

Adresa llogaritet si shuma e një regjistri bazë (**BX**, **BP**), një indeks regjistri (**SI**, **DI**), si dhe një zhvendosje numerike.

```
MOV AL, [SI+BP+2000]
```

---

Regjistrat që mund t'i përdorim për adresim indirekt:

- BX - Base register (regjistër bazë)
- BP - Base pointer (regjistër bazë)
- SI - Source index (indeks regjistër)
- DI - Destination index (indeks regjistër)

---

Adresimet indirekte mund të mbahen në mend me këtë tabelë:

![](/lendet/arkitektura-kompjutereve/8086_addressing.png) <!-- .element: style="max-height:300px;border:none;" -->

Nga secila kolonë mund të marrim (opsionalisht) nga një element dhe t'i mbledhim së bashku.

---

![](/lendet/arkitektura-kompjutereve/8086_addressing2.png) <!-- .element: style="max-height:400px;border:none;" -->

- **d8** - 8 bit zhvendosje (me shenjë)
- **d16** - 16 bit zhvendosje (me shenjë)

---

**Instruksioni MOV**

Instruksioni **MOV** bën lëvizjen e shënimit nga operandi i dytë (burimi) në operandin e parë (destinacioni).

```x86asm
MOV DST, SRC
```

---

**Karakteristikat e MOV**

- Burimi mund të jetë vlerë imediate, regjister i përgjithshëm, ose lokacion memorik.
- Destinacioni mund të jetë regjistër i përgjithshëm ose lokacion memorik.
- Lokacioni memorik mund të jetë direkt ose indirekt.
- Për segment regjistra vlejnë rregulla të veçanta.
- MOV nuk mund të përdoret për të vendosur regjistrat `CS` ose `IP`.

---

Në dokumentacion hasim shprehjet **REG**, **SREG**, **immediate**, **memory**.

---

**REG** paraqet një regjistër të përgjithshëm nga lista e mëposhtme:

`AX`, `BX`, `CX`, `DX`, `AH`, `AL`, `BL`, `BH`, `CH`, `CL`, `DH`, `DL`, `DI`, `SI`, `BP`, `SP`.

---

**memory** paraqet një adresë memorike e cila gjenerohet nga ndonjëra nga kombinimet e diskutuara tek adresimi.

**Shembuj:** `[BX]`, `[BX+SI+7]`, `var`, etj.

---

**immediate** paraqet një vlerë aty-për-aty, dmth një vlerë numerike 8 ose 16 bitëshe.

**Shembuj:** `5`, `-24`, `3Fh`, `10001101b`, etj.

---

**SREG** paraqet një segment regjister.

Segment regjistrat: `DS`, `ES`, `SS`, `CS`.

---

**MOV i përgjithshëm**

![](/lendet/arkitektura-kompjutereve/MOV_1.png) <!-- .element: style="max-height:400px;border:none;" -->

---

**MOV në segment regjistra**

![](/lendet/arkitektura-kompjutereve/MOV_2.png) <!-- .element: style="max-height:400px;border:none;" -->

---

Zakonisht dokumentacioni na tregon për operandët që pranojnë instruksionet.

Përmbledhje e operandëve valid:

- REG
- SREG
- memory
- immediate

---

Në emulator një regjion i veçantë i memories është i rezervuar për video.

Hapësira për video memorien fillon nga vlera `B8000h`

---

Programi që shfaq shkronjën `A` në ekran:

```x86asm
ORG 100h
MOV AX, 0B800h
MOV DI, 0h
MOV DS, AX
MOV CL, 'A'
MOV CH, 01011111b
MOV BX, 0h
MOV [BX+DI], CX
RET
```

---

**Detyrë:** Të shkruhet emri juaj në pamje të emulatorit duke filluar nga një shtyerje të caktuar.

---

**Detyrë:** Të llogariten adresat efektive për paraqitjet e mëposhtme:

$$
\texttt{D15A:599A} \tag{1}
$$

$$
\texttt{09A7:06CF} \tag{2}
$$

$$
\texttt{ACCF:AB08} \tag{3}
$$

$$
\texttt{4594:63F1} \tag{4}
$$

---

**Detyrë:** Të tregohet se ku do të ruhet shënimi dhe çfarë vlere do ta ketë pas ekzekutimit të kodit:

```x86asm
MOV AX, 10h        ; 1
MOV DS, AX         ; 2
MOV [02h], 03h     ; 3
MOV AX, 03h        ; 4
MOV CX, 02h        ; 5
MOV BX, AX         ; 6
MOV DI, AX         ; 7
MOV [BX], CX       ; 8
MOV [BX+DI-1], 15h ; 9
MOV [DI+1], BX     ; 10
```

---

**Detyrë:** Të tregohet se çfarë operandi janë shprehjet në vijim (REG, SREG, memory, immediate):

```x86asm
AX
SI
[0AB12h]
DS
0A3h
[DI+3]
BX
[BX]
0AF05h
[BX-03h]
DI
```
