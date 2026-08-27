---
name: Portfólio Arthur Vinícius
description: Terminal noturno — superfícies quase-pretas que se acendem em azul sinal quando o visitante toca nelas.
colors:
  void: "#050505"
  surface: "#0a0a0a"
  hairline: "#1f1f1f"
  chat-stroke: "#374151"
  signal-blue: "#3BA9F4"
  signal-blue-pressed: "#2c8bc9"
  violet: "#8b5cf6"
  indigo: "#6366f1"
  text-primary: "#F2F9FC"
  text-secondary: "#d1d5db"
  text-muted: "#9ca3af"
  text-faint: "#6b7280"
  status-online: "#22c55e"
typography:
  display:
    fontFamily: "Outfit, Inter, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9vw, 7rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Poppins, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Poppins, Inter, system-ui, sans-serif"
    fontSize: "clamp(1rem, 2vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Poppins, Inter, system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 1.5vw, 1rem)"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
  stack:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "16px 40px"
  button-primary-hover:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.text-primary}"
  button-header-cta:
    backgroundColor: "#ffffff"
    textColor: "{colors.void}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-header-cta-hover:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.void}"
  button-demo:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.void}"
    rounded: "{rounded.xs}"
    padding: "8px 16px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xs}"
    padding: "8px 16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "24px"
  card-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.signal-blue}"
  input-chat:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "10px 16px"
  chip-stack:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
---

# Design System: Portfólio Arthur Vinícius

## Overview

**Creative North Star: "O Terminal Noturno"**

Este é o ambiente de quem trabalha de madrugada dentro do editor. O fundo não é "escuro" — é quase preto absoluto (`#050505`), próximo o suficiente do desligado para que qualquer coisa que emita luz vire o assunto. Sobre ele flutuam superfícies apenas um grau mais claras (`#0a0a0a`), delimitadas não por sombra, mas por um fio de `#1f1f1f` tão fino que só se percebe quando some. Nada tem peso. Tudo tem contorno.

A vida do sistema está inteiramente no hover. Em repouso, a página é uma grade de retângulos apagados e texto cinza. Quando o cursor encosta, o fio vira azul sinal, o título troca de cor, e um brilho difuso vaza pela borda — a superfície não subiu, ela acendeu. É por isso que o sistema aguenta ser tão monocromático: a cor não decora, ela responde. O único momento em que essa regra é quebrada é o nome no Hero, onde um gradiente violeta→azul funciona como letreiro sobre um halo desfocado de 150px.

A tipografia acompanha essa lógica em três vozes: Outfit em peso 900 para o nome (uma vez só, na tela inteira), Poppins para toda a estrutura de leitura, e monoespaçado apenas na linha de stack de cada projeto — a única vez em que o texto se declara código.

**Key Characteristics:**
- Escuro por padrão, sem tema claro em lugar nenhum do sistema.
- Separação por fio de 1px, não por sombra.
- Um único acento funcional (`#3BA9F4`) fazendo bordas, links, ícones, botões e a linha do tempo.
- Estado de hover como o principal veículo de cor e movimento.
- Gradiente violeta→azul reservado a duas marcas de identidade: o nome no Hero e o logo no Header.
- Entradas animadas em `motion` com deslocamento vertical curto (20–50px) e delays escalonados.

## Colors

Uma paleta de dois polos: uma escada de quase-pretos que constrói toda a estrutura, e um único azul de alta luminância que carrega toda a interação.

### Primary
- **Azul Sinal** (`#3BA9F4`): o acento funcional único. Marca o que é interativo e o que acabou de responder ao visitante — borda de card em hover, títulos em hover, ícones de contato e stack, ponto e linha da timeline, botão "Visualizar", foco do input do chat, balão do usuário e botão flutuante da Nina. Se algo é azul, o visitante pode agir sobre aquilo ou acabou de agir.
- **Azul Sinal Pressionado** (`#2c8bc9`): o mesmo azul rebaixado, usado só no hover dos controles da Nina.

### Secondary
- **Violeta** (`#8b5cf6`) e **Índigo** (`#6366f1`): existem exclusivamente como gradiente de identidade — o nome no Hero, o logo no Header, o botão "Ver Meus Projetos" e o halo desfocado atrás do Hero. Nunca aparecem em cor sólida, nunca marcam estado.

