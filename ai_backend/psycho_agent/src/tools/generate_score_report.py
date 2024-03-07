 
from core import BafLog
from prompts import GenerateScoreReportPrompt
from api import GenerateScoreReportAPI

# Optionally, import any other required modules or packages
# E.g., from api import YourAPI
# E.g., from prompts import YourPrompt

class GenerateScoreReport:
  def __init__(self):
     self.logger = BafLog

  def execute(self,task, data):
    # Process data here
    response = data['infos']

    prompt = GenerateScoreReportPrompt.generate_score_report_prompt(response)
    if data['mode'] == 'multiple':
        return response
    else:
        return prompt


        