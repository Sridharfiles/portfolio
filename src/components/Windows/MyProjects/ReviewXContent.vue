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

      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path fill="#FFA000" d="M3.89 15.67L6.25.49a.44.44 0 0 1 .83-.16l2.94 5.56zm15.42-3.11l-1.63-3.12a.45.45 0 0 0-.78 0l-1.63 3.12z"/>
          <path fill="#F57C00" d="M12.75 8.78L3.89 15.67l8.28 4.67a1.6 1.6 0 0 0 1.57 0l8.37-4.72z"/>
          <path fill="#FFCA28" d="M13.73 20.34a1.6 1.6 0 0 1-1.57 0L3.89 15.67l8.86-6.89z"/>
        </svg>
        <p class="font-bold mt-1">Firebase</p>
      </div>

      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path fill="#3DDC84" d="M17.6 9.48l1.84-3.18a.54.54 0 0 0-.19-.74a.54.54 0 0 0-.74.2l-1.87 3.23A11.4 11.4 0 0 0 12 8.36c-1.63 0-3.16.35-4.64.63L5.49 5.76a.54.54 0 0 0-.74-.2a.54.54 0 0 0-.19.74l1.84 3.18C3.79 11.02 2 13.92 2 17.27h20c0-3.35-1.79-6.25-4.4-7.79M7 14.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m10 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"/>
        </svg>
        <p class="font-bold mt-1">Android</p>
      </div>

      <div class="flex flex-col items-center flex-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
          <path fill="#000000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.87c-.9.04-1.99.6-2.63 1.35c-.56.65-.97 1.7-0.85 2.72c1 .08 2.03-.52 2.56-1.2"/>
        </svg>
        <p class="font-bold mt-1">iOS</p>
      </div>
    </div>

    <!-- Context -->
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>
      ReviewX is a modern mobile rating and review platform designed to eliminate friction in collecting authentic customer feedback.
    </p>
    <br />
    <p>
      Traditional review mechanisms often suffer from low engagement due to long forms, third-party logins, and cumbersome processes. ReviewX solves this challenge by leveraging dynamic QR codes placed directly at physical points of customer interaction.
    </p>
    <br />
    <p>
      Customers simply scan a QR code using their smartphone to instantly launch an intuitive rating flow, allowing businesses to capture genuine sentiment, boost ratings, and improve customer satisfaction in real time.
    </p>

    <!-- Objectives / Key Features -->
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>Modern review collection through an instant QR-based interface</li>
      <li>Published and live on the Google Play Store for Android devices</li>
      <li>Frictionless feedback flow driving higher customer response rates</li>
      <li>Real-time sentiment tracking and customer rating management</li>
    </ul>
  </div>

  <!-- Google Play Store Direct Action Button -->
  <a
    rel="noopener"
    href="https://play.google.com/store/apps/details?id=com.sridhar.reviewx"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center gap-1.5"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M3.609 1.814L13.792 12L3.61 22.186c-.237-.225-.38-.544-.38-.934V2.748c0-.39.143-.709.38-.934"/>
      <path fill="#FBBC04" d="m17.065 8.728l-3.273 3.272l3.273 3.272l3.754-2.146c.866-.495.866-1.758 0-2.252z"/>
      <path fill="#EA4335" d="m13.792 12l-10.183 10.186c.264.252.646.33.998.132l12.458-7.046z"/>
      <path fill="#34A853" d="m17.065 8.728l-12.458-7.046a1.05 1.05 0 0 0-.998.132L13.792 12z"/>
    </svg>
    <span>Google Play Store</span>
  </a>
</template>

<script setup>
// Component for ReviewX project detail view
</script>
