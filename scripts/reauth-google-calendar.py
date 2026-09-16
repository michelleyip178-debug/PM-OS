import json
import sys
from google_auth_oauthlib.flow import InstalledAppFlow

sys.stdout.reconfigure(line_buffering=True)

SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"]

flow = InstalledAppFlow.from_client_secrets_file("/Users/michelleyip/g.json", scopes=SCOPES)

print("Starting local OAuth server...", flush=True)
creds = flow.run_local_server(
    port=0,
    prompt='consent',
    access_type='offline',
    open_browser=True,
    authorization_prompt_message="Please authorize at:\n{url}"
)

with open("/Users/michelleyip/.config/google-calendar-mcp/tokens.json") as f:
    data = json.load(f)

data["normal"] = {
    "access_token": creds.token,
    "refresh_token": creds.refresh_token,
}

with open("/Users/michelleyip/.config/google-calendar-mcp/tokens.json", "w") as f:
    json.dump(data, f, indent=2)

print("SUCCESS: Token refreshed and saved to ~/.config/google-calendar-mcp/tokens.json", flush=True)
