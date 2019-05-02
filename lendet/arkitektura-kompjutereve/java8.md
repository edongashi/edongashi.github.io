# Veprimet aritmetike dhe logjike

---

**Makrot e gatshme - emu8086.inc**

Në include fajllin `emu8086.inc` gjenden disa makro të gatshme për funksione të zakonshme.

Makrot duken sikur funksione të gjuhëve të larta, por realisht më shumë ngjajnë me `#define` makro-funksionet në C++.

---

Funksionet që gjenden në `emu8086.inc` bëhen të qasshme duke shkruar kodin në fillim të fajllit burimor:

```x86asm
INCLUDE 'emu8086.inc'
```

---

Disa **makro** që gjenden në `emu8086.inc`:

- `PUTC char` - vendos një karakter në ekran.
- `PRINT string` - vendos një string në ekran.
- `PRINTN string` - vendos një string në ekran dhe dil në rresht tjetër.
- `GOTOXY col, row` - shko te pozita në ekran.

---

**Shembull:**

```x86asm
INCLUDE 'emu8086.inc'
ORG 100h

PRINT 'Pershendetje!'
GOTOXY 10, 5
PUTC 'A'
PUTC 'B'
PUTC 'C'

RET
END
```

---

Përveç makrove, kemi edhe **procedura**.

Procedura është nënprogram real, e cila thirret përmes instruksionit `CALL`.

Në `emu8086.inc` deklarimi i procedurave bëhet përmes makrove, ashtu që të kursehet hapësira e kodit duke mos kompajlluar kod që nuk do të thirret.

---

Disa **procedura** që gjenden në `emu8086.inc`:

- `PRINT_NUM` - shtyp `AX` në ekran. Deklarohet përmes `DEFINE_PRINT_NUM`.
- `SCAN_NUM` - lexon numër nga tastiera dhe e vendos në `CX`. Deklarohet përmes `DEFINE_SCAN_NUM`.
- `CLEAR_SCREEN` - pastron pamjen. Deklarohet përmes `DEFINE_CLEAR_SCREEN`.
- `GET_STRING` - lexon string nga tastiera duke e ruajtur në `DS:DI`. Deklarohet përmes `DEFINE_GET_STRING`.

---

**Shembull:** Leximi dhe shtypja e një numri. Kujdes: `DEFINE_X` duhet të bëhen jashtë main por para `END`.

```x86asm
INCLUDE 'emu8086.inc'
ORG 100h

PRINT 'Shtypni nje numer: '
CALL SCAN_NUM
GOTOXY 0, 1
PRINT 'Keni shtypur: '
MOV AX, CX
CALL PRINT_NUM
RET

DEFINE_SCAN_NUM
DEFINE_PRINT_NUM
DEFINE_PRINT_NUM_UNS
END
```

---

Kur thirret instruksioni `CALL`, programi vendos në stack adresën momentale dhe kalon te adresa ku gjendet procedura.

Kur mbaron procedura urdhëri `RET` kthehet te adresa e ruajtur në stack.

---

**Detyrë:** Të shkruhet programi i cili lexon 3 numra të plotë dhe pastaj i shfaq ata.

```text
Jepni vleren a: 15
Jepni vleren b: -2
Jepni vleren c: 3

Keni shtypur vlerat:
a = 15
b = -2
c = 3
```

---

## Instruksionet logjike dhe aritmetike

---

Veprimet logjike dhe aritmetike kryhen në ALU. Zakonisht pas ekzekutimit vendosen disa bita në status regjistër, të cilat quhen **flags**.

![](/lendet/arkitektura-kompjutereve/flags.png) <!-- .element: style="max-height:300px;border:none;" -->

---

**Carry Flag (CF)** merr vlerën `1` kur ka **unsigned overflow**.

Unsigned overflow ndodh kur rezultati i mbledhjes së dy numrave ka bartje jashtë madhësisë së regjistrave.

---

**Zero Flag (ZF)** merr vlerën `1` kur rezultati është **zero**, përndryshe merr vlerën `0` (për rezultate të ndryshme nga zero).

Shpesh nevojitet për të shikuar a janë të barabartë dy numra.

$$
a - b = 0 \Rightarrow a = b \land ZF = 1
$$

---

**Sign Flag (SF)** merr vlerën `1` kur rezultati është **negativ**. Kur rezultati është **pozitiv** merr vlerën `0`.

Vlera e `SF` është ekuivalente me MSB të rezultatit. Pse?

---

**Overflow Flag (OF)** merr vlerën `1` kur ka **signed overflow**.

Signed overflow ndodh kur mbledhja e dy numrave pozitiv jep numër negativ ose mbledhja e dy numrave negativ jep numër pozitiv.

---

**Parity Flag (PF)** merr vlerën `1` kur ka numër çift të njësheve në rezultat, ndërsa vlerën `0` kur ka numër tek.

---

**Auxiliary Flag (AF)** merr vlerën `1` kur kemi **unsigned overflow** (bartje) nga 4 bitat e ulët të rezultatit.

---

**Interrupt enable Flag (IF)** kur ka vlerën `1` lejon interrupte nga pajisjet e jashtme në CPU. Kur ka vlerën `0` nuk trajtohen interruptet.

Ndonjëherë kemi kod kritik që nuk duhet të pengohet, prandaj mund ta vendosim `IF=0`.

---

**Direction Flag (DF)** përdoret nga disa instruksione për të treguar drejtimin e përpunimit të të dhënave.

