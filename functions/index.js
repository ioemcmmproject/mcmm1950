const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');



const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

var property = function(address_city,address_number,address_state,address_street,architect,building_type,characteristics_sum,decade,neighborhood,property_address){
	this.address_city = address_city;
	this.address_number = address_number;
	this.address_state = address_state;
	this.address_street = address_street;
	this.architect = architect;
	this.building_type = building_type;
	this.characteristics_sum = characteristics_sum;
	this.decade = decade; 
	this.neighborhood = neighborhood;
	this.property_address = property_address;
};	

var key = childSnapshot.key;

while(i = 0; i<key.length + 1; i++) {

	var property = function(address_city,address_number,address_state,address_street,architect,building_type,characteristics_sum,decade,neighborhood,property_address){
	this.address_city = address_city;
	this.address_number = address_number;
	this.address_state = address_state;
	this.address_street = address_street;
	this.architect = architect;
	this.building_type = building_type;
	this.characteristics_sum = characteristics_sum;
	this.decade = decade; 
	this.neighborhood = neighborhood;
	this.property_address = property_address;
	}
}

function getvalue() {
    const ref = firebaseApp.database().ref();
    return ref.once('value').then(snap => snap.val());
}

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');


app.get('/', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    getvalue().then(value => {
        response.render('index', { value });
    });
});

app.get('/value.json', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    getvalue().then(value => {
        response.json(value);
    });
});

exports.app = functions.https.onRequest(app);
