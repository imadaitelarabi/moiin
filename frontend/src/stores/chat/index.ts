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
    scoreReport:[] as ScoreReport[]
  }),
  actions: {
    async addAnswer(answer: string) {
      this.messages.push({ answer, question: '' });
      this.lastAnswer = answer
      const aiQuestion = await this.generateAIQuestion()
      console.log(aiQuestion)
      this.scoreReport.push(this.scoreAnswer(this.lastQuestion,this.lastAnswer))
      
      await this.addQuestion(this.currentIndex,aiQuestion.data.question,answer)
      this.currentIndex++;
      console.log(this.currentIndex)
    },
    async addQuestion(index: number, question: string,answer:string) {
      if (this.messages[index]) {
        this.messages[index].question = question;
      if (this.currentIndex === 6) {
       await this.generateReport(this.messages)
      }
      }
    },

    async generateReport(messages) {
        let summary = '';
        let nextSteps = '';
        const config = useRuntimeConfig();
        const body = {
          "message": "use generateScoreReport tool",
          "mode": "single",
          "infos": this.scoreReport
            
          }
        try {
          const response = await axios.post(`http://127.0.0.1:5000/generate`, body);
          return response.data;
        } catch (error) {
          console.error('There was an error!', error);
        }
        this.report.summary = summary
        this.report.nextSteps = nextSteps
        console.log(this.report)
        this.finished = true
    },

    async generateAIQuestion(age,gender) {
      const config = useRuntimeConfig();
      const body = {
        "message": "use generateQuestion tool",
        "mode": "single",
        "infos": {
          "firstFeeling": this.firstFelling,
          "lastQuestion": this.lastQuestion,
          "age":34,
          "nationality":'saudi',
          "gender":"male"
        }
      };
      try {
        const response = await axios.post(`http://127.0.0.1:5000/generate`, body);
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
          const response = await axios.post(`http://127.0.0.1:5000/generate`, body);
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
