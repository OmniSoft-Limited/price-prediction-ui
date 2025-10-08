from bs4 import BeautifulSoup

def parse_data(html: str) -> list:
    """Parse the Bangla bad word table into a list of dictionaries."""
    soup = BeautifulSoup(html, "html.parser")
    table = soup.find('table', class_='table table-striped width333')
    rows = table.find_all('tr')

    result = []
    # skip header row
    for row in rows[1:]:
        cells = row.find_all('td')
        if len(cells) < 3:
            continue  # skip malformed rows
        phrase = cells[0].get_text(strip=True)
        meaning = cells[1].get_text(strip=True)
        result.append(phrase)
    return result