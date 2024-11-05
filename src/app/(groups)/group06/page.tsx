import TableComponent from "@/src/components/TableComponent"

const group = [{"name":"თემო ველიჯანაშვილი","score":60},
  {"name":"შიო ელიკაშვილი","score":35},
  {"name":"ლუკა გიორგაძე","score":25},
  {"name":"ანდრია ღადუაშვილი","score":20},
  {"name":"დათო მელიქიძე","score":5},
  {"name":"ბექა ბეჟანიშვილი","score":5},
  {"name":"ბუბა ებრალიძე","score":0},
  {"name":"ლაზაღე ღოღობერიძე","score":0},
  {"name":"დავით მეფარიშვილი","score":0},
  {"name":"ნოდიკო ბეჟანიძე","score":0},
  {"name":"ნიკოლოზ ჩაგანავა","score":0},
  {"name":"დაჩი ჯაჯანაშვილი","score":0},
  {"name":"ლაზრე ღოღობერიძე","score":0}]
export default function page() {
  return (
    <div>
      <TableComponent arr={group} urlId="06" />
    </div>
  )
}

