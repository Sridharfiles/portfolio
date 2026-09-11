<template>
  <div class="relative right-0 h-content-window flex">
    <WindowLeftMenu :leftMenuType="props.leftMenuType" />
    
    <!-- Content of service detail -->
    <div v-if="goBackStore.currentActiveService" class="w-full h-full bg-white overflow-auto overflow-x-hidden pb-8 md:pb-5">
      <div class="m-4">
        <div class="w-full gap-4 mb-4">
          <!-- Top row: Windows XP Currency Toolbar aligned to the right -->
          <div class="flex justify-end mb-2">
            <div class="flex items-center flex-nowrap whitespace-nowrap bg-[#ece9d8] px-2 py-1 rounded-[3px] border border-[#919b9c] shadow-[inset_1px_1px_0_#ffffff] gap-1.5">
              <span class="text-xs font-tahoma font-bold text-[#0c3276] mr-0.5">Currency:</span>
              
              <!-- USD Button First (Default) -->
              <button
                type="button"
                id="currency-btn-usd"
                @click="currencyStore.setCurrency('USD')"
                :class="currencyStore.currentCurrency === 'USD'
                  ? 'bg-gradient-to-b from-[#3d95f6] via-[#216cd2] to-[#1258b3] text-white font-bold border-[#003c74] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),1px_1px_1px_rgba(0,0,0,0.15)]'
                  : 'bg-gradient-to-b from-[#ffffff] via-[#ece9d8] to-[#d4d0c8] text-black font-medium border-[#7f9db9] hover:border-[#003c74] hover:from-[#f5f9ff] hover:to-[#dceafd] shadow-[inset_1px_1px_0_#ffffff]'"
                class="px-2.5 py-0.5 text-xs font-tahoma border rounded-[2px] transition-none flex items-center gap-1 cursor-pointer select-none active:translate-y-[1px]"
                title="USD ($) - US Dollar (Default)"
              >
                <span class="text-xxs font-bold opacity-90">US</span>
                <span>USD ($)</span>
              </button>

              <!-- INR Button Second -->
              <button
                type="button"
                id="currency-btn-inr"
                @click="currencyStore.setCurrency('INR')"
                :class="currencyStore.currentCurrency === 'INR'
                  ? 'bg-gradient-to-b from-[#3d95f6] via-[#216cd2] to-[#1258b3] text-white font-bold border-[#003c74] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),1px_1px_1px_rgba(0,0,0,0.15)]'
                  : 'bg-gradient-to-b from-[#ffffff] via-[#ece9d8] to-[#d4d0c8] text-black font-medium border-[#7f9db9] hover:border-[#003c74] hover:from-[#f5f9ff] hover:to-[#dceafd] shadow-[inset_1px_1px_0_#ffffff]'"
                class="px-2.5 py-0.5 text-xs font-tahoma border rounded-[2px] transition-none flex items-center gap-1 cursor-pointer select-none active:translate-y-[1px]"
                title="INR (₹) - Indian Rupee"
              >
                <span class="text-xxs font-bold opacity-90">IN</span>
                <span>INR (₹)</span>
              </button>
            </div>
          </div>

          <!-- Separate dedicated line for the service icon and full title -->
          <div class="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
            <img :src="'/img/icons/' + goBackStore.currentActiveService.icon" alt="service icon" class="w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
            <h2 class="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">{{ getLocalizedServiceName(goBackStore.currentActiveService) }}</h2>
          </div>
          
          <!-- Tiered Plans View (for services with plans like Mobile Application) -->
          <div v-if="goBackStore.currentActiveService.plans" class="mb-5">
            <!-- Windows XP Property Sheet Tabs -->
            <div class="flex items-end gap-1 px-2 pt-2 border-b border-[#919b9c] bg-[#ece9d8] rounded-t-[3px]">
              <span class="text-xs font-tahoma font-bold text-[#0c3276] mb-1.5 mr-2 hidden sm:inline-block">Choose Package:</span>
              <button
                v-for="plan in goBackStore.currentActiveService.plans"
                :key="plan.id"
                type="button"
                @click="selectedPlanId = plan.id"
                :class="selectedPlan?.id === plan.id
                  ? 'bg-white text-black font-bold border-t-[3px] border-t-[#ff8400] border-l border-r border-[#919b9c] -mb-[1px] pt-1.5 pb-2 px-4 rounded-t-[3px] z-10 shadow-[inset_0_1px_0_#ffffff]'
                  : 'bg-gradient-to-b from-[#ffffff] via-[#ece9d8] to-[#d8d4c0] text-[#333333] hover:text-black font-medium border border-b-0 border-[#919b9c] mb-0 py-1.5 px-3.5 rounded-t-[3px] shadow-[inset_0_1px_0_#ffffff] hover:bg-[#f6f4eb]'"
                class="text-xs font-tahoma transition-none flex items-center gap-1 cursor-pointer select-none"
              >
                <span>{{ plan.name }}</span>
              </button>
            </div>

            <!-- Active Plan Content Card -->
            <div v-if="selectedPlan" class="p-4 bg-white border-x border-b border-[#919b9c] rounded-b-[3px] shadow-[inset_0_1px_0_#ffffff]">
              <!-- Title & Dynamic Price -->
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2 pb-2 border-b border-[#ece9d8]">
                <div>
                  <h3 class="text-lg md:text-xl font-bold font-tahoma text-gray-900">{{ selectedPlan.title?.en || selectedPlan.name }}</h3>
                </div>
                <div class="flex items-baseline gap-1.5">
                  <span class="text-2xl md:text-3xl font-extrabold font-tahoma text-[#0c3276]">
                    {{ formatPlanPrice(selectedPlan) }}
                  </span>
                  <span class="text-xxs font-tahoma font-semibold px-1.5 py-0.5 rounded-[2px] bg-[#eef3fb] text-[#0c3276] border border-[#7f9db9]">
                    {{ currencyStore.currentCurrency }}
                  </span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-xs md:text-sm font-tahoma text-gray-700 mb-4 leading-relaxed">
                {{ selectedPlan.description?.en }}
              </p>

              <!-- What's Included Deliverables Checklist -->
              <div class="mt-4">
                <h4 class="text-xs md:text-sm font-bold font-tahoma text-[#0c3276] mb-3 flex items-center gap-2">
                  <span>What's Included</span>
                  <div class="h-px bg-[#d4d0c8] flex-1"></div>
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div
                    v-for="(item, idx) in selectedPlan.deliverables"
                    :key="idx"
                    class="flex items-center gap-2.5 text-xs font-tahoma py-1"
                    :class="item.included ? 'text-gray-800 font-medium' : 'text-gray-400'"
                  >
                    <svg v-if="item.included" class="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <svg v-else class="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span :class="{ 'line-through opacity-60': !item.included }">{{ item.name }}</span>
                  </div>
                </div>
              </div>

              <!-- Windows XP Style Action Button -->
              <div class="mt-5 pt-3 border-t border-[#d4d0c8]">
                <button
                  @click="openContactWindow"
                  class="px-6 py-1.5 bg-gradient-to-b from-[#3d95f6] via-[#216cd2] to-[#1258b3] hover:from-[#5ba7ff] hover:via-[#2b7ae2] hover:to-[#1762c2] active:from-[#165bb8] active:to-[#0e4896] text-white font-tahoma font-bold text-xs md:text-sm border border-[#003c74] rounded-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.25),1px_1px_2px_rgba(0,0,0,0.2)] flex items-center justify-center gap-2 cursor-pointer transition-none active:translate-y-[1px]"
                >
                  <span>Select {{ selectedPlan.name }} Plan</span>
                  <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Default Service View (for services without tiered plans) -->
          <template v-else>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p class="text-xs md:text-sm text-gray-700">
                {{ goBackStore.currentActiveService.description[localeStore.currentLocale] || goBackStore.currentActiveService.description['en'] }}
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="bg-gray-50 p-4 rounded border border-gray-100">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-sm font-semibold text-gray-600">{{ $t('windows.services.price') }}</h3>
                  <span class="text-xxs font-semibold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">
                    {{ currencyStore.currentCurrency }}
                  </span>
                </div>
                <p class="text-2xl font-bold text-blue-600">
                  {{ formatServicePrice(goBackStore.currentActiveService.price) }}
                </p>
                <p class="text-xxs text-gray-500 mt-1">
                  {{ $t('windows.services.approx') }} {{ formatServicePrice(goBackStore.currentActiveService.price, currencyStore.currentCurrency === 'INR' ? 'USD' : 'INR') }}
                </p>
              </div>
              
              <div class="bg-gray-50 p-4 rounded border border-gray-100">
                <h3 class="text-sm font-semibold text-gray-600 mb-2">{{ $t('windows.services.duration') }}</h3>
                <p class="text-lg font-semibold text-gray-800">
                  {{ goBackStore.currentActiveService.duration[localeStore.currentLocale] || goBackStore.currentActiveService.duration['en'] }}
                </p>
              </div>
            </div>

            <div v-if="goBackStore.currentActiveService.features" class="mb-4">
              <h3 class="text-lg font-semibold mb-3">{{ $t('windows.services.features') }}</h3>
              <ul class="list-disc list-inside space-y-2">
                <li v-for="(feature, index) in (goBackStore.currentActiveService.features[localeStore.currentLocale] || goBackStore.currentActiveService.features['en'])" :key="index" class="text-xs md:text-sm text-gray-700">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </template>

          <!-- Contact section -->
          <div class="mt-6 border-t-2 border-gray-200 pt-4">
            <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
              <h3 class="text-base font-semibold mb-3 text-blue-900">
                {{ $t('windows.services.interested') }}
              </h3>
              <p class="text-xs md:text-sm text-gray-700 mb-3">
                {{ $t('windows.services.contactMessage') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-3">
                <a :href="`mailto:${emailAddress}`" class="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span class="text-xs font-medium">{{ emailAddress }}</span>
                </a>
                <button @click="openContactWindow" class="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-4 py-2 rounded transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span class="text-xs font-medium">{{ $t('windows.services.contactForm') }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Content window for categories and services -->
    <div v-else class="flex flex-col w-full h-full bg-white overflow-auto pt-0.5">
        <div v-for="category in categories" :key="category.name" class="relative group mb-3">
          <h1 class="text-xs font-semibold px-3">{{ getLocalizedCategoryName(category) }}</h1>
          <div class="absolute left-[-12px] top-5 w-80 h-px bg-gradient-to-r from-blue-300 to-white"></div>

          <!-- Content for the services -->
          <div class="flex flex-wrap gap-2 pt-2 md:pt-3 pb-3 w-full">
            <div
              v-for="service in category.services"
              :key="service.name"
              @click="focusService(service)"
              @dblclick="toggleService(service)"
              class="flex items-center px-4 pb-2 gap-2.5 cursor-pointer service-card"
              :class="{ active: service.isFocus }"
            >
              <img :src="'/img/icons/' + service.icon" alt="service" class="w-10 h-10" :style="{ opacity: service.isFocus ? 0.5 : 1 }" />
              <p
                class="text-xs font-tahoma font-medium"
                :style="{
                  backgroundColor: service.isFocus ? '#0B61FF' : 'transparent',
                  color: service.isFocus ? 'white' : 'black'
                }"
              >
                {{ getLocalizedServiceName(service) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onUnmounted, inject } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'
import { useGoBackStore } from '@/stores/goBackStore'
import { useCurrencyStore } from '@/stores/currencyStore'
import servicesData from '@/data/services-data.json'
import WindowLeftMenu from '@/components/Windows/WindowLeftMenu.vue'

const props = defineProps({
  leftMenuType: String
})

const emailAddress = import.meta.env.VITE_APP_ADMIN_EMAIL_ADDRESS || 'default@example.com';

// Locale & Currency management
const localeStore = useLocaleStore()
const goBackStore = useGoBackStore()
const currencyStore = useCurrencyStore()

const selectedPlanId = ref('basic')

const selectedPlan = computed(() => {
  if (!goBackStore.currentActiveService?.plans) return null
  return (
    goBackStore.currentActiveService.plans.find((p) => p.id === selectedPlanId.value) ||
    goBackStore.currentActiveService.plans[0]
  )
})

const formatServicePrice = (price, currency) => {
  return currencyStore.formatPrice(price, currency)
}

const formatPlanPrice = (plan) => {
  return currencyStore.formatPlanPrice(plan)
}

// Inject the openWindow and minimizeWindow functions from parent
const openWindow = inject('openWindow')
const minimizeWindow = inject('minimizeWindow')

onUnmounted(() => {
  goBackStore.currentActiveService = null
})

const categories = ref(
  servicesData.categories.map((category) => ({
    ...category,
    services: category.services.map((service) => ({ ...service, isFocus: false, isActive: false }))
  }))
)

const state = reactive({
  selectedService: null
})

const focusService = (service) => {
  if (service.isFocus) {
    return
  }

  service.isFocus = !service.isFocus

  categories.value.forEach((category) => {
    category.services.forEach((s) => {
      if (s.name !== service.name) {
        s.isFocus = false
      }
    })
  })
  state.selectedService = service
}

const toggleService = (service) => {
  // Before opening a service, close all others
  closeAllServices()

  // Then open the selected service
  service.isActive = true
  state.selectedService = service
  
  // Make sure the service is focused first
  focusService(service)
  
  goBackStore.currentActiveService = service
}

const closeAllServices = () => {
  categories.value.forEach((category) => {
    category.services.forEach((service) => {
      service.isActive = false
    })
  })
}

const getLocalizedCategoryName = (category) => {
  return category.name[localeStore.currentLocale] || category.name['en']
}

const getLocalizedServiceName = (service) => {
  return service.name[localeStore.currentLocale] || service.name['en']
}

const openContactWindow = () => {
  if (openWindow) {
    openWindow('contact')
  }
}


// Watch for changes in currentActiveService
watch(
  () => goBackStore.currentActiveService,
  (newService) => {
    selectedPlanId.value = 'basic'
    if (!newService) {
      closeAllServices()
    }
  },
  { immediate: true }
)

// Unfocus the service when the user clicks outside the service card
globalThis.addEventListener('click', (e) => {
  if (!e.target.closest('.service-card') && state.selectedService) {
    state.selectedService.isFocus = false
    state.selectedService = null
  }
})
</script>
