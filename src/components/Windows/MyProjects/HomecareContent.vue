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
          <path fill="#0D47A1" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z"/>
        </svg>
        <p class="font-bold mt-1">Payments</p>
      </div>
    </div>

    <!-- Company Details -->
    <div class="mt-4 p-2.5 bg-gray-50 border border-gray-200 rounded-sm">
      <p class="text-xxs uppercase tracking-wider text-gray-500 font-semibold">INDUSTRIAL PROJECTS</p>
      <p class="text-xs text-gray-900 mt-0.5">Company: <span class="font-semibold">Mediforte Healthcare Services Pvt. Ltd.</span></p>
    </div>

    <!-- Context -->
    <h3 class="mt-5 mb-2">{{ $t('common.context') }}</h3>
    <p>
      Homecare CRM is an enterprise-grade home healthcare management platform built for Mediforte Healthcare Services Pvt. Ltd. to streamline patient care, caregiver dispatch, and in-home medical services.
    </p>
    <br />
    <p>
      The platform addresses the logistical complexity of managing field caregivers, scheduling home visits, and maintaining transparent health service records between patients, families, and certified medical providers.
    </p>
    <br />
    <p>
      Powered by Flutter and Firebase, the application offers real-time notifications, fast synchronization of care reports, and secure payment processing.
    </p>

    <!-- Objectives / Key Features -->
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>Service Discovery – Browse multiple care service types (Home Care, Companion Care, etc.)</li>
      <li>Provider Profiles – View detailed caregiver information including ratings, experience, certifications, and service areas</li>
      <li>Easy Booking System – Seamless appointment scheduling and confirmation workflow</li>
      <li>Secure Payments – Integrated payment processing for care services</li>
    </ul>
  </div>
</template>

<script setup>
// Component for Homecare CRM project detail view
</script>
