import { test, expect } from '@playwright/test'
import { BeatlesPage } from '../page-objects/beatles-page'

test('John Lennon was born before Paul McCartney', async ({ page }) => {
    const beatlesPage = new BeatlesPage(page);

    // Navigate to the Beatles Wikipedia article
    await beatlesPage.goto();

    // Open Paul McCartney's page and get his birthday
    const paulMcCartneyBirthday = await beatlesPage.getPaulMcCartney().then(p => p.getBirthDate());

    // Navigate back to the Beatles page
    await beatlesPage.back();

    // Open John Lennon's page and get his birthday
    const johnLennonBirthday = await beatlesPage.getJohnLennon().then(p => p.getBirthDate());

    // Compares the time value of dates between the two to assert John was born before Paul
    expect(johnLennonBirthday.getTime()).toBeLessThan(paulMcCartneyBirthday.getTime());

    // Save screenshot with versioned file name
     await beatlesPage.screenshot('john-lennon');
})