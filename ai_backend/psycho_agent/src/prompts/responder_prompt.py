

class ResponderPrompt:
    def generate_final_response(data):
       prompt = """ 
               
                Prompt: {data}

           """
       return prompt.format(data=data)

    