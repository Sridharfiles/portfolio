import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    // Default currency is USD as requested
    currentCurrency: localStorage.getItem('preferredCurrency') || 'USD',
    // Conversion rate: 1 USD = 85 INR
    exchangeRateUsdToInr: 85
  }),
  actions: {
    setCurrency(currency) {
      if (currency === 'INR' || currency === 'USD') {
        this.currentCurrency = currency
        localStorage.setItem('preferredCurrency', currency)
      }
    },
    toggleCurrency() {
      const next = this.currentCurrency === 'INR' ? 'USD' : 'INR'
      this.setCurrency(next)
    },
    formatPrice(priceStr, currency = this.currentCurrency) {
      if (!priceStr) return ''

      // Parse range e.g. "3500-7000" or single value "3500"
      const parts = String(priceStr).split('-').map((s) => s.trim())
      
      const formatNumber = (val, curr) => {
        const num = parseFloat(val)
        if (isNaN(num)) return val

        if (curr === 'INR') {
          // If base price is USD, convert to INR
          const inrVal = Math.round(num * this.exchangeRateUsdToInr)
          return '₹' + inrVal.toLocaleString('en-IN')
        } else {
          // USD formatting
          const usdVal = Math.round(num)
          return '$' + usdVal.toLocaleString('en-US')
        }
      }

      if (parts.length === 2) {
        return `${formatNumber(parts[0], currency)} - ${formatNumber(parts[1], currency)}`
      } else {
        return formatNumber(parts[0], currency)
      }
    },
    formatPlanPrice(plan, currency = this.currentCurrency) {
      if (!plan) return ''
      if (currency === 'INR') {
        return '₹' + (plan.price_inr || this.formatPrice(plan.price, 'INR'))
      } else {
        return '$' + (plan.price_usd || this.formatPrice(plan.price, 'USD'))
      }
    }
  }
})
