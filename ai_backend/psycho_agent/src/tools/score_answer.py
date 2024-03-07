 
from core import BafLog
from prompts import ScoreAnswerPrompt
from api import ScoreAnswerAPI

# Optionally, import any other required modules or packages
# E.g., from api import YourAPI
# E.g., from prompts import YourPrompt

class ScoreAnswer:
  def __init__(self):
     self.logger = BafLog

  def execute(self,task, data):
    # Process data here
    response = data['infos']
    
    prompt = ScoreAnswerPrompt.score_answer_prompt(response)
    if data['mode'] == 'multiple':
        return response
    else:
        return prompt

        