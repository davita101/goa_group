import TableComponent from "@/src/components/TableComponent"


export default function page() {
    const group = [
        { "name": "გიორგი გურიელი", "score": 15 },
        { "name": "ლადო ნიჟარაძე", "score": 30 },
        { "name": "ელენე გაფრინდაშვილი", "score": 5 },
        { "name": "ლუკა სურმანიძე", "score": 0 },
        { "name": "გიორგი კოსტავა", "score": 0 },
        { "name": "ნიკა ბლიაძე", "score": 5 },
        { "name": "ლუკა გვილავა", "score": 10 },
        { "name": "ლუკა ციხელაშვილი", "score": 0 },
        { "name": "რომან მაღრაძე", "score": 0 },
        { "name": "ლუკა შუკვანი", "score": 15 },
        { "name": "დავით ქარაქუსოვი", "score": 20 },
        { "name": "გიორგი ქრისტესიაშვილი", "score": 5 },
        { "name": "ლუკა ფიფია", "score": 15 },
        { "name": "გელუკა გენებაშვილი", "score": 30 },
        { "name": "ნიკა მალაყმაძე", "score": 40 },
        { "name": "ანა კაპანაძე", "score": 5 },
        { "name": "ნიკოლოზ ქათამაძე", "score": 25 },
        { "name": "გაბო დუმბაძე", "score": 25 },
        { "name": "ანდრია ცაცუა", "score": 20 },
        { "name": "ნიკა მაღლაფერიძე", "score": 0 },
        { "name": "პაატა ცუცქირიძე", "score": 0 },
        { "name": "თორნიკე მღებლიშვილი", "score": 20 },
        { "name": "რეზი ხარებავა", "score": 0 },
        { "name": "გურამ გელხაური", "score": 20 },
        { "name": "გიორგი ჩიღვინაძე", "score": 15 },
        { "name": "დავით ლიპარტელიანი", "score": 10 },
        { "name": "ლუკა კელეპტრიშვილი", "score": 0 },
        { "name": "ლუკა პიტნავა", "score": 5 },
        { "name": "ნიკოლოზ მელიჯანაშვილი", "score": 0 },
        { "name": "ლუკა ოყროშიძე", "score": 0 },
        { "name": "ლუკა სუარიშვილი", "score": 0 },
        { "name": "საბა ლაცაბიძე", "score": 0 },
        { "name": "ნინო ზარდიაშვილი", "score": 0 },
        { "name": "ზურა დავითაძე", "score": 0 },
        { "name": "ბარბარე შარიქაძე", "score": 20 },
        { "name": "ლუკა ტოკლიკიშვილი", "score": 15 },
        { "name": "დავით ბერკაცაშვილი", "score": 0 }]
    return (
        <div>
            <TableComponent arr={group} urlId="47" />
        </div>
    )
}
