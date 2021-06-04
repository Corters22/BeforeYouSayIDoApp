# Dependencies
from flask import Flask, jsonify, render_template
from project import Divorce_Data

#################################################
# Database Setup
#################################################   
data = Divorce_Data()
#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################
@app.route("/")
def home():
    """List available api routes."""
    return (
        f"<h4>Available Routes:</h4>"       
        f'<a href="/api/divorcedata">Divorce Data</a><br/>' 
        f'<a href="/"><h4>Back</h4></a><br/>' 
    )       

@app.route("/api/divorcedata")
def demo():
    return jsonify(data.questions())


if __name__ == '__main__':
    app.run(debug=True)