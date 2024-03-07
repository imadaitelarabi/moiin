import { defineStore } from 'pinia';

interface Message {
  question: string;
  answer: string;
}

interface Report {
  nextSteps: string;
  summary: string;
}




export const useChatStore = defineStore({
  id: 'chat',
  state: () => ({
    messages: [] as Message[],
    report:{} as Report,
    finished:false,
    currentIndex:0
  }),
  actions: {
    addQuestion(question: string) {
      this.messages.push({ question, answer: '' });
      this.addAnswer(this.currentIndex,"This is My Answer")
      this.currentIndex++;
    },
    addAnswer(index: number, answer: string) {
      if (this.messages[index]) {
        this.messages[index].answer = answer;
      if (this.currentIndex === 6) {
       this.generateReport(this.messages)
      }
      }
    },

    generateReport(messages) {
        let summary = '';
        let nextSteps = '';
        messages.forEach((message: Message) => {
          summary += `Question: ${message.question}, Answer: ${message.answer}\n`;
          nextSteps += `Based on your answer to "${message.question}", we suggest the following steps: ...\n`;
        });
        this.report.summary = summary
        this.report.nextSteps = nextSteps
        console.log(this.report)
        this.finished = true
    },

    clearMessages() {
      this.messages = [];
    },
  },
});
