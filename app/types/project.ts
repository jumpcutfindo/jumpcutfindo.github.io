interface ProjectLink {
    icon: string;
    url: string;
}

export default interface Project {
    id: string;
    title: string;
    year: number;
    shortDescription: string;
    longDescription: string;
    pointers: string[];
    links?: ProjectLink[];
    featured?: number;
    image: string;
    tags: string[];
}