# Task Tracker 
[![Build Status](https://travis-ci.org/ianmitch90/todo.svg?branch=master)](https://travis-ci.org/ianmitch90/todo)
## View Live Version: https://ianmitch90.github.io/todo/

![Task Tracker Gif](https://thumbs.gfycat.com/ImmediateRaggedEuropeanfiresalamander-size_restricted.gif)

## Overview

* Usage and Installation
* Technologies Used
* Helpful Resources
* Acknowledgments

## Usage & Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

To clone the portfolio from Terminal

```
git clone https://github.com/ianmitch90/todo.git
```
### Installing

Running and installing app:

To install and update node packages:

```
yarn install
```

To start the Project locally in development enviorment:
```
yarn start
```

To build the Project and run in production enviorment:
```
yarn build
```
* note that the service worker now works in both enviorments, if you wish to disable:

### index.js ( Top Level )
```
change the execution of the service worker

From:
serviceWorker.register();

To:
serviceWorker.unregister();

Save your changes.
```
# Technologies:
* [Redux](https://redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/)
* [Material-UI](https://material-ui.com/)

## Deployment

I am using Travis CI so be aware that my settings are not shared and you will have to set up your own settings/keys between travis and github ( or other hosting platform )

# Helpful Resources
##React Saga
React Saga is pretty difficult to grasp at first, however if you are familiar with thunk you might have a easier time learning this middleware library.

These resources were instrumental in completing this project:

* [HISTORY OBJECT!!! on react-router. so important](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md)
* [Intro To Redux Saga by Flavio Copes](https://flaviocopes.com/redux-saga/)
* [Beginner Tutorial](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
* [Understanding Generator Functions & Using Redux Saga](https://www.youtube.com/watch?v=o3A9EvMspig)
* [Fetching data from an API using Redux Saga](https://www.youtube.com/watch?v=jQ4YD7Ip6T4)
* [How to add Redux Saga to Create React App](https://www.youtube.com/watch?v=Bq_Hkj-G-4c)

## Author

* **Ian Mitchell** - *Sole Author* - [ianmitch90](https://github.com/ianmitch90)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
