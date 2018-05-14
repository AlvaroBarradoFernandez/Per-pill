import firebase from 'firebase'
import GoogleAuth from 'vue-google-auth'
import Vue from 'vue'
import FireUpload from './FireUpload'
export default {
  name: 'login-registro',
  components: {},
  props: [],
  data () {
    return {
      blLoginVisible:true,
      sTitulo:"Login PerPill",
      srEmail:"",
      srPass:"",
      srFirst:"",
      srAge:"",
      srDate:"",
      srHeight:"",
      srImage:"",
      srWeight:"",
      slEmail:"",
      slPass:""

    }
  },

  computed: {
  },
  mounted () {
  },
  methods: {
    clickDeBotonRegistrarse(evento){
      this.blLoginVisible=false;
      this.sTitulo="Registro";
    },
    clickDeBotonCancelar(evento){
      this.blLoginVisible=true;
      this.sTitulo="Registro";
    },
    clickDeBotonAceptarReg(evento){
      var that=this;
      firebase.auth().createUserWithEmailAndPassword(this.srEmail, this.srPass).then(function(user) {
      var docRef = firebase.firestore().collection("Perfiles")
      docRef.doc(user.uid+"").set({pass:that.srPass,email:that.srEmail,first:that.srFirst,age:that.srAge,date:that.srDate,height:that.srHeight,url_image:that.srImage,weight:that.srWeight})
      alert("Te has registrado")
    })},



    clickDeBotonAceptarLog(evento){
      firebase.auth().signInWithEmailAndPassword(this.slEmail, this.slPass).then(function(user) {
        if (user){
          location.href="http://localhost:8080/#/Perfil"
          alert("Te has logueado")
        }


    })},
    clickDeBotonGoogle(evento){
      var provider = new firebase.auth.GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: 'select_account'
      });

      alert("Te vas a loguear con la cuenta de Google")
      firebase.auth().signInWithPopup(provider).then(function(result){

        var token = result.credential.accesToken;
        var user = result.user;
        
        location.href="http://localhost:8080/#/Perfil"

      }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
    },
    clickDeLogOut(evento){
      alert("Adiosss")

          firebase.auth().signOut().then(() => {
            this.user = null
          }).catch(err => console.log(error))
            this.blLoginVisible=true;
    }
  }
}
