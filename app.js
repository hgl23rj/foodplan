const appConfig = {
  logoUrl: "https://www.tbca.net.br/favicon.ico",
};

const app = document.querySelector("#app");
const logoEl = document.querySelector("#brand-logo");

if (logoEl && appConfig.logoUrl) {
  logoEl.src = appConfig.logoUrl;
  logoEl.alt = "TBCA logo";
}

const fallbackRoutes = [
  {
    path: "/",
    title: "Home",
    description: "Página inicial do portal institucional.",
  },
  {
    path: "/consultas",
    title: "Consultas",
    description: "Acesso rápido às diferentes áreas de atendimento.",
  },
  {
    path: "/documentos",
    title: "Documentos",
    description: "Lista de documentos e materiais públicos do órgão.",
  },
];

const routes = await fetch("/api/routes")
  .then((response) => (response.ok ? response.json() : fallbackRoutes))
  .catch(() => fallbackRoutes);

app.innerHTML = routes
  .map(
    (route) => `
      <article class="card">
        <h2>${route.title}</h2>
        <p>${route.description ?? "Descrição da página disponível."}</p>
        <a href="${route.path}">Abrir</a>
      </article>
    `
  )
  .join("");
