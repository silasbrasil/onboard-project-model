<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
<p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Esse projeto é para auxiliar no onboard de desenvolvedores backend com [NestJS](https://docs.nestjs.com/). O objetivo é deixar claro como funciona o processo de desenvolvimento e publicação de um feature.

## Pré requisitos
[Git](https://git-scm.com/downloads)

[Node.js LTS](https://nodejs.org)

[NestJS CLI](https://docs.nestjs.com/first-steps#setup)

## Primeiros passos
Baixe o projeto no seu computador usando o **GIT**. Nesse caso vamos baixar o próprio projeto de onboard.

```bash
$ git clone https://github.com/silasbrasil/onboard-project-model.git
```

Agora acesse o repositório do projeto e instale os pacotes.

```bash
# acessando o repositório
$ cd onboard-project-model

# instalando os pacotes
$ npm install
```

## Rodando em ambiente de Dev

```bash
# watch mode
$ npm run start:dev
```

Agora acesse o endereço <a href="http://localhost:3000">localhost:3000</a> no browser. O resultado deverá ser semelhante ao que segue:

```json
{
  "message": "Bem-vindo ao onboard dos Dev para Backend",
  "status": "starting"
}
```

## Regras para uso das branches no projeto

- Nunca poderá ser desenvolvido algo na branch **master**
- Nunca poderá ser desenvolvido algo na branch **dev**
- O fluxos de branches são baseados no [Git Flow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)
- Para publicar uma novidade em produção deverá ser feito usando uma Pull Request e deverá passar na aprovação de alguém responsável

## Hands-on

Agora você irá fazer sua primeira alteração no código do projeto onboard. A primeiroa coisa a se fazer é criar uma branch com o seu nome para a nova feature utilizando o **git flow** como segue:

```bash
# criando uma branch para a nova feature
$ git flow feature start NOME-SOBRENOME
```

Agora que você está na nova branch com o seu nome iremos começar a fazer as primeiras alterações no código utilizando o **nestjs**.

```bash
# criando uma branch para a nova feature
$ nest g controller NOME-SOBRENOME
```

Ao término da execução do comando acima um diretório com o seu nome contendo 2 arquivos foi criado no diretório ```src```. O arquivo com final ```.spec.ts``` é para criar os testes e o outro é o controller no qual iremos trabalhar. O controller deverá ter a uma apararência semelhe a essa:

```ts
import { Controller } from '@nestjs/common';

@Controller('nome-sobrenome')
export class NomeSobrenomeController {}
```

Vamos criar uma rota para acessar os seus dados como desenvolvedor. Para isso, faça as seguintes alterações no códido da controller criada.

```ts
import { Controller, Get } from '@nestjs/common';

@Controller('nome-sobrenome')
export class NomeSobrenomeController {

  @Get()
  developer(): string {
    return 'Nome Sobrenome';
  }
}
```

Acesse a rota **http://localhost:3000/nome-sobrenome** e confirme se retorna seu nome e sobrenome.

## Rodando os Testes Automáticos

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
