# # # |) შექმენით 5 ელემენტიანი საი საიდანაც მომხარებლელს შეეკითხებთ 4 სახვადასხვა ელემენტს და შეინახავთ ამ სიაში ამ მოცემულ პასუხებს
# # # შემდეგ სათითაოდ დაპრინტეეთ ეს 5 ელემენტი

# # # user1 = input("enter item: ")
# # # user2 = input("enter item: ")
# # # user3 = input("enter item: ")
# # # user4 = input("enter item: ")
# # # user5 = input("enter item: ")
# # #         0    1        2       3      4
# # # arr = [user1, user2, user3, user4, user5]
# # # # len() -----> სიგრძეს ჩვენი item ისას
# # # for i in range(len(arr)):
# # #     print(arr[i])

# # # ||) შექმენით სია სადაც მოათავსებთ, 10 რაიმე ციფრს for loop ის გამოყენებით გავიგოთ ყველაზე პატარა ციფრი 
# # # სიაი: [9,5,94,711,52,96,71,8]

# # arr = [9,5,94,711,52,96,71,8]
# # # random_item = arr[0]

# # # for num in arr:
# # #     if num < random_item:
# # #         random_item = num
# # print(min(arr))
# # print(max(arr))

# # # გამოიყიენეთ for loop / if else / ცვლადის განახლება / სიის ელემენტებს მიწვდით  👉 [] 👈 ამეებით <3 :))) 
# # # შედით სიის ყვეალა ელემენტში და შეამოწმეთ თითოეული ელემენტი არის თუ არა ერთი მეორეზე პატარა...

# # # =====================================მინიშენბა=====================================================
# # # შექმენით for loop ზეომოთ ცვლადი რომელიც იქნება ჩვენი მოცემული სიიდან რომელიმე ელემენტი  random_item = list_name[3}


# # # წარმატებები
# # #      0 1  2   3  4  5 6  7
# # arr = [9,5,94,711,52,96,71,8]
# # print(arr[0:5])

# name = "davit"
# name[0] = "g"
# print()

# |) შექმენით 5 ელემენტიანი საი საიდანაც მომხარებლელს შეეკითხებთ 4 სახვადასხვა ელემენტს და შეინახავთ ამ სიაში ამ მოცემულ პასუხებს
# შემდეგ სათითაოდ დაპრინტეეთ ეს 5 ელემენტი

# user1 = input("enter answer: ")
# user2 = input("enter answer: ")
# user3 = input("enter answer: ")
# user4 = input("enter answer: ")
# arr = [user1, user2, user3 ,user4, "lomi"]

# for item in arr:
#     print(item)
    
    
# ||) შექმენით სია სადაც მოათავსებთ, 10 რაიმე ციფრს for loop ის გამოყენებით გავიგოთ ყველაზე პატარა ციფრი 
# სიაი: [9,5,94,711,52,96,71,8]
# arr = [9,5,94,711,52,96,71,8]

# გამოიყიენეთ for loop / if else / ცვლადის განახლება / სიის ელემენტებს მიწვდით  :point_right: [] :point_left: ამეებით :heart: :))) 
# შედით სიის ყვეალა ელემენტში და შეამოწმეთ თითოეული ელემენტი არის თუ არა ერთი მეორეზე პატარა...

# =====================================მინიშენბა=====================================================
# შექმენით for loop ზეომოთ ცვლადი რომელიც იქნება ჩვენი მოცემული სიიდან რომელიმე ელემენტი  random_item = list_name[3]

# start / end / step
# for i in range(0, 10, 2):
#     print(i)

#      0 1  2  3   4  5  6 7
#                        -2   -1
arr = [9,5,94,711,52, 96,71,8]
#      start/end/step
print(arr[0:5:2])
print(arr[:5]) # start ---0
print(arr[4:]) # end---
print(arr[::-1]) # end--- უკუღმა
print(arr[::1]) # end---

name = "davit"
print(name[0:4])