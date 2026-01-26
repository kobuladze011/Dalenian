import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${Date.now()}-${file.name}`.replace(/\s+/g, "-");
  const uploadPath = path.join(process.cwd(), "public", "uploads", fileName);

  await writeFile(uploadPath, buffer);

  return NextResponse.json({ url: `/uploads/${fileName}` });
}

