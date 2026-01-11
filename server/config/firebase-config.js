// import { initializeApp, cert } from "firebase-admin/app";
// import { getAuth } from "firebase-admin/auth";

// import serviceAccountKey from "./serviceAccountKey.json" assert { type: "json" };

// const app = initializeApp({
//   credential: cert(serviceAccountKey),
// });

// const auth = getAuth(app);
// export default auth;

// import { initializeApp, cert } from "firebase-admin/app";
// import { getAuth } from "firebase-admin/auth";
// import fs from "fs";

// // Read JSON manually because Node doesn't support `assert { type: "json" }`
// const serviceAccountKey = JSON.parse(
//   fs.readFileSync(new URL("./serviceAccountKey.json", import.meta.url))
// );

// const app = initializeApp({
//   credential: cert(serviceAccountKey),
// });

// const auth = getAuth(app);

// export default auth;

import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import fs from "fs";
import path from "path";

// JSON path correct-a read pannuvom
const serviceAccountPath = path.join(
  process.cwd(),
  "server",
  "config",
  "serviceAccountKey.json"
);

if (!fs.existsSync(serviceAccountPath)) {
  throw new Error(
    "Firebase serviceAccountKey.json missing! Please add it in server/config/"
  );
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf-8"));

const app = initializeApp({
  credential: cert(serviceAccount),
});

const auth = getAuth(app);

export default auth;
