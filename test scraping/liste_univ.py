
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
listepays = driver.find_elements(By.XPATH, '//div[@class ="university_stats"]/p[text() = "Pays"]/../../following-sibling::div/div/p')
listeAccord = driver.find_elements(By.XPATH, '//div[@class ="university_stats"]/p[text() = "Accord"]/../../following-sibling::div/div/p')
i =0

for nomuniversite in listenom:
    print("--------------------------")
    print(listepays[i].text)
    nomuniversite = nomuniversite.text
    #Normalisation des noms d'université
    idNom = nomuniversite.lower()
    idnom = idNom.replace(" ","-")
    idnom = unidecode.unidecode(idnom)
    print(nomuniversite)
    print(idnom)
    if idnom not in listeEtablissement : 
        etablissement = {}
        Accord = []
        Accord.append(listeAccord[i].text)
        etablissement["nom"]=nomuniversite
        etablissement["pays"]=listepays[i].text
        etablissement["accord"]=Accord
        listeEtablissement[idnom] = etablissement
    else:
        listeEtablissement[idnom]['accord'].append(listeAccord[i].text)
    i = i+1

    #a = driver.find_element(By.CLASS_NAME, "university_stats")

print(listeEtablissement)
with open('liste_univ_pays_accord.json', 'w') as mon_fichier:
    json.dump(listeEtablissement, mon_fichier)
driver.close()


