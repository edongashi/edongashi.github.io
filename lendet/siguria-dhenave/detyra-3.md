---
noslides: true
suppresshooks: true
---

# Detyra e tretë nga lënda Siguria e të Dhënave

[Pretty Good Privacy (PGP)](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) është një vegël shumë e përdorur për funksione kriptografike sikur enkriptimi/nënshkrimi i emailave, fajllave, disqeve etj.

Për detyrën e tretë duhet ta përdorni PGP për të gjeneruar një çelës publik të cilin duhet ta ngarkoni në GitHub (në repository ku keni 2 projektet tjera).

Çelësin e krijuar e përdorni për ta nënshkruar në clearsign një tekst që mban ndonjë fakt rreth juve. Tekstin bashkë me nënshkrimin e dërgoni në email adresën e asistentit përkatës (arbnor.halili@uni-pr.edu, edon.gashi@uni-pr.edu).

Detyra është individuale dhe duhet të plotësohen këto kritere për tu vlerësuar:

1. Çelësi publik duhet të jetë krijuar në emrin dhe email adresën tuaj.
2. Çelësi publik duhet të jetë i ngarkuar në GitHub në repository ku gjenden projektet e kaluara.
3. Çelësi privat në asnjë mënyrë nuk guxon të publikohet.
4. Nënshkrimi i mesazhit duhet të jetë valid në kuadër të çelësit tuaj publik.

## Referenca

Një vegël që mund ta përdorni është GNU Privacy Guard (GPG) e cila vie e instaluar në Linux, ndërsa në Windows instalohet bashkë me GIT Bash ose mund të instalohet si e pavarur nga faqja e GPG.

GPG ofron komanda si `--gen-key`, `--clearsign`, `--export`, etj.

Listën e plotë të komandave e gjeni përmes `gpg --help`.

---

## Shembull i mesazhit

```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA1

Pershendetje nga Filan Fisteku, student i FIEK.
-----BEGIN PGP SIGNATURE-----

iJwEAQECAAYFAlzykJgACgkQ7K/qKlCiAHd1PgP/f4pCjZSx6Lt59SmpP9FhKqZF
AbYd42kHdS3a6USAgCKNQe51ruHKIJILHqleYto9tPe7yNU5YNwwMDXTwnWV8Bvk
iSW7O86m44QHsLUUpnNVBYMqg10eoZsfsDyoZWo5ANHhR+gcjAyZBh2B9i2DKEe0
5AuHFge5yH/d8Pf529I=
=x0kl
-----END PGP SIGNATURE-----
```

---

## Shembull i çelësit publik

```
-----BEGIN PGP PUBLIC KEY BLOCK-----

mI0EXPKQdwEEAOe7LAcxhvAvkPPRbFrWr3IYVIP93g2Cu73jTMOIJtaqzr3i2LuK
8FttqMn9IIq8lOgIjvuZVjLpyBbpzObjRd6bjRzZBylCwKMS48yIo43AHGxggzJj
wH25Lsl133OaPZjwZjpMkp3SIBk0MeJgfnUpcFnADF9O/kcFZUWAfuh7ABEBAAG0
LEVkb24gR2FzaGkgKHNpZ3VyaWEpIDxlZG9uLmdhc2hpQHVuaS1wci5lZHU+iL4E
EwECACgFAlzykHcCGwMFCQAnjQAGCwkIBwMCBhUIAgkKCwQWAgMBAh4BAheAAAoJ
EOyv6ipQogB3vckD/2s6UqN9U0m2VdlWjxGPDD/f2jcHU5z7fZ8LbIROg0VEwsE3
UcOo7PEyDFlDHTfi+8h2+hSD9HMpaV9VYTG6F9DBeapfgazPshPMOw1pLgODeJIU
4Cjk4FVebOTdirsKUJn/IWQITNN4/Og3TCeFjudfxw5xXQ1yGPlNk/7yJ5/uuI0E
XPKQdwEEAKzK3VIaRgckE+HF+vZ61hDXJnMd2ex8YcPEL4ijsIr2Avv35hbeyZTL
NuJN9ZhGmeKRx8HbgnE4iQtazVXU0Pcp6mOzC2Ygx/l0UgKwWD3QMLd+GXOaPNEr
CaYpkmxgkmy7YIddwclz3pDm9iBraAVFBUapT7c4f8DoA688DSyFABEBAAGIpQQY
AQIADwUCXPKQdwIbDAUJACeNAAAKCRDsr+oqUKIAd+FlBACAvV91CahTkemq4fWJ
qx9GrggPds0uQY/UF8s11K39wuUvW8oCZCTaBkYE0T6szBqY8pB/gOx8blg7/tST
Zy7JnHXUzCYwU+YJIBMBvr6jO3z7DdejnepmWQlKnINa5iQKjj5XW8HyVJyECqLP
psq4cxU2pUwcZSnLte/6usnE0g==
=ogSl
-----END PGP PUBLIC KEY BLOCK-----
```
