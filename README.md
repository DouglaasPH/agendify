# 🗓️ Agendify

O **Agendify** é um sistema de agendamento desenvolvido para profissionais autônomos que desejam organizar horários, gerenciar clientes e controlar sua disponibilidade de forma prática e moderna. O projeto oferece um fluxo completo de autenticação, gerenciamento de agenda e interação entre cliente e profissional, incluindo um chat para agendamentos.

---

## 🚀 Tecnologias Utilizadas

### **Frontend**

- React
- TypeScript
- Redux Toolkit
- Axios
- Tailwind CSS
- Shadcn/UI
- Radix UI
- Lucide React

### **Backend**

- FastAPI (Python)
- SQLAlchemy
- Alembic
- JWT Authentication
- SQLite (desenvolvimento) / PostgreSQL (produção opcional)
- `pyproject.toml` para gerenciamento de dependências (Poetry)

---

## ✅ Funcionalidades Principais

### 👤 Autenticação e Usuários

- Registro de conta com fluxo completo
- Login com **access_token** e **refresh_token**
- Edição de perfil
- Alteração de e-mail (em desenvolvimento)
- Fluxo de recuperação de senha (Forgot/Reset) — pendente
- Verificação de e-mail — pendente

---

### 📅 Disponibilidade

- Criar horários de disponibilidade
- Cancelar horários
- Visualização pelo profissional

---

### 🗓️ Agendamentos

- Cliente pode agendar, desmarcar e visualizar agendamentos
- Profissional pode visualizar e gerenciar os agendamentos
- Regras de validação e prevenção de conflitos

---

### 💬 Chat Interativo

- Agendamento
- Desmarcação
- Visualização de horários
- Experiência simples e intuitiva para o cliente

---

### 📊 Painel de Métricas

- Visão geral dos agendamentos
- Indicadores úteis para o profissional

---

## 📌 Status do Projeto

✅ Funcionalidades principais implementadas
⏳ Em andamento:

- Envio de e-mails (confirmação, verificação, recuperação)
- Lógica de alteração de e-mail
- Telas Forgot/Reset Password
- Verificação de e-mail

---

# 📂 Como Executar o Projeto

## ✅ Backend (FastAPI)

1. Entre na pasta do backend:

```
cd backend
```

2. Instale as dependências via Poetry (pois existe um `pyproject.toml`):

```
poetry install
```

3. Ative o ambiente virtual do Poetry:

```
poetry shell
```

4. Execute o servidor:

```
uvicorn app.main:app --reload
```

API disponível em:
👉 [http://localhost:8000](http://localhost:8000)

---

## ✅ Frontend (React + Vite)

1. Entre na pasta do frontend:

```
cd frontend
```

2. Instale as dependências:

```
npm install
```

3. Execute o projeto:

```
npm run dev
```

Frontend disponível em:
👉 [http://localhost:5173](http://localhost:5173)

---

## 📩 Contato

Criado por **Douglas Phelipe**

- GitHub: [https://github.com/DouglaasPH](https://github.com/DouglaasPH)
- LinkedIn: [https://www.linkedin.com/in/douglas-phelipe/](https://www.linkedin.com/in/douglas-phelipe/)
