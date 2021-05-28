// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path";
export default (req, res) => {
  // res.status(200).json({ name: 'John Doe' })
  res.send(path.join(process.cwd(), "public", "resume.pdf"));
  // res.sendFile("resume.pdf");
};
