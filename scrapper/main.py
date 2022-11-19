# TODO
# 1. set up scrapy
# 2. scrape DSE date
# 3. save it in a json file or sqlite
# 
import re
import requests
import json
import os
from bs4 import BeautifulSoup


# Making get request
def find_DSE_date() -> str:
    r = requests.get("https://www.hkeaa.edu.hk/en/hkdse/event_timetable/")

    soup = BeautifulSoup(r.content, 'html.parser')

    section = soup.find('div', {
        "id": "main_content"
    })
    rows = section.find_all('tr')

    for row in rows:
        if re.search(r"Written exams \(Category A subjects\)", row.text):
            tds = row.find_all('td')
            daterange = tds[1].text
            return daterange

def save_date(dr: str) -> None:
    try:
        dates = dr.split(" – ")
        start, end = dates
        year = end[-4:]
        start = f'{start} {year}'
        print(f"start: {start} | end: {end}")
        data = {
            "HK": {
                "name": "HKDSE",
                "startDate": start,
                "endDate": end
            }
        }

        os.chdir("..")
        dir_path = os.path.abspath(os.curdir)
        file_path = os.path.join(dir_path, 'data/date.json')
        with open(file_path, 'w') as json_file:
            json.dump(data, json_file)
        print("Completed")
    except Exception as e:
        print(f"Error: {e}")



if __name__ == "__main__":
    range = find_DSE_date()
    save_date(range)