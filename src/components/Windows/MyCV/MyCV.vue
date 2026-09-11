<script setup>
import { ref, computed } from 'vue'
import { useLocaleStore } from '@/stores/localeStore'
import ProfileHeader from './ProfileHeader.vue'
import EducationItem from './EducationItem.vue'
import cvData from '@/data/cv-data.json'
import WorkExperienceItem from './WorkExperienceItem.vue'

const localeStore = useLocaleStore()
const birthdate = new Date(2005, 1, 16) // January 16, 2005
const today = new Date()
let age = ref(today.getFullYear() - birthdate.getFullYear())

// Adjust age if the current date has not passed the birthdate in the current year
if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
  age.value--
}

const currentLocale = computed(() => localeStore.currentLocale)

// Computed property to get the localized education data
const educationData = computed(() => {
  return cvData[currentLocale.value]?.education || []
})

// Computed property to get the localized work experience data
const experienceData = computed(() => {
  return cvData[currentLocale.value]?.workExperience || []
})

// Computed property to get the localized skills data
const skillsData = computed(() => {
  return cvData[currentLocale.value]?.skills || null
})
</script>

<template>
  <div class="relative right-0 h-content-window overflow-hidden">
    <div class="w-full h-full bg-white overflow-auto p-2">
      <div>
        <ProfileHeader :age="age" />
        <section class="mt-5">
          <h2 class="font-trebuchet-pixel underline">{{ $t('windows.cv.education') }}</h2>
          <EducationItem v-for="education in educationData" :key="education.id" :education="education" />
        </section>

        <section v-if="skillsData" class="mt-5">
          <h2 class="font-trebuchet-pixel underline">{{ $t('windows.cv.skills') }}</h2>
          <div class="mt-2 flex flex-col gap-4 font-trebuchet-pixel text-xs">
            <div v-if="skillsData.domains && skillsData.domains.length">
              <h4 class="font-trebuchet-pixel uppercase text-xs text-black mb-1">Domains</h4>
              <p
                v-for="domain in skillsData.domains"
                :key="domain"
                class="font-trebuchet-pixel font-medium text-xs text-gray-800 leading-relaxed"
              >
                {{ domain }}
              </p>
            </div>

            <div v-if="skillsData.frameworks && skillsData.frameworks.length">
              <h4 class="font-trebuchet-pixel uppercase text-xs text-black mb-1">Frameworks</h4>
              <p
                v-for="framework in skillsData.frameworks"
                :key="framework"
                class="font-trebuchet-pixel font-medium text-xs text-gray-800 leading-relaxed"
              >
                {{ framework }}
              </p>
            </div>

            <div v-if="skillsData.programmingLanguages && skillsData.programmingLanguages.length">
              <h4 class="font-trebuchet-pixel uppercase text-xs text-black mb-1">Programming Languages</h4>
              <p
                v-for="lang in skillsData.programmingLanguages"
                :key="lang"
                class="font-trebuchet-pixel font-medium text-xs text-gray-800 leading-relaxed"
              >
                {{ lang }}
              </p>
            </div>
          </div>
        </section>

        <div v-if="experienceData && experienceData.length" class="mt-5">
          <h2 class="font-trebuchet-pixel underline">{{ $t('windows.cv.proExperience') }}</h2>
          <WorkExperienceItem v-for="(workExperience, index) in experienceData" :key="index" :workExperience="workExperience" />
        </div>
      </div>
    </div>
  </div>
  <a
    rel="noopener"
    :href="'pdf/CV_sridhar_kumaresan_' + localeStore.currentLocale + '.pdf'"
    :download="'CV_sridhar_kumaresan_' + localeStore.currentLocale + '.pdf'"
    class="absolute bottom-2 right-1 md:right-4 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked"
  >
    {{ $t('buttons.downloadCV') }}
  </a>
</template>
