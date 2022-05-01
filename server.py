from http.client import responses
from datetime import datetime
from pytz import timezone
from flask import Flask
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify

app = Flask(__name__)
learn_data = {
    "1": {
        "id": "1",
        "title": "Gin Rickey: An Overview",
        "media": "https://zestfulkitchen.com/wp-content/uploads/2020/08/gin-rickey_for-web-4.jpg",
        "content": [
            "The gin rickey is for people who like <b>tart, bracing</b> cocktails.",
            "With <i>no</i> sugar or simple syrup, this cocktail is quite <b>sour, dry</b> and exceptionally <b>refreshing</b>.",
            "Use quality club soda. <b>Fresh</b> squeezed lime is also essential."
        ],
        "next": "2",
        "progress": "0%",
        "enter-time": None
    },
    "2": {
        "id": "2",
        "title": "Alcohol Disclaimer",
        "media": "https://upload.wikimedia.org/wikipedia/commons/8/83/United_States_Centers_for_Disease_Control_and_Prevention_logo.svg",
        "content": [
            "<b>Excessive</b> alcohol use has immediate effects that increase the risk of many harmful health conditions.",
            "A standard drink of gin contains around <b>1.5 ounces</b> of gin",
            "For more info : https://www.cdc.gov/alcohol/fact-sheets/alcohol-use.htm "
        ],
        "next": "3",
        "progress": "20%",
        "enter-time": None
    },
    "3": {
        "id": "3",
        "title": "Key Ingredient: Club Soda",
        "media": "https://static.specsonline.com/wp-content/uploads/2020/10/001660051470.jpg",
        "content": [
            "One of the easiest mixers",
            "Club soda dilutes the flavor of the spirit so you aren't drinking it straight, but <b>still allows you to enjoy its unique flavors and aromas</b>.",
        ],
        "next": "4",
        "progress": "40%",
        "enter-time": None
    },
    "4": {
        "id": "4",
        "title": "Key Ingredient: Lemons and Limes",
        "media": "https://suppliesforcandles.co.uk/4098/lemon-lime-fragrance-oil.jpg",
        "content": [
            "Fresh lemon and lime juice brings a <b>tangy zing</b> to many classic drinks",
            "Lemon juice works in <b>all seasons</b>",
            "You can make your own sour simply with <b>equal parts</b> of <b>fresh lemon juice</b> and <b>simple syrup</b>",
            "Classic cocktails that use lemons and limes include: whiskey sour, long island iced tea, cosmopolitan cocktail"
        ],
        "next": "5",
        "progress": "60%",
        "enter-time": None
    },

    "5": {
        "id": "5",
        "title": "Key Ingredient: Gin",
        "media": "https://i.pinimg.com/originals/8e/c8/a1/8ec8a19b86d10e65b356c89e30af7fa6.png",
        "content": [
            "Gin is a distilled spirit that is made from <b>grain</b> and flavored with <b>botanicals</b>.",
            "<b>Herbal flavor</b> marked with citrus and spices.",
            "Most gin is dry with a <b>noticeable pine flavor</b> due to its main ingredient, <b>juniper berries</b>."
        ],
        "next": "6",
        "progress": "80%",
        "enter-time": None
    },
    "6": {
        "id": "6",
        "title": "Definition: Highball",
        "media": "https://www.thespruceeats.com/thmb/JIUbjPCnQzDzmkP7FlZu2_rjr5U=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/highball-glasses-56a170215f9b58b7d0bf49d6.jpg",
        "content": [
            "Highball and Collins glasses are used for tall mixed drinks (“highballs”).",
            "Quite often, the highball drinks are <b>built directly in the glass</b> by pouring the ingredients over ice and stirring to mix."
        ],
        "next": "7",
        "progress": "100%",
        "enter-time": None
    },
    "7": {
        "id": "7",
        "title": "Gin Rickey Ingredients",
        "media": "https://www.thespruceeats.com/thmb/KWN7q_rc54d5LvlRkOPCcndEQ6Q=/580x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gin-rickey-recipe-760083-step-01-d519ccd29d134b07a6bf3517fe14cf01.jpg",
        "content": [
            "2 ounces gin",
            "1/2 ounce lime juice, freshly squeezed",
            "4 ounces club soda, or to taste",
            "Lime wedges for garnish"
        ],
        "next": "8",
        "progress": "0%",
        "enter-time": None
    },
    "8": {
        "id": "8",
        "title": "Gin Rickey Recipe: Step 1 of 4",
        "media": "https://www.youtube.com/embed/lAI0AYn_Fg4",
        "content": [
            "Fill a highball glass with ice.",
        ],
        "next": "9",
        "progress": "25%",
        "enter-time": None,
        "picture": "https://www.thespruceeats.com/thmb/zRbsCD6uzcbdUdlq1EAi3DfUsgQ=/580x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gin-rickey-recipe-760083-step-02-0272d50d178040758c824161a89da920.jpg"
    },
    "9": {
        "id": "9",
        "title": "Gin Rickey Recipe: Step 2 of 4",
        "media": "https://www.youtube.com/embed/1IsJFCcBGBw",
        "content": [
            "Pour the gin and lime juice over the ice.",
            "<b>Note</b>: for a non-alcoholic drink, only pour the lime juice."
        ],
        "next": "10",
        "progress": "50%",
        "enter-time": None
    },
    "10": {
        "id": "10",
        "title": "Gin Rickey Recipe: Step 3 of 4",
        "media": "https://www.youtube.com/embed/pH-ZrYMg2ss",
        "content": [
            "Top with club soda."
        ],
        "next": "11",
        "progress": "75%",
        "enter-time": None
    },
    "11": {
        "id": "11",
        "title": "Gin Rickey Recipe: 4 of 4",
        "media": "https://www.youtube.com/embed/mlunB-PMRDc",
        "content": [
            "Garnish with a lime wedge. Serve and enjoy."
        ],
        "next": "12",
        "progress": "100%",
        "enter-time": None
    },
    "12": {
        "id": "12",
        "title": "Gin Rickey Recipe Review",
        "media": "https://www.thespruceeats.com/thmb/KWN7q_rc54d5LvlRkOPCcndEQ6Q=/580x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gin-rickey-recipe-760083-step-01-d519ccd29d134b07a6bf3517fe14cf01.jpg",
        "content": [
            "2 ounces gin",
            "1/2 ounce lime juice, freshly squeezed",
            "4 ounces club soda, or to taste",
            "Lime wedges for garnish",
            "",
            "Fill a highball glass with ice.",
            "Pour the gin and lime juice over the ice.",
            "Top with club soda.",
            "Garnish with a lime wedge. Serve and enjoy.",
        ],
        "next": "13",
        "progress": "100%",
        "enter-time": None
    }

}
#-------------------------------------#
quiz_questions = {
    "1": {
        "id": "1",
        "question": "What kind of glasses does Gin Rickey require?",
        "image": "https://www.thespruceeats.com/thmb/D1LPSjj9dhYrH4JIDKVmEYOdutE=/1500x844/smart/filters:no_upscale()/bar-glassware-tour-759984_V3-256688a32766449890dbddfb50bab7e6.png",
        "next_quiz": "2",
        "review_link":"6"
    },
    "2": {
        "id": "2",
        "question": "What is the key ingredient that a Gin Rickey requires?",
        "image": "https://thumbor.thedailymeal.com/4tLyujJT4s28HQcg3KaV0VjylwM=/870x565/https://www.thedailymeal.com/sites/default/files/story/2016/clubsodalime.JPG",
        "next_quiz": "3",
        "review_link": "3"
    },
    "3": {
        "id": "3",
        "question": "What does club soda do in a recipe?",
        "image": "https://m.media-amazon.com/images/I/61GNZHrnmzL._SL1500_.jpg",
        "next_quiz": "4",
        "review_link":"3"
    },
    "4": {
        "id": "4",
        "question": "What is gin's flavor profile?",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gin-brands-1648499521.jpg?crop=0.904xw:0.810xh;0.0455xw,0.0816xh&resize=1200:*",
        "next_quiz": "5",
        "review_link":"5"
    },
    "5": {
        "id": "5",
        "question": "Why is most gin dry with a noticeable pine flavor?",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tc-gin-index-1568659712.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "next_quiz": "6",
        "review_link":"5"
    },
    "6": {
        "id": "6",
        "question": "Drag and drop placeholder",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tc-gin-index-1568659712.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "next_quiz": "7",
        "review_link":"7"
    },
    "7": {
        "id": "7",
        "question": "Move the recipe steps to the right order",
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tc-gin-index-1568659712.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "next_quiz": "8",
        "review_link":"12"
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
        "image_list": ["https://caterrent.com/store/wp-content/uploads/2018/10/GLAS34_1-1.jpg", "https://static.specsonline.com/wp-content/uploads/2020/10/001660051470.jpg", "https://static.specsonline.com/wp-content/uploads/2020/10/001660050570.jpg", "https://dydza6t6xitx6.cloudfront.net/ci-bombay-sapphire-4967085f606d9efa.jpeg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lime_-_whole_and_halved.jpg/1200px-Lime_-_whole_and_halved.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2lNjDqo6EuAA3peELcA4IXLKSfhZmfPIfw&usqp=CAU", "https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/h31/h65/12913226874910.png", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/10/15/0/fnd_Ice-Cubes-thinkstock.jpg.rend.hgtvcom.476.357.suffix/1413404558868.jpeg", "https://www.cookingwithnart.com/wp-content/uploads/2019/10/How-To-Preserve-Lime-Juice-2.jpg", "https://img.thewhiskyexchange.com/900/glass_chi5.jpg"],
        "answer": ["https://static.specsonline.com/wp-content/uploads/2020/10/001660051470.jpg", "https://dydza6t6xitx6.cloudfront.net/ci-bombay-sapphire-4967085f606d9efa.jpeg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lime_-_whole_and_halved.jpg/1200px-Lime_-_whole_and_halved.jpg", "https://img.thewhiskyexchange.com/900/glass_chi5.jpg", "https://www.clearwaycommunitysolar.com/wp-content/uploads/2019/05/iStock-177131518.jpg", "https://www.cookingwithnart.com/wp-content/uploads/2019/10/How-To-Preserve-Lime-Juice-2.jpg", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/10/15/0/fnd_Ice-Cubes-thinkstock.jpg.rend.hgtvcom.476.357.suffix/1413404558868.jpeg"]
    },
    "7": {
        "id": "7",
        "response_list": ["Top with club soda.", "Pour the gin and lime juice over the ice.", "Fill a highball glass with ice.", "Garnish with a lime wedge."],
        "answer": "placeholder so the page loads"
    }

}
correct_answers = 0


@app.route("/")
def hello_cocktail():
    return render_template('home.html')


@app.route("/learn/<id>")
def learning(id=None):
    global learn_data
    eastern = timezone('US/Eastern')
    curr_time = eastern.localize(datetime.now())
    fmt = '%Y-%m-%d %H:%M:%S %Z%z'
    curr_time = curr_time.strftime(fmt)
    if learn_data[id]["enter-time"] is None:
        learn_data[id]["enter-time"] = curr_time
    datas = learn_data[id]
    return render_template('learn.html', data=datas)


@app.route("/transition")
def transition():
    return render_template('transition.html')


@app.route("/review")
def review():
    global learn_data
    review_ = [i for i in range(3, 9)]
    return render_template('review.html', data=learn_data, review_file=review_)


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
    return jsonify(correct_answers)


@app.route("/quizend")
def quizend():
    global correct_answers
    return render_template('quizend.html', correct=correct_answers)


if __name__ == '__main__':
    app.run(debug=True)
