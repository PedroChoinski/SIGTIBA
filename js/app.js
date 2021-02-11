var firebaseConfig = {
    apiKey: "AIzaSyD-jblI0KlbGHwRMqX4SWUBosHi4E5uIq0",
    authDomain: "sistemas-de-geoinformacoes-cwb.firebaseapp.com",
    databaseURL: "https://sistemas-de-geoinformacoes-cwb.firebaseio.com",
    projectId: "sistemas-de-geoinformacoes-cwb",
    storageBucket: "sistemas-de-geoinformacoes-cwb.appspot.com",
    messagingSenderId: "433905061992",
    appId: "1:433905061992:web:dbc8d635b48eb8dfe82bdd",
    measurementId: "G-V8P0H93KJG"
};
firebase.initializeApp(firebaseConfig);

//referencias do bucket
const storage = firebase.storage();
var storageRef = storage.ref();
var y_880_890 = storageRef.child("sistema/880-889");

const db = firebase.firestore();

var anoMin = 1940;
var anoMax = 2010;

function create() {
    var textYear = {
        text: textYear
    };
    db.collection("anos").doc().set().then(() => {
        console.log("dados salvos");
    }).catch(() => {
        console.log("não foi possível salvar os dados");
    });
}


function read() {
    document.getElementById("textYear").innerText = " ";
    var currentYear = document.getElementById("myRange").value;
    var path = (currentYear.slice(1)) + "-" + (currentYear - 991);
    console.log(path);
    var docRef = db.doc("/sistema/anos/1880-1963/880-889");



    if (currentYear >= 1880 || currentYear < 1960) {
        docRef = db.doc("/sistema/anos/1880-1963/" + path);
        var txtInHTML = [];

        let query = docRef.get()
            .then(doc => {
                if (doc && doc.exists) {
                    var sorted = {},
                        key, a = [];

                    for (key in doc.data()) {
                        if (doc.data().hasOwnProperty(key)) {
                            a.push(key);
                        }
                    }

                    a.sort();

                    for (key = 0; key < a.length; key++) {
                        sorted[a[key]] = doc.data()[a[key]];
                    }
                    console.log(sorted);

                    var txtsplitted = (JSON.stringify(sorted)).split("\"");
                    console.log(txtsplitted);

                    for (var i = 0; i < txtsplitted.length; i++) {
                        console.log("esse é o número ", i, "do array:", txtsplitted[i]);
                        if (txtsplitted[i].length > 10)
                            document.getElementById("textYear").innerHTML += txtsplitted[i] + "<br><br>";
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });

    }
    else if (currentYear == 1960 || currentYear < 1990) {
        docRef = db.doc("/sistema/anos/1964-1985")
    } else if (currentYear >= 1990) {
        docRef = db.doc("/sistema/anos/1986-2010")
    }

    /*
        function putTxtYear(){
            docRef.get().then(function (doc) {
                if (doc.exists) {
                    txt1 = JSON.stringify(doc.data());
                    var format1 = txt1.split("\"");
                    document.getElementById("textYear").innerHTML = format1;
                } else {
                    console.log("Nenhum documento encontrado!");
                }
            }).catch(function (error) {
                console.log("Erro ao tentar ler documento.", error);
            })
        }*/
}