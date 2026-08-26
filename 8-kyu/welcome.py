# Welcome!
# 8 Kyu
# https://www.codewars.com/kata/577ff15ad648a14b780000e7/solutions/python

languages = {
    'english': 'Welcome',
    "czech": "Vitejte",
    "danish": "Velkomst",
    "dutch": "Welkom",
    "estonian": "Tere tulemast",
    "finnish": "Tervetuloa",
    "flemish": "Welgekomen",
    "french": "Bienvenue",
    "german": "Willkommen",
    "irish": "Failte",
    "italian": "Benvenuto",
    "latvian": "Gaidits",
    "lithuanian": "Laukiamas",
    "polish": "Witamy",
    "spanish": "Bienvenido",
    "swedish": "Valkommen",
    "welsh": "Croeso",
}

def greet(language):
    greeting = ''
    if language in languages.keys():
        greeting = languages[language]
    else:
        greeting = languages['english']
    return greeting
        
        
greet('english')