export class Perfil{
  constructor(id, data){
    this.id = id
    this.email = data.email
    this.pass = data.pass
    this.first = data.first
    this.age = data.age
    this.date = data.date
    this.height = data.height
    this.url_image = data.url_image
    this.weight = data.weight
    console.log("Nombre Perfil:"+this.first)
  }
}

export default{
    computed:{
    setPerfil (id, datosPerfil){
    this.props_docperfil= new Perfil(id,datosPerfil)
}
  },
  data(){
    return{
      props_blIsloggedIn: false,
      props_objuser: {},
      props_docperfil: {},
      props_per:Perfil
    }
  }
}
