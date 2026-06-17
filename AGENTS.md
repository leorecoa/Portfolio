# AGENTS.md

## Contexto do projeto

Este projeto é o portfólio web de Leandro Jessé, publicado na Vercel.

Objetivo atual: preparar o portfólio para funcionar como PWA e, posteriormente, ser empacotado como app Android via Trusted Web Activity/Bubblewrap para publicação na Google Play.

O agente deve atuar com cautela, fazendo alterações pequenas, verificáveis e justificadas.

---

## Regras obrigatórias

### 1. Não instalar dependências sem autorização

O agente NÃO deve executar automaticamente:

```bash
npm install
npm i
pnpm install
yarn
npx
npm audit fix
npm update
```

Antes de sugerir qualquer instalação, explique:

* qual pacote será instalado;
* por que ele é necessário;
* quais arquivos serão alterados;
* se existe alternativa sem instalar dependências.

A instalação só pode ser feita após aprovação explícita do usuário.

---

### 2. Não modificar arquivos sensíveis sem autorização

O agente NÃO deve alterar automaticamente:

```txt
package.json
package-lock.json
pnpm-lock.yaml
yarn.lock
vite.config.*
tsconfig.json
.env
.env.local
.env.production
vercel.json
```

Se alguma alteração for necessária, primeiro apresente o motivo e aguarde aprovação.

---

### 3. Não refatorar o projeto inteiro

Evite refatorações grandes.

Não mudar arquitetura, estrutura de pastas, nomes de componentes ou padrões visuais sem necessidade direta.

O foco atual é apenas:

* PWA;
* manifest;
* ícones;
* política de privacidade;
* ajustes mobile;
* metadados;
* preparo para Play Console.

---

### 4. Não adicionar recursos desnecessários

Não adicionar:

* autenticação;
* banco de dados;
* analytics;
* tracking;
* pagamentos;
* login;
* painel administrativo;
* formulários com backend;
* bibliotecas de UI;
* animações pesadas;
* funcionalidades fora do escopo.

Este app deve permanecer simples, estático e seguro.

---

### 5. Não quebrar o deploy atual

O projeto já está publicado na Vercel.

Antes de qualquer mudança, preservar:

* build atual;
* rotas existentes;
* layout principal;
* links para GitHub, LinkedIn e projetos;
* responsividade;
* funcionamento em produção.

Toda alteração deve ser compatível com deploy na Vercel.

---

## Escopo permitido

O agente pode criar ou ajustar, com cuidado:

```txt
public/manifest.json
public/icons/*
public/favicon.*
src/pages/Privacy.*
src/components/*
index.html
README.md
```

Também pode sugerir melhorias em:

* responsividade mobile;
* acessibilidade básica;
* metadados SEO;
* aparência de app;
* tela sobre;
* página de política de privacidade.

---

## Requisitos para PWA

O projeto deve conter:

### Manifest

Criar ou ajustar `public/manifest.json` com:

```json
{
  "name": "Leorecoa Dev Portfolio",
  "short_name": "Leorecoa",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "orientation": "portrait",
  "lang": "pt-BR",
  "background_color": "#000000",
  "theme_color": "#000000",
  "icons": []
}
```

Os ícones devem incluir, quando possível:

* 192x192;
* 512x512;
* maskable icon.

---

### HTML

Garantir que `index.html` tenha:

```html
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#000000" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Também incluir ou revisar:

* title;
* meta description;
* Open Graph básico.

---

### Política de privacidade

Criar uma rota ou página pública:

```txt
/privacy
/politica-de-privacidade
```

Texto base:

* o app apresenta o portfólio profissional de Leandro Jessé;
* o app não possui login próprio;
* o app não possui pagamentos;
* o app não coleta dados pessoais diretamente;
* links externos podem abrir GitHub, LinkedIn, Vercel ou outros projetos;
* contato: [leorecoa2@gmail.com](mailto:leorecoa2@gmail.com).

Não afirmar ausência de coleta por terceiros se houver scripts externos, analytics ou embeds. Primeiro verificar o código.

---

## Fluxo de trabalho obrigatório

Antes de modificar arquivos:

1. Ler a estrutura do projeto.
2. Identificar stack e framework.
3. Verificar se já existe `manifest.json`.
4. Verificar se já existe página de privacidade.
5. Listar plano de alteração.
6. Aguardar aprovação se envolver dependências ou arquivos sensíveis.

Após modificar arquivos:

1. Listar arquivos alterados.
2. Explicar cada alteração.
3. Informar comandos para validar.
4. Não executar instalação de dependências sem autorização.

---

## Comandos permitidos para diagnóstico

Pode usar apenas comandos de leitura/diagnóstico:

```bash
ls
dir
pwd
cat
type
find
grep
npm run build
npm run dev
npm run lint
```

Se algum comando falhar por dependência ausente, não instalar automaticamente. Informar o erro e pedir autorização.

---

## Comandos proibidos sem aprovação

```bash
npm install
npm i
npm update
npm audit fix
npx
pnpm install
yarn
rm -rf
del /s
git reset --hard
git clean -fd
git push
git commit
```

---

## Padrão de resposta do agente

Toda resposta deve seguir este formato:

```txt
Resumo:
- O que foi analisado ou alterado.

Arquivos afetados:
- arquivo 1
- arquivo 2

Risco:
- baixo, médio ou alto.

Validação:
- comando recomendado
- resultado esperado

Próximo passo:
- ação objetiva
```

---

## Objetivo final

Deixar o portfólio pronto para:

1. funcionar bem no mobile;
2. ter manifest PWA válido;
3. ter política de privacidade pública;
4. ser empacotado como Android App Bundle via Bubblewrap;
5. ser enviado para a Google Play Console como app simples de portfólio profissional.

Não publicar, não gerar `.aab`, não instalar Bubblewrap e não alterar configurações globais sem autorização explícita.
