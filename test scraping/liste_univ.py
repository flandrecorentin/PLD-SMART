
from selenium import webdriver
from selenium import *
from selenium.webdriver.common.by import By
import time
import json
import unidecode
#import js

#initialisation page
DRIVER_PATH = 'chromedriver'
driver = webdriver.Chrome(executable_path=DRIVER_PATH)
url = 'https://insalyon.adv-pub.moveonfr.com/report-page-1653/'
driver.maximize_window() #maximize the window
driver.get(url)          #open the URL
driver.implicitly_wait(220) #maximum time to load the link

#initialisation donnes
etablissement = {}
listeEtablissement = {}
#JavascriptExecutor js = (JavascriptExecutor) driver
#js.executeScript("window.scrollBy(0,document.body.scrollHeight)", "")
for i in range (1,20) :
    time.sleep(2)
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight,)")

listenom = driver.find_elements(By.XPATH, '//div[@class="_univname"]')


for nomuniversite in listenom:
    
    nomuniversite = nomuniversite.text
    #Normalisation des noms d'université
    idNom = nomuniversite.lower()
    idnom = idNom.replace(" ","-")
    idnomfinale = unidecode.unidecode(idnom)
    print(nomuniversite)
    print(idnomfinale)
    if idnom not in listeEtablissement : 
        etablissement = {}
        etablissement["nom"]=nomuniversite
        listeEtablissement[idnomfinale] = etablissement
    

    #a = driver.find_element(By.CLASS_NAME, "university_stats")

with open('listeNom.json', 'w') as mon_fichier:
    json.dump(listeEtablissement, mon_fichier)
webdriver.close()



