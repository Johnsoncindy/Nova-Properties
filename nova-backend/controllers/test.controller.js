import jwt from "jsonwebtoken";

export const shouldBeLoggedIn = async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Unauthorized!" });
  });
  res.status(200).json({ message: "Authenticated" });
};

export const shouldBeAdmin = async (req, res) => {};
