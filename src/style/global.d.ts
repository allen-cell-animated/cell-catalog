// CSS Modules
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.module.sass" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

// Decap CMS Media Libraries
declare module "decap-cms-media-library-uploadcare";
declare module "decap-cms-media-library-cloudinary";