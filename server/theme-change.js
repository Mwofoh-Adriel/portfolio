const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.use((req, res, next) => {
    // Get the theme from the cookies
    const theme = req.cookies.theme || 'light-mode';

    // Add the theme to the response locals
    res.locals.theme = theme;

    next();
});

app.get('/', (req, res) => {
    // Render the index page with the theme
    res.render('index', { theme: res.locals.theme });
});

app.listen(3000, () => console.log('Server started on port 3000'));