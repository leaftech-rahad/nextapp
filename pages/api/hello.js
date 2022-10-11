// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { context } from "../../prisma/context.js";
export default async function handler(req, res) {
  const data = JSON.parse(
    JSON.stringify(
      await context.prisma.user.findMany({
        select: { id: true, name: true, createdAt: true },
      })
    )
  );

  res.status(200).json(data);
}
