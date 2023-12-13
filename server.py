from flask import Flask, redirect, send_from_directory

app = Flask(__name__, static_folder="docs", static_url_path="/english-notes")

@app.route("/")
def index():
    return redirect("/english-notes", code=302)

@app.route("/english-notes")
def home1():
    return send_from_directory(directory="docs", path="index.html")

@app.route("/english-notes/")
def home2():
    return send_from_directory(directory="docs", path="index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0")
