import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      invoice: "HTML",
      paymentStatus: "React.js",
      totalAmount: "MySQL",
      paymentMethod: "Node.js",
    },
    {
      invoice: "CSS",
      paymentStatus: "Next.js",
      totalAmount: "MongoDB",
      paymentMethod: "Express.js",
    },
    {
      invoice: "SASS/SCSS",
      paymentStatus: "Shadcn/ui",
      totalAmount: "Appwrite",
      paymentMethod: "",
    },
    {
      invoice: "TailwindCSS",
      paymentStatus: "HeadlessUI",
      totalAmount: "Git & GitHub",
      paymentMethod: "",
    },
    {
      invoice: "JavaScript",
      paymentStatus: ".Net Framework",
      totalAmount: "VS Code",
      paymentMethod: "",
    },
    {
      invoice: "TypeScript",
      paymentStatus: "React Native",
      totalAmount: "Visual Studio 2022",
      paymentMethod: "",
    },
    {
      invoice: "C#",
      paymentStatus: "Material UI",
      totalAmount: "Postman",
      paymentMethod: "",
    },
  ]
  
  export function TableDemo() {
    return (
      <Table>
        <TableCaption>This is my Tech Stack</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Languages</TableHead>
            <TableHead>Front-End Framework</TableHead>
            <TableHead>Back-End Framework</TableHead>
            <TableHead>Database & Tools</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  