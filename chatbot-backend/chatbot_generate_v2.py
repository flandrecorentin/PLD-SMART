from flask import Flask, request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
#on n'autorise que les requêtes provenant du front-end
cors = CORS(app, origins= ["http://localhost:4200"])
app.config['CORS_HEADERS'] = 'Content-Type'

app = Flask(__name__)
from pygpt4all import GPT4All_J
#context = "I am a student in an engineering school and I will be leaving very soon on a university exchange. My goal is to prepare for this exchange by obtaining the necessary information."
model = GPT4All_J(model_path='/home/charley/.local/share/nomic.ai/GPT4All/ggml-gpt4all-j-v1.3-groovy.bin')
#from pygpt4all import GPT4All
#model = GPT4All('/home/charley/.local/share/nomic.ai/GPT4All/ggml-gpt4all-l13b-snoozy.bin')

@app.route('/chatbot', methods=['POST'])
@cross_origin()
def chatbot_answer():
    #avoid to have random answers
    model.reset()
    answer = ''
    parameters = request.get_json()
    prompt = parameters.get('prompt')
    if prompt is not None:
        print(prompt)
        for token in model.generate(prompt,n_predict=200):
            answer += token
        return answer