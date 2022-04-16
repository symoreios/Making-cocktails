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
    },
    "3": {
        "id": "3",
        "question": "What does club soda do in a recipe?",
        "image": "https://m.media-amazon.com/images/I/61GNZHrnmzL._SL1500_.jpg",
        "next_quiz": "4"
    },
    "4": {
        "id": "4",
        "question": "What is gin's flavor profile?",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gin-brands-1648499521.jpg?crop=0.904xw:0.810xh;0.0455xw,0.0816xh&resize=1200:*",
        "next_quiz": "5"
    },
    "5": {
        "id": "5",
        "question": "Why is most gin dry with a noticeable pine flavor?",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tc-gin-index-1568659712.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "next_quiz": "6"
    },
    "6": {
        "id": "6",
        "question": "Drag and drop placeholder",
        "next_quiz": "7"
    },
    "7": {
        "id": "7",
        "question": "Shuffle the recipe steps to the right order (drag not enabled yet)",

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
    },
    "3":
    {
        "id": "3",
        "response_list": ["Adds an interesting dizzly texture and a unique saltiness", "Adds a refreshing flavor and gives the drink a tangy zink",
                          "Adds a layer of complexity and fullness", "Dilutes the hard liquor but still allows its unique flavors to shine"],
        "answer": "Dilutes the hard liquor but still allows its unique flavors to shine"
    },
    "4": {
        "id": "4",
        "response_list": ["Rich malty grainy flavor", "Herbal flavor marked with citrus and spices", "Lemony refreshing flavor marked with spices",
                          "Light flavor that has nearly no taste and can easily blend into many mixers"],
        "answer": "Herbal flavor marked with citrus and spices"
    },
    "5": {
        "id": "5",
        "response_list": ["Gin is almost always aged in pine barrels", "Gin is almost always aged with herbs that havea pine-like aroma",
                          "Gin's main ingredient is juniper berries", "Gin's main ingredient is grains"],
        "answer": "Gin's main ingredient is juniper berries"
    },
    "6": {
        "id": "6",
        "response_list": ["placeholder so the page loads"],
        "answer": "placeholder so the page loads"
    },
    "7": {
        "id": "7",
        "response_list": ["placeholder so the page loads"],
        "answer": "placeholder so the page loads"
    }

}
correct_answers = 0


@app.route("/")
def hello_cocktail():
    return render_template('home.html')


@app.route("/quiz/<id>", methods=['GET', 'POST'])
def quiz(id=None):
    global quiz_questions
    global quiz_responses
    global correct_answers
    quiz_question_number = quiz_questions[id]
    quiz_response_number = quiz_responses[id]
    correct_responses = correct_answers

    return render_template('quiz.html', quiz_question=quiz_question_number, quiz_options=quiz_response_number, correct=correct_responses)


@app.route("/track_answers", methods=['GET', 'POST'])
def track_answers():
    global correct_answers
    json_data = request.get_json()
    correct_answers = json_data
    correct_answers += 1
   # print(correct_answers)
    return jsonify(correct_answers)


if __name__ == '__main__':
    app.run(debug=True)
