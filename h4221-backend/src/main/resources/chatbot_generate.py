import sys
from pygpt4all import GPT4All_J
model = GPT4All_J(model_path='/home/charley/.local/share/nomic.ai/GPT4All/ggml-gpt4all-j-v1.3-groovy.bin')
"""
from pygpt4all import GPT4All
model = GPT4All('/home/charley/.local/share/nomic.ai/GPT4All/ggml-gpt4all-l13b-snoozy.bin')
"""

prompt = sys.argv[1]
print('\nBegin\n')
for token in model.generate(prompt):
    print(token, end='', flush=True)
print('\nEnd\n')