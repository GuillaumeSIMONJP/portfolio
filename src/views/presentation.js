import photoProfile from '../assets/230920_guillaume-simon_HD_sRGB.jpg';
import myResume from '../assets/guillaume_simon.pdf';

export default () => (`
<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden sm:h-80 lg:order-first lg:h-full">
        <img
          alt=""
          src="${photoProfile}"
          class="rounded-2xl absolute inset-0 h-full w-75 object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">Guillaume SIMON</h2>

        <p class="mt-4 text-gray-600">
          Je suis actuellement en 2éme année de mon bachelor de développeur web chez Coda à Orléans mais je suis originaire de Chartres.
          À la recherche en ce moment d'une alternance sur une base de 2 semaine en cours, 2 semaines en entreprise.
        </p>
        <a
          href="${myResume}"
          class="mt-8 inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          download
        >
          Télécharger mon CV
        </a>
      </div>
    </div>
  </div>
</section>
`);
