from pygpt4all import GPT4All_J

model = GPT4All_J('/home/charley/.local/share/nomic.ai/GPT4All/ggml-gpt4all-j-v1.3-groovy.bin')

while True:
    try:
        print(f"User: ", end='')
        prompt = input()
        if prompt == '':
            continue
        print(f"Elöd AI:", end='')
        for token in model.generate(prompt):
            print(f"{token}", end='', flush=True)
        print()
    except KeyboardInterrupt:
        break
