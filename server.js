const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes/forum-routes'));

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => {
//     console.log(`App listening on port ${PORT}!`);
// });;})