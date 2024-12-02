# def ფუნქციის სახელი () :
# def ---- ჩაშენებული სიტყვა როგორც მაგალითად: for, while, if, elif, else, or, def...
# def ---- ქმნის ფუნქციას:
# def ixvis_tolma():
#     print("იხვის ტოლმა ბაჟეში!")
# ixvis_tolma()
# ixvis_tolma()

from turtle import *

def walk():
    forward(200)
    forward(200)

def fall_back():
    left(180)
    forward(200)
    
# ფუნქციის სახელს რომ ვწერთ და  
# მრგალ ფრჩხილებს ვუწერთ () "ვიძახევბთ ფუნქციას" / "CALL FUNCTION"

width(12)
walk()
color('red')
fall_back()


exitonclick()