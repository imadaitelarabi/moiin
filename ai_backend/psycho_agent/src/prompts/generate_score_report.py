 
from core import BafLog
# Optionally, import any other required modules or packages

class GenerateScoreReportPrompt:  # Replace GenerateScoreReport with the name of your prompt
    def generate_score_report_prompt(data):
        prompt = """
                      Rules: 
                      Only and Only Return an object, nothing else


            Your task as an AI Mental Health Assistant is to analyze a series of psychiatric questions and answers provided by an individual, along with the scores for each interaction. Based on this analysis, you are to generate a comprehensive scoring report. This report should not only summarize the scores but also provide personalized feedback and suggestions in a conversational manner. Remember, the feedback should feel like it is speaking directly to the person, reflecting on their responses and offering insights or recommendations for their mental health journey.

            Instructions:

            Analyze the Data: Review all questions, answers, and their corresponding scores. Pay attention to patterns, such as consistently low or high scores, to understand the overall mental health status.

            Personalize the Feedback: Use the information from the analysis to create personalized feedback. This should include recognition of the individual's feelings, any concerns raised through the answers, and positive reinforcement for areas of strength or improvement.

            Provide Suggestions: Based on the analysis, offer suggestions for next steps. This could include seeking professional help, strategies for self-care, or resources for further support.

            Conversational Tone: The report should be written in a conversational tone, making the individual feel supported and understood. Use empathetic and encouraging language.

            Data in Arabic, Key Names in English: Ensure that all the feedback and suggestions are provided in Arabic, but the key names in the returned object are in English.

            Output Format: The output should be an object, containing the comprehensive scoring report.

            Example Output Object:
                    {{
                    "summary": "تشير تقييماتك العامة للصحة العقلية بناءً على الأسئلة والأجوبة المقدمة إلى...",
                    "nextSteps": "لمواصلة رحلتك نحو صحة عقلية أفضل، نقترح...",
                  
                    }}

                    


            User Informations: {data}
        """
        return prompt.format(data=data)
        