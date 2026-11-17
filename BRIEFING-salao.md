# BRIEFING — Projeto 04: Studio Lírio — Salão de beleza

## 0. Contexto (leia primeiro)

Este é um site demonstrativo para o portfólio de um serviço de criação de sites. Ele será mostrado a donas e donos de salões de beleza reais.

- O portfólio já tem uma padaria (creme e terracota), um restaurante popular (claro e verde) e um restaurante de alto padrão (escuro e dourado). Este precisa ter identidade própria: **nude, vinho e fotos em formato de arco**.
- Objetivo do site: **gerar agendamentos pelo WhatsApp**. Cada seção leva ao agendamento.
- Conteúdo generalizável, que sirva para qualquer salão. **Não mostre preços.**
- Fora do escopo: backend, sistema de agenda real, pagamentos e depoimentos ou avaliações inventados.

## 1. Prioridades (em caso de conflito, siga esta ordem)

1. Visual elegante e impecável no celular. A maioria das clientes vai abrir pelo link do Instagram.
2. Acessibilidade WCAG 2.2 AA.
3. Desempenho: Lighthouse mobile ≥ 90.
4. Código organizado, com todos os dados em `src/data/site.ts`.

## 2. A marca

**Studio Lírio.** Salão de beleza com cabelo, unhas, sobrancelhas e maquiagem. Ambiente acolhedor e atendimento sem pressa, para clientes do dia a dia e também para noivas e festas.

Tom de voz: acolhedor, elegante e próximo. Frases curtas. Evite clichês como "realce sua beleza natural" e "autoestima lá em cima".

## 3. Identidade visual

### Paleta

| Uso | Cor |
|---|---|
| Fundo | `#F7F2EE` |
| Cartões | `#FFFFFF` |
| Etiquetas e chips | `#F3ECE5` |
| Linhas divisórias | `#E0D3C9` |
| Texto principal | `#2E1E22` |
| Texto secundário | `#6B5A5D` |
| Destaque (vinho): botões, itálicos e cartão de pacote em destaque | `#6E2F3F` |
| Tons das fotos e placeholders | `#E6D7CA`, `#D6C2B2`, `#C8AE9B` |
| Bloco de agendamento | fundo `#2E1E22`, texto `#FFFFFF`, secundário `#E6DAD3`, números `#E7C9A9` |

Verifique o contraste de toda combinação nova.

### Tipografia

- Títulos: **DM Serif Display**, com uma palavra-chave em *itálico vinho* nos títulos principais (ex.: "do jeito que você *merece*").
- Texto: **Jost** (400, 500, 600).
- Rótulos pequenos em maiúsculas espaçadas (ex.: "CABELO · UNHAS · SOBRANCELHAS · MAQUIAGEM").

### Elemento-assinatura: fotos em arco

As fotos principais têm o topo em arco: `border-radius: 999px 999px 24px 24px`.

- No hero, três arcos lado a lado, com o do meio mais alto.
- Nos cartões de serviço, a foto no topo do cartão também é em arco.

### Direção

- Muito espaço em branco.
- Botões em pílula.
- Cartões brancos com radius de 24–28px.
- Nada de sombras pesadas, gradientes ou ícones decorativos em excesso.

## 4. Animação (sutil)

Use CSS com IntersectionObserver. Use **Motion** só se for realmente necessário.

1. **Hero:** os três arcos sobem com fade em sequência (intervalo de 120 ms) e o título aparece logo antes.
2. **Revelação na rolagem:** seções com fade e subida de 16px, uma vez só.
3. **Cartões de serviço:** a foto em arco ganha zoom de 1.04 no hover e o cartão sobe 4px.
4. **Dúvidas frequentes:** abrem e fecham com transição suave de altura.

Regras:

- `prefers-reduced-motion` deixa tudo estático.
- Anime só `transform` e `opacity`, exceto na abertura das dúvidas.

## 5. Estrutura (one-page)

### 5.1 Cabeçalho

- Logo textual "Studio Lírio" em DM Serif Display.
- Menu: Serviços · Pacotes · Dúvidas.
- Botão vinho "Agendar horário".
- Menu mobile acessível (`aria-expanded`, Esc fecha, foco gerenciado).

### 5.2 Hero (centralizado)

- Rótulo: CABELO · UNHAS · SOBRANCELHAS · MAQUIAGEM
- Título (h1): **Um tempo só seu, do jeito que você *merece*.**
- Subtítulo: *Profissionais atenciosas, ambiente acolhedor e atendimento sem pressa, do corte à maquiagem para o grande dia.*
- Botões: **Agendar pelo WhatsApp** (vinho) e **Ver serviços** (contorno).
- Embaixo, três fotos em arco (unhas · cabelo · ambiente), com a do meio mais alta. No celular, mostre só a do meio, ou as três menores lado a lado, sem rolagem horizontal.

### 5.3 Nossos serviços

- Título: **Nossos serviços**. Ao lado: *Do cuidado rápido do dia a dia ao tratamento completo.*
- Quatro cartões, cada um com foto em arco, nome e chips:
  - **Cabelo:** Corte · Escova · Coloração · Hidratação
  - **Unhas:** Manicure · Pedicure · Gel
  - **Sobrancelhas:** Design · Henna · Cílios
  - **Maquiagem:** Social · Festas · Noivas
- Cada cartão tem um link discreto "Agendar [serviço] →" que abre o WhatsApp com a mensagem "Olá! Gostaria de agendar [serviço]."
- Layout: 4 colunas no desktop, 2 no tablet e 1 no celular.