### Neutral
- **Void** (`#050505`): fundo global de todas as seções, sem exceção. Também é a cor do texto sobre botões claros.
- **Superfície** (`#0a0a0a`): cards de projeto, cards de experiência, chips de stack, card de contato, ponto da timeline.
- **Fio** (`#1f1f1f`): borda de toda superfície, divisor do header, trilho da timeline.
- **Traço do Chat** (`#374151`): borda e balão da assistente dentro da janela da Nina — o único componente que não usa `#1f1f1f`.
- **Texto Principal** (`#F2F9FC`): títulos de seção, títulos de card, nome.
- **Texto Secundário** (`#d1d5db`): parágrafos e descrições.
- **Texto Apagado** (`#9ca3af`): empresa, subtítulo, links inativos do header.
- **Texto Fraco** (`#6b7280`): rótulos de estatística, estado "não hospedado".

### Tertiary
- **Verde Online** (`#22c55e`): usado uma vez, no ponto pulsante de disponibilidade do Hero. Não é decorativo — é indicador de estado.
- **Cores de marca das stacks**: cada ícone de tecnologia carrega o hex oficial da própria marca (`#e34c26` HTML, `#f7df1e` JavaScript, `#61dafb` React…). São conteúdo, não paleta, e não se propagam para nenhum outro lugar.

### Named Rules

**A Regra do Acento Único.** `#3BA9F4` é a única cor que indica interatividade. Se um elemento novo precisa parecer clicável, ele usa esse azul — e se usa esse azul, precisa ser clicável.

**A Regra do Gradiente Selado.** O gradiente violeta→azul é identidade, não estilo. Ele existe no nome, no logo e no CTA primário do Hero. Não aplique gradiente a nenhum outro texto, card ou ícone.

## Typography

**Display Font:** Outfit (700–900), com Inter e `system-ui` como fallback
**Body Font:** Poppins (300–700), com Inter e `system-ui` como fallback
**Base Font:** Inter, aplicada no `<html>` e herdada por qualquer componente que não declare a própria fonte
**Mono:** stack monoespaçada do sistema, exclusiva da linha de tecnologias dos cards de projeto

**Character:** Poppins dá a este sistema um tom geométrico e amigável que impede o quase-preto de virar frieza corporativa; Outfit em peso 900 entra uma única vez para transformar o nome em objeto gráfico. É um pareamento de contraste dramático — normal em quase tudo, extremo em um ponto só.

### Hierarchy
- **Display** (900, `clamp(3rem, 9vw, 7rem)`, line-height 1, tracking `-0.025em`, caixa alta): o nome no Hero. Um por site.
- **Headline** (700, `clamp(1.875rem, 4vw, 2.25rem)`): títulos de seção — "Minhas Experiências", "Minhas Stacks", "Meus Projetos", "Entre em Contato". Sempre centralizados.
- **Title** (700, `clamp(1rem, 2vw, 1.5rem)`): cargo no card de experiência, nome do projeto, número da estatística.
- **Body** (400, `clamp(0.875rem, 1.5vw, 1rem)`, line-height 1.625): descrições de card e o parágrafo do Hero.
- **Label** (500, `0.75rem`, tracking `0.1em`, caixa alta): rótulos de estatística e o badge de disponibilidade.
- **Stack** (mono, `0.75rem`, azul sinal a 80% de opacidade): a linha `Next.js | TypeScript | Tailwind` de cada projeto.

### Named Rules

**A Regra do Nome Único.** O peso 900 do Outfit pertence exclusivamente ao nome no Hero. Nenhum outro elemento do site chega perto desse peso ou desse tamanho.

**A Regra do Mono como Metadado.** Monoespaçado nunca é usado para leitura. Ele marca metadado técnico — e hoje isso significa exatamente uma coisa: a lista de tecnologias do projeto.

## Layout

Página única em rolagem contínua, sem rotas internas. As seções se sucedem sobre o mesmo `#050505` sem faixa, divisor ou troca de fundo — a única separação é o respiro vertical (`py-16` a `py-20`, ~64–80px) e o título centralizado que abre cada bloco.

O container é centralizado com padding lateral que cresce por breakpoint (`px-4` no mobile, até `px-20`/`lg:px-40` na seção de projetos), com largura máxima entre `max-w-5xl` (Hero) e `max-w-6xl` (Experiências). Breakpoints são os padrões do Tailwind; o corte real do sistema é `md` (768px), onde a navegação troca de overlay para horizontal e a timeline migra da margem esquerda para o eixo central.

Três modelos espaciais convivem:
- **Timeline** (Experiências): trilho vertical de 2px com cards alternando lados no desktop, todos empurrados para a direita do trilho no mobile.
- **Grade** (Stacks): 2 colunas no mobile escalando até 5 em `lg`, com gap de 12–24px.
- **Grade de cards** (Projetos): uma coluna no mobile, duas em `md`, três em `lg`, com gap de 24px. Os sete projetos ficam visíveis de uma vez. (Substituiu um carrossel Swiper, cujas setas e bullets eram `div`/`span` sem `tabindex` — inalcançáveis por teclado.)

O Header é fixo e muda de estado na rolagem: transparente e `py-6` no topo, `#050505` a 80% com `backdrop-blur-md` e fio inferior depois de 20px.

### Named Rules

**A Regra do Fundo Contínuo.** Nenhuma seção troca a cor de fundo. Toda a hierarquia entre blocos vem de espaçamento e tipografia — nunca de faixa alternada.

## Elevation & Depth

O sistema é **plano em repouso e luminoso em resposta**. Nenhuma superfície flutua: cards, chips e o card de contato ficam no mesmo plano do fundo, separados apenas pelo fio de `#1f1f1f`. Não há hierarquia de elevação, não há escada de sombra, não há `z` semântico além do necessário para header, overlay e chat.

A sombra existe apenas como *luz*, e apenas como reação. Ao hover, o card ganha um halo azul difuso e sem deslocamento (`0 0 15px`) que simula um pixel aceso, não um objeto levantado. A profundidade percebida vem da escada tonal `#050505 → #0a0a0a → #1f1f1f`, não do desfoque.

### Shadow Vocabulary
- **Halo de card** (`box-shadow: 0 0 15px rgba(59,169,244,0.15)`): hover em card de projeto e chip de stack.
- **Halo de contato** (`box-shadow: 0 0 20px rgba(59,169,244,0.1)`): hover no card de contato, mais amplo e mais fraco.
- **Halo de chip** (`box-shadow: 0 0 15px rgba(59,169,244,0.3)`): hover em chip de stack, o mais intenso do sistema.
- **Aura do CTA** (`box-shadow: 0 0 40px rgba(139,92,246,0.2)`): permanente sob o botão do Hero — a única sombra em repouso do sistema, e violeta, não azul.
- **Aura da Nina** (`shadow-lg` + `rgba(59,169,244,0.3)`): permanente sob o botão flutuante do chat.

### Named Rules

**A Regra da Luz, Não do Peso.** Sombra neste sistema tem offset zero e cor de acento. Sombra preta com deslocamento vertical (`0 4px 12px rgba(0,0,0,…)`) pertence a outro sistema e não deve entrar aqui.

**Dívida conhecida:** o `shadow-lg` genérico do Tailwind ainda aparece em cards de projeto, cards de experiência e no card de contato, produzindo uma sombra preta deslocada que contradiz a regra acima. É ruído herdado, não intenção.

## Shapes

Retângulos com cantos suavemente arredondados, sem geometria expressiva, sem recorte, sem forma orgânica. A escada de raio é curta e correlacionada ao tamanho do elemento: `4px` em botões pequenos e ações de card, `6px` no CTA do header e nos itens de contato, `8px` em cards de experiência, chips de stack e cards de projeto, `16px` no card de contato e na janela do chat, e `9999px` em três lugares — o CTA do Hero, o input do chat e os balões de mensagem.

Toda superfície tem borda de 1px em `#1f1f1f`, e é essa borda — não o preenchimento — que define o objeto. Ela é também o único elemento que muda de cor em hover em todos os componentes do sistema, sem exceção.

### Named Rules

**A Regra da Borda como Objeto.** Uma superfície sem borda não existe neste sistema. Se um componente novo precisa de limite, ele recebe `1px solid #1f1f1f`, não uma mudança de fundo.

## Components

### Buttons
- **Shape:** pílula completa (`9999px`) para o CTA do Hero; cantos suaves (`4–6px`) para todo o resto.
- **Primary (Hero):** gradiente violeta→índigo, texto branco 700, padding `16px 40px`, borda `1px` branca a 10%, aura violeta permanente. Hover: opacidade 90% e `scale(1.05)`.
- **Header CTA:** inverso — fundo branco sólido, texto `#050505`, `6px`. Hover: o fundo vira azul sinal.
- **Demo (card de projeto):** azul sinal sólido com texto `#050505`. É o único botão de preenchimento azul do sistema, e marca a ação primária de cada projeto.
- **Ghost (GitHub):** transparente com borda azul sinal e texto claro. Hover: fundo azul a 10%.
- **Estado desabilitado:** "Projeto não hospedado" não é botão — é um span em itálico, cinza fraco, borda cinza e `cursor: not-allowed`.

