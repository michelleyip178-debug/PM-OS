import json
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"]

flow = InstalledAppFlow.from_client_secrets_file("/Users/michelleyip/g.json", scopes=SCOPES)
creds = flow.run_local_server(port=0)

with open("/Users/michelleyip/.config/google-calendar-mcp/tokens.json") as f:
    data = json.load(f)

data["normal"] = {
    "access_token": creds.token,
    "refresh_token": creds.refresh_token,
}

with open("/Users/michelleyip/.config/google-calendar-mcp/tokens.json", "w") as f:
    json.dump(data, f, indent=2)

print("Token refreshed and saved.")