### 5.4 Pacotes de cuidado

- Título: **Pacotes de cuidado**. Texto: *Combinações pensadas para momentos especiais.*
- Três cartões:
  - **Dia da noiva** (em destaque, fundo vinho): Cabelo, maquiagem, unhas e um café da manhã para começar o grande dia com calma.
  - **Pausa de cuidado:** Hidratação capilar, manicure e pedicure em uma única visita.
  - **Mãe e filha:** Um momento juntas, com unhas e escova para as duas.
- Cada cartão tem o link "Quero saber mais →", que abre o WhatsApp com a mensagem citando o pacote.

### 5.5 Dúvidas frequentes

- Título à esquerda e lista à direita (empilhados no celular).
- Use `<details>`/`<summary>` nativos, acessíveis por teclado.
- Perguntas (respostas em `site.ts`):
  - Preciso agendar com antecedência?
  - Quais formas de pagamento vocês aceitam?
  - Vocês atendem noivas fora do salão?
  - Tem estacionamento?
- Respostas que dependem do salão real ficam com texto genérico e plausível, marcado em `site.ts` para ser trocado.

### 5.6 Agende em três passos (bloco escuro)

- Título: **Agende em três passos**.
- Lista ordenada com números grandes em `#E7C9A9`:
  1. **Escolha o serviço.** Ou um dos nossos pacotes.
  2. **Chame no WhatsApp.** A mensagem já vai pronta, é só enviar.
  3. **Confirme o horário.** A gente responde com os horários livres.
- Linha com os horários (ter a sáb, 9h às 19h) e o endereço fictício marcado como demonstrativo.
- Botão branco "Agendar pelo WhatsApp".

### 5.7 Rodapé

- Logo, links e Instagram com `aria-disabled` e a etiqueta "demonstrativo". Nada de links que finjam funcionar.
- Crédito do portfólio: "Site demonstrativo criado por [NOME] — quer um site assim para o seu salão? [Fale comigo]", com link para `creatorWhatsapp`.

### 5.8 Botão flutuante (só no celular)

- Botão "Agendar" fixo no canto inferior, que aparece depois do hero.
- Não pode cobrir conteúdo.
- Precisa ser acessível e ter área de toque de pelo menos 44px.

## 6. Configuração centralizada (`src/data/site.ts`)

Todos os dados ficam nesse arquivo: serviços, pacotes, dúvidas, horários, endereço, redes e contato.

```ts
export const contact = {
  whatsappNumber: "",  // 5531999999999 — preencher antes de publicar
  whatsappMessage: "Olá! Gostaria de agendar um horário no Studio Lírio.",
  instagram: "",
  creatorName: "",
  creatorWhatsapp: "",
};
```

- Mensagens por serviço e por pacote são geradas a partir do nome do item.
- Se `whatsappNumber` estiver vazio, use `https://wa.me/?text=...`. Nunca invente números.

## 7. Imagens

- Busque e baixe as fotos no Pexels ou no Unsplash. Se houver `PEXELS_API_KEY` ou `UNSPLASH_ACCESS_KEY` no `.env`, use a API oficial. Nunca invente URLs.
- Estilo: luz natural, tons quentes e neutros (nude, bege, rosado), ambiente de salão limpo e elegante. Evite fotos de rosto em close, com cara de banco de imagem.
- **Abra cada imagem para conferir.** Rejeite fotos frias, com fundo colorido demais, com marca d'água ou que não combinem com a paleta nude.
- O enquadramento precisa funcionar dentro do arco: confira se o assunto fica centralizado e não é cortado pelo topo arredondado.
- Arquivos: `hero-unhas.jpg`, `hero-cabelo.jpg`, `hero-ambiente.jpg`, `servico-cabelo.jpg`, `servico-unhas.jpg`, `servico-sobrancelhas.jpg`, `servico-maquiagem.jpg`.
- Se não achar uma foto adequada para algum item, use um placeholder na cor da paleta e avise no relatório.
- Registre os créditos em `CREDITS.md`.

**Otimização:**

- WebP em 2 tamanhos (600 e 1200px), com `srcset`/`sizes`.
- `fetchpriority="high"` na foto central do hero.
- `loading="lazy"` no resto, com `width` e `height` definidos.
- Pré-carregar a fonte dos títulos.

## 8. Stack

- React, TypeScript, Vite, Tailwind CSS e Lucide React. Nenhuma outra dependência, salvo Motion se for indispensável.
- Deploy na Vercel, na raiz.
- Repositório no GitHub chamado `studio-lirio`.

## 9. Acessibilidade e SEO

- HTML semântico, um único `h1` e link "Pular para o conteúdo".
- Foco visível, alvos de toque de pelo menos 44px, zoom de 200% e telas de 320px sem rolagem horizontal.
- `lang="pt-BR"`.
- Imagens em arco com `alt` descritivo; as puramente decorativas ficam com `alt=""`.
- `title`, `meta description`, Open Graph, favicon em SVG ("L" em DM Serif Display, vinho sobre nude) e JSON-LD do tipo `BeautySalon` com `openingHours`.

## 10. Como trabalhar

1. Inspecione a pasta.
2. Apresente o plano: componentes, direção visual e lista de imagens.
3. Implemente seção por seção, com textos finais em português brasileiro.
4. Rode `tsc --noEmit`, lint e build, e corrija o que aparecer.
5. Relatório final:
   - Arquivos criados.
   - O que precisa ser preenchido.
   - Imagens faltantes.
   - O que não foi possível testar visualmente.

Não afirme que fez testes visuais se não os executou.
