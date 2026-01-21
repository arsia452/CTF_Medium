export default function handler(req, res) {
  const cookie = req.headers.cookie || "";

  if (!cookie.includes("role=admin")) {
    return res.status(403).json({
      error: "Admins only"
    });
  }

  res.json({
    export: {
      storeName: "Val Entinesday Shop",
      adminEmail: "thegreatest@val.me",
      flag: "FLAG{Val_Hates_Cookies}"
    }
  });
}

