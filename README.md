# MyReads Project

MyReads Project is frond-end web application to categorize books that user have read or user currently reading it or want to read it , MyReads have different books so user can search to get the desired books. MyReads is developed by using [ React ](https://reactjs.org/)

## Installation

- Use the package manager [npm](https://www.npmjs.com/) to install all dependencies and devDependencies .

```bash
npm install
```

- start the application

```bash
npm start
```

## Structure of files

```bash
├── CONTRIBUTING.md
├── README.md
├── SEARCH_TERMS.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── books.js
    ├── bookshelf.js
    ├── shelfchanger.js
    ├── search.js
    ├── App.test.js
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    └── index.js
```

## Backend Server

The below functions are the 3 used API to fetch data from file [`BooksAPI.js`](src/BooksAPI.js) :

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

## Routes

There are 2 routes used one for main page which you can reach by start the project

```bash
http://localhost:3000
```

and the other route used for search page

```bash
http://localhost:3000/search
```
