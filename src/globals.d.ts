declare module "*.css" {
    const style: Record<string, string>;
    export default style
}

declare module "*.module.css" {
    const style: Record<string, string>;
    export default style
}

declare type IRoutes = {
    path: string,
    element: React.JSX.Element
}