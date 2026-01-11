// import auth from "../config/firebase-config.js";

// export const VerifyToken = async (req, res, next) => {
//   const token = req.headers.authorization.split(" ")[1];

//   try {
//     const decodeValue = await auth.verifyIdToken(token);
//     if (decodeValue) {
//       req.user = decodeValue;
//       return next();
//     }
//   } catch (e) {
//     return res.json({ message: "Internal Error" });
//   }
// };

// export const VerifySocketToken = async (socket, next) => {
//   const token = socket.handshake.auth.token;

//   try {
//     const decodeValue = await auth.verifyIdToken(token);

//     if (decodeValue) {
//       socket.user = decodeValue;

//       return next();
//     }
//   } catch (e) {
//     return next(new Error("Internal Error"));
//   }
// };


// import auth from "../config/firebase-config.js";

// // HTTP Requests (API)
// export const VerifyToken = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     const token = authHeader.split(" ")[1];

//     const decoded = await auth.verifyIdToken(token);
//     req.user = decoded;

//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// // Socket.io
// export const VerifySocketToken = async (socket, next) => {
//   try {
//     const token = socket.handshake.auth?.token;

//     if (!token) {
//       return next(new Error("No socket token"));
//     }

//     const decoded = await auth.verifyIdToken(token);
//     socket.user = decoded;

//     next();
//   } catch (error) {
//     next(new Error("Socket authentication failed"));
//   }
// };



import auth from "../config/firebase-config.js";

export const VerifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = await auth.verifyIdToken(token);

    req.user = decoded;
    next();
  } catch (err) {
    console.error("VerifyToken error:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const VerifySocketToken = async (socket, next) => {
  try {
    const token = socket.handshake.auth?.token;
    if (!token) return next(new Error("No socket token"));

    const decoded = await auth.verifyIdToken(token);
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error("Unauthorized socket"));
  }
};
