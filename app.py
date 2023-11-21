from flask import Flask, redirect, send_from_directory

app = Flask(__name__, static_folder=".vitepress/dist", static_url_path="/english-notes")

@app.route("/")
def index():
    return redirect("/english-notes", code=302)

@app.route("/english-notes")
def home():
    return send_from_directory(directory=".vitepress/dist", path="index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0")