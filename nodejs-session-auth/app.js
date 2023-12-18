const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 3600000,
    },
}));

app.use(express.static('public')); // Serve static files from the 'public' directory

app.use(express.json());

// Sample user data (replace with database interactions in a real app)
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        req.session.userId = user.id;
        res.json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
        res.status(400).json({ message: 'Username already taken' });
    } else {
        const newUser = { id: users.length + 1, username, password };
        users.push(newUser);
        req.session.userId = newUser.id;
        res.status(201).json({ message: 'Signup successful!' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
