# Dependencies
from flask import Flask, jsonify, render_template, request
from project import Divorce_Data
import pandas as pd
import numpy as np
import joblib
import Grid_search_model 

#################################################
# Database Setup
#################################################   
data = Divorce_Data()
grid_search = Grid_search_model
#################################################
# Flask Setup
#################################################
app = Flask(__name__)

################################################
# adding model for predictions
################################################
model = joblib.load('grid_search.sav')


#################################################
# Flask Routes
#################################################
@app.route("/")
def home():
    
    return render_template('index.html')

@app.route('/api_options')
def api_list():   
    """List available api routes."""
    return (
        f"<h4>Available Routes:</h4>"       
        f'<a href="/api/divorcedata">Divorce Data</a><br/>' 
        f'<a href="/"><h4>Back</h4></a><br/>' 
        f'<a href="/prediction/<answers>'
    )    

@app.route("/api/divorcedata")
def demo():
    return jsonify(data.questions())

@app.route("/prediction/<answers>")
def prediction_gif(answers):
    prediction = grid_search.make_prediction(answers)
    return prediction

if __name__ == '__main__':
    app.run(debug=True)