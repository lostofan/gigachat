export const getImage = (base64) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = base64;
    image.className = 'chat__attachment';

    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      reject(new Error('Ошибка загрузки изображения'));
    };
  });
};
