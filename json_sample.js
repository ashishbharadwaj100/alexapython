{
    "interactionModel": {
        "languageModel": {
            "invocationName": "my spa",
            "intents": [
                {
                    "name": "AMAZON.FallbackIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "lightIntent",
                    "slots": [
                        {
                            "name": "status",
                            "type": "ToggleEvents"
                        }
                    ],
                    "samples": [
                        "turn lights {status}",
                        "turn {status} light",
                        "switch {status} light",
                        "please turn {status} light"
                    ]
                },
                {
                    "name": "blowerIntent",
                    "slots": [
                        {
                            "name": "status",
                            "type": "ToggleEvents"
                        }
                    ],
                    "samples": [
                        "switch {status} blower",
                        "turn {status} blower",
                        "please turn {status} blower"
                    ]
                },
                {
                    "name": "setTemperatureIntent",
                    "slots": [
                        {
                            "name": "temperatureValue",
                            "type": "TempValue"
                        }
                    ],
                    "samples": [
                        "please set the temperature to {temperatureValue} fahrenheit",
                        "please set the temperature at {temperatureValue} celsius",
                        "set the temperature to {temperatureValue} fahrenheit",
                        "set the temperature to {temperatureValue} celsius",
                        "set the temperature at {temperatureValue} celsius ",
                        "set the temperature at {temperatureValue} fahrenheit "
                    ]
                },
                {
                    "name": "heaterIntent",
                    "slots": [
                        {
                            "name": "status",
                            "type": "ToggleEvents"
                        }
                    ],
                    "samples": [
                        "turn heater {status}",
                        "turn {status} heater",
                        "switch {status} heater",
                        "please turn {status} heater"
                    ]
                },
                {
                    "name": "queryTempIntent",
                    "slots": [
                        {
                            "name": "presentTemperature",
                            "type": "TempValue"
                        }
                    ],
                    "samples": [
                        "what is the actual temperature"
                    ]
                },
                {
                    "name": "querySetTempIntent",
                    "slots": [
                        {
                            "name": "setTemperature",
                            "type": "TempValue"
                        }
                    ],
                    "samples": [
                        "what is the set temperature"
                    ]
                },
                {
                    "name": "queryLightIntent",
                    "slots": [
                        {
                            "name": "status",
                            "type": "ToggleEvents"
                        }
                    ],
                    "samples": [
                        "what is the light status"
                    ]
                },
                {
                    "name": "queryHeaterIntent",
                    "slots": [
                        {
                            "name": "status",
                            "type": "ToggleEvents"
                        }
                    ],
                    "samples": [
                        "what is the heater status"
                    ]
                }
            ],
            "types": [
                { 
                    "name": "ToggleEvents",
                    "values": [
                        {
                            "name": {
                                "value": "on"
                            }
                        },
                        {
                            "name": {
                                "value": "off"
                            }
                        }
                    ]
                },
                {
                    "name": "TempValue",
                    "values": [
                        {
                            "name": {
                                "value": "90"
                            }
                        },
                        {
                            "name": {
                                "value": "80"
                            }
                        },
                        {
                            "name": {
                                "value": "70"
                            }
                        },
                        {
                            "name": {
                                "value": "60"
                            }
                        },
                        {
                            "name": {
                                "value": "50"
                            }
                        },
                        {
                            "name": {
                                "value": "40"
                            }
                        },
                        {
                            "name": {
                                "value": "30"
                            }
                        },
                        {
                            "name": {
                                "value": "20"
                            }
                        },
                        {
                            "name": {
                                "value": "10"
                            }
                        }
                    ]
                }
            ]
        }
    }
}