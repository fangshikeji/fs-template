import html2Canvas from 'html2canvas'
import jsPDF from 'jspdf'

const A4pageH = 841.89
const A4pageW = 595.28

export default {
  install (Vue) {
    Vue.prototype.printPdf = function (el = '#pdfDom', autoPrint) {
      html2Canvas(document.querySelector(el), {scale: 2}).then(function (canvas) {
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        let pageHeight = contentWidth / (A4pageW - 3) * A4pageH // A4纸尺寸
        let leftHeight = contentHeight
        let position = 0
        let imgWidth = A4pageW
        let imgHeight = (A4pageW - 3) / contentWidth * contentHeight
        let pageData = canvas.toDataURL('image/jpeg', 1.0)
        let PDF = new jsPDF('', 'pt','a4')
        
        if (leftHeight < pageHeight) { // 单页足够打印完毕
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else { // 多页打印
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        autoPrint && PDF.autoPrint()
        PDF.output('dataurlnewwindow');
      })
    }
  }
}