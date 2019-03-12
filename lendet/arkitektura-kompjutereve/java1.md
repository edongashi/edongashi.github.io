## Arkitektura e Kompjuterëve

Edon Gashi

edon.gashi@uni-pr.edu

edongashi.github.io

---

## Abstraksioni

Proces i dëshirueshëm që na mundëson të punojmë pa njohuri të proceseve që ndodhin prapa skenave.

---

Supozojmë një kod në gjuhën programuese C:

```c
#include <stdio.h>

int main()
{
    int i = 0;
    if (i == 0)
    {
        printf("testing\n");
    }

    return 0;
}
```

---

Kodi i tillë nuk mund të kuptohet nga procesori, prandaj duhet të përkthehet në një gjuhë të kuptueshme nga makina:

```assembly
_main:
pushl   %ebpz
movl    %esp, %ebp
subl    $24, %esp
andl    $-16, %esp
movl    $0, %eax
addl    $15, %eax
addl    $15, %eax
shrl    $4, %eax
sall    $4, %eax
movl    %eax, -8(%ebp)
movl    -8(%ebp), %eax
call    __alloca
call    ___main
movl    $0, -4(%ebp)
cmpl    $0, -4(%ebp)
jne L2
movl    $LC0, (%esp)
call    _printf
L2:
movl    $0, %eax
leave
ret
```

---

**Instruction Set Arkitektura (ISA)**

Specifikimi i listës së instruksioneve që mund të ekzekutojnë procesorët që i takojnë asaj bashkësie:

- Veprimet aritmetikore - mbledhja, zbritja.
- Veprimet logjike - dhe, ose, jo.
- Veprimet me të dhëna - leximi, ruajtja, lëvizja.
- Veprimet e ekzekutimit - goto, if, return.

---

**Llojet e ISA**

- Complex instruction set computer (CISC) - psh. x86
    - Instruksione komplekse shumë-taktëshe
    - Fokus në harduer
    - Kode më të shkurta por më të ngadalshme
- Reduced instruction set computer (RISC) - psh. ARM
    - Instruksione të thjeshta një-taktëshe
    - Fokus në softuer
    - Kode më të gjata por më të shpejta

---

|Shtresat e abstraksionit|
|:-:|
|Aplikacioni|
|Algoritmi|
|Gjuha Programuese|
|Sistemi Operativ|
|Instruction Set Arkitektura (ISA)|
|Mikroarkitektura|
|Qarqet Logjike/Digjitale|
|Qarqet Fizike|

---

**Kompjuterët dhe avansimi i tyre**

- Përmirësimi i procesit të prodhimit - fotolitografia
- Ulja e kostos
- Ligji i Moore

---

**Klasat e kompjuterëve**

- Pajisje personale mobile
- Desktop
- Server
- Kompjuterët e clusterëve
- Embedded

---

**Pajisjet personale mobile**

- Telefonët
- Tabletët
- Orët e mençura

---

![](https://www.prestonmobility.com/wp-content/uploads/2016/06/mobile-and-smart-devices.png) <!-- .element: style="max-height:600px;border:none;" -->

---

**Faktorët dhe karakteristikat**

- Komunikimi pa tela
- Efikasiteti në energji
- Ftohja pasive

---

**Desktop kompjuterët**

- Laptopët
- Kompjuterët për punë të zakonshme
- Kompjuterët e fuqishëm - editim, lojëra

---

**Faktorët dhe karakteristikat**

- Performanca
- Grafika
- Çmimi

---

**Serverët**

- Kompjuterë të fuqishëm dhe të qëndrueshëm
- Shërbejnë numër të madh të kërkesave

---

**Faktorët dhe karakteristikat**

- Disponueshmëria
- Zgjerueshmëria
- Efikasiteti

---

**Kompjuterët e clusterëve**

- Shumë kompjuterë që veprojnë si një
- Me mijëra në qendra të mëdha të të dhënave
- Të orientuar në shërbime dhe cloud

---

**Faktorët dhe karakteristikat**

- Çmimi
- Performanca
- Efikasiteti në energji

---

**Kompjuterët embedded**

- Në aparate të përditshme
- Vetura
- Pajisje të rrjetit

---

**Faktorët dhe karakteristikat**

- Nuk ofrojnë ndërfaqe grafike
- Më rrallë të orientuar në performancë
- Madhësia e vogël
- Çmimi i lirë

---

## Pjesët e kompjuterit

---

**Furnizuesi i rrymës (PSU)** - kthen rrymën alternative në rrymë njëkahore për komponentet e kompjuterit.

![](http://cdn.pctronic.com.py/imgs/i/800x600-3-c-80-0-0-fff/r/up/produtos//1/4/5/4/xtech_fonte_atx_500w_20328.png) <!-- .element: style="max-height:400px;border:none;" -->

---

**Motherboard (pllaka amë)**

![](https://usercontent1.hubstatic.com/6328700_f1024.jpg) <!-- .element: style="max-height:480px;border:none;" -->

---

**Soketi i procesorit** - pjesa qëndrore e pllakës ku montohet procesori.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/CPU_Socket_LGA775%28T%29.JPG/220px-CPU_Socket_LGA775%28T%29.JPG) <!-- .element: style="max-height:400px;border:none;" -->

---

**Kontektorët e rrymës** - në skaj të pllakës me 20 ose 24 pina ku lidhet burimi nga power supply.

![](http://cdn.eteknix.com/wp-content/uploads/vb/1138-IMG_0340.jpg) <!-- .element: style="max-height:400px;border:none;" -->

---

**Slotet e memories** - hapësira ku vendoset RAM memoria.

![](https://cdn-images-1.medium.com/max/1600/1*KTWknh2VH3Bf_kGVSnhaaw.png) <!-- .element: style="max-height:400px;border:none;" -->

---

**Slotet e grafikës dhe kartelave shtesë** - PCI, PCI-E, AGP (e vjetër)

![](http://www.malbred.com/images/pci-express-x16.jpg) <!-- .element: style="max-height:400px;border:none;" -->

---

**Portet IDE dhe SATA** - lidhja e pajisjeve I/O, zakonisht disqet dhe lexuesit optik.

![](http://tse2.mm.bing.net/th?id=OIP.CXBmGRwTOI4WNCY6kVAHkAHaE6) <!-- .element: style="max-height:250px;border:none;" -->
![](http://www.spywaredrguide.com/VirtualDr/images/sata_vs_ide_cables_01.jpg) <!-- .element: style="max-height:250px;border:none;" -->

---

**Chipi BIOS dhe CMOS bateria** - kodi bazik për boot të sistemit operativ.

![](https://www.extremetech.com/wp-content/uploads/2012/08/bios-chip-and-battery-640x353.jpg) <!-- .element: style="max-height:400px;border:none;" -->

---

**Chipseti - Northbridge dhe Southbridge**

- Northbridge kordinon shkëmbimin e informacionit ndërmjet procesorit, memories, dhe kartelës grafike.
- Southbridge kordinon pajisjet e ngadalshme dhe I/O tjera sikur rrjeti dhe zëri.

Northbridge zakonisht ka nevojë për ftohje për shkak të clockut më të shpejtë.

---

![](https://s.hswstatic.com/gif/motherboard-bridges.jpg) <!-- .element: style="max-height:400px;border:none;" -->
![](https://cdn.arstechnica.net/paedia/images/core-logic-southbridge.png) <!-- .element: style="max-height:600px;border:none;" -->

---

**Konektorët e përparmë** - dritat, butonat, USB, zëri.

![](https://www.gigabyte.com/fileupload/us/WebPage/141/images/step7-1.jpg) <!-- .element: style="max-height:400px;border:none;" -->

---

**Konektorët e pasmë** - pamja, porti serik/paralel, rrjeti, zëri, USB, tastiera/mausi, etj.

![](https://images.anandtech.com/doci/7876/GB%20F2A88X-UP4%20-%20Schem%20IO.jpg) <!-- .element: style="max-height:250px;border:none;" -->
![](https://cdn-images-1.medium.com/max/1600/1*_lQOvxrDf1rnGeoZPvm-_Q.png) <!-- .element: style="max-height:250px;border:none;" -->

---

**Buset** - linja komunikimi (paralele ose serike).

- Buset e brendshme - lidhin pajisjet e pllakës, sikur CPU dhe memorien.
- Buset e jashtme - lidhin pajisjet e jashtme (I/O).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Computer_system_bus.svg/800px-Computer_system_bus.svg.png) <!-- .element: style="max-height:350px;border:none;" -->

---

**Procesori (CPU)** - "truri" i kompjuterit, ekzekuton urdhërat dhe merr vendime. Komunikon vazhdimisht me memorien kryesore.

![](https://5.imimg.com/data5/KT/IA/MY-40080732/intel-cpu-processor-500x500.png) <!-- .element: style="max-height:400px;border:none;" -->

---

**Komponentet e procesorit**

- Arithmetic/Logic Unit (ALU) - kryen operacionet aritmetikore dhe logjike.
- Control Unit - kontrollon rrjedhën e ekzekutimit duke komunikuar me memorien dhe ALU.
- Regjistrat - memorie e brendshme në CPU.
- Cache - pasqyrim i vogël i memories kryesore për rritje të shpejtësisë.

---

![](https://www.researchgate.net/profile/Adriano_Vogel/publication/295869570/figure/fig1/AS:333081933303809@1456424329536/CPU-components-and-interactions.png) <!-- .element: style="max-height:600px;border:none;" -->

---

**ALU** - kthen rezultate dhe vendos statuse.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ALU_block.gif/1200px-ALU_block.gif) <!-- .element: style="max-height:400px;border:none;" -->

---

**Cikli i instruksionit**

1. Fetch - lexohet instruksioni i radhës nga memoria ku tregon program counteri. Vendoset instruksioni në instruction regjistër.
2. Decode - interpretohet instruksioni i enkoduar në instruction regjistrin.
3. Execute - control unit i dërgon komandat tek ALU, dhe varësisht nga operacioni i ruan rezultatet në memorie.

---

![](https://computersciencewiki.org/images/2/24/Fetch-execute-cycle.png) <!-- .element: style="max-height:600px;border:none;" -->

---

**RAM Memoria** - ruan kodin dhe të dhënat.

![](https://upload.wikimedia.org/wikipedia/commons/d/db/Swissbit_2GB_PC2-5300U-555.jpg) <!-- .element: style="max-height:400px;border:none;" -->

---

![](/lendet/arkitektura-kompjutereve/memory-cell.jpg) <!-- .element: style="max-height:460px;border:none;" -->

---

![](https://www.researchgate.net/profile/Hyoseung_Kim/publication/305702669/figure/fig1/AS:525075921240064@1502199263929/DRAM-device-organization.png) <!-- .element: style="max-height:600px;border:none;" -->

---

**Disku** - ruan shënimet në periudha më të gjata, zakonisht në formë magnetike ose elektrike.

![](https://creative-it.ie/wp-content/uploads/2018/03/hdd-ssd-2.jpg) <!-- .element: style="max-height:400px;border:none;" -->

---

**Kartela grafike (GPU)** - kryen operacione matematikore në paralel.

![](https://cdn.techterms.com/img/lg/gpu_166.jpg) <!-- .element: style="max-height:400px;border:none;" -->

---

**Pajisjet hyrëse** - lexojnë informacion nga bota e jashtme dhe e transmetojnë në kompjuter.

![](https://4.bp.blogspot.com/-1vgeh7hv74Y/WZlcOO-zMlI/AAAAAAAAJho/TIfweI0mGBE5wsEADurDDt0dAggSeTOLwCLcBGAs/s1600/examples%2Bof%2BInput%2BDevices%2Bof%2BComputer.png) <!-- .element: style="max-height:400px;border:none;" -->

---

**Pajisjet dalëse** - nga kompjuteri transmetojnë informacionin në botën e jashtme.

![](https://4.bp.blogspot.com/-4Y7nDQy8NZE/W4qMKUvf6iI/AAAAAAAAKjo/CQLBh909MpEH0HPb0NhB5E25LIaUBJPOACLcBGAs/s1600/Example%2Bof%2Boutpu%2Bdevices.png) <!-- .element: style="max-height:400px;border:none;" -->

---

## Energjia dhe performanca

---

**Faktorët e shpenzimit të energjisë**

- Sa energji mund të hargjojë procesori maksimalisht - peak power?
- Me çfarë fuqie guxon të operojë ashtu që të ketë ftohje adekuate - thermal design power (TDP)?
- Sa është efikas procesori për kryerjen e punës - shpenzimi total i energjisë?

---

Shpenzimi i energjisë mbi atë që mund të ofrohet nga PSU shkakton ulje të tensionit dhe efekte të papritura.

Lirimi i nxehtësisë mbi atë që mund të largojë ftohësi mund ta dëmtojë pajisjen.

---

Nëse procesori A hargjon mesatarisht 20% më shumë rrymë sesa procesori B, por e kryen punën për 70% të kohës, shpenzimi i energjisë do të jetë $1.2\times 0.7=0.84$, që është efikasitet më i mirë sesa procesori B.

---

**Si duhet ta dizajnojmë harduerin?**

- PSU dizajnohet ashtu që të ofrojë më shumë fuqi sesa TDP.
- Ftohësi dizajnohet ashtu që të largojë nxehtësi sa TDP ose më shumë.
- Për ta evituar tejkalimin e TDP procesori zvogëlon clock speed.

---

**Shpenzimet e energjisë**

Shumica e shpenzimit të energjisë shkaktohet gjatë ndryshimit të gjendjes së tranzistorëve brenda procesorit. Energjia e nevojshme për ndryshimin e gjendjes varet nga kapaciteti i CMOS tranzistorëve dhe quhet energji dinamike:

$$
E_d \propto CU^2 \tag{1}
$$

---

Relacioni (1) i referohet energjisë së nevojshme për një ndryshim të plotë të gjendjes ($0\rightarrow1\rightarrow1$ ose $1\rightarrow0\rightarrow1$). Për një tranzicion të njëanshëm vlen:

$$
E_d \propto \frac{1}{2} CU^2 \tag{2}
$$

Pasi që fuqia jepet me relacionin $P=\frac{E}{t}$ dhe $f=\frac{1}{t}$, në (2) zëvendësojmë:

$$
P_d \propto \frac{1}{2} CU^2f \tag{3}
$$

---

Relacioni (3) tregon që fuqia dinamike varet nga:

- Kapaciteti i telave dhe tranzistorëve
- Tensioni i veprimit
- Frekuenca e ndryshimit të gjendjes

Megjithatë, për një punë fikse shpenzimi i energjisë mbetët i njejtë edhe pse kryhet me fuqi më të ulët.

---

**Faktorët e performancës**

Procesori punon në njësi të takteve të clockut.

Clocku matet përmes periodës ose përmes frekuencës (psh. 2 GHz).

---

Nëse për kryerjen e një pune nevojitet një numër i caktuar i takteve të procesorit $n_\text{takteve}$, atëherë koha totale për kryerjen e punës shprehet përmes:

$$
t_\text{CPU}=n_\text{takteve} \times T_\text{clock} \tag{4}
$$

ose

$$
t_\text{CPU}=\frac{n_\text{takteve}}{f_\text{clock}}
$$

---

Përveç numrit të takteve mund të masin numrin e instruksioneve të ekzekutuara - *instruction count* (IC).

Nëse e dimë $n_\text{takteve}$ dhe IC, mund ta llogarisim numrin mesatar të takteve të clockuit për instruksion (CPI).

$$
\text{CPI}=\frac{n_\text{takteve}}{\text{IC}} \tag{5}
$$

---

Prej formulës (4) dhe (5) nxerrim:

$$
t_\text{CPU}=\text{IC} \times \text{CPI} \times T_\text{clock} \tag{6}
$$

---

Ekuacioni (6) tregon se koha e ekzekutimit të programit varet nga:

- Numri i instruksioneve në program (IC)
- Numri i takteve të clockut për instruksion (CPI)
- Perioda e clockut $T_\text{clock}$

---

**Varshmëria e faktorëve**

- Perioda e clockut - teknologjia dhe dizajni i harduerit
- CPI - organizimi dhe instruction set arkitektura (ISA)
- Numri i instruksioneve - ISA dhe kompajllerët
