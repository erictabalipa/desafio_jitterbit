const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const SECRET = "jitterbit-secret";

const user = {
    id: 1,
    username: "admin",
    password: bcrypt.hashSync("123456", 8)
};

exports.login = (req, res) => {

    const { username, password } = req.body;

    if (username !== user.username) {
        return res.status(401).json({ message: "Usuário inválido" });
    }

    const passwordValid = bcrypt.compareSync(password, user.password);

    if (!passwordValid) {
        return res.status(401).json({ message: "Senha inválida" });
    }

    const token = jwt.sign(
        { id: user.id },
        SECRET,
        { expiresIn: "1h" }
    );

    res.json({
        auth: true,
        token
    });
};