# Variablat dhe interruptet

---

**Variablat**

Variabla është një lokacion memorik.

Zakonisht është më lehtë t'i referohemi shënimeve përmes emrit, psh. `variabla1` sesa lokacioni memorik `5A73:235B`.

---

Në asamblerin për 8086 kemi dy lloje të variablave:

- **BYTE** - vlerë një-bajtëshe.
- **WORD** - vlerë dy-bajtëshe.

---

**Deklarimi i variablave**

Deklarimi i variablës 1-bajtëshe:

```x86asm
emri DB vlera
```

Deklarimi i variablës 2-bajtëshe:

```x86asm
emri DW vlera
```

---

**Emri i variablës** mund të jetë çfarëdo kombinimi i shkronjave dhe numrave, por duhet të fillojë me shkronjë. Ndonjëherë kemi variabla pa emër, të cilat rezervojnë adresë por jo identifikator.

**Vlera e variablës** mund të jetë çfarëdo vlere imediate (decimale, heksadecimale, binare), por mund të jetë edhe vlerë e painicializuar duke ia dhënë simbolin `?`.

---

```x86asm
ORG 100h

MOV AL, var1
MOV BX, var2

RET

var1 DB 7
var2 DW 1234h
```

---

Kur kompajllohet programi, asambleri i zëvendëson të gjithë emrat e variablave me vlerën e **offsetit** të adresës memorike përkatëse.

Adresa efektive e variablës llogaritet në raport me segment regjistrin `DS`.

---

Në COM fajlla, `DS` dhe `CS` e kanë vlerën fillestare të njejtë.

Emrat e variablave nuk janë case-sensitive.

---

Nëse offseti i variablës `var1` është `010Fh` dhe vlera e segment regjistrit `DS` është `0700h`, atëherë adresa efektive e `var1` është `0700:010F = 0710F`.

---

Kur variabla është 2-bajtëshe, atëherë offseti i variablës paraqet bajtin e parë të vlerës.

Në bajtin e parë (adresën e ulët) ruhet bajti i ulët i shënimit, ndërsa në bajtin e dytë (adresen e lartë) ruhet bajti i lartë i shënimit.

---

Variablat janë deklaruar pas urdhërit `RET` pasi që programi i krijuar vendos bajtat në varg, dhe nuk e dallon a është instruksion apo shënim.

---

Pasi që instruksionet kthehen në varg bajtash, instruksioni `ORG 100h` tregon prej cilës shtesë duhet të fillojë shkruarja e bajtave të kodit.

---

**Vargjet (arrays)**

Vargjet janë një grumbull variablash të ruajtura njëra pas tjetrës në memorie.

Shembull i dy vargjeve identike:

```x86asm
a DB 48h, 65h, 6Ch, 6Ch, 6Fh, 00h
b DB 'Hello', 0
```

---

![](/lendet/arkitektura-kompjutereve/array.png) <!-- .element: style="max-height:300px;border:none;" -->

Elementeve iu qasemi përmes kllapave të mesme:

```x86asm
MOV AL, a[3]
MOV SI, 3
MOV AL, a[SI]
```

---

Vargjet e mëdhaja mund të krijohen me komandën `DUP`

```x86asm
c DB 5 DUP(9)
```

Kodi i sipërm është ekuivalent me kodin në vijim:

```x86asm
c DB 9, 9, 9, 9, 9
```

---

Shembull tjetër i `DUP`:

```x86asm
d DB 5 DUP(1, 2)
# ekuivalente me:
d DB 1, 2, 1, 2, 1, 2, 1, 2, 1, 2
```

---

`DUP` mund të përdoret edhe për `DW` kur kemi vlera 2-bajtëshe.

---

Shpesh kompajlleri e nënkupton madhësinë e vlerave imediate, por ndonjëherë duhet të ceket në mënyrë eksplicite.

- **BYTE PTR** - vlerë 1-bajtëshe.
- **WORD PTR** - vlerë 2-bajtëshe.

---

**Shembull:**

```x86asm
BYTE PTR [BX]
WORD PTR [BX]
```

Shkurtimisht:

```x86asm
b. # për BYTE PTR
w. # për WORD PTR
```

---

**Marrja e adresave të variablës**

Instruksioni `LEA` (Load Effective Address) e bart offsetin e një variable në destinacion.

---

**Shembull:**

```x86asm
ORG 100h
MOV AL, VAR1
LEA BX, VAR1
MOV BYTE PTR [BX], 44h
MOV AL, VAR1
RET

VAR1 DB 22h
```

---

Operatori `OFFSET` e merr offsetin e adresës së variablës.

Për dallim nga `LEA`, `OFFSET` nuk mund të kthejë adresat e indeksuara (psh. `[VAR+SI]`).

---

**Shembull:** Programi i njejtë me shembullin e kaluar, por me `OFFSET`:

```x86asm
ORG 100h
MOV AL, VAR1
MOV BX, OFFSET VAR1
MOV BYTE PTR [BX], 44h
MOV AL, VAR1
RET

VAR1 DB 22h
```

---

**Konstantet**

Konstatet përdoren për t'i shoqëruar emra vlerave numerike (sikur `#define` në C++).

Sintaksa:

```x86asm
emri EQU vlera
```

---

**Shembull:** Dy kodet në vazhdim janë ekuivalente:

```x86asm
k EQU 5
MOV AX, k
```

```x86asm
MOV AX, 5
```

---

**Interruptet**

Interruptet thirren për të kryer shërbime të ndryshme. Mund të paramendohen si funksione built-in në gjuhët e larta.

Interruptet që thirren nga softueri quhen **software interrupts**,

Interruptet që gjenerohen nga hardueri njihen si **hardware interrupts**.

---

Interruptet softuerike krijohen me instruksionin `INT`, duke ia dërguar një kod të interruptit.

```x86asm
INT vlera
```

`vlera` paraqet një numër nga 0 deri 255.

---

Secili interrupt mund të ketë nënfuksione.

Nënfunksionet specifikohen duke vendosur vlerën e regjistrit `AH` (ose ndonjëherë regjistra tjerë).

Total kemi $256\times 256=65536$ funksione.

---

**Shembull:** Shtypja e karaktereve në ekran përmes interruptit `10h` dhe nënfunksionit `0Eh`:

```x86asm
ORG 100h
MOV AH, 0Eh
MOV AL, 'H'
INT 10h
MOV AL, 'e'
INT 10h
MOV AL, 'l'
INT 10h
MOV AL, 'l'
INT 10h
MOV AL, 'o'
INT 10h
MOV AL, '!'
INT 10h
RET
```
