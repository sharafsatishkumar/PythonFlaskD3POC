import json

from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route("/test")
def index():
    # df = pd.read_csv('data.csv').drop('Open', axis=1)
    chart_data = [{'city': 'San Antonio', 'population_2012': 1383505, 'growth': {'year_2013':25405, 'year_2014':26644 , 'year_2015':28593 , 'year_2016':23591 , 'year_2017':24208}}];

    chart_data = json.dumps(chart_data, indent=2)
    data = {'chart_data': chart_data}
    return render_template("interactive.html", data=data)


if __name__ == "__main__":
    app.run(debug=True)
