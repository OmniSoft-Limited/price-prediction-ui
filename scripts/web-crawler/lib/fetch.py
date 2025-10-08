import requests
from tqdm import tqdm
from typing import Final, Dict

def fetch_data(url: str) -> str:
    """Fetch data from the given URL with a full progress bar."""
    headers: Final[Dict[str, str]] = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                      "AppleWebKit/537.36 (KHTML, like Gecko) "
                      "Chrome/109.0.0.0 Safari/537.36"
    }

    print(f"Fetching data from {url}")
    try:
    # Stream the response
        response = requests.get(url, headers=headers, stream=True)
        response.raise_for_status()

        total_size = int(response.headers.get('content-length', 0))
        chunk_size = 1024  # 1 KB
        data_chunks = []

        # Use tqdm for a full horizontal progress bar
        with tqdm(total=total_size, unit='B', unit_scale=True, ncols=80, desc="Downloading") as pbar:
            for chunk in response.iter_content(chunk_size=chunk_size):
                if chunk:
                    data_chunks.append(chunk)
                    pbar.update(len(chunk))  # update the bar

        return b"".join(data_chunks).decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error: {e}")
        return ""