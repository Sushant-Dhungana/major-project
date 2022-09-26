from flask import Flask
from flask import request
import pandas as pd
import pickle
import numpy as np
import json


app = Flask(__name__)

model = pickle.load(open('./data/LinearRegressionModel.pkl','rb'))

@app.route('/predict', methods=['POST','GET'])
def predict():

   
    data = request.get_json()

    brandName = data['brandName']
    engine = data['engine']
    mileage = data['mileage']
    kmRun = data['kmRun']
    makeYear = data['makeYear']
    pradesh = data['pradesh']
    lotNumber = data['lotNumber']
    
    prediction = model.predict(pd.DataFrame([[brandName, engine, pradesh, lotNumber, mileage, kmRun, makeYear]],
    columns=['brandName','engine','pradesh','lotNumber','mileage', 'kmRun', 'makeYear']))

    result = "Rs "+ str(np.round(prediction[0],0))
    return json.dumps({"result":result})

if __name__ == "__main__":
    app.run(port=5000, debug=True)