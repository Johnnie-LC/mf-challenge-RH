# mf-challenge-RH

## Requirements

* Node.js v20.5.0
* NPM 9+
* Python 3.8+

## installation

1. Clone the repository: https://github.com/Johnnie-LC/wordleJ.git

## TO LOCAL RUN
   Use node v20.5.0
   
### Install the dependencies in each repository 
   
```js
   cd shell
   npm i
```

```js
   cd app1
   npm i
```

```js
   cd app2
   npm i
```

#### To install the translation API

Make sure you have Python installed (3.8 or higher is recommended), then simply run:
```js
  git clone https://github.com/LibreTranslate/LibreTranslate
  cd LibreTranslate
  pip install -e .
```

To run locally  

to run traslation API
```js
  cd LibreTranslate
  python main.py
```
run in http://localhost:5000

repo app1
```js
  cd app1
  npm run dev
```
run in http://localhost:3001

repo app2
```js
  cd app2
  npm run dev
```
run in http://localhost:3002) 

repo shell
```js
  cd shell
  npm run dev
```
Then open a web browser to http://localhost:3000
