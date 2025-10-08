# Bangla Bad Word Crawler

A Python web crawler that fetches Bangla bad words from web sources, parses them, and outputs a clean JSON file for use in filters, NLP, or moderation systems.

---

## 📝 Features

* Fetches Bangla words from online sources (supports HTML pages).
* Parses word tables using **BeautifulSoup**.
* Outputs a structured **JSON file** containing phrases and meanings.
* Handles **streamed downloads** with a **progress bar**.
* Ready for integration with moderation systems, chat apps, or language filters.

---

## ⚡ Tech Stack

* **Python 3.11+**
* [Requests](https://pypi.org/project/requests/) – for HTTP fetching
* [BeautifulSoup4](https://pypi.org/project/beautifulsoup4/) – for parsing HTML
* [tqdm](https://pypi.org/project/tqdm/) – for progress bars
* JSON – for output format

---
