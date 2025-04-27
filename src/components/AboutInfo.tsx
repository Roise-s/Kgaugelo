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
      invoice: "I'm from Pretoria, South Africa. But am currently in Welkom, Free State.",
      paymentStatus: "I'm currently a student at CUT",
      totalAmount: "",
      paymentMethod: "I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️",
    }
  ]
  
  export function AboutInfo() {
    return (
      <Table>
        <TableCaption>Born in 2005, Am 20 years old</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Hello, My name is Kgaugelo Tladi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <>
                <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                </TableRow>
                <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.paymentStatus}</TableCell>
                </TableRow>
                <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.paymentMethod}</TableCell>
                </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    )
  }
  