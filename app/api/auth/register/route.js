import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, password, phone, companyName } = body;

    if (!email || !password || !fullName || !companyName) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name: fullName,
        email,
        phone,
        password: hashedPassword,
        role: "USER",
        // Create associated company and membership
        companyMemberships: {
          create: {
            role: "ADMINISTRATOR",
            company: {
              create: {
                name: companyName,
              },
            },
          },
        },
      },
      include: {
        companyMemberships: {
          include: {
            company: true,
          },
        },
      },
    });

    return NextResponse.json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        company: newUser.companyMemberships[0]?.company || null,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
