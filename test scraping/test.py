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
driver.implicitly_wait(1) #maximum time to load the link
#initialisation donnees
etablissement = {}
listeEtablissement = {}

#Flitrer les accords IF
"""
btnRecherche1 = driver.find_element(By.XPATH, '//button[@class="irm_filter_btn float-right"]')
time.sleep(0.5)
btnRecherche1.click()
time.sleep(0.5)
btnEtabIntern = driver.find_element(By.XPATH, '//div[@class="displayinlineblock238 relation_internal_institution_ids_js"]')
btnEtabIntern.click()
time.sleep(0.5)
deptIF = driver.find_element(By.XPATH, '//div[@data-value="9"]')
time.sleep(0.5)
deptIF.click()
time.sleep(0.5)
btnRecherche2 = driver.find_element(By.XPATH, '//button[@class="irm_filter_btn m_rt"]')
btnRecherche2.click()
time.sleep(1)
"""


#Scrollig parfait pour ouvrir la première page "Plus d'infos"
try:
    try:
        while 1:
            afficherPlus = driver.find_element(By.LINK_TEXT, "Afficher plus")
            afficherPlus.location_once_scrolled_into_view
            time.sleep(1)
            driver.execute_script("window.scrollTo(0, window.scrollY - 200)")
            time.sleep(0.2)
            afficherPlus.click()

    except:


        listeplusInfo = driver.find_elements(By.LINK_TEXT, "Plus de détails")
        #nom_fichier = open('listedetaille.json', 'w') 

        for plusInfo in listeplusInfo :



            time.sleep(1)
            plusInfo.location_once_scrolled_into_view
            time.sleep(1)
            driver.execute_script("window.scrollTo(0, window.scrollY - 200)")
            


            #//p[@class="_title" and text() = "Accord"]/../../../div[2]/div/p
            time.sleep(1)
            #Ouverture de la page "Plus d'infos"
            plusInfo.click()
            time.sleep(1)

            try:
                nomuniversite = driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Etablissement externe"]/../../../div[2]/div/p').text
            except:
                nomuniversite = "universite"
            nomuniversite = unidecode.unidecode(nomuniversite)
            idNom = nomuniversite.lower()   
            idnom = idNom.replace(" ","-")
            idnom = unidecode.unidecode(idnom)
            

            if idnom not in listeEtablissement : 
                print("---------------------")
                print(idNom)

                etablissement = {}
                accords = []
                accord ={}
                

                #nom
                etablissement["nom"]=nomuniversite
                try:
                    pays = driver.find_element(By.XPATH, '//p[@class="_title" and text() = "PAYS (relation)"]/../../../div[2]/div/p')
                    print(pays.text)
                    etablissement["pays"]=unidecode.unidecode(pays.text)
                except:
                    etablissement["pays"]="N/A"

                #accord
                try: 
                    print("début recherche accord")  
                    nomaccord = driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Accord"]/../../../div[2]/div/p')
                    print("accord "+ nomaccord.text)
                    accord["nom"] =unidecode.unidecode(nomaccord.text)
                    
                except:
                    accord["nom"] = "N/A"

                #places
                try:
                    place = driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Places - Nombre et durée"]/../../../div[2]/div/p')
                    print(place.text)
                    accord["place"]=unidecode.unidecode(place.text)
                except:
                    accord["place"]="N/A"

                #Description
                try:
                    descr = driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Description"]/../../../div[2]/div/p')
                    print(descr.text)
                    accord["descr"]=unidecode.unidecode(descr.text)
                except:
                    accord["descr"]="N/A"

                #niveau de langue
                try:
                    niveauLV = driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Niveau de langues demandé"]/../../../div[2]/div/p')
                    print(niveauLV.text)
                    accord["niveauLV"]=unidecode.unidecode(niveauLV.text)
                except:
                    accord["niveauLV"]="N/A"

                #début s1
                try:
                    debuts1= driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Début S1"]/../../../div[2]/div/p')
                    debuts1.location_once_scrolled_into_view
                    print(debuts1.text)

                    etablissement["debuts1"]=unidecode.unidecode(debuts1.text)
                except:
                    etablissement["debuts1"]="N/A"
                    
                try:
                    fins1= driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Fin S1"]/../../../div[2]/div/p')
                    print(fins1.text)
                    time.sleep(0.5)
                    etablissement["Fins1"]=unidecode.unidecode(fins1.text)
                except:
                    etablissement["Fins1"]="N/A"

                try:
                    debuts2= driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Début S2"]/../../../div[2]/div/p')
                    print(debuts2.text)
                    etablissement["debuts2"]=unidecode.unidecode(debuts2.text)
                except:
                    etablissement["debuts2"]="N/A"

                try:
                    fins2= driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Fin S2"]/../../../div[2]/div/p')
                    print(fins2.text)
                    etablissement["finS2"]=unidecode.unidecode(fins2.text)
                except:
                    etablissement["finS2"]="N/A"

                #candidature
                try:
                    candidature= driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Mode de candidature"]/../../../div[2]/div/p')
                    print(candidature.text)
                    etablissement["candidature"]=unidecode.unidecode(candidature.text)
                except:
                    etablissement["candidature"]="N/A"
                    
                #etablissement["pays"]=unidecode.unidecode(pays.text)


                univBtn = driver.find_element(By.LINK_TEXT, "Etablissements")
                univBtn.click()
                time.sleep(0.5)

                try:
                    Ville= driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Ville"]/../../../div[2]/div/p')
                    print(Ville.text)
                    etablissement["ville"]=unidecode.unidecode(Ville.text)
                except:
                    etablissement["ville"]="N/A"

                try:
                    URL= driver.find_element(By.XPATH, '//p[@class="_title" and text() = "URL"]/../../../div[2]/div/p')
                    print(URL.text)
                    etablissement["URL"]=unidecode.unidecode(URL.text)
                except:
                    etablissement["URL"]="N/A"

                try:
                    Fichier= driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Fichier"]/../../../div[2]/div/p/a.get_attribute("href")')
                    print(Fichier.text)
                    etablissement["Fichier"]=unidecode.unidecode(Fichier.text)
                except:
                    etablissement["Fichier"]="N/A"


                listeEtablissement[idnom] = etablissement
                accords.append(accord)
                etablissement["accord"]=accords
                

            else:
                accords = []
                accord ={}

                
                try:   
                    nomaccord = driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Accord"]/../../../div[2]/div/p')
                    print(nomaccord.text)
                    accord["nom"] =unidecode.unidecode(nomaccord.text)
                    
                except:
                    print("")

                #places
                try:
                    place = driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Places - Nombre et durée"]/../../../div[2]/div/p')
                    print(place.text)
                    accord["place"]=unidecode.unidecode(place.text)
                except:
                    accord["place"]="N/A"


                #Description
                try:
                    descr = driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Description"]/../../../div[2]/div/p')
                    print(descr.text)
                    accord["descr"]=unidecode.unidecode(descr.text)
                except:
                    accord["descr"]="N/A"

                #niveau de langue
                try:
                    niveauLV = driver.find_element(By.XPATH, '//p[@class="_title" and text() = "Niveau de langues demandé"]/../../../div[2]/div/p')
                    print(niveauLV.text)
                    accord["niveauLV"]=unidecode.unidecode(niveauLV.text)
                except:
                    accord["niveauLV"]="N/A"


                listeEtablissement[idnom]['accord'].append(accord)
            

            #time.sleep(1)
            #Ouverture de l'onglet "etablissement"

            #TODO récup info général
            time.sleep(1)
            closeBtn = driver.find_element(By.XPATH, '//button[@class="_modal_univ_moreclose"]')
            closeBtn.click()
            #json.dump(listeEtablissement, nom_fichier)
        #Fermeture de la page "Plus d'infos"

        with open('listedetaillefinales.json', 'w') as mon_fichier:
            json.dump(listeEtablissement, mon_fichier)
except:
    with open('listedetaillefinales.json', 'w') as mon_fichier:
            json.dump(listeEtablissement, mon_fichier)