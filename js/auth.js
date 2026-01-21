export default function handler(req, res) {
    res.status(200).json({
        id: 2,
        username: "qpid",
        role: "user",
        features: {
            admin: false,
            export: false
        }
    });
}