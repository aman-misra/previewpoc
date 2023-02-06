// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import * as yup from "yup";
import axios from "axios";
import fetch, { fileFromSync } from "node-fetch";

let formSchema = yup.object().shape({
  image: yup.mixed().required(),
  bearer_token: yup.string().required(),
  userId: yup.string().required(),
});

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
    console.log(isValid, "isValid");

    try {
      const imageRegister = await fetch(
        `https://api.linkedin.com/v2/assets?action=registerUpload`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${fields.bearer_token}`,
            "X-Restli-Protocol-Version": "2.0.0",
          },
          body: JSON.stringify({
            registerUploadRequest: {
              recipes: ["urn:li:digitalmediaRecipe:feedshare-image"],
              owner: `urn:li:person:${fields.userId}`,
              serviceRelationships: [
                {
                  relationshipType: "OWNER",
                  identifier: "urn:li:userGeneratedContent",
                },
              ],
            },
          }),
        }
      );

      const imageRegisterResponse: any = await imageRegister.json();
      // console.log(imageRegisterResponse, "imageRegisterResponse");

      const imageUploadUrl =
        imageRegisterResponse.value.uploadMechanism[
          "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"
        ].uploadUrl;

      const imageAsset = imageRegisterResponse.value.asset;

      await fetch(imageUploadUrl, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${fields.bearer_token}`,
        },
        body: fileFromSync(
          "/home/sysadmin/Om/Personal/previewpoc/public/images/image-one.jpg"
        ),
      });

      const response = await fetch(`https://api.linkedin.com/v2/ugcPosts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${fields.bearer_token}`,
          "X-Restli-Protocol-Version": "2.0.0",
        },
        body: JSON.stringify({
          author: `urn:li:person:${fields.userId}`,
          lifecycleState: "PUBLISHED",
          specificContent: {
            "com.linkedin.ugc.ShareContent": {
              shareCommentary: {
                text: "Feeling humble after winning the contest. #proud",
              },
              shareMediaCategory: "IMAGE",
              media: [
                {
                  status: "READY",
                  description: {
                    text: "Center stage!",
                  },
                  media: `${imageAsset}`,
                  title: {
                    text: "Hackthon 2023",
                  },
                },
              ],
            },
          },
          visibility: {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
          },
        }),
      });

      console.log(response, "response------");

      let result = await response.json();

      console.log(result, "result");

      if (response.status == 201) {
        res.status(response.status).json({
          result,
          status: "submitted",
          files: files,
          fields: fields,
        });
      } else {
        res.status(400).json({ error: "failed in ugcPost uploading" });
      }
      return;
    } catch (e) {
      res.status(500).send({ error: "something went wrong" });
      return;
    }
  } catch (e) {
    res.status(400).send({ error: "invalid submission" });
    return;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == "POST") {
    let formResponse = await handlePostFormReq(req, res);

    console.log(formResponse, "formResponse");
  } else {
    res.status(404).send("method not found");
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
