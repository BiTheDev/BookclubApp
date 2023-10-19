import User from '../Models/userModel.js';
import { hash, compare } from 'bcrypt';
const { sign } = 'jsonwebtoken';

export async function register(req, res) {
    try {
        // Check if user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await hash(req.body.password, 10);

        // Create a new user
        user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        await user.save();

        // Return success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const validPassword = await compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export async function updateUser(req, res) {
    try {
        const userId = req.user._id;
        const updates = req.body;
        const user = await User.findByIdAndUpdate(userId, updates, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user info', error });
    }
}

export async function getUserInfo(req, res) {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user info', error });
    }
}


export async function addCurrentBook(req, res) {
    try {
        const userId = req.user._id;
        const bookId = req.body.bookId;
        const user = await User.findById(userId);
        user.currentBooks.push(bookId);
        await user.save();
        res.status(200).json({ message: 'Book added to current reads' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding book', error });
    }
}


export async function completeBook(req, res) {
    try {
        const userId = req.user._id;
        const { bookId } = req.body;

        const user = await User.findById(userId);
        const bookIndex = user.currentBooks.indexOf(bookId);

        if (bookIndex > -1) {
            user.currentBooks.splice(bookIndex, 1);
            user.completedBooks.push({ bookId, completionDate: new Date() });
            await user.save();
            res.status(200).json({ message: 'Book marked as completed' });
        } else {
            res.status(400).json({ message: 'Book not found in current reads' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error completing book', error });
    }
}




// ... Add other user-related controllers
