# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primários (dois públicos, igual peso):**

1. **Recrutadores técnicos e tech leads** avaliando Arthur Vinícius para vagas. Chegam por LinkedIn ou candidatura, geralmente com pouco tempo e vários portfólios abertos. Job: decidir rápido se o perfil técnico e o nível de entrega justificam uma conversa.
2. **Clientes e contratantes de projeto** (freelance/pontual). Chegam por indicação, WhatsApp ou LinkedIn. Job: entender se Arthur entrega o tipo de coisa que precisam — landing page, sistema full stack, integração com IA — e chegar ao contato sem atrito.

Público secundário não confirmado como prioridade: outros devs / comunidade.

## Product Purpose

Portfólio pessoal de Arthur Vinícius (também conhecido como "Marreta"), desenvolvedor full stack brasileiro. Existe para converter uma visita fria em contato: apresentar trajetória, stack, projetos reais e caminhos de contato diretos.

Sucesso = o visitante sai com uma mensagem no WhatsApp, e-mail ou LinkedIn, ou com uma conversa iniciada com a assistente Nina. Não é medido por tempo na página.

## Positioning

Arthur atua em toda a cadeia — do banco de dados à interface — e integra IA aplicada como parte do produto, não como enfeite. O próprio portfólio é a prova disso: a assistente Nina (OpenAI + Vercel AI SDK) responde perguntas de recrutadores no site e envia um resumo da conversa por e-mail ao Arthur quando ela encerra. Um portfólio de dev que roda o próprio agente de IA em produção é a diferenciação concreta, não uma afirmação.

## Operating Context

- Página única com âncoras: Hero → Experiências → Stacks → Projetos → Contato → Footer. Header fixo navega por âncora.
- **Idioma: português do Brasil.** Todo conteúdo, copy e a assistente respondem em pt-BR (Nina adapta se o visitante escrever em outro idioma).
- Visitas majoritariamente por link direto (LinkedIn, assinatura, WhatsApp), com peso mobile alto.
- Widget de chat (Nina) presente em todas as páginas via layout; ao encerrar ou dar timeout, dispara resumo da conversa por e-mail (Resend).
- Projetos são apresentados em carrossel (Swiper), não em grade.

## Capabilities and Constraints

**Stack em produção:** Next.js 15 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, `motion` para animação, Swiper para o carrossel, react-icons. `three` / `@react-three/fiber` / `drei` estão instalados mas não usados em nenhum componente atual.

**Backend/rotas:** `src/app/api/chat/route.ts` (streaming, `gpt-4o-mini` via `@ai-sdk/openai`), `src/app/api/chat/summary/route.ts` (resumo por e-mail via Resend).

**Deploy:** Vercel; existe também Dockerfile + docker-compose para rodar containerizado.

**Terminologia fixa:** a assistente se chama **Nina**. Seções em pt-BR: "Minhas Experiências", "Minhas Stacks", "Meus Projetos", "Entre em Contato".

**Restrição factual crítica:** a base de conhecimento da Nina (system prompt em `route.ts`) é fonte de verdade sobre Arthur e está desatualizada — ver Evidence on Hand. Nenhum trabalho futuro deve inventar experiências, empresas, formações, prazos ou valores.

## Brand Commitments

- Nome exibido: **Arthur Vinícius**. Autor/apelido: Arthur (Marreta).
- Assistente: **Nina** — tom profissional, amigável, natural; respostas curtas (máx. ~200 palavras), emojis com moderação, sem markdown pesado.
- Voz do site: primeira pessoa, direta, sem jargão corporativo.
- Identidade visual incumbente (fundo quase-preto `#050505`, cartões `#0a0a0a`, acento ciano `#3BA9F4`, gradiente roxo→azul `#8b5cf6`→`#3BA9F4`, Inter/Poppins/Outfit) existe no código, mas **não foi declarada imutável pelo usuário** — é autoridade incumbente, não compromisso de marca.

## Evidence on Hand

**Real e verificável:**

- 7 projetos com imagem, stack e link em `src/app/components/ProjectsCards.tsx`: HostPool (Laravel/Docker/MySQL/Livewire — não hospedado), Tech-Product-LP, StockManager, Learning +, Desafio Linktree, Desafio Lacrei Saúde, Landing Page Sales Dashboard. Seis têm demo ao vivo; todos têm GitHub.
- Screenshots em `public/images/`; fotos pessoais (`imagem-eu.jpg`, `imagem-eu-removebg.png`) disponíveis e **hoje não usadas em nenhum componente**.
- Contatos reais: arthurdedsec@gmail.com · WhatsApp (81) 98854-8132 · github.com/Arthurvini17 · linkedin.com/in/arthurviniciusdev
- Stats do Hero (15+ projetos, 4+ linguagens core, 100% qualidade) — confirmados pelo usuário como reais.
- DriveNow e To-Do List Full Stack (Next.js + Node + JWT) — projetos reais que **ainda não aparecem** nos cards do site. Lacuna de conteúdo, não afirmação falsa.

**Ausente — não fabricar:** depoimentos, logos de clientes, números de resultado, case studies, prêmios, certificações, benchmarks de performance, faixa de preço.

**Desatualizado — corrigir antes de reutilizar:** tanto `Experiences.tsx` quanto o system prompt da Nina descrevem a situação atual de forma errada. Ver Product Principles.

## Product Principles

1. **Verdade sobre trajetória, sempre.** A linha do tempo confirmada com o usuário (agosto/2026) é: **atual — Suporte Técnico de TI na Brasil Sat**, onde além do suporte desenvolve landing pages e participa ativamente da manutenção do código do sistema; **atual — Doe+ (voluntário)**, app mobile React Native, liderando parte do time; **encerrado — AIAtende** (suporte técnico e depois full stack / agentes de IA). Qualquer trabalho futuro em `Experiences.tsx` e no prompt da Nina deve refletir isso.
2. **Disponibilidade é freelance, não CLT.** O badge do Hero "Disponível para Oportunidades" está impreciso: Arthur está empregado e aberto a **projetos e freelas**, não a recolocação CLT. Copy futura deve dizer isso sem ambiguidade.
3. **Dois públicos, um caminho.** Recrutador e cliente têm perguntas diferentes (nível técnico vs. entrega/escopo), mas o mesmo destino: contato direto. Nunca esconder contato atrás de um formulário longo.
4. **Projeto é prova, texto é contexto.** Cada afirmação de capacidade deve ter um projeto, um demo ou um repositório atrás dela. Sem lastro, não entra.
5. **A IA é parte do produto, não um brinquedo.** Nina precisa estar correta e útil; um agente que erra sobre o Arthur custa mais credibilidade do que ganha.

## Accessibility & Inclusion

Nenhum padrão formal (WCAG nível X) foi estabelecido pelo usuário. Dois fatos técnicos registrados como dívida conhecida:

- `src/app/layout.tsx` declara `<html lang="en">` enquanto todo o conteúdo é pt-BR — leitores de tela pronunciam o texto no idioma errado.
- `Experiences.tsx` renderiza descrições via `dangerouslySetInnerHTML` sobre strings estáticas do próprio repositório.
