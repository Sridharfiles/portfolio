<template>
  <div class="text-xs md:text-header-window font-trebuchet-pixel">
    <!-- Tech Stack / Tools -->
    <div class="flex text-xxs md:text-xs w-full items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(30 12 12)"/>
          <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(90 12 12)"/>
          <ellipse cx="12" cy="12" rx="4" ry="11" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(150 12 12)"/>
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        </svg>
        <p class="font-bold mt-1">React.js</p>
      </div>

      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path fill="#539E43" d="m12 1.85l9.21 5.32v10.64L12 23.13l-9.21-5.32V7.17zm0 2.31L4.8 8.32v7.36L12 19.83l7.2-4.15V8.32z"/>
          <path fill="#539E43" d="M12 7.15l4.5 2.6v5.2L12 17.55l-4.5-2.6v-5.2z"/>
        </svg>
        <p class="font-bold mt-1">Node.js</p>
      </div>

      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path fill="#47A248" d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.5 4.5 8.2c.4.3.9.4 1.4.2c.5-.2.8-.7.8-1.2v-1.1c0-.4-.2-.8-.6-.9c-2.3-.9-3.9-3-3.9-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2.2-1.6 4.3-3.9 5.2c-.4.1-.6.5-.6.9v1.1c0 .5.3 1 .8 1.2c.5.2 1 .1 1.4-.2C18.2 18.5 20 15.5 20 12c0-5.5-4.5-10-8-10z"/>
          <path fill="#13AA52" d="M12 6.5c-3 0-5.5 2.5-5.5 5.5c0 1.8 1 3.4 2.5 4.3v-1.8c-.8-.7-1.3-1.6-1.3-2.5c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8c0 .9-.5 1.8-1.3 2.5v1.8c1.5-.9 2.5-2.5 2.5-4.3c0-3-2.5-5.5-4.5-5.5z"/>
        </svg>
        <p class="font-bold mt-1">MongoDB</p>
      </div>

      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path fill="#FFA000" d="M3.89 15.67L6.25.49a.44.44 0 0 1 .83-.16l2.94 5.56zm15.42-3.11l-1.63-3.12a.45.45 0 0 0-.78 0l-1.63 3.12z"/>
          <path fill="#F57C00" d="M12.75 8.78L3.89 15.67l8.28 4.67a1.6 1.6 0 0 0 1.57 0l8.37-4.72z"/>
          <path fill="#FFCA28" d="M13.73 20.34a1.6 1.6 0 0 1-1.57 0L3.89 15.67l8.86-6.89z"/>
        </svg>
        <p class="font-bold mt-1">Firebase</p>
      </div>
    </div>

    <!-- Context -->
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>
      PetAdopt is a full-stack pet adoption and welfare web platform designed to streamline animal rescue management and connect prospective pet parents with animals awaiting adoption.
    </p>
    <br />
    <p>
      Traditional pet adoption often involves complex physical paperwork, delayed application processing, and limited access to comprehensive animal health backgrounds. PetAdopt modernizes this journey into a unified digital experience.
    </p>
    <br />
    <p>
      Built with React.js, Node.js, MongoDB, and Firebase, the application enables shelter administrators and pet seekers to exchange verification data, review medical histories, and process applications efficiently.
    </p>

    <!-- Objectives / Key Features -->
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>Pet Adoption – Browse verified pet listings and adopt pets easily</li>
      <li>Adoption Requests – Send, manage, and track application requests in real time</li>
      <li>Health Tutorials – Access dedicated pet healthcare, nutrition, and training guides</li>
      <li>Search & Filters – Discover pets by animal type, breed, age, and location</li>
    </ul>

    <!-- Repository Link -->
    <div
      class="w-full justify-center mt-5 mb-2 flex flex-row items-center gap-0.5 cursor-pointer transition-all hover:underline hover:text-heroic-blue hover:fill-heroic-blue"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="fill-current">
        <path
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
        />
      </svg>
      <a rel="noopener" href="https://github.com/nishanthini2136/pet-adoption" target="_blank" class="cursor-pointer">
        {{ $t('buttons.linkRepository') }}
      </a>
    </div>
  </div>
</template>

<script setup>
// Component for PetAdopt project detail view
</script>
