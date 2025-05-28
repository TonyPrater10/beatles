import { Page, type Locator, type expect } from "@playwright/test";
import { BasePage } from "./base-page";
import { PersonPage } from "./person-page";

export class BeatlesPage extends BasePage {
    readonly paulMccartneyLink: Locator;
    readonly JohnLennonLink: Locator;

    constructor(page: Page) {
        super(page);
        const articleText = page.locator('#mw-content-text');
        this.paulMccartneyLink = articleText.locator('a[href="/wiki/Paul_McCartney"]').first();

        this.JohnLennonLink = articleText.locator('a[href="/wiki/John_Lennon"]').first();
    }

    readonly url = 'https://en.wikipedia.org/wiki/The_Beatles';

    async goto() {
        await this.page.goto(this.url, {waitUntil: 'domcontentloaded'});
    }

    async getPaulMcCartney() {
        await this.paulMccartneyLink.click();
        return new PersonPage(this.page);
    }

    async getJohnLennon() {
        await this.JohnLennonLink.click();
        return new PersonPage(this.page);
    }
}