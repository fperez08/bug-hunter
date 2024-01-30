import { Browser, Page } from "playwright";
export interface Hosts {
    localhost: string;
}
interface BrowserPage {
    route: string;
    regex: string;
}
export interface Pages {
    [key: string]: BrowserPage;
}

export interface ElementMapping {
    [key: string]: { [key: string]: string };
}

export interface GlobalConfig {
    hostConfig: Hosts;
    pagesConfig: Pages;
    pagesElementsMapping: ElementMapping;
}
export interface Screen {
    page?: Page;
    browser?: Browser;
}
