export default interface Project {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    pointers: string;
    featured?: number;
    image: string;
    tags: string[];
}