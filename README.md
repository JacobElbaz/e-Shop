# eShop Game Zone
Welcome to Game Zone e-shop,
We create a video game online shop, with a client and manager side. Let's take a look at the main features: 

![home](https://user-images.githubusercontent.com/73593531/200502775-e4750dc5-3c4f-4f40-ba7f-f3bd4ced62c7.gif)
![stats](https://user-images.githubusercontent.com/73593531/200503225-cb0b43b2-8f8d-424d-b67a-d33148b8f53a.gif)
![Capture d’écran (42)](https://user-images.githubusercontent.com/73593531/200503258-8df9fe45-0134-4299-a0f1-beb2c40e363e.png)
![Capture d’écran (43)](https://user-images.githubusercontent.com/73593531/200503274-593ed24f-0d7d-4b84-ad8f-b11e3b4e28b2.png)
![Capture d’écran (51)](https://user-images.githubusercontent.com/73593531/200503350-0fe72514-f9e0-426a-b9ef-89264a1b1c53.png)
![Capture d’écran (43)](https://user-images.githubusercontent.com/73593531/200503354-acf6ca0d-da2a-433c-80c5-8de59ad0f028.png)
![Capture d’écran (44)](https://user-images.githubusercontent.com/73593531/200503358-8d78c2d3-ca76-4037-836f-d019fc0a3963.png)
![Capture d’écran (45)](https://user-images.githubusercontent.com/73593531/200503362-b441c62b-e22f-4d31-b3cf-e12e40fe5af5.png)
![Capture d’écran (46)](https://user-images.githubusercontent.com/73593531/200503364-e8b660ee-832c-4d65-a3a8-3d87e31063bb.png)
![Capture d’écran (47)](https://user-images.githubusercontent.com/73593531/200503368-ab60e7ad-d172-4a4f-b13f-c0ec69e496c9.png)
![Capture d’écran (48)](https://user-images.githubusercontent.com/73593531/200503369-15f185d3-4a7e-412b-97b2-73d586eb1204.png)


## Features
### Client side
1) Login/Signup
2) Search game
3) Add to cart 
4) Add to wishlist 
5) Make an order
6) See orders
7) Rate a game
8) Edit profil

### Manager Side
1) Login/Signup 
2) See all the orders 
3) See all the clients
4) Add/delete/edit a game
5) Edit profil
6) Edit delivery dates 

## Steps
1) Clone the project from git repository: [In order to clone click this link](https://github.com/TechLeadersSce/CICD_Class)
2) Open it in the IDE (preferable: Visual Studio Code) 
3) Install NodeJs: [link here](https://nodejs.org/en/download/)
4) Create User in MongoDB [link here](https://www.mongodb.com/)
5) Download MongoDB Compass [link here](https://www.mongodb.com/try/download/compass)
6) Open MongoCompass
7) NewConnect and ADD as URL:
```
mongodb+srv://Jacobel:12345@cluster0.2gjbq.mongodb.net/test

```
8) Open command line in the project
9) In the root Run: `npm install`
10) Create a file '.env' in the client folder and past this code into:
```
REACT_APP_API_URL = http://localhost:5000/
``` 
11) Create a file '.env' in the server/config folder and past this code into: 
```
PORT=5000
CLIENT_URL=http://localhost:3000
DB_USER_PASS=Jacobel:12345
TOKEN_SECRET=555
```
12) Run in client and server folder: `npm install`
13) (In client and server folder) Run: `npm start`

