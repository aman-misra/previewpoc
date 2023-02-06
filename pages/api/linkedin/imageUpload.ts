// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import FormData from "form-data";
import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import multer from "multer";

interface MulterRequest extends Request {
  file: any;
}
// import fs from "fs";

// type Data = {
//   name: string;
// };

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<any>
// ) {
//   if (req.method == "POST") {
//     // console.log(req);
//     // console.log(req.body);
//     // console.log(req);
//     res.status(200).json({ body: req.body, name: "John" });
//   } else {
//     res.status(200).json({ name: "John Doe11" });
//   }
// }

//2nd method

// const apiRoute = nc<MulterRequest, NextApiResponse>({
//   onError(error, req, res) {
//     res
//       .status(501)
//       .json({ error: `Sorry something Happened! ${error.message}` });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method "${req.method}" Not Allowed` });
//   },
// });

// apiRoute.use(multer().any());

// const upload = multer({
//   limits: {
//     fileSize: 1000000, // 1 MB
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//       return cb(new Error("Please upload image only"));
//     }

//     cb(null, true);
//   },
// });

// apiRoute.post((req, res) => {
//   //   console.log(req.files);
//   //   console.log(req.body);

//   //   const buffer = await sharp(req.file.buffer);
//   //   console.log(req.file.buffer, "buffer");
//   console.log(req.file, "file");
//   console.log(req.body, "body");
//   //   console.log("buffer");

//   res
//     .status(200)
//     .json({ data: "success", body: req.body, files: req.files, name: "aman" });
// });

// export default apiRoute;

// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, consume as stream
//   },
// };

//3rd method

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nc<MulterRequest, NextApiResponse>({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array("theFiles"));

apiRoute.post((req, res) => {
  console.log(req.file);

  res.status(200).json({ data: "success" });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
