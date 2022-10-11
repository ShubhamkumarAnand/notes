// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;
  try {
    await prisma.note.create({
      data: {
        title,
        content,
      },
    });
    res.status(200).json({ message: "Note Created" });
  } catch (error) {
    console.log("Failed to create");
  }
}
