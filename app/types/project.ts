export default interface Project {
    title: string;
    shortDescription: string;
    longDescription: string;
    featured?: number;
    image: string;
    url: string;
    tags: string[];
}