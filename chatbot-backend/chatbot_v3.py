from flask import Flask, request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
#on autorise les requetes de n'importe quel origine
cors = CORS(app, origins= ['*'])
app.config['CORS_HEADERS'] = 'Content-Type'

app = Flask(__name__)
from gpt4all import GPT4All
gptMpt = GPT4All("ggml-mpt-7b-chat.bin")

@app.route('/chatbot', methods=['POST'])
@cross_origin()
def chatbot_answer():
    parameters = request.get_json()
    prompt = parameters.get('prompt')
    if prompt is not None:
        print(prompt)
        messages = [{"role": "user", "content": prompt}]
        answer = gptMpt.chat_completion(messages)
        #answer is in json format, just fetch the content
        content = answer['choices'][0]['message']['content']
        return content
    return "Prompt is empty"