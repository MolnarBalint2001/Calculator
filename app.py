from flask import Flask,render_template,request



app=Flask(__name__, template_folder='templates' ,static_folder='static')




@app.route('/calculator')
def calculator():

    return render_template("calculator.html")



if __name__=='__main__':
    app.run(debug=True)