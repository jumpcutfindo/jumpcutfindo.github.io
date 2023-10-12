export default interface Project {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    featured?: number;
    image: string;
    tags: string[];
}