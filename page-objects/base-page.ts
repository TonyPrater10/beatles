import { Page, Locator } from "@playwright/test";
import {promises as fs } from 'fs';
import path from 'path';

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async back() {
        await this.page.goBack({waitUntil: 'domcontentloaded'})
    }

    async screenshot(id: string, folder = 'screenshots') {

        await fs.mkdir(folder, {recursive: true });

        const base = path.join(folder, id);
        let attempt = 0;
        let filePath: string;

        while (true){
            const name = attempt === 0 ? `${base}.png` : `${base} (${attempt}).png`;

            try {
                await fs.access(name);
                attempt++;
            }
            catch {
                filePath = name;
                break;
            }
        }

        await this.page.screenshot({path: filePath});
        return filePath
    }
}
