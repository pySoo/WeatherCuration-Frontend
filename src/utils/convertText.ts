export const removeBoldMarkdown = (text: string) => text.replace(/<\/?b>/g, '');

export const convertTextByPriceFormat = (text: string) => {
  const price = parseInt(text, 10);
  return price.toLocaleString('ko-KR');
};
