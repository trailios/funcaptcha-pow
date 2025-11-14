import json
import os
from pathlib import Path
import subprocess
from hashlib import sha256

js = Path("pow/unknown.js").read_text(encoding="utf-8")

workerconfig = {
    "seed": [
        {
            "3tyPOOfdXDCN1FLS0x": "YrMJ3wu6Erm2FYxnOh",
            "HPuxWmMDv4XYCUf5dO": "ZWaporfllmprTwJ4JP"
        },
        {
            "Co5bkQpKnYGbiRc3EQ": "KJS4kiKQshT0Frg4Su",
            "GvU9Av9BboCcFnMS41": "ncMdOKRIZ7lc9VUi1i",
            "xDwXFHZyVvsjtsIRno": "omJqb7HpaS2gREAsLF"
        },
        {
            "3FIGJtnr8hKfUs1j15": "pEOM9eMrXrNACWlQvq",
            "ifL9rPwoVa5Xp8eCJS": "aLHvdjulPnWEAouNwx",
            "nlscAb1VEfhV1C2BSb": "gSEOVZd9YxQaNwt5GR"
        }
    ],
    "difficulty": 5,
    "itimeout": 300000
}

script = (
    js
    + """
var capturedPow = null;

function postMessage(msg) {
  if (msg && msg.type === "done") {
    capturedPow = msg;
  }
}

async function onmessage(e) {
  if (typeof handleMessage === "function") {
    await handleMessage(e.data);
  }
}

const testMessage = {
  data: {
    type: "start",
    data: """
    + json.dumps(workerconfig)
    + """
  }
};

(async () => {
  await onmessage(testMessage);
  if (capturedPow) {
    console.log(JSON.stringify(capturedPow));
  }
})();
"""
)

if __name__ == "__main__":
    ## usage
    try:
        hash = sha256(script.encode("utf-8")).hexdigest() # incase when using threading
        with open(f"{hash}.js", "w", encoding="utf-8") as f:
            f.write(script)
        result = subprocess.run(["node", f"{hash}.js"], capture_output=True, text=True)
        print(result.stdout.strip())
    finally:
        os.unlink(f"{hash}.js")
