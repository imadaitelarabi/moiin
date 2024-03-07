from llms import LLM
from tools import command_mapping
from prompts import MasterPrompts




def decide_command(task,data):
    commands = list(command_mapping.keys())
    prompt = MasterPrompts.decide_command_prompt(commands)
    llm_response = LLM.llm.process(task,prompt,data)
    command = llm_response
    return command

    

