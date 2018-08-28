from flask import Flask, render_template
from flask_ask import Ask, statement, question, session
import logging
import os

app = Flask(__name__)
ask = Ask(app, '/')

if os.getenv('MYSPA_DEBUG_EN', False):
    logging.getLogger('flask_ask').setLevel(logging.DEBUG)



@ask.launch
def my_spa():

    welcome_msg = render_template('welcome')

    return statement(welcome_msg)



@ask.intent('lightIntent', mapping={'ToggleEvents': 'status'})
def light(ToggleEvents):
    return statement('Turning lights {}'.format(ToggleEvents))



@ask.intent('blowerIntent', mapping={'ToggleEvents': 'status'})
def blower(ToggleEvents):
    return statement('Ok. Turning blower {}'.format(ToggleEvents))



@ask.intent('heaterIntent', mapping={'ToggleEvents': 'status'})
def heater(ToggleEvents):
    return statement('Ok. Turning heater {}'.format(ToggleEvents))



@ask.intent('queryLightIntent', mapping={'ToggleEvents': 'status'})
def queryLight(ToggleEvents):
    return statement('Ok. The light status is  {}'.format(ToggleEvents))



@ask.intent('queryTempIntent', mapping={'TempValue': 'presentTemperature'})
def queryTemp(TempValue):
    return statement('Ok. The actual temperature is  {}'.format(TempValue))



@ask.intent('queryHeaterIntent', mapping={'ToggleEvents': 'status'})
def queryHeater(ToggleEvents):
    return statement('Ok. The heater status is  {}'.format(ToggleEvents))



@ask.intent('setTemperatureIntent', mapping={'TempValue': 'temperatureValue'})
def setTemp(TempValue):
    return statement('Ok. Control My Spa Set temperature to {} degree Celsius'.format(TempValue))



@ask.intent('setTemperatureIntent', mapping={'TempValue': 'temperatureValue'})
def setTemp(TempValue):
    return statement('Ok. Control My Spa Set temperature to {} degree fahrenheit'.format(TempValue))


'''
if __name__ == '__main__':
    app.run(debug=True)
'''
# For Flask-ask in heroku
if __name__ == '__main__':
    #app.run()
    port = int(os.getenv('PORT', 5000))
    print ("Starting app on port %d" % port)
    app.run(debug=False, port=port, host='0.0.0.0')