### Cards / Containers
- **Corner Style:** `8px` (projeto, experiência), `16px` (contato).
- **Background:** `#0a0a0a` sobre `#050505`.
- **Border:** `1px solid #1f1f1f` → `#3BA9F4` em hover.
- **Shadow Strategy:** ver Elevation — halo azul de offset zero em hover.
- **Internal Padding:** `16–24px` no mobile, `24–32px` a partir de `md`.
- **Comportamento em grupo:** o hover do card é um `group` — a borda acende, o título vira azul sinal, e no card de projeto a imagem faz `scale(1.05)` em 500ms.

### Inputs / Fields
Existe exatamente um input no sistema: o campo da Nina. Pílula completa, fundo `#1f1f1f`, borda `#374151`, texto claro, sem anel de foco — o foco troca a borda para azul sinal e remove o outline padrão.

**Dívida conhecida:** remover o `outline` sem oferecer um `:focus-visible` equivalente prejudica navegação por teclado.

### Navigation
Header fixo, Poppins 500 em `0.875rem`, links em texto apagado. O hover é duplo: a cor vai para azul sinal *e* um sublinhado de 2px cresce da esquerda para a direita. No mobile, vira overlay de tela cheia em `#050505` que entra deslizando da direita, com os links em `1.5rem` peso 700.

### Chips (Stacks)
Retângulos de `8px` com o nome da tecnologia e seu ícone na cor oficial da marca, lado a lado. Em hover, a borda acende, o texto vira azul sinal e o halo é o mais forte do sistema (30% de opacidade). O ícone mantém a cor da marca em todos os estados.

### Signature Component: Timeline de Experiências
O componente mais distintivo do sistema. Um trilho vertical de 2px em `#1f1f1f` com nós circulares de `#0a0a0a` cercados por anel de 3–4px em azul sinal, cada um contendo um ícone de maleta. No desktop o trilho corre pelo centro com cards alternando os lados; no mobile ele encosta na margem esquerda e todos os cards se alinham à direita dele. Cada card entra com `y: 50 → 0` e delay escalonado de 200ms.

### Signature Component: Widget da Nina
Botão circular flutuante em azul sinal, canto inferior direito, com aura azul permanente. Abre uma janela de 320–384px por 500px em `#1f1f1f` com borda `#374151` — a única superfície do sistema que não usa a escada `#0a0a0a`/`#1f1f1f` padrão. Balão do visitante em azul sinal com canto inferior direito reto; balão da Nina em `#374151` com canto inferior esquerdo reto. O indicador de digitação são três pontos cinza com `animate-bounce` escalonado.

## Do's and Don'ts

### Do:
- **Do** separar superfícies com `1px solid #1f1f1f` sobre fundo `#0a0a0a` — é a assinatura estrutural do sistema.
- **Do** reservar `#3BA9F4` para o que é interativo ou acabou de responder ao visitante.
- **Do** tratar hover como o principal evento visual: borda acende, título vira azul, halo aparece.
- **Do** usar sombra com offset zero e cor de acento (`0 0 15px rgba(59,169,244,0.15)`).
- **Do** manter `#050505` como fundo contínuo de toda seção.
- **Do** animar entradas com deslocamento vertical de 20–50px e delay escalonado, sempre com `viewport={{ once: true }}` em conteúdo abaixo da dobra.

### Don't:
- **Don't** usar gradiente em nenhum texto além do nome no Hero e do logo no Header.
- **Don't** introduzir sombra preta com deslocamento vertical — contradiz a Regra da Luz, Não do Peso. (O `shadow-lg` existente é dívida, não precedente.)
- **Don't** trocar a cor de fundo de uma seção para criar separação.
- **Don't** adicionar um segundo acento funcional. As cores das stacks são conteúdo de marca e não se propagam.
- **Don't** remover `outline` de elemento focável sem entregar um `:focus-visible` equivalente.
- **Don't** aplicar peso 900 ou tamanho de display a nada além do nome no Hero.
