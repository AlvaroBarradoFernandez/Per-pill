import firebase from 'firebase'
import {Perfil} from '../mixins/props'
export default {
  name: 'perfil',
  components: {},
  props: [],
  data () {
    return {
      perfiles: [],
      miperfil: Perfil
    }
  },
  created: function(){
    firebase.auth().onAuthStateChanged((user) => {
      console.log("AAAAAAAAAA");
      var that = this
      this.props_objuser = user
      if(user){
        //console.log(user.getIdToken()+"")
        this.props_blIsloggedIn = true
        var docRef = firebase.firestore().collection("Perfiles").doc(user.uid+"");
        docRef.get().then(function(doc){
          if(doc.exists){
            console.log("Document data: ", doc.data());
            // this.props_docperfil = doc.data()
            //this.setPerfil(doc.id, doc.data())
            that.miperfil = new Perfil(doc.id, doc.data())
          }else{
            console.log("No such Document!");
          }
        }).catch(function(error){
          console.log("Error getting Document:", error);
        });
      }else{
        this.props_blIsloggedIn = false
      }
      //EventBus.$emit('loginregister_userstatedchanged',this.props_blIsloggedIn)
    });
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    clickDeLogOut(evento){
      alert("Adiosss")
          firebase.auth().signOut().then(() => {
            this.user = null
          }).catch(err => console.log(error))
            location.href="http://localhost:8080/#/"
    },
descargarPerfiles: function(){
  var that=this
  firebase.firestore().collection("Perfiles").onSnapshot(function(querySnapshot){
    querySnapshot.forEach(function(doc){
      that.perfiles.push(new perfil(doc.id,doc.data()))
    });
  });
}
  }
}
