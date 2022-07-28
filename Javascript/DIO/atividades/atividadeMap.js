function getAdmins(map) {
  let admins = []
  for([key, value] of map){
    if(value === 'Admin'){
    admins.push(key)
    }
  }
  return admins
}

const usuarios = new Map ()

usuarios.set('Henrick', 'Admin')
usuarios.set('Ana', 'Admin')
usuarios.set('Jorge', 'User')
usuarios.set('Stephany', 'Admin')

console.log(getAdmins(usuarios))

// Metodos de map (

// .set(para adicionar elementos),

// .get(para checar o valor dentro de 'Map'),

// .delete(para deletar o elemento dentro de set))
