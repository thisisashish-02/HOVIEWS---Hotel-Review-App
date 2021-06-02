# HOVIEWS---Hotel-Review-App
A Node.js web application project

## Live Demo
To see the app in action, go to https://ashish02-hoviews.herokuapp.com/

## Features
* Authentication:

  * User login with username and password

* Authorization:

  * One cannot add review and hotel without being authenticated

  * One cannot edit or delete hotels and comments created by other users

* Manage hotel reviews with basic functionalities:

  * Create, edit and delete hotels

  * Upload hotel photos

  * Display hotel location on Mapbox

* Manage user account with basic functionalities:

  * Profile page setup with sign-up

* Flash messages responding to users' interaction with the app

* Responsive web design

### Custom Enhancements

* Add hotel photos when editing campgrounds

* Use Helmet to strengthen security
 
## Getting Started

> This app contains API secrets and passwords that have been hidden deliberately, so the app cannot be run with its features on your local machine. However, feel free to clone this repository if necessary.

### Clone or download this repository

```sh
git clone https://github.com/thisisashish-02/HOVIEWS---Hotel-Review-App.git
```

### Install dependencies

```sh
npm install
```

or

```sh
yarn install
```

## Built with

### Front-end

* [ejs](http://ejs.co/)
* [Mapbox APIs](https://docs.mapbox.com/mapbox-gl-js/api/)
* [Bootstrap](https://getbootstrap.com/docs/5.0/)

### Back-end

* [express](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [mongoose](http://mongoosejs.com/)
* [helmet](https://helmetjs.github.io/)
* [passport](http://www.passportjs.org/)
* [passport-local](https://github.com/jaredhanson/passport-local#passport-local)
* [express-session](https://github.com/expressjs/session#express-session)
* [method-override](https://github.com/expressjs/method-override#method-override)
* [cloudinary](https://cloudinary.com/)
* [geocoder](https://github.com/wyattdanger/geocoder#geocoder)
* [connect-flash](https://github.com/jaredhanson/connect-flash#connect-flash)

### Platforms

* [Cloudinary](https://cloudinary.com/)
* [Heroku](https://www.heroku.com/)

## License

#### [MIT](./LICENSE)
