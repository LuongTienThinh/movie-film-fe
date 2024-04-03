interface IAssetImage {
  [key: string]: string,
}

const images: IAssetImage = {};

const reqImages = require.context('./assets/images', false, /\.(png|jpe?g|svg)$/);
reqImages.keys().forEach((key) => {
  images[key] = reqImages(key);
});

const icons: IAssetImage = {};

const reqIcons = require.context('./assets/icons/light', false, /\.(png|jpe?g|svg)$/);
reqIcons.keys().forEach((key) => {
  icons[key] = reqIcons(key);
});

export {
  images,
  icons
};
