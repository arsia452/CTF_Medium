export default function handler(req, res) {
    const role = "user";

    res.setHeader(
        "Set-Cookie",
        `role=${role}; Path=/`
    );

    res.json({
        success: false,
        message: "Invalid Credentials!"
    });
}
