import { prisma } from "@/lib/prisma";

export async function DELETE(req, { params }) {
  const id = params.id;

  if (!id) {
    return new Response("Missing notice ID", { status: 400 });
  }

  try {
    await prisma.generatedNotice.delete({
      where: { id },
    });

    return new Response("Deleted", { status: 200 });
  } catch (error) {
    console.error("Delete error:", error);
    return new Response("Failed to delete notice", { status: 500 });
  }
}
