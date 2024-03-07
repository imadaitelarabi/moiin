

class ResponderPrompt:
    def generate_final_response(data):
       prompt = """ 
            {data}

           """
       return prompt.format(data=data)

    