export default function handler(req, res) {
  res.status(200).json([
    {
      id: 3,
      title: "Mini Framework CSS",
      summary: "Framework CSS de uso personal",
      publishedAt: "2022/04/19",
      urls: {
        demo: null,
        code: "https://github.com/basmonje/css",
      },
    },
    {
      id: 2,
      title: "Shopping Vanilla",
      summary: "Evaluación Final de Curso Javascript Master, Escalab Academy.",
      publishedAt: "2021/11/13",
      urls: {
        demo: "https://basmonje.github.io/shopping_escalab/",
        code: "https://github.com/basmonje/shopping_escalab",
      },
    },
    {
      id: 1,
      title: "Replach",
      summary: "Evaluación Final de curso de React Developer",
      publishedAt: "2022/03/10",
      urls: {
        demo: "https://replach.vercel.app/",
        code: "https://github.com/basmonje/replach",
      },
    },
  ]);
}
