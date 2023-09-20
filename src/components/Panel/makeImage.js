import html2canvas from "html2canvas";

const exportAsImage = async (el, imageFileName) => {
const canvas = await html2canvas(element);
const image = canvas.toDataURL("image/png", 1.0);
// download the image
};