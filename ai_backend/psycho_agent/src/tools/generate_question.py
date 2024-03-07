 
from core import BafLog
from prompts import GenerateQuestionPrompt
from api import GenerateQuestionAPI

# Optionally, import any other required modules or packages
# E.g., from api import YourAPI
# E.g., from prompts import YourPrompt

class GenerateQuestion:
  def __init__(self):
     self.logger = BafLog

  def execute(self,task, data):
    self.logger.info("Entered execute method in GenerateQuestion class")
    # Process data here
    response = data['infos']

    prompt = GenerateQuestionPrompt.generate_question_prompt(response)
    if data['mode'] == 'multiple':
        return response
    else:
        return prompt



        