import formidable from "formidable";
import * as yup from "yup";

let formSchema = yup.object().shape({
  //   name: yup.string().required(),
  //   email: yup.string().email().required(),
  image: yup.mixed().required(),
});

async function saveFormData(fields: any, files: any) {
  // save to persistent data store
}

async function validateFromData(fields: any, files: any) {
  try {
    await formSchema.validate({ ...fields, ...files });
    return true;
  } catch (e) {
    return false;
  }
}

async function handlePostFormReq(req: any, res: any) {
  const form = formidable({ multiples: true });

  const formData: any = new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject("error");
      }
      resolve({ fields, files });
    });
  });

  try {
    const { fields, files } = await formData;
    const isValid = await validateFromData(fields, files);
    if (!isValid) throw Error("invalid form schema");

    try {
      await saveFormData(fields, files);

      res.status(200).send({ status: "submitted", imageFile: files });
      return;
    } catch (e) {
      res.status(500).send({ status: "something went wrong" });
      return;
    }
  } catch (e) {
    res.status(400).send({ status: "invalid submission" });
    return;
  }
}

export default async function handler(req: any, res: any) {
  if (req.method == "POST") {
    await handlePostFormReq(req, res);
  } else {
    res.status(404).send("method not found");
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
