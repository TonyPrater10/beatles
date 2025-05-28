# Beatles Wikipedia Test (Playwright + TypeScript)

This repository contains an automated test using Microsoft Playwright and TypeScript. The test navigates Wikipedia to verify that John Lennon was born before Paul McCartney, then saves a screenshot of John Lennon's page.

---

## What It Does

1. Goes to The Beatles Wikipedia page
2. Clicks the first link to Paul McCartney
3. Gets Paul’s birth date from the page
4. Returns to the Beatles page
5. Clicks the first link to John Lennon
6. Gets John’s birth date
7. Asserts that John was born before Paul
8. Saves a screenshot of John’s article  
   (If "john-lennon.png" already exists, it creates "john-lennon (1).png", "john-lennon (2).png", etc.)

---

## 🛠 How to Run

1. Clone this repository
   ```
   - git clone https://github.com/TonyPrater10/beatles.git  
   - cd beatles
   ```

3. Install dependencies
   ```  
   - npm install  
   - npx playwright install
   ```

5. Run the test
   ```
   - npx playwright test
   ```

---

## Project Structure

page-objects

tests/  
└── beatles.spec.ts   

screenshots

README.md

---

## Notes

- Uses the Page Object Model (POM)
- Screenshot files are saved in the "screensshots/" folder and automatically numbered
- Fully written in TypeScript
---

## Screenshot Example

screenshots/  
├─ john-lennon.png  
├─ john-lennon (1).png  
├─ john-lennon (2).png  

---

## Contact

Maintained by Tony Prater: https://github.com/TonyPrater10  
