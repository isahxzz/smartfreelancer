# 🚀 PRÓXIMOS PASSOS: Deploy em Vercel

Seu projeto está **100% pronto**! Agora falta só você fazer o deploy (publicar na internet).

---

## **PASSO 1: Criar repositório no GitHub (3 min)**

1. Va em https://github.com/new
2. Nome do repo: `smartfreelancer` (exatamente assim)
3. Descrição: "SaaS para gerar propostas automáticas"
4. Seleciona "Public"
5. Clica "Create repository"

**Você vai ver uma página com comandos Git. IGNORE. Vem aqui embaixo para os comandos corretos.**

---

## **PASSO 2: Push pro GitHub (usando Git Bash ou PowerShell)**

Abre PowerShell e dentro da pasta `smartfreelancer`, cola esses comandos:

```powershell
git remote add origin https://github.com/SEU_USERNAME/smartfreelancer.git
git branch -M main
git push -u origin main
```

**IMPORTANTE**: Troca `SEU_USERNAME` pelo seu username do GitHub!

Exemplo:
```powershell
git remote add origin https://github.com/isabelaunicorn/smartfreelancer.git
git branch -M main
git push -u origin main
```

Pode pedir GitHub authentication → clica "Authorize with GitHub"

---

## **PASSO 3: Deploy em Vercel (1 clique!)**

1. Vai em https://vercel.com
2. Clica "Sign Up" → seleciona "GitHub" → autoriza
3. Depois de logado, clica "Add New..." → "Project"
4. Seleciona repositório `smartfreelancer`
5. Clica "Import"
6. Na aba "Environment Variables", deixa vazio (por enquanto)
7. Clica "Deploy"

**Aguarda 1-2 min...**

🎉 **PRONTO!** Sua landing page está live! Você vai ver URL como:
```
https://smartfreelancer-abc123.vercel.app
```

---

## **PRÓXIMAS AÇÕES**

✅ Quando tiver URL pública, manda pra mim  
✅ Fazemos 10 conversas de validação com freelancers (semana 2-3)  
✅ Depois começamos a codificar o MVP real (gerador de propostas)

---

## **Como testar LOCALMENTE (enquanto faz deploy)**

Se quiser ver funcionando no seu PC:

```powershell
cd smartfreelancer
npm run dev
```

Abre http://localhost:3000 no navegador

---

**Ficou com dúvida em algum passo?** Me manda mensagem!
