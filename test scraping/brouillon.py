"""import requests
from bs4 import BeautifulSoup 
import json

#importing required libraries
from selenium.webdriver.chrome.service import Service
from selenium import webdriver

service = Service(executable_path="C:/Users/berna/OneDrive/Documents/travail/SMART/test scraping/chromedriver")
driver = webdriver.Chrome(service)"""
"""from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By"""

#listenom = driver.find_elements(By.XPATH, '//div[@class="_univname"]')
#driver.find_element(By.CLASS_NAME, "more_info_text").click()
#driver.find_element(By.link, "Plus de détails").click()
#driver.find_element_by_link_text("Plus de détails").click()

"""
from selenium import webdriver
from selenium.webdriver.common.by im
port By
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
import numpy as np
import time
import pandas as pd         #to save CSV file
from bs4 import BeautifulSoup
import ctypes         #to create text popup

#importing required libraries


#defining browser and adding the “ — headless” argument
opts = Options()
opts.add_argument(' — headless')
driver = webdriver.Chrome('chromedriver')

#driver = webdriver.Chrome('chromedriver', options=opts)

url = 'https://www.doordash.com/en-US'
driver.maximize_window() #maximize the window
driver.get(url)          #open the URL
driver.implicitly_wait(220) #maximum time to load the link

driver.execute_script("window.scrollTo(0, document.body.scrollHeight,)")


time.sleep(5)
element = driver.find_element_by_xpath('//h2[text()=”Top Cuisines Near You”]’).find_element_by_xpath(‘//a[@class=”sc-hrWEMg fFHnHa”]')
time.sleep(5)
element.click()
driver.implicitly_wait(220)
"""
"""
case
fichier = open("data7.html", "a")
URL = "https://insalyon.adv-pub.moveonfr.com/report-page-1653/"
page = requests.get(URL)

etab = BeautifulSoup.find('div', attrs={'class' :media-body})

fichier.write(etab.text)
fichier.close()
soup = BeautifulSoup(page.content, "html.parser")
"""