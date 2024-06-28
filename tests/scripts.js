import { browser } from "k6/browser";
import { PetPage } from "../pages/petPage.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
  scenarios: {
    ui: {
      executor: "constant-vus",
      vus: '2',
      duration: '1s',
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
    load_test: {
      executor: 'constant-vus',
      vus: '2',
      duration: '2s',  
      options: {
        browser: {
          type: "chromium",
        },
      },                
    },
  },
  thresholds: {
    checks: ["rate==1.0"],
  },
};

export default async function () {
  const context = await browser.newContext();
  const page = await context.newPage();
  const petPage = new PetPage(page);

  // acceso a la pagina
  await petPage.goto();
  // selecci[on de Pet ]
  await petPage.selectionFish();
  // selecci[on del producto
  await petPage.selectionProduct();
}


export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}