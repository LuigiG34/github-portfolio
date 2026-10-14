// Personnaliser ici les coordonnées avant publication.
const profile = {
  email: "luigigandemer6@gmail.com",
  github: "https://github.com/LuigiG34",
  linkedin: "https://www.linkedin.com/in/luigi-gdm/"
};

// Remplacer les fichiers visuels par assets/images/projects/slug.png quand ils sont disponibles.
// Le site affiche une composition typographique en attendant : aucun faux screenshot n'est utilisé.

const projects = [
  {
    name: "Discover France",
    type: "WordPress / GraphQL",
    category: ["wordpress", "symfony"],
    index: "01",
    slug: "discover-france",
    tags: ["WordPress", "PHP", "GraphQL", "Symfony"],
    description: "Développement d'un header personnalisé et d'un plugin WordPress affichant une grille de produits alimentée par une API GraphQL externe. Pages produits et paiement Axepta réalisés côté Symfony.",
    link: "https://www.discoverfrance.com/"
  },
  {
    name: "Rêve de Vélo — Events",
    type: "WordPress / GraphQL",
    category: ["wordpress", "symfony"],
    index: "02",
    slug: "rdv-events",
    tags: ["WordPress", "PHP", "GraphQL", "Symfony"],
    description: "Développement d'un header personnalisé et d'un plugin WordPress affichant une grille de produits issus d'une API GraphQL externe. Pages produits et paiement Axepta réalisés sous Symfony.",
    link: "https://events.revedevelo.com/"
  },
  {
    name: "Rêve de Vélo — Travel",
    type: "WordPress / GraphQL",
    category: ["wordpress", "symfony"],
    index: "03",
    slug: "rdv-travel",
    tags: ["WordPress", "PHP", "GraphQL", "Symfony"],
    description: "Création d'un header sur mesure et développement d'un plugin WordPress affichant des produits récupérés via une API GraphQL. Pages individuelles et paiement Axepta développés sous Symfony.",
    link: "https://travel.revedevelo.com/"
  },
  {
    name: "Enileads",
    type: "SaaS de prospection commerciale",
    category: ["symfony"],
    index: "04",
    slug: "enileads",
    tags: ["Symfony", "PHP", "JavaScript", "Kanban", "Scraping"],
    description: "Refonte complète de l'interface d'un SaaS de prospection, développement de fonctionnalités de gestion des leads, scraping de réseaux sociaux, création d'un Kanban commercial et migration de Symfony 4.4 vers 6.4.",
    link: "https://www.enileads.com/"
  },
  {
    name: "Enileads Chrome Extension",
    type: "Extension Google Chrome / LinkedIn",
    category: ["symfony"],
    index: "05",
    slug: "enileads-chrome-extension",
    tags: ["JavaScript", "Chrome Extension", "REST API", "LinkedIn"],
    description: "Développement d'une extension Chrome connectée à Enileads via une clé API, ajout de boutons personnalisés sur LinkedIn pour récupérer les informations des profils et importer directement des prospects dans le SaaS.",
    link: "https://chromewebstore.google.com/detail/enileads/mdnmhfapckdmlcimmllnbbpilabcldnm?hl=fr"
  },
  {
    name: "Easypin",
    type: "SaaS / Automatisation Pinterest",
    category: ["symfony"],
    index: "06",
    slug: "easypin",
    tags: ["Symfony", "PHP", "OAuth", "Pinterest API", "IA"],
    description: "Développement d'un SaaS automatisant la création de publications Pinterest : collecte d'images depuis différentes sources, filtrage intelligent, génération de contenus par IA et intégration d'un éditeur d'images.",
    link: "https://easypin.io/"
  },
  {
    name: "Huntspy",
    type: "SaaS de prospection B2B",
    category: ["symfony"],
    index: "07",
    slug: "huntspy",
    tags: ["Symfony", "PHP", "SaaS", "API REST", "Prospection B2B"],
    description: "Développement et évolution d'un SaaS de prospection B2B : recherche et qualification de leads, gestion de campagnes multicanales, automatisation des séquences commerciales et suivi des prospects.",
    link: "https://www.huntspy.com/"
  },
  {
    name: "Inkreez",
    type: "SaaS marketing / WooCommerce",
    category: ["symfony"],
    index: "08",
    slug: "inkreez",
    tags: ["Symfony", "PHP", "WooCommerce", "API REST", "Email Marketing"],
    description: "Développement d'un SaaS marketing dédié aux boutiques WooCommerce : onboarding guidé, analyse des sites e-commerce, recommandations personnalisées et automatisation de campagnes d'emails basées sur le comportement des clients.",
    link: "https://www.inkreez.com/"
  },
  {
    name: "Inkreez WP Plugin",
    type: "Plugin WordPress / WooCommerce",
    category: ["wordpress"],
    index: "09",
    slug: "inkreez-wp-plugin",
    tags: ["PHP", "WordPress", "WooCommerce", "API REST", "Plugin"],
    description: "Développement d'un plugin WordPress assurant la synchronisation des clients, commandes et produits WooCommerce avec le SaaS Inkreez via API REST. Extension publiée sur le répertoire officiel WordPress.org.",
    link: "https://fr.wordpress.org/plugins/inkreez/"
  },
  {
    name: "Bikers Avenue",
    type: "Marketplace / E-commerce",
    category: ["symfony"],
    index: "10",
    slug: "bikers-avenue",
    tags: ["Sylius", "Symfony", "PHP", "MangoPay", "Marketplace"],
    description: "Reprise en autonomie d'une marketplace développée sous Sylius, avec intégration de MangoPay pour gérer les paiements entre acheteurs et vendeurs. Maintenance et évolution d'un projet existant.",
    link: null
  },
  {
    name: "Divin Cocktails",
    type: "E-commerce / Stripe",
    category: ["wordpress"],
    index: "11",
    slug: "divin-cocktail",
    tags: ["WordPress", "E-commerce", "Stripe", "JavaScript"],
    description: "Création d'un site e-commerce, intégration de Stripe et développement d'une grille de produits interactive affichant au survol les caractéristiques des cocktails sous forme de notes étoilées.",
    link: null
  },
  {
    name: "BAM Concept",
    type: "Site e-commerce",
    category: ["wordpress"],
    index: "12",
    slug: "bam-concept",
    tags: ["WordPress", "E-commerce", "Web Design"],
    description: "Conception et développement d'un site e-commerce, avec proposition et intégration de designs personnalisés. Paiement réalisé par un autre intervenant.",
    link: null
  },
  {
    name: "Les Petits Papiers de Flo",
    type: "Site e-commerce",
    category: ["wordpress"],
    index: "13",
    slug: "les-petits-papiers-de-flo",
    tags: ["WordPress", "E-commerce", "Web Design"],
    description: "Création d'un site e-commerce, conception et intégration de designs personnalisés. Paiement réalisé par un autre intervenant.",
    link: "https://www.lespetitspapiersdeflo.com/"
  },
  {
    name: "Enimad Invest",
    type: "Site vitrine",
    category: ["wordpress"],
    index: "14",
    slug: "enimad-invest",
    tags: ["WordPress", "Web Design", "Intégration"],
    description: "Conception et réalisation du site vitrine de la holding Enimad, avec proposition de designs et validation progressive de chaque section par le dirigeant.",
    link: "https://www.enimad-invest.com/"
  },
  {
    name: "Eureka Technology",
    type: "Site vitrine",
    category: ["wordpress"],
    index: "15",
    slug: "eureka-technology",
    tags: ["WordPress", "Web Design", "Intégration"],
    description: "Création du site vitrine, proposition de designs personnalisés et intégration des différentes sections avec validation progressive des clients.",
    link: "https://www.eureka-technology.fr/"
  },
  {
    name: "France Bike Rentals",
    type: "Site multilingue",
    category: ["wordpress"],
    index: "16",
    slug: "france-bike-rental",
    tags: ["WordPress", "Multilingue", "Maintenance"],
    description: "Amélioration des interfaces, proposition de designs, correction de bugs et traduction du site en anglais.",
    link: "https://www.francebikerentals.com/"
  },
  {
    name: "Le Potager de Santé",
    type: "WooCommerce / Moodle",
    category: ["wordpress"],
    index: "17",
    slug: "potager-sante",
    tags: ["WordPress", "WooCommerce", "Moodle", "Paiement"],
    description: "Conception des interfaces, intégration de WooCommerce pour les paiements et configuration d'un plugin tiers reliant les achats à la création de comptes Moodle pour l'accès aux formations.",
    link: "https://formation.lepotagerdesante.com/"
  },
  {
    name: "The Loft — Laura Heckel",
    type: "Refonte Wix / WordPress",
    category: ["wordpress"],
    index: "18",
    slug: "the-loft",
    tags: ["WordPress", "Migration Wix", "Web Design"],
    description: "Refonte d'un site Wix vers WordPress, création d'un site vitrine et proposition de designs personnalisés avec validation de chaque section par la cliente.",
    link: null
  },
  {
      name: "Lunidev Academy",
      type: "Plateforme e-learning / Projet personnel",
      category: ["symfony"],
      index: "19",
      slug: "lunidev-academy",
      tags: ["Symfony", "PHP", "Stripe", "JavaScript", "E-learning"],
      description: "Conception et développement d'une plateforme e-learning avec paiement Stripe et éditeur de formations sur mesure, permettant de créer des cours composés de textes, images, vidéos et blocs de code.",
      link: null
  },
  {
    name: "Urban Union Concerts",
    type: "Landing page événementielle",
    category: ["symfony"],
    index: "20",
    slug: "urban-union-concerts",
    tags: ["Landing Page", "Web Design", "Intégration", "Événementiel"],
    description: "Création d'une landing page pour un concert de Niro et Alonzo, avec présentation de l'événement et intégration de liens vers une billetterie externe et le Pass Culture.",
    link: null
  }
];



function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function projectCard(p){
  const visual = `assets/images/projects/${p.slug}.png`;
  return `<div class="col-md-6 col-xl-4 project-item" data-categories="${p.category.join(',')}">
    <article class="project-card">
      <div class="project-visual theme-${p.category}">
        <img src="${visual}" loading="lazy" alt="Mockup du projet ${escapeHtml(p.name)}" onload="this.classList.add('loaded')" onerror="this.remove()">
      </div>
      <div class="project-body"><div class="project-meta"><span>${escapeHtml(p.type)}</span><span>${p.index} / 20</span></div>
      <h3>
          ${escapeHtml(p.name)}
          ${p.link ? `
              <a href="${escapeHtml(p.link)}" target="_blank" rel="noopener noreferrer"
                class="mini-icon" aria-label="Visiter ${escapeHtml(p.name)}">
                  ↗
              </a>
          ` : ''}
      </h3>
      <p>${escapeHtml(p.description)}</p><div class="project-tags">${p.tags.map(t=>`<span>${escapeHtml(t)}</span>`).join('')}</div></div>
    </article>
  </div>`;
}

const grid = document.querySelector('#project-grid');

grid.innerHTML = projects.map(projectCard).join('');

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b === button);
            b.setAttribute('aria-pressed', String(b === button));
        });

        document.querySelectorAll('.project-item').forEach(card => {
            const categories = card.dataset.categories.split(',');
            card.hidden = filter !== 'all' && !categories.includes(filter);
        });
    });
});

document.querySelector('#email-link').href=`mailto:${profile.email}`;
document.querySelector('#github-link').href=profile.github;
document.querySelector('#linkedin-link').href=profile.linkedin;
document.querySelector('#year').textContent=new Date().getFullYear();