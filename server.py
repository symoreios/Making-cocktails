from http.client import responses
from flask import Flask
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify

app = Flask(__name__)

quiz_questions = {
    "1": {
        "id": "1",
        "question": "What kind of glasses does Gin Rickey require?",
        "image": "https://www.thespruceeats.com/thmb/D1LPSjj9dhYrH4JIDKVmEYOdutE=/1500x844/smart/filters:no_upscale()/bar-glassware-tour-759984_V3-256688a32766449890dbddfb50bab7e6.png",
        "next_quiz": "2"
    },
    "2": {
        "id": "2",
        "question": "What is the key ingredient that a Gin Rickey requires?",
        "image": "https://thumbor.thedailymeal.com/4tLyujJT4s28HQcg3KaV0VjylwM=/870x565/https://www.thedailymeal.com/sites/default/files/story/2016/clubsodalime.JPG",
        "next_quiz": "3"
    }
}
quiz_responses = {
    "1": {
        "id": "1",
        "response_list": ["Lowball glass", "Wine glass", "Highball glass", "Moscow Mule Mug"],
        "answer": "Highball glass"
    },
    "2": {
        "id": "2",
        "response_list": ["Ginger Beer", "Club Soda", "Coca Cola", "Espresso shots"],
        "answer": "Club Soda"
    }
}


@app.route("/")
def hello_cocktail():
    return render_template('home.html')


@app.route("/quiz/<id>", methods=['GET', 'POST'])
def quiz(id=None):
    global quiz_questions
    global quiz_responses
    quiz_question_number = quiz_questions[id]
    quiz_response_number = quiz_responses[id]

    return render_template('quiz.html', quiz_question=quiz_question_number, quiz_options=quiz_response_number)


if __name__ == '__main__':
    app.run(debug=True)
