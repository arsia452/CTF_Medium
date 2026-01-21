export default function handler(req, res) {
    const { uid } = req.query;

    if (!uid) {
        return res.status(400).json({ error: "missing uid" });
    }

    if (uid === "1") {
        return res.status(200).json({
            username: "admin",
            role: "admin",
            hint: "try /api/export"
        });
    }

    res.status(403).json({ error: "forbidden" });
}