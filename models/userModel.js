import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    }
});


// Pré Hook - avant d'enregistrer dans MongoDB
UserSchema.pre('save',  async function (next) {
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
});

// Ajouter une méthode pour vérifier le mot de passe

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;

    const isSame = await bcrypt.compare(password, user.password);
    return isSame // return true or false
}


const UserModel = mongoose.model('User', UserSchema);

export default UserModel;