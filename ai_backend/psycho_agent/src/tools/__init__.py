from .google.search import GoogleSearch
from .score_answer import ScoreAnswer
from .generate_question import GenerateQuestion
from .generate_score_report import GenerateScoreReport



# Define your commands  here
command_mapping = {        
    "googleSearch": GoogleSearch,
    "scoreAnswer": ScoreAnswer,
    "generateQuestion": GenerateQuestion,
    "generateScoreReport": GenerateScoreReport,
        }