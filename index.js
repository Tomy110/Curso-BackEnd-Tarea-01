const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).sendFile('index.html');
})

app.get('/form', (req, res) => {
    res.send(`
    <h1 style="margin-top: 5%; font-size: 50px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; display: flex; justify-content: center;">Bienvenidos al formulario</h1>
    <form style="border: 1px solid #ccc; background-color: #f2f2f2; padding: 20px; border-radius: 5px;">
        <h4>Registrate</h4>
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" style="width: 100%; padding: 8px; margin-bottom: 10px;" required><br>
        
        <label for="nombre">Apellido:</label><br>
        <input type="text" id="apellido" name="nombre" style="width: 100%; padding: 8px; margin-bottom: 10px;" required><br>
        
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" placeholder="pepe@gmail.com" style="width: 100%; padding: 8px; margin-bottom: 10px;" required><br>
        
        <label for="mensaje">Contraseña:</label><br>
        <input class="controls" type="password" name="password" id="password" minlength="8" maxlength="15" placeholder="Password" style="width: 100%; padding: 8px; margin-bottom: 10px;" required><br>
        
        <button type="submit" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 3px; cursor: pointer; width: 100%;">Enviar</button>
    </form>
    `)
})

app.get('/redirect', (req, res) => {
    res.status(302).redirect('/');
})



app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server listening en http://localhost:${PORT}`);

});


