# Playwright TypeScript QA Framework

Automated E2E & REST API Testing Framework built with **Playwright**, **TypeScript**, **Page Object Model (POM)**, and CI/CD pipelines via **GitHub Actions**.

## Features & Architecture
- **E2E Testing:** Web UI test automation using Page Object Model (POM) pattern.
- **API Testing:** REST API test validation using Playwright `request` context.
- **Data-Driven Testing:** Test data separation using external JSON files.
- **CI/CD Integration:** Automated workflow via GitHub Actions with artifact generation (HTML reports, traces, videos).

## Prerequisites
- Node.js (v18 or higher)
- npm

## Installation & Setup
```bash
# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install --with-deps