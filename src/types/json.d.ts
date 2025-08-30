declare module "*.json" {
  type Blog = {
    title: string;
    description: string;
  }[];

  const value: Blog;
  export default value;
}
