import json
from typing import Final, Dict

def convert_json(data: Dict) -> str:
    """Convert the JSON data into a dictionary."""
    return json.dumps(data, indent=4)