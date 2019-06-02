---
noslides: true
suppresshooks: true
---

# Detyra e tretë nga lënda Siguria e të Dhënave

[Pretty Good Privacy (PGP)](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) është një vegël shumë e përdorur për funksione kriptografike sikur enkriptimi/nënshkrimi i emailave, fajllave, disqeve etj.

Për detyrën e tretë duhet ta përdorni PGP për të gjeneruar një çelës publik të cilin duhet ta ngarkoni në GitHub (në repository ku i keni 2 projektet tjera).

Çelësin e krijuar e përdorni për ta nënshkruar në clearsign një tekst që mban ndonjë fakt rreth juve. Tekstin bashkë me nënshkrimin e dërgoni në email adresën e asistentit përkatës (arbnor.halili@uni-pr.edu, edon.gashi@uni-pr.edu).

Detyra është individuale dhe duhet të plotësohen këto kritere për t'u vlerësuar:

1. Çelësi publik duhet të jetë krijuar në emrin dhe email adresën tuaj.
2. Çelësi publik duhet të jetë i ngarkuar në GitHub në repository ku gjenden projektet e kaluara.
3. Çelësi privat në asnjë mënyrë nuk guxon të publikohet.
4. Nënshkrimi i mesazhit duhet të jetë valid në kuadër të çelësit tuaj publik.

Në [këtë link](https://edongashi.github.io/app?id=ljxmhj6dwajmhagcuhb27qu5glbytq44be5xcllgaz6f2) mund ta testoni nënshkrimin dhe çelësin publik.

## Referenca

Një vegël që mund ta përdorni është GNU Privacy Guard (GPG) e cila vie e instaluar në Linux, ndërsa në Windows instalohet bashkë me Git Bash ose mund të instalohet si e pavarur nga faqja e GPG.

GPG ofron komanda si `--gen-key`, `--clearsign`, `--export`, etj.

Listën e plotë të komandave e gjeni përmes `gpg --help`.

---

## Shembull i mesazhit

```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA1

Pershendetje nga FIEK!
-----BEGIN PGP SIGNATURE-----

iJwEAQECAAYFAlzz7GUACgkQBpJaWrMCCxjzugP/V2WaLShf6IU5ZF028G7rpeB8
IoWP5x7fpkzacnVrdan0Iw5/ze5nxb12GFuhzgQQhDHtry6LPqqs/TkRJbSDaoSS
Y3C+zkY+hCRymTy6Q1gva3ceAGlHUSChuNJevZsk+mt6f8Kz3ea1UQ++94XLlg12
D5sPSQmauwM63SLjcaA=
=mzAh
-----END PGP SIGNATURE-----
```

---

## Shembull i çelësit publik

```
-----BEGIN PGP PUBLIC KEY BLOCK-----

mI0EXPPsKAEEAMJynCP1s0PzG4hvV55uQ7ZiVp7NiK5FoQoMZVR0T+tME93CIe4H
k5QgnTZllJaurKkKTjBcxdxKHEmAkzxoqX8EoxF+JZor4kn3QGvr1xOfXz8v5TQQ
9fjQ75MlJGUHWtR6glsMM8gLG2smD++EEkBYKMVXzcvM9IMtcyN5so+7ABEBAAG0
IkVkb24gR2FzaGkgPGVkb24uZ2FzaGlAdW5pLXByLmVkdT6IvgQTAQIAKAUCXPPs
KAIbAwUJACeNAAYLCQgHAwIGFQgCCQoLBBYCAwECHgECF4AACgkQBpJaWrMCCxhG
KgP9GnNIZ89zTMjqqwcdgFWCQrUbVb4MKsaWdVh5BwOjeVYbe+vSVQE52ZtMLHxk
zH1xA4bl/1TVip67ewz0ysf+v1xds3mvMtnGEJKUuIGAFjLo194shisoT9zoS7dl
Jv1oCOdl7RooeBADLdMFawhC3cvwN/lD0U0KD3CmDE4PMai4jQRc8+woAQQA2k4d
Br37/o0YWPe92fq4HDmekY5FuOeADADllwgkZ2wzLa6B8W4A6ck3Eftj78B7UBAV
gHg45JPUoYlIKMiYieCeTNOTWXafsH1vNIRELdMkTwmoNtgjqCfg8123twvyKVVO
o+dpW8QrpePEO7WsPzd7kukC3MC2tvk3y5DodpcAEQEAAYilBBgBAgAPBQJc8+wo
AhsMBQkAJ40AAAoJEAaSWlqzAgsYjvQD/jOn8hAENNx5EGFstQM3FsdYwx8OVnrb
t5hwjdOQpNf3Yf6xFjjIsUsDiKkiy+INCH7uu+fa4Lp5JT7ryEfgJWPg0rjqSKA/
OdtGpmz2nPiogOxBCiOpg/iBP+j++G8dzHZ6+mj43rnelDxLLpMvxXqXqV3T33ch
NbSZiuIAN8pC
=uST/
-----END PGP PUBLIC KEY BLOCK-----
```
