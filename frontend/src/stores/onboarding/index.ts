import { defineStore } from 'pinia'

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

    createVisitor() {
      const visitor = {
        nationality: this.nationality,
        gender: this.gender,
        age: this.age,
      };

      if (process.client) {
        localStorage.setItem('visitor', JSON.stringify(visitor));
      }
      this.registered = true;
    },

    checkVisitor() {
      let visitor;
      if (process.client) {
        visitor = JSON.parse(localStorage.getItem('visitor'));
      }

      if (visitor) {
        this.registered = true;
        this.nationality = visitor.nationality;
        this.gender = visitor.gender;
        this.age = visitor.age;
      }
    }
  }
})
