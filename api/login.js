export default function handler(req, res) {
  const role = "user";

  res.setHeader(
    "Set-Cookie",
    `role=${role}; Path=/; Max-Age=300`
  );

  res.json({
    success: false,
    message: "Invalid Credentials!"
  });
}
