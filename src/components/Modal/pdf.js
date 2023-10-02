import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const MakePDF = ({customerInfo, productList, total, MakeName}) => {

    const PDFobject = productList.map(product => [{ text: MakeName(product) }])

    

    var pdfdoc = {
        info: {
            title: 'Тестовый PDF',
            author: 'admin',
            subject: 'order',
            keywords: 'some key words'
        },
        pageSize: 'A4',
        pageOrientation: 'portrait',
        pageMargins: [20, 20, 20, 20],
        fontSize: 14,
        header: function (currentPage, pageCount) {
            return {
                text: currentPage.toString() + '/' + pageCount.toString(),
                alignment: 'right',
                margin: [0, 30, 10, 50]
            }
        },
        content: [
            PDFobject
        ],
        footer: [
            {
                text: total,
                alignment: 'center',
            }
        ]
    }

    pdfMake.createPdf(pdfdoc, null, null, pdfFonts.pdfMake.vfs).open();
    // pdfMake.createPdf(pdf).download('name.pdf');

}