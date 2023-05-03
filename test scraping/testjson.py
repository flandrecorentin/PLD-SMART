import requests
from bs4 import BeautifulSoup 
import json

#importing required libraries
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.wait import WebDriverWait
#from selenium_move_cursor.MouseActions import move_to_element_chrome
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options



#import js
import json
import numpy as np
import time
import pandas as pd         #to save CSV file
from bs4 import BeautifulSoup
import ctypes         #to create text popup


etablissement = {}
listeEtablissement = {}
#1ere boucle
etablissement = {
        "nom": "Brandenburgische Technische Universität Cottbus-Senftenberg",
        "nomcourt": "",
        "url": "http://www.b-tu.de/",
        "cadre": ["Erasmus", "SMS (etudiante)"],
        "codeErasmus": "D COTTBUS03",
        "departements": ["Génie Civil et Urbanisme"],
        "nombrePlaceTotal": 4,
        "nombrePlaceDispo": 2,
        "fraisSemestre": 0,
        "fraisAnnee": 0,
        "niveauLangueRequis": "B1 Allemand ou Anglais",
        "debutS1": "",
        "finS1": "",
        "debutS2": "",
        "finS2": "",
        "gpa": 10,
        "procedureCandidature": "",
        "fichierInfos": "",
        "destination": {
            "continent": "Europe",
            "pays": "Allemagne",
            "ville": "Cottbus",
            "langueNat1": "Allemand",
            "langueNat2": "",
            "visaRequis": "oui",
            "lienVisa": "immigration.de/studentvisa",
            "climat": "tempere",
            "nombreHabitant": 98359,
            "nombreEtudiant": 6600
        }
    }
id = etablissement["nom"]
listeEtablissement[id] = etablissement

#2eme boucle
etablissement["nom"] = "test"
id = etablissement["nom"]
listeEtablissement[id] = etablissement




with open('data7.json', 'w') as mon_fichier:
    json.dump(listeEtablissement, mon_fichier)