# Gwei.cz Web/Dokumentace

Tento web je vytvořen pomocí [Docusaurus 3](https://docusaurus.io/), což je moderní generátor statických webových stránek.

## Pro vývojáře

### Instalace

Pro vývoj a sestavení webu je nutné mít nainstalované jedno z následujících Javascript prostředí:
- [Bun](https://bun.sh/) v0.3+
- [Node.js](https://nodejs.org/) v18+

Pro instalaci je nutné naklonovat repozitář a nainstalovat závislosti:
```bash
$ git clone git@gwei.cz:gweicz/docs.git
$ bun install
```

### Vývojový server
Lokální vývojou verzi spustíte pomocí příkazu:
```bash
$ bun start
```

Tento příkaz spustí místní vývojový server a otevře okno prohlížeče. Většina změn se projeví živě bez nutnosti restartovat server.

### Sestavení statického webu

Sestavení webu do statické podoby (build):
```bash
$ bun run build
```

Tento příkaz vygeneruje statický obsah do adresáře `build` a lze jej zobrazit pomocí libovolné služby hostingu statického obsahu.

## Licence

MIT