import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class PersonPage extends BasePage {
    readonly birthday: Locator;

    constructor(page: Page) {
        super(page);
        this.birthday = page.locator('span.bday').first();
    }

    async getBirthDate(){
        const birthdayText = await this.birthday.textContent();
        return new Date(birthdayText!.trim()); // assumes ISO format (ex. 1938-06-21)
    }
}
