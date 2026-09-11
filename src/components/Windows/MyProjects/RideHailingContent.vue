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
      RideFlow is a production-grade, enterprise-scale ride-hailing and fleet management platform engineered as a multi-app monorepo to seamlessly orchestrate passengers, drivers (captains), and platform administrators in real time.
    </p>
    <br />
    <p>
      Built with a modular Melos architecture, the platform features dedicated applications for passengers (fare estimations, live geospatial driver tracking, multi-point destination picker), drivers (instant ride dispatching, turnaround navigation, secure ride start OTP verification), and administrators (fleet monitoring, document review, and real-time operations oversight).
    </p>
    <br />
    <p>
      Backed by Google Firebase (Authentication, Cloud Firestore, Realtime Database, and Cloud Storage), the platform integrates on-device Google ML Kit OCR text recognition for automated driver and vehicle document verification (driving licenses, registration certificates), high-frequency GPS telemetry, and robust security rules ensuring reliable, high-concurrency urban mobility.
    </p>

    <!-- Objectives / Key Features -->
    <h3 class="mt-5 mb-2">{{ $t('common.objectives') }}</h3>
    <ul class="list-disc ml-3">
      <li>Multi-App Monorepo Architecture – Coordinated multi-package development across passenger, driver, and admin dashboard applications via Melos and Dart Workspaces</li>
      <li>Real-Time Ride Matching & Booking – Dynamic fare estimation, pickup-to-drop route polyline mapping, and low-latency driver matching using Cloud Firestore</li>
      <li>Live Driver Tracking & Telemetry – High-frequency GPS position streaming and smooth camera movement on Google Maps for real-time ride tracking</li>
      <li>Secure OTP Ride Authorization – End-to-end trip verification requiring passenger-provided 4-digit OTP codes before drivers can start trips</li>
      <li>On-Device ML Kit OCR Verification – Automated document scanning and optical character recognition for driver licenses, vehicle RC, and identity verification</li>
      <li>Shared Modular Core Packages – Reusable internal packages for domain data models, shared UI kit, Firebase auth services, and standardized API client layers</li>
    </ul>
  </div>
</template>

<script setup>
// Component for RideFlow project detail view
</script>
