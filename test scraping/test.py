from selenium import webdriver
from selenium import *
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json
import unidecode

#initialisation page
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)
DRIVER_PATH = 'chromedriver'
driver = webdriver.Chrome(executable_path=DRIVER_PATH, chrome_options=chrome_options)
url = 'https://insalyon.adv-pub.moveonfr.com/report-page-1653/'
driver.maximize_window() #maximize the window
driver.get(url)          #open the URL
driver.implicitly_wait(220) #maximum time to load the link

#initialisation donnees
etablissement = {}
listeEtablissement = {}

#Scroll down: Il faut laisser le temps au driver de charger la page avant d'ouvrir "plus de détails"
time.sleep(3)
#driver.execute_script("window.scrollTo(0, 1000,)")
time.sleep(3)
"""
for i in range (1,13) :
    time.sleep(2)
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight,)")
time.sleep(2)
"""
#plusInfos = driver.find_element(By.XPATH, '//span[@class="more_info_text float-right"]/a')
plusInfos = driver.find_element("link text", "Plus de détails")
#driver.execute_script("window.scrollTo(0, 50,)")
print(plusInfos.text)
time.sleep(3)
#element = wait.until(EC.element_to_be_clickable((By.XPATH, '//span[@class="more_info_text float-right"]/a')))
plusInfos.click()

"""
for nomuniversite in listenom:
    
    print(lien.text)
    lien.click()
    driver.find_element(By.CLASS_NAME, "_modal_univ_moreclose").click()
    
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
"""

print("coucou")
driver.find_element(By.CLASS_NAME, "irm_filter_btn")
print("coucou")

with open('listeNom.json', 'w') as mon_fichier:
    json.dump(listeEtablissement, mon_fichier)