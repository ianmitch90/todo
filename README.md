# Task Tracker 
[![Build Status](https://travis-ci.org/ianmitch90/todo.svg?branch=master)](https://travis-ci.org/ianmitch90/todo)
## :warning: View Live Version: https://ianmitch90.github.io/todo/

### :warning: Beware!! :warning: The live version does not have full support from the routes, the root of the live version points outside the scope of the app, however due to browser history & this project auto caching itself, it can try to stay alive and work with regular use.

### :white_check_mark: For the proper experience/and Redux working properly and not throwing errors with each request please use the Local Version! information on how to download and install is below. :smile:

![Task Tracker Gif](https://thumbs.gfycat.com/ImmediateRaggedEuropeanfiresalamander-size_restricted.gif)

## Overview :100:

* Usage and Installation
* Getting Started
* Technologies Used
* Deployment
* Helpful Resources
* Acknowledgments

## Usage & Installation :floppy_disk:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started :nail_care:

To clone the portfolio from Terminal

```
git clone https://github.com/ianmitch90/todo.git
```
### Installing :runner:

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
# Technologies: :rocket:
* [Redux](https://redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/)
* [Material-UI](https://material-ui.com/)

## Deployment :ship:

I am using Travis CI so be aware that my settings are not shared and you will have to set up your own settings/keys between travis and github ( or other hosting platform )

# Helpful Resources :bookmark:

## React Saga :izakaya_lantern:

React Saga is pretty difficult to grasp at first, however if you are familiar with thunk you might have a easier time learning this middleware library. If you are familiar with Pub Sub's or rxJS this should be easier to understand.

These resources were instrumental in completing this project:

* [HISTORY OBJECT!!! on react-router. so important](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md)
* [Intro To Redux Saga by Flavio Copes](https://flaviocopes.com/redux-saga/)
* [Beginner Tutorial](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
* [Understanding Generator Functions & Using Redux Saga](https://www.youtube.com/watch?v=o3A9EvMspig)
* [Fetching data from an API using Redux Saga](https://www.youtube.com/watch?v=jQ4YD7Ip6T4)
* [How to add Redux Saga to Create React App](https://www.youtube.com/watch?v=Bq_Hkj-G-4c)

## Author :pencil2:

* **Ian Mitchell** - *Sole Author* - [ianmitch90](https://github.com/ianmitch90)

## License :scroll:

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
