# 🚀 Guía rápida para trabajar con el repositorio
 
 1. **Primero, clona el repositorio** usando el enlace que te pasaron.  
    Escribe en la terminal: `git clone` seguido del URL del repositorio.
 
 2. **Una vez clonado, entra a la carpeta del proyecto.**  
    Ve a tu escritorio (o donde se haya guardado) y entra a la carpeta del proyecto con los comandos:  
    `cd Desktop`  
    `cd` seguido del nombre de la carpeta del proyecto.
 
 3. **Abre Visual Studio Code.**  
    Para eso puedes escribir: `code .` y se abrirá VS Code con esa carpeta.
 
 4. **Abre la terminal en VS Code.**  
    - Presiona `Ctrl + ñ` para abrir la terminal integrada.  
    - Luego haz clic en el botón de más (+) en la esquina superior derecha de la terminal.  
    - Selecciona la opción que dice **"Split Terminal"** y elige **"Git Bash"** si no está seleccionado por defecto.
 
 5. **Verifica en qué rama estás actualmente.**  
    Para eso puedes usar el comando `git branch`.  
    Si estás en `main`, sigue los siguientes pasos.
 
 6. **Consulta qué ramas existen en el repositorio remoto** usando `git branch -r`.
 
 7. **Si tu rama aún no existe, cámbiate a una nueva rama con el nombre que te asignaron.**  
    Usa `git checkout -b` seguido del nombre de tu rama.  
    Esto creará una nueva rama basada en `main` y te moverá a ella.
 
 8. **Realiza los cambios que necesites en el proyecto.**
 
 9. **Cuando termines, guarda los cambios y agrégalos al repositorio con los siguientes pasos:**  
    - Primero, usa `git add .` para añadir todos los archivos modificados.  
    - Luego haz un commit con `git commit -m "tu mensaje aquí"`.  
    - Finalmente, sube tu rama al repositorio remoto con `git push -u origin` seguido del nombre de tu rama.
 
 10. **Por último, entra a GitHub, y ahí podrás crear un Pull Request.**  
     Revisa que todo esté bien y sigue los pasos para hacer el merge de tu rama con `main`.
 
 ---
 
 ✅ ¡Y listo! Ya estás colaborando correctamente en el proyecto 😎