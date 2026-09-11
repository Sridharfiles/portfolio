<template>
  <div class="text-xs md:text-header-window font-trebuchet-pixel">
    <!-- Tech Stack / Tools -->
    <div class="flex text-xxs md:text-xs w-full items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path fill="#02569B" d="M14.314 0L2.3 12l3.69 3.69L21.7 0zm.01 11.07l-6.79 6.79l3.69 3.69l3.1-3.1l6.79-6.79l-3.09-3.09z"/>
          <path fill="#0175C2" d="M14.324 11.07l-3.7 3.69l3.1 3.1l3.69-3.7z"/>
          <path fill="#29B6F6" d="M17.414 14.76l-3.1 3.1l3.09 3.1l3.1-3.1z"/>
        </svg>
        <p class="font-bold mt-1">Flutter</p>
      </div>

      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path fill="#0175C2" d="M4.105 4.105L12 0l7.895 4.105v15.79L12 24l-7.895-4.105zm1.579 2.105v11.58l6.316 3.29V2.92z"/>
        </svg>
        <p class="font-bold mt-1">Dart</p>
      </div>
    </div>

    <!-- Context -->
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>
      Woodland is a high-performance mobile e-commerce application tailored for premium outdoor footwear and lifestyle gear, bringing the brand's iconic rugged outdoor identity into an elegant, modern shopping experience.
    </p>
    <br />
    <p>
      The platform streamlines product discovery and purchasing through an intuitive mobile interface featuring dynamic category chip filtering (All, Casual, Boots, Formal), real-time search exploration, interactive shoe size selectors, and responsive multi-device layouts that adapt between compact smartphones and wide screens.
    </p>
    <br />
    <p>
      Engineered with Flutter and powered by the Provider state management pattern (CartProvider), the app guarantees instantaneous cart updates, smooth screen transitions, and safe item removal confirmation dialogs—all styled with custom Lato typography and an authentic earthy Woodland color palette (#4C6A43).
    </p>

    <!-- Objectives / Key Features -->
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>Interactive Footwear Showcase – Discover curated Woodland footwear collections featuring outdoor boots, nubuk leather shoes, sneakers, and sandals</li>
      <li>Dynamic Category Chip Filtering – Instant single-tap filter switching across All, Casual, Boots, and Formal collections</li>
      <li>Interactive Shoe Sizing Selector – Select dynamic footwear sizes with real-time validation and active selection indicators</li>
      <li>Global Cart State Management – Add, track, and manage items with the Provider pattern for instant real-time cart synchronization</li>
      <li>Confirmation Modal & Removal Safety – Dismiss and remove items from the cart with confirmation dialogs to prevent accidental deletions</li>
      <li>Responsive Layout & Custom Typography – Adaptive layout engine with custom Lato font styling and nature-inspired forest green color theme</li>
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
      <a rel="noopener" href="https://github.com/Sridharfiles/woodland-app" target="_blank" class="cursor-pointer">
        {{ $t('buttons.linkRepository') }}
      </a>
    </div>
  </div>
</template>

<script setup>
// Component for Woodland project detail view
</script>