Vlera `0` tregon që procesimi të bëhet përpara, ndërsa vlera `1` tregon që procesimi të bëhet mbrapsht.

---

**Instruksionet aritmetike dhe logjike** ndahen në tri grupe.

Ato kryejnë një veprim dhe rezultatin zakonisht e ruajnë në destinacion, ose në disa raste speciale përdorin regjistra shtesë të cilët cekën në dokumentacionin e instruksionit.

---

Grupi i parë: **ADD, SUB, CMP, AND, TEST, OR, XOR**

Operandët valid për këto instruksione janë:

```
REG, memory
memory, REG
REG, REG
memory, immediate
REG, immediate
```

---

- **ADD** - e mbledh operandin e dytë në të parin.
- **SUB** - e zbret operandin e dytë në të parin.
- **CMP** - sikur **SUB** por **vetëm për flags (statuse)**.

---

- **AND** - dhe logjike nga operandi i dytë në të parin.
- **TEST** - sikur **AND** por **vetëm për flags (statuse)**.
- **OR** - ose logjike nga operandi i dytë në të parin.
- **XOR** - ose ekskluzive nga operandi i dytë në të parin.

---

**Detyrë:** Të lexohen nga tastiera dy numra $a$ dhe $b$ dhe të shfaqen në ekran vlerat e shprehjeve:

$$
a + b \tag{1}
$$

$$
a - b \tag{2}
$$

$$
a \land b \tag{3}
$$

$$
a \lor b \tag{4}
$$

---

**Detyrë:** Të lexohen nga tastiera dy numra $a$ dhe $b$ dhe të vrojtohen relacionet (përmes ALU flags):

$$
a = b \tag{1}
$$

$$
a > b \tag{2}
$$

$$
a < b \tag{3}
$$

$$
a = 0, a > 0, a < 0 \tag{4}
$$

---

Grupi i dytë: **MUL, IMUL, DIV, IDIV**

Operandët e përkrahur:

```
REG
memory
```

Shumëzimi dhe pjesëtimi janë më kompleks për shkak të madhësive të operandëve/rezultateve.

---

**MUL** paraqet shumëzim **pa shenjë**.

Kur operandi është **bajt**:

$$
\texttt{AX} = \texttt{AL} \times \text{operandi}
$$

Kur operandi është **word**:

$$
(\texttt{DX AX}) = \texttt{AX} \times \text{operandi}
$$

---

**IMUL** paraqet shumëzim **me shenjë**.

Kur operandi është **bajt**:

$$
\texttt{AX} = \texttt{AL} \times \text{operandi}
$$

Kur operandi është **word**:

$$
(\texttt{DX AX}) = \texttt{AX} \times \text{operandi}
$$

---

**DIV** paraqet shumëzim **pa shenjë**.

Kur operandi është **bajt**:

$$
\begin{array}{l}
\texttt{AL} = \texttt{AX} / \text{operandi} \\
\texttt{AH} = \text{mbetja}
\end{array}
$$

Kur operandi është **word**:

$$
\begin{array}{l}
\texttt{AX} = (\texttt{DX AX}) / \text{operandi} \\
\texttt{DX} = \text{mbetja}
\end{array}
$$

---

**IDIV** paraqet shumëzim **me shenjë**.

Kur operandi është **bajt**:

$$
\begin{array}{l}
\texttt{AL} = \texttt{AX} / \text{operandi} \\
\texttt{AH} = \text{mbetja}
\end{array}
$$

Kur operandi është **word**:

$$
\begin{array}{l}
\texttt{AX} = (\texttt{DX AX}) / \text{operandi} \\
\texttt{DX} = \text{mbetja}
\end{array}
$$

---

**Detyrë:** Të lexohen nga tastiera dy numra $a$ dhe $b$ dhe të shfaqen në ekran vlerat e shprehjeve:

$$
a \times b \tag{1}
$$

$$
a \div b \tag{2}
$$

$$
a \bmod b \tag{3}
$$

---

Grupi i tretë: **INC, DEC, NOT, NEG**

Operandët e përkrahur:

```
REG
memory
```

---

- **INC** - e inkrementon operandin.
- **DEC** - e dekrementon operandin.
- **NOT** - e llogarit 1-komplementin e operandit.
- **NEG** - e llogarit 2-komplementin e operandit.

---

**Detyrë:** Të deklarohet variabla $shuma=0$, dhe të lexohen pesë numrat e ardhshëm nga tastiera. Secili numër i lexuar t'i shtohet shumës.

---

**Detyrë:** Të lexohen numrat e plotë $a$ dhe $b$ nga tastiera, dhe pastaj t'iu ndërrohen vlerat mes veti.

---

**Detyrë:** Të lexohen nga tastiera brinjët e drejtkëndëshit, pastaj të llogariten perimetri dhe sipërfaqja (në variabla), dhe të shfaqen në ekran.

```text
Jepni brinjen a: 5
Jepni brinjen b: 3
Perimetri i drejtkendeshit: 16
Siperfaqja e drejtkendeshit: 15
```

---

**Detyrë:** Të lexohen numrat e plotë $a$ dhe $b$ nga tastiera, dhe pastaj të llogariten shprehjet dhe të shtypen në ekran:

$$
3 \times (a + b) - 2 \tag{1}
$$

$$
(a + 2b + 7) \bmod 3 \tag{2}
$$

$$
((a \lor \lnot b) + 5) \land 125 \tag{3}
$$
