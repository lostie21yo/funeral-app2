import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const MakePDF = (orderInfo, PL) => {

    var pdf = {
        info: {
            title: 'Тестовый PDF',
            author: 'admin',
            subject: 'order',
            keywords: 'some key words'
        },

        pageSize: 'A4',
        pageOrientation: 'portrait',
        pageMargins: [20, 20, 20, 20],

        header: function (currentPage, pageCount) {
            return {
                text: currentPage.toString() + '/' + pageCount.toString(),
                alignment: 'right',
                margin: [0, 30, 10, 50]
            }
        },

        content: [
            {
                text: 'Какой нибудь текст',
                fontSize: 20,
            }
        ],

        footer: [
            {
                text: 'Нижний колонтитул',
                alignment: 'center',
            }
        ]
    }

    pdfMake.createPdf(pdf, null, null, pdfFonts.pdfMake.vfs).open();
    // pdfMake.createPdf(pdf).download('name.pdf');

}