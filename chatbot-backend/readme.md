# Guide chatbot
<img src="https://static.crozdesk.com/web_app_library/providers/logos/000/003/155/original/chatbots-builder-1510149769-logo.png?1510149769" alt="Image de chatbot" width="200"/>


## Prequisites
1. Avoir python d'installé
2. (Optionnel mais recommandé) Créer un environmment virtuel python avec venv ou conda. <br> **Avec venv** :
    Se placer dans votre répertoire contenant vos environments virtuels (home/.venv par exemple). Puis exécuter les commandes suivantes :
    ```
    python -m venv chatbot-env

    #Sur windows
    chatbot-env\Scripts\activate.bat
    #Sur Linux/Mac OS
    source chatbot-env/bin/activate
    ```
3. Installer les dépendances avec pip :
    ``` 
    pip install pygpt4all
    pip install -U Flask
    pip install -U flask-cors
    ```
4. Télécharger le modèle gpt4all-J (attention plusieurs Go) et le mettre dans le répertoire chatbot-backend. <br>
    Lien : [ggml-gpt4all-j-v1.3-groovy.bin](https://gpt4all.io/models/ggml-gpt4all-j-v1.3-groovy.bin)
## Lancement du serveur chatbot
5. Se placer dans le dossier chatbot-backend dans un terminal
6. Lancer le serveur python avec 
    <br>`flask --app chatbot_generate_v2 run`
7. Pour relancer le serveur, faire "ctrl+c" dans le terminal puis ré-executer la commande précédente

