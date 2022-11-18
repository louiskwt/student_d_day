# TODO
# 1. set up scrapy
# 2. scrape DSE date
# 3. save it in a json file or sqlite
# 
import requests
from bs4 import BeautifulSoup

# Making get request
r = requests.get("https://www.hkeaa.edu.hk/en/hkdse/event_timetable/")

soup = BeautifulSoup(r.content, 'html.parser')

section = soup.find('div', {
    "id": "main_content"
})
rows = section.find_all('tr')

for row in rows:
    print(row.text)
