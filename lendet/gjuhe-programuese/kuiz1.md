---
noslides: true
---

Çfarë shfaqet kur të ekzekutohet kodi në vijim?

```cpp
#include <iostream>

int f(int x) {
  if (x > 5) {
    return x - 3;
  } else {
    return 2 * x;
  }
}

int main() {
  std::cout << "Rezultati = " << f(f(7));
}
```

Rezultati = <input class="fill" data-answer="7" />
