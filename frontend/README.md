# 🗓️ Agendify — Frontend

**Agendify** é um sistema de agendamento inteligente para profissionais autônomos, permitindo interação entre clientes e prestadores de serviço de forma simples e automatizada.
Esta parte do projeto corresponde ao **frontend**, desenvolvido em **React**, com foco em performance, componentização e integração com o backend FastAPI.

---

## 🚀 Tecnologias Principais

| Tecnologia                             | Uso                                                    |
| -------------------------------------- | ------------------------------------------------------ |
| **React.js (Vite)**                    | Framework base para construção da interface            |
| **TypeScript**                         | Tipagem estática e segurança no código                 |
| **React Router DOM**                   | Gerenciamento de rotas públicas e privadas             |
| **Axios**                              | Comunicação com a API do backend                       |
| **Shadcn/UI + Tailwind CSS**           | Estilização e componentes reutilizáveis                |
| **React Hook Form + Zod**              | Validação e controle de formulários                    |
| **Context API / Hooks personalizados** | Gerenciamento de autenticação e estado global          |
| **Framer Motion**                      | Animações suaves em componentes e transições de página |

---

## 📁 Estrutura de Pastas

```bash
src/
├── assets/                # Ícones, imagens e fontes
├── components/            # Componentes reutilizáveis (botões, inputs, etc.)
├── layouts/               # Layouts padrão (DashboardLayout, AuthLayout)
├── css/               # Estilos complementares e personalizações de Tailwind
├── feature/           # Lógicas de acesso e verificação de rotas (ex: usuário logado)
├── lib/               # Funções utilitárias (ex: formatadores, helpers, validações)
├── pages/             # Páginas da aplicação (Login, Dashboard, Agendamentos, etc.)
├── store.ts           # Configuração global do Redux Toolkit
├── index.css          # Arquivo principal de estilos com Tailwind CSS
└── main.tsx           # Ponto de entrada do aplicativo
```

---

## 🔑 Autenticação e Proteção de Rotas

- A autenticação é gerenciada pelo **AuthContext** (`src/contexts/AuthContext.tsx`).
- Tokens JWT são armazenados de forma segura (sessionStorage/localStorage).
- Rotas protegidas utilizam o componente **`<PrivateRoute />`** (em `src/auth/PrivateRoute.tsx`), que redireciona usuários não autenticados para a tela de login.

Exemplo:

```tsx
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
```

---

## 🔄 Comunicação com o Backend

- Todas as requisições HTTP utilizam **Axios** configurado em `src/services/api.ts`.
- Há interceptadores para anexar o token JWT automaticamente.
- As principais rotas incluem:

  - `POST /login` — autenticação
  - `POST /agendar/` — chat de agendamento
  - `POST /agendamentos/confirmar` — confirmação de agendamento
  - `GET /agendamentos/` — listagem com filtros

---

## 🧩 Tipagem

- Todos os tipos reutilizados (ex: `User`, `Appointment`, `ApiResponse`) ficam em `src/types/`.
- Tipos locais e específicos são definidos dentro do próprio componente.

---

## 🎨 UI e Estilo

- **Tailwind CSS** fornece a base de estilização rápida e responsiva.
- **Shadcn/UI** é usado para componentes acessíveis e personalizáveis (modais, botões, cards).
- **Framer Motion** adiciona microanimações em transições de tela e elementos interativos.

---

## 🧠 Boas Práticas de Código

- Componentes são **funcionais e reutilizáveis**.
- Imports seguem o padrão `@/` configurado no `tsconfig.json` (`baseUrl: "./src"`).
- Tipos compartilhados e funções auxiliares não se misturam com lógica de UI.

---

## ⚙️ Configuração e Execução

### 🧩 Instalar dependências

```bash
npm install
```

### ▶️ Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

### 🏗️ Build para produção

```bash
npm run build
```

### 🔍 Lint e formatação

```bash
npm run lint
npm run format
```

---

## 🧪 Testes (opcional / futura implementação)

- O projeto está preparado para testes com **Vitest** e **React Testing Library**.
- Os testes futuros cobrirão:

  - Hooks de autenticação
  - Requisições à API
  - Componentes críticos (forms, modal de agendamento)

---

## 📦 Dependências Principais

Perfeito 🔥 Aqui está sua seção **📦 Dependências Principais** formatada exatamente no mesmo estilo, mas com base **nas dependências reais** do seu projeto Agendify Frontend (mantendo apenas as essenciais e agrupando por finalidade).

---

## 📦 Dependências Principais

```json
"dependencies": {
  "react": "^19.x",
  "react-dom": "^19.x",
  "react-router-dom": "^7.x",
  "@reduxjs/toolkit": "^2.x",
  "react-redux": "^9.x",
  "axios": "^1.x",
  "tailwindcss": "^4.x",
  "@tailwindcss/vite": "^4.x",
  "lucide-react": "^0.5.x",
  "@radix-ui/react-dialog": "^1.x",
  "@radix-ui/react-alert-dialog": "^1.x",
  "@radix-ui/react-checkbox": "^1.x",
  "@radix-ui/react-select": "^2.x",
  "@radix-ui/react-popover": "^1.x",
  "embla-carousel-react": "^8.x",
  "recharts": "^3.x",
  "date-fns": "^4.x",
  "motion": "^12.x",
  "next-themes": "^0.4.x",
  "class-variance-authority": "^0.7.x",
  "clsx": "^2.x",
  "tailwind-merge": "^3.x",
  "sonner": "^2.x"
}
```

---

## 🧰 Dependências de Desenvolvimento

```json
"devDependencies": {
  "vite": "^7.x",
  "@vitejs/plugin-react": "^4.x",
  "typescript": "^5.x",
  "@types/react": "^19.x",
  "@types/react-dom": "^19.x",
  "@types/node": "^24.x",
  "eslint": "^9.x",
  "@eslint/js": "^9.x",
  "typescript-eslint": "^8.x",
  "autoprefixer": "^10.x",
  "postcss": "^8.x",
  "tw-animate-css": "^1.x"
}
```

---

## 👨‍💻 Autor

**Douglas Phelipe**
Desenvolvedor em formação | Focado em Web Fullstack e Cloud
📍 Pernambuco, Brasil
🔗 [LinkedIn](https://linkedin.com/in/douglasphelipe)
