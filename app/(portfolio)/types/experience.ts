export default interface Experience {
    start: string;
    end?: string;

    id: string;
    title: string;
    company: string;
    url: string;
    
    shortDescription: string;
    longDescription: string;

    pointers: string[];

    tags: string[];
}