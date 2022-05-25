
# Life Shop 

<img src="https://github.com/Joe-Ngan/lifeshop/blob/main/snapshots/login%20interface.png" width="1200" />
https://my-lifeshop.herokuapp.com/


## Concept

Life shop is an online e-Commerce web app...for life experience!
<img src="https://github.com/Joe-Ngan/lifeshop/blob/main/snapshots/e-commerce.png" width="1200" />
Imagine you can trade your time, money to gain more happiness or value. 
Life shop is a place where you can idealize your dream life. 

You can even customerize your unique life experience for other users! 
<img src="https://github.com/Joe-Ngan/lifeshop/blob/main/snapshots/create%20purchaseable%20item%20modal.png" width="200" />

## Features

### Password-free Authentication
Users log in without password and relative data stored in server side with sessions.

### Repsonsive UI games

Logged-in users have to pass three challenges before accessing the purchase platform.

Before you become an adult and have access to the life shop, three would be three challenges for you, as a baby, as a toddler, and as a kid.

- First, you need to have enough warmth and care to survive the first year of your life, during which you gain health.

- Second, you have to connect to the real world with the fundamental human tool, language. By making good connections with parents and people around you, you learn languages.

- Lastly, you need more skills to survive in the adult world. That is why we need to assure that you have good learning skill to embrace any kinds of uncertainty.

### eCommerce Shopping Pattern

In life shop, you will be a possessor of five currencies : time/age, health, money, happiness and value, with which you are free to purchase anything or even create products you like.
- CRUD
Users are able to Create, Read, Delete possessions. Higher rank users have access to creating market items.

- Search
Keyword-based search is implemented for market items.


## Tech Stack

**Client:** React

**Server:** Node, Express


## API Reference

#### Auth: check auth, login, logout
```http
  GET /api/session
```
```http
  POST /api/session
```
```http
  DELETE /api/session
```
#### Market: get market items, add item, delete item
```http
  GET /api/market
```
```http
  POST /api/market/item
```
```http
  DELETE /api/market/item
```
#### User: change status, buy item, delete item
```http
  GET /api/user/status
```
```http
  POST /api/user/item
```
```http
  DELETE /api/user/item
```

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary1 | ![#e2566b](https://via.placeholder.com/10/e2566b?text=+) #e2566b |
| Primary2 | ![#f19b7e](https://via.placeholder.com/10/f19b7e?text=+) #f19b7e |
| Secondary | ![#252937](https://via.placeholder.com/10/252937?text=+) #252937 |
| Dark | ![#50596d](https://via.placeholder.com/10/50596d?text=+) #50596d |
| White | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |

## License
font:
[Google Fonts](https://fonts.google.com/knowledge/glossary/licensing)

icons:
[Font Awesome](https://fontawesome.com/license/free)

illustrations:
[unDraw](https://undraw.co/license)

logo:
[Free Logo Design](https://www.freelogodesign.org/terms-of-use)
