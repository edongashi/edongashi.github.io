---
title: Algoritmet dhe Strukturat e të Dhënave
noslides: true
suppresshooks: true
---

# Detyra për ushtrime

---

1\. Të deklarohet struktura `Drejtkendeshi` me fushat `a` dhe `b` të tipit numër real.

2\. Të shkruhet funksioni `shtyp(Drejtkendeshi d)` i cili i shtyp të dhënat e drejtkëndëshit në ekran.

3\. Të shkruhet funksioni `llogarit(Drejtkendeshi d, double* s, double* p)` i cili e llogarit
sipërfaqen dhe perimetrin e drejtkëndëshit dhe i vendos rezultatet në adresat e dërguara si parametra.

4\. Të shkruhet funksioni `&anetari(Drejtkendeshi&, int x)` i cili për vlera jonegative të `x`
kthen një referencë për gjerësine `a` e drejtkëndëshit, ndërsa për vlera negative kthen lartësinë `b`.

5\. Në `main` të deklarohen variablat përkatëse dhe të demonstrohen të gjitha funksionet.

6\. Gjatë demonstrimit të funksionit `anetari` të lexohet ndonjëra brinjë dhe të mbishkruhet.
Të vertetohet mbishkrimi duke i shfaqur përsëri vlerat në ekran.

---

1\. Të deklarohet numërimi **Madhesia** i cili ka vlerat e mundshme **Madhe, Mesme, Vogel**.

2\. Të deklarohet klasa **Vendbanimi** e cila ka këto fusha private:

- **emri** - Emri i vendbanimit.
- **madhesia** - njëra nga vlerat e **Madhesia** (Madhe, Mesme, Vogel).
- **siperfaqja** - Sipërfaqja e vendbanimit në km².
- **temperaturat[7]** - Temperaturat e vendbanimit në 7 ditët e fundit

Në tabelën vijuese janë përmbledhur fushat dhe tipet e tyre.

Fusha | Tipi
--- | ---
emri | Tekst
madhesia | Numërimi Madhesia
siperfaqja | Numër me presje dhjetore
temperaturat[7] | Varg i numrave me presje dhjetore

3\. Të shkruhet konstruktori për klasën i cili inicializon fushat e saj.
Vargu të inicializohet përmes kopjimit.

4\. Të shkruhet funksioni `lexo()` i cili i lexon vlerat
nga tastiera dhe e kthen një objekt të tipit `Vendbanimi`.

5\. Të shkruhet metoda **shtyp()** e cila i shtyp në ekran të gjitha karakteristikat e vendbanimit.
Vlerat e numërimit duhet të shfaqen në formë të lexueshme (jo 0, 1, 2...), ndërsa vlerat e vargut duhet të shfaqen një nga një përmes unazës.
Ky funksion nuk kthen rezultat.

6\. Të shkruhet metoda **luhatja_temperatures()**, e cila e kthen dallimin ndërmjet temperaturës maksimale dhe minimale të vendbanimit gjatë 6 ditëve të fundit. Rezultati i llogaritjes duhet të kthehet si vlerë kthyese e metodës.

7\. Në **main** të deklarohet dy variabla të tipit **Vendbanimi**.
E para inicializohet me vlera aty-për-aty, ndërsa e dyta përmes funksionit `lexo()`.

8\. Në **main** të demonstrohen metodat e kërkesave 5 dhe 6.

---

Të shkruhet funksioni `indeksi(T*, n, f)` i cili e kthen indeksin e elementit të parë që
plotëson kushtin `f`. Nëse nuk ekziston ndonjë element i tillë të kthehet vlera `-1`.

Në `main` të demonstrohet ky funksion me një ose më shumë shembuj.
