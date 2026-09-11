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
          <path fill="#E53935" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"/>
        </svg>
        <p class="font-bold mt-1">Maps</p>
      </div>
    </div>

    <!-- Context -->
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>
      BloodZone is a real-time, location-based emergency blood donation platform designed to bridge the critical gap between urgent blood seekers, hospitals, and nearby eligible donors, slashing emergency response times from 3–6 hours to under 30 minutes.
    </p>
    <br />
    <p>
      The platform eliminates inefficient social media pleas and manual calling chains by providing dual response workflows: an active "Search & Find" donor directory with direct calling and live map navigation, alongside an automated "Post & Alert" geo-broadcast system that notifies registered donors within a 5km radius.
    </p>
    <br />
    <p>
      Built using Flutter with a real-time Google Firebase backend (Cloud Firestore, Cloud Functions, and Firebase Cloud Messaging), the system features automated donor safety tracking, including an intelligent 90-day post-donation lockout mechanism ensuring medical compliance and donor health protection.
    </p>

    <!-- Objectives / Key Features -->
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>Emergency Blood Request – Post urgent blood requirements in 30 seconds to trigger instant push alerts to matched donors within a 5km radius</li>
      <li>Live Search & Geo-Location Map – Discover and filter available donors in real time by blood group, proximity, and active donation eligibility</li>
      <li>Direct Donor & Hospital Connect – Connect immediately via one-tap direct phone calls and GPS navigation to avoid critical emergency delays</li>
      <li>90-Day Donor Safety Management – Automatically enforce medical rest intervals with real-time countdown timers to protect donor well-being</li>
      <li>Hospital & Blood Center Integration – Register, verify, and manage verified blood bank centers and emergency hospital requirements with live fulfillment tracking</li>
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
      <a rel="noopener" href="https://github.com/udhayarasi7/flutter" target="_blank" class="cursor-pointer">
        {{ $t('buttons.linkRepository') }}
      </a>
    </div>
  </div>
</template>

<script setup>
// Component for BloodZone project detail view
</script>
