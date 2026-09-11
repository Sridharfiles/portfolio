import { createRouter, createWebHistory } from 'vue-router'
import Loader from '../views/Loader.vue'
import Office from '../views/Office.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Loader,
      meta: {
        title: 'Portfolio | Sridhar Kumaresan - Web Developer',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://sridharkumaresan.me'
          },
          {
            name: 'title',
            content: 'Portfolio | Sridhar Kumaresan - Web Developer'
          },
          {
            name: 'description',
            content:
              'Discover the portfolio of Sridhar Kumaresan, passionate full stack web developer. Creation of web and mobile applications with JS, PHP, SQL and frameworks, as well as DevOps.'
          },
          {
            name: 'keywords',
            content: 'portfolio, sridhar kumaresan, web developer, full stack, websites, web applications, mobile applications, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Sridhar Kumaresan'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Portfolio | Sridhar Kumaresan - Web Developer'
          },
          {
            name: 'application-name',
            content: 'Portfolio | Sridhar Kumaresan - Web Developer'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Portfolio | Sridhar Kumaresan - Web Developer'
          },
          {
            name: 'twitter:description',
            content:
              'Discover the portfolio of Sridhar Kumaresan, passionate full stack web developer. Creation of web and mobile applications with JS, PHP, SQL and frameworks, as well as DevOps.'
          },
          {
            name: 'twitter:image',
            content: 'https://sridharkumaresan.me/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Sridhar Kumaresan'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: 'Portfolio | Sridhar Kumaresan - Web Developer'
          },
          {
            property: 'og:description',
            content:
              'Discover the portfolio of Sridhar Kumaresan, passionate full stack web developer. Creation of web and mobile applications with JS, PHP, SQL and frameworks, as well as DevOps.'
          },
          {
            property: 'og:site_name',
            content: 'Portfolio | Sridhar Kumaresan - Web Developer'
          },
          {
            property: 'og:url',
            content: 'https://sridharkumaresan.me'
          },
          {
            property: 'og:image',
            content: 'https://sridharkumaresan.me/img/logo-portfolio-black.webp'
          },
          {
            property: 'og:image:alt',
            content: 'Logo Portfolio Sridhar Kumaresan'
          },
          {
            property: 'og:locale',
            content: 'en_US'
          }
        ]
      }
    },
    {
      path: '/office',
      name: 'Office',
      component: Office,
      meta: {
        title: 'Office | Sridhar Kumaresan - Web Developer',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://sridharkumaresan.me/office'
          },
          {
            name: 'title',
            content: 'Office | Sridhar Kumaresan - Web Developer'
          },
          {
            name: 'description',
            content:
              'Discover the office of Sridhar Kumaresan, passionate full stack web developer. Creation of web and mobile applications with JS, PHP, SQL and frameworks, as well as DevOps.'
          },
          {
            name: 'keywords',
            content: 'office, sridhar kumaresan, web developer, full stack, websites, web applications, mobile applications, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Sridhar Kumaresan'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Office | Sridhar Kumaresan - Web Developer'
          },
          {
            name: 'application-name',
            content: 'Office | Sridhar Kumaresan - Web Developer'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Office | Sridhar Kumaresan - Web Developer'
          },
          {
            name: 'twitter:description',
            content:
              'Discover the office of Sridhar Kumaresan, passionate full stack web developer. Creation of web and mobile applications with JS, PHP, SQL and frameworks, as well as DevOps.'
          },
          {
            name: 'twitter:image',
            content: 'https://sridharkumaresan.me/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Sridhar Kumaresan'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: 'Office | Sridhar Kumaresan - Web Developer'
          },
          {
            property: 'og:description',
            content:
              'Discover the office of Sridhar Kumaresan, passionate full stack web developer. Creation of web and mobile applications with JS, PHP, SQL and frameworks, as well as DevOps.'
          },
          {
            property: 'og:site_name',
            content: 'Office | Sridhar Kumaresan - Web Developer'
          },
          {
            property: 'og:url',
            content: 'https://sridharkumaresan.me/office'
          },
          {
            property: 'og:image',
            content: 'https://sridharkumaresan.me/img/logo-portfolio-black.webp'
          },
          {
            property: 'og:image:alt',
            content: 'Logo Portfolio Sridhar Kumaresan'
          },
          {
            property: 'og:locale',
            content: 'en_US'
          }
        ]
      }
    }
  ]
})

export default router
