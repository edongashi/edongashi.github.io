---
title: Siguria e të Dhënave
sidebar: true
noslides: true
suppresshooks: true
---

# Siguria e të Dhënave

## Krijimi i repository

Duhet të formoni grupe me nga 3 studentë dhe ta krijoni një repository ku do ta vendosni kodin burimor të detyrave. Repository mund të jetë me qasje publike ose private.

Në [këtë link](https://docs.google.com/spreadsheets/d/1ifBqKw1TupBgrfNpo8wd-Aa8CXEB0lwmOYDeKp70ZEY/edit?usp=sharing) i shënoni anëtarët dhe shfrytëzuesin tek i cili gjendet repository. Formati per repository:
**username/DS_1819_GrX**. Në rast se repository është privat atëherë duhet të më dërgoni ftesë për qasje në llogarinë *edongashi*. Afati i fundit për plotësim është 25/03/2019.

Në rast se keni probleme me repository private vlen të përmendet që GitHub ofron plane premium për studentët që aplikojnë me email `.edu`.

*Shënim:* Grupet mund të kenë anëtarë nga cilido grup i ushtrimeve (1A, 1B, 2A, 2B).

---

## Detyra e parë

| Grupi | Përshkrimi |
| ----- | ---------- |
1|Enkriptimi dhe dekriptimi duke zhvendosur (rrotulluar) karakteret ne blloqe te tekstit. Celes te jete madhesia e bllokut dhe numri i zhvendosjeve.
2|Enkoderi dhe dekoderi i Morse kodit. Gjithashtu enkodimi i tekstit permes Console.Beep().
3|Implementimi i book cipher i cili shfrytezon nje tekst dokument si liber.
4|Algoritmi rotX ne nivel te bajtit (X paraqet celësin). Implementimi i SymmetricAlgorithm qe ofron enkriptues dhe dekriptues per kete algoritem.
5|Enkriptimi dhe dekriptimi i tekstit ne foto, ku karakteret mapohen ne ngjyra te ndryshme (mapimi paraqet celesin). Pjesa e mbetur e fotos te behet pad me ndonje ngjyre.
6|Enkriptimi dhe dekriptimi permes Playfair Cipher ne C#
7|Enkriptimi dhe dekriptimi i tekstit permes tap code. Matrica te merret si celes i algoritmit. Ruajtja te behet ne byte array ku 1 paraqet tap ndersa 0 paraqet pauze. Gjithashtu te ekzistoje mundesia e enkodimit/dekodimit ne string ku pika paraqet tap ndersa hapesira paraqet pauze.
9|Enkriptimi dhe dekriptimi i tekstit ne nivel te blloqeve duke zhvendosur karakteret sipas nje permutacioni (celesi). Blloqet e paplotesuara mire te behen pad sipas ndonje metode.
10|Vertetimi qe nje SymmetricAlgorithm eshte simetrik duke testuar nese alg.CreateEncryptor dhe alg.CreateDecryptor jane reversibil duke kompozuar nje stream me te dhena te rastit me nje CryptoStream enkriptues dhe CryptoStream dekriptues, me c'rast efektet e tyre duhet te anulohen (pervec ndoshta bllokut te fundit).
11|Implementimi i base32 enkoderit dhe dekoderit.
12|Enkriptimi/dekriptimi i tekstit dhe fajllave permes DES ne JavaScript ose Python.
13|Enkriptimi dhe dekriptimi permes Four-square Cipher.
14|Implementimi i One time pad duke gjeneruar nje key stream nga nje int32 ose string seed. Implementimi i SymmetricAlgorithm qe ofron enkriptues dhe dekriptues per kete algoritem.
15|Implementimi i Beale cipher i cili shfrytezon nje tekst dokument si liber.
16|Enkriptimi dhe dekriptimi permes Beaufort Cipher.
17|Vigenere cipher duke gjeneruar celes nga keystream duke perdorur nje int32 ose string si seed.
18|Sulmi i kodit te Cezarit permes kerkimit te fjaleve te njohura ne ndonje tekst fajll.
19|Enkriptimi dhe dekriptimi i bajtave duke i zhvendosur bitat sipas nje permutacioni (permutacioni paraqet celesin). Implementimi i SymmetricAlgorithm qe ofron enkriptues dhe dekriptues per kete algoritem.
20|Perdorimi i DES per te mbeshtjellur network stream. Implementimi i nje cifti klient/server te thjeshte duke komunikuar ne kete menyre.
21|Enkriptimi dhe dekriptimi permes Polybius Square Cipher.
22|Implementimi i base64 enkoderit dhe dekoderit.
23|Enkriptimi dhe dekriptimi i bajtave duke i invertuar disa bita (te percaktuar nga celesi). Implementimi i SymmetricAlgorithm qe ofron enkriptues dhe dekriptues per kete algoritem.
24|Implementimi i SymmetricAlgorithm per enkriptim dhe dekriptim te kodit te Cezarit. Bajtat qe nuk jane shkronja A-Z ose a-z te mos ndryshohen.
25|Enkriptimi/dekriptimi i tekstit dhe fajllave permes 3DES.
27|Sulmimi i kodit te Cezarit duke mesuar frekuencat e shkronjave nga ndonje tekst fajll.
28|Sulmi i Vigenere cipher permes analizes frekuencore (ne gjuhe shqipe) nese dihet paraprakisht gjatesia e celesit.
29|Enkriptimi dhe dekriptimi permes Route Cipher.
30|Enkriptimi dhe dekriptimi permes Playfair Cipher ne JavaScript ose Python.
31|Enkriptimi dhe dekriptimi i fajllit permes DES duke kompozuar nje stream lexues (burimi) me nje stream shkruajtes (destinacioni). Shkrimi te behet duke perdorur nje buffer te ndermjetshem te madhesise fikse (psh. 1024, 2048, etj).
32|Fshehja e informatës në tekst fajll duke shtuar hapësira (space) pas çdo rreshti.

---

## Orari i ushtrimeve

| Grupi | Dita   | Ora         | Salla |
| ----- | ------ | ----------- | ----- |
| 1A    | E hënë | 10:00-11:30 | 615   |
| 1B    | E hënë | 11:30-13:00 | 615   |

---

## Materiali

1. [Steganografia](/lendet/siguria-dhenave/java1)
2. [Teknikat klasike të enkriptimit](/lendet/siguria-dhenave/java2)
3. [Algoritmet simetrike](/lendet/siguria-dhenave/java3)
4. [Algoritmet asimetrike](/lendet/siguria-dhenave/java4)

[Kodi i ushtrimeve](https://github.com/edongashi/data-security-2019)

---

## Artikuj

- [Hyrje e shpejtë në C#](/artikuj/csharp/hyrje)

---

## Linqe

- [C# Programming Guide](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/)
- [gitignore.io](https://gitignore.io/)

---

## Vegla

- [Dekriptori i kodit të Cezarit](/app?id=yk4brq4nykn4hlocxxbixqudyobf5q5wazwmhggcwdbyqa6dxbvcobt5azxtoni)
