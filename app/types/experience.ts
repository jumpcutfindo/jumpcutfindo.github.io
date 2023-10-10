export default interface Experience {
    start: string;
    end?: string;

    title: string;
    company: string;
    url: string;
    
    shortDescription: string;
    longDescription: string;

    tags: string[];
}