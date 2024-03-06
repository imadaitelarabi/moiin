import { defineStore } from 'pinia'
import axios from 'axios'

export const useOnboardingStore = defineStore({
  id: 'onboarding',
  state: () => ({
    registered: false,
    showNationality: false,
    showGender: true,
    showAge: false,
    showSuccess: false,
    age:"",
    gender:"",
    nationality:"saudi"
  }),
  actions: {
    registerUser() {
      this.createVisitor()
    },
    next() {
      if (this.showNationality) {
        this.showNationality = false;
        this.showGender = true;
      } else if (this.showGender) {
        this.showGender = false;
        this.showAge = true;
      } else if (this.showAge) {
        this.showAge = false;
        this.showSuccess = true;
      }
    },

  async createVisitor() {
    const config = useRuntimeConfig()
    try {
      const response = await axios.post(config.public.apiUrl + '/api/visitor/create', {
        nationality: this.nationality,
        gender: this.gender,
        age: this.age,
      });

      if (response.status !== 200) {
        console.log(response)
      }

      const data = response.data;
      this.registered = true;
      return data;
    } catch (error) {
      console.error('There was an error!', error);
    }
  }


  }
})
