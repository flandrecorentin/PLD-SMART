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

"""
#Scroll down: Il faut laisser le temps au driver de charger la page avant d'ouvrir "plus de détails"
time.sleep(2)
print(test.text)
driver.execute_script("arguments[0].scrollIntoView();",test)
test.click
driver.execute_script("window.scrollTo(0, 700,)")
"""

"""
test = driver.find_element(By.LINK_TEXT, "Plus de détails")
time.sleep(1)
print(test.text)
driver.execute_script("arguments[0].scrollIntoView();",test)
time.sleep(1)
test.click()
"""

"""
#Fonctionne bien pour scroller d'une université à l'autre.
test = driver.find_elements(By.LINK_TEXT, "Plus de détails")
for t in test :
    time.sleep(1)
    print(t.text)
    driver.execute_script("arguments[0].scrollIntoView();",t)
time.sleep(2)
"""

#Scrolling parfait pour ouvrir la première page "Plus d'infos"
plusInfo = driver.find_element(By.LINK_TEXT, "Plus de détails")
time.sleep(1)
plusInfo.location_once_scrolled_into_view
time.sleep(1)
driver.execute_script("window.scrollTo(0, window.scrollY - 200)")
time.sleep(1)
#Ouverture de la page "Plus d'infos"
plusInfo.click()
time.sleep(2)
#Ouverture de l'onglet "etablissement"
univBtn = driver.find_element(By.LINK_TEXT, "Etablissements")
univBtn.click()
time.sleep(2)
#Fermeture de la page "Plus d'infos"
closeBtn = driver.find_element(By.XPATH, '//button[@class="_modal_univ_moreclose"]')
closeBtn.click()


"""
wait = WebDriverWait(driver, 10)
element = wait.until(EC.element_to_be_clickable((By.LINK_TEXT, "Plus de détails")))
print(element.text)
element.click()
"""
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