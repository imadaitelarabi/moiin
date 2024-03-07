import { defineStore } from 'pinia';
import axios from 'axios'

interface Message {
  question: string;
  answer: string;
}

interface Report {
  nextSteps: string;
  summary: string;
}

interface ScoreReport {
    question: string;
    answer: string;
    score: number;
}

export const useChatStore = defineStore({
  id: 'chat',
  state: () => ({
    messages: [] as Message[],
    report:{} as Report,
    finished:false,
    currentIndex:0,
    firstFelling:"",
    lastAnswer:"",
    lastQuestion:"",
    firstQuestion:"بماذا تشعر؟",
    scoreReport:[] as ScoreReport[],
    loading: false,
    typing: false,
    error: null
  }),
  actions: {
    async addAnswer(answer: string,age:string,gender:string) {
      this.error = null;
      try {
        this.messages.push({ answer, question: '' });
        this.lastAnswer = answer
        this.typing = true;
        const aiQuestion = await this.generateAIQuestion(age,gender)
        console.log(aiQuestion)
        this.scoreReport.push(this.scoreAnswer(this.lastQuestion,this.lastAnswer))
        
        await this.addQuestion(this.currentIndex,aiQuestion.data.question,answer)
        this.currentIndex++;
        console.log(this.currentIndex)
      } catch (error) {
        this.error = error;
      } finally {
        this.typing = false;
      }
    },
    async addQuestion(index: number, question: string,answer:string) {
      if (this.messages[index]) {
        this.messages[index].question = question;
      if (this.currentIndex >= 6) {
       this.loading = true;
       await this.generateReport(this.messages)
       this.loading = false;
      }
      }
    },

    async generateReport(messages: Message[]) {
        let summary = '';
        let nextSteps = '';
        const config = useRuntimeConfig();
        const body = {
          "message": "use generateScoreReport tool",
          "mode": "single",
          "infos": this.scoreReport,
          messages
        }
        try {
          const response = await axios.post(`${config.public.aiUrl}/generate`, body);
          this.report.summary = response.data.summary;
          this.report.nextSteps = response.data.nextSteps;
          console.log(response);
          this.finished = true;
        } catch (error) {
          console.error('There was an error!', error);
          this.error = error;
        }
    },
    async generateAIQuestion(age,gender) {
      const config = useRuntimeConfig();
      const body = {
        "message": "use generateQuestion tool",
        "mode": "single",
        "infos": {
          "firstFeeling": this.firstFelling,
          "lastAnswer": this.lastAnswer,
          "age":34,
          "nationality":'saudi',
          "gender":"male"
        }
      };
      try {
        const response = await axios.post(`${config.public.aiUrl}/generate`, body);
        return response.data;
      } catch (error) {
        console.error('There was an error!', error);
      }
    },

    async scoreAnswer(question,answer) {
        const config = useRuntimeConfig();
        const body = {
          "message": "use scoreAnswer tool",
          "mode": "single",
          "infos": {
            "question": question,
            "answer": answer
          }
        };
        try {
          const response = await axios.post(`${config.public.aiUrl}/generate`, body);
          console.log(this.scoreReport)
          return response.data;
        } catch (error) {
          console.error('There was an error!', error);
        }
      },
    async clearMessages() {
      this.messages = [];
    },
  },
});
