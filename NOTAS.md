1. **¿Por qué es importante que el mensaje de error del login sea genérico** ("Credenciales incorrectas") en lugar de especificar si fue el email o la contraseña lo que falló? 
Para que no sepan si fallo el email o el password por confidencialidad, de esta manera no pueden saber si algun usuario en concreto está registrado en esa WEB, APP... etc.

2. **¿Qué información NO deberías guardar nunca en el payload del JWT?** (pista: piensa en qué información es visible para cualquiera que tenga el token)
Datos sensibles en general pero en este caso se refiere al password_hash aunque esté encriptado y cualquier información que no le sirva al usuario es mejor no mostrarla.

3. **¿Por qué usamos `bcrypt.compare` en lugar de hashear la contraseña y compararla con `===`?**
Porque Bcrypt añade el valor que le indiquemos (10-14) llamado salt antes de hashear. Bcrypt genera un hash diferente cada vez, aunque la contraseña sea la misma.