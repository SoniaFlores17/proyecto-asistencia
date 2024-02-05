export function authenticateUser(nombre, contraseña) {
  const validUser = { nombre: 'docente', contraseña: 'docente', role: 'docente' };

  if (nombre === validUser.nombre && contraseña === validUser.contraseña) {
    return validUser.role;
  } else {
    return null;
  }
}
