from lib import fetch_data, parse_data, convert_json
from datetime import datetime
from dotenv import load_dotenv
import os
from typing import Final
load_dotenv()

URL = os.getenv("URL")

def main():
    try:
        data = fetch_data(URL)
        parsed_data = parse_data(data)
        json_data = convert_json({
            "bangla_bad_words": parsed_data,
            "count": len(parsed_data),
            "source": URL,
            "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        })
        print(json_data)

        source = input("Do you want to save the data? (y/n): ")
        if source.lower() == "y":
            path = input("Enter the path to save the data: ")
            file_name = input("Enter the file name: ")
            file_path = os.path.join(path, file_name)
            os.makedirs(path, exist_ok=True)
            with open(f"{file_path}.json", "w") as f:
                f.write(json_data)
            print("Data saved.")
        else:
            print("Data not saved.")

    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    main()
