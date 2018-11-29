# PythonFlaskD3POC

Follow below commands to run this application in Python3<br/> 
After cloning the repository go to the cloned folder and run<br/> 
<br/> 
$cd PythonFlaskD3POC/
<br/> 
$python3 -m venv venv
<br/> 
  This above command created a new directory called ‘venv’ which contains the following items to keep this project isolated from the   other projects on your system:<br/> 

  Python interpreter (Python 3.6.3 in this case)<br/> 
  Scripts for activating and deactivating the virtual environment<br/> 
  To start using the virtual environment that was created, it needs to be activated:<br/> 
<br/> 
$ source venv/bin/activate
<br/>   You will bash in to virtual env mode<br/> 

(venv) $
<br/>   After activating the virtual environment, the virtual environment name gets displayed on your command prompt (the ‘(venv)’     at the left of the prompt).<br/> 
  Later install required liraries like flask and pandas as below.<br/> 
(venv) $ pip install flask
<br/> 
(venv) $ pip install pandas
<br/> 
(venv) $ pip install h2o
<br/> 

Running the Development Server<br/> 
In order to check that app.py is working correctly, the Flask development server that comes bundled with the Flask framework is a great way to test out your application.<br/> 

First, you need to specify where the Flask application is defined (via the FLASK_APP environment variable). Then, you can run your Flask application with ‘flask run’:<br/> 
<br/> 
(venv) $ export FLASK_APP=app.py
<br/> 
(venv) $ flask run
<br/> 
You will notice the server started and serving your request as below<br/> 
    * Serving Flask app "app.py"<br/> 
      * Environment: production<br/> 
      WARNING: Do not use the development server in a production environment.<br/> 
     Use a production WSGI server instead.<br/> 
     * Debug mode: off<br/> 
    * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)<br/> 
  127.0.0.1 - - [07/Nov/2018 10:40:24] "GET /test HTTP/1.1" 200 -<br/> 
<br/> 
Go to browser and launch the app by URL http://127.0.0.1:5000/BeerFinder You should see the interactive graph.<br/> 
<br/> 
References<br/> 
https://www.patricksoftwareblog.com/steps-for-starting-a-new-flask-project-using-python3/
<br/> 
https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
<br/> 
http://benalexkeen.com/creating-graphs-using-flask-and-d3/
