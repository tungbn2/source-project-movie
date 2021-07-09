import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "@/main"
import firebase from "firebase/app";
import "firebase/auth";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {displayName: ``, email: ``, password: ``, uid: ``} ,
        dataMovies: [],
        loginStatus: `none`,
        userInfor:{},
        LikedMovies:[],
        movieInfor: {}
    },
    getters: {

    },
    mutations:{
        set_dataMovies (state, payload){
            state.dataMovies = payload;
        },
        changeStatus (state, payload) {
            state.loginStatus = payload;
        },
        getUser (state, payload){
            state.user = payload;
            state.loginStatus = `none`
        },
        getUserName (state) {
             return state.user.displayName;
        },
        getUserInfor (state, payload){
            state.userInfor = payload;
        },
        getLikedMovies (state, payload) {
            state.LikedMovies = [];
            for (let movie of state.dataMovies){
                if (payload.indexOf (movie.id) != -1) {
                    state.LikedMovies.push (movie)
                }
            }
        },
        getMovieInfor (state, payload) {
            state.movieInfor = payload;
        },
        addLikeMovie (state){
            return state.LikedMovies;
        },
        signOut(state){
            state.user = {displayName: ``, email: ``, password: ``, uid: ``}
            state.userInfor = {}
        },
        updateMovie (state, data){
            let id = data.id;
            state.dataMovies[id] = data.data;
        },
        deleteMovie (state, id){
            delete state.dataMovies[id]
        },
        changeAccount (state, account){
            state.userInfor.account = account;
        },
    },
    actions: {
        getDataMovies ({commit}){
            let data = []
            // let res = await 
            db.collection("dataMovies").get()
            .then (res => {
                res.forEach(doc => {
                    let obj = doc.data();
                    obj.id = doc.id;
                    data.push (obj);
                });
            } )
            commit (`set_dataMovies`, data);
        },

        signIn ({commit, dispatch },payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
                // Signed in
                let user = firebase.auth().currentUser;
                
                console.log(user);
                if (user) {
                    dispatch(`getUserInfor`, user)
                   commit (`getUser`, user)
                  }
                // ...
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        },
        registerUser ({commit}, register) {
            let mail = register.email;
            let pass = register.password;
            firebase.auth().createUserWithEmailAndPassword(mail, pass)
            .then(() => {
                let user = firebase.auth().currentUser;
                db.collection("users").doc(user.uid).set({
                    account: `free`,
                    likedMovies:[],
                    email: register.email,
                    name: register.name
                });
                user.updateProfile({
                    displayName: register.name,
                  }).then(() => {
                    commit (`getUser`, user)
                  }).catch((error) => {
                    console.log(error);
                  });  
            })
        },
        signOut ({commit}) {
            // let user = null;
            firebase.auth().signOut();
            commit(`signOut`)
        },
        getUserInfor ({commit}, user) {
            // let user = state.user;
            let docRef = db.collection("users").doc(user.uid);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    commit (`getUserInfor`, doc.data())
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        },
        addMovie ({commit},payload) {
            let data = [];
            let newCityRef = db.collection("dataMovies").doc();
            newCityRef.set(payload);
            alert (`add data successfully`)
            db.collection("dataMovies").get()
            .then (res => {
                res.forEach(doc => {
                    let obj = doc.data();
                    obj.id = doc.id;
                    data.push (obj);
                });
            } )
            commit (`set_dataMovies`, data);
        },
        getMovieInfor ({commit}, payload) {
            let docRef = db.collection("dataMovies").doc(payload);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    commit (`getMovieInfor`, doc.data())
                } else {
                    // doc.data() will be undefined in this case
                    console.log ("No such document!");
                }
            }).catch(() => {
                console.log ("Error getting document:");
            });
            
        },
        addLikeMovie ({commit, state}, MoveId){
            
            let user = firebase.auth().currentUser;
            if (!user) { alert (`Plase, log in`)}
            else if (state.userInfor.likedMovies.indexOf(MoveId) != -1){
                alert (`This movie is in Liked List. Please check in Profile`)
            }
            else {
                state.userInfor.likedMovies.push (MoveId);
                console.log(state.userInfor.likedMovies);
                db.collection('users')
                .doc(user.uid)
                .update(
                { likedMovies: state.userInfor.likedMovies},
                )
            
            //     let newCityRef = db.collection("dataMovies").doc(user.uid);
            //     newCityRef.update({
            //         regions: firebase.firestore.FieldValue.arrayUnion(MoveId)
            //     });
            }
            commit (`addLikeMovie`);
        },
        updateMovie ({commit},data){
            var dataMovie = db.collection("dataMovies").doc(data.id);

            // console.log(data.id);
            dataMovie.update(data.data)
            .then(() => {
                commit (`updateMovie`, data)
                alert ("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

        },
        deleteMovie ({commit}, id) {

            db.collection("dataMovies").doc(id).delete().then(() => {
                commit (`deleteMovie`,id)
                alert("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        },
        changeAccount ({commit}, data){
            let userRef = db.collection("users").doc(data.id);
            userRef.update({
                account: data.account
            })
            .then(() => {
                commit (`changeAccount`, data.account)
                alert ("Document successfully updated!");
            })
            .catch((error) => {

                console.error("Error updating document: ", error);
            });
        }

    },
    plugins: [createPersistedState()],
})