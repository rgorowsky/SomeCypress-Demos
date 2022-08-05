const { stringify } = require('querystring')

describe("Filter 4 of 6 Offers Spec", () => {

  const _url = Cypress.env("baseUrl")
  const filterFourData = require('./context_files/filter_four_context.json')
  const jsonVar = JSON.stringify(filterFourData)
  
  before(() => {
    cy.visit(_url)
    cy.wait(500)
  })

  it ("shows a text area", () => {
    textArea(cy).should("exist")
    textArea(cy).clear()
    textArea(cy).invoke('val', `${jsonVar}`).trigger('change') 
  })


  // ------------------- STEP 1 -------------------
  it("starts the test", () => {
    button(cy).click()
  })

  it("shows a progress bar with the correct progress (25%)", () => {
    progressBarContainer(cy).should("exist")
    progressBar(cy).invoke("attr", "style").should("eq", "width: 25%;")
  })

  it("shows the [redacted] offer logo", () => {
    offerHeaderImage(cy).invoke("attr", "src").should("eq", "https:blabla/some-logo.png")
  })

  it("shows [redacted] sales pitch", () => {
    contentSubtitle(cy).contains("Often, registration fees are non-refundable. With registration insurance, you could be reimbursed up to 100% of those fees if unable to participate.")
  })

  it("displays [redacted] offer amount", () => {
    [redacted]Offer(cy).contains("Registration fee insurance for Johnny Appleseed")  
  })

  it("shows client offer description", () => {
    clientOfferDescription(cy).contains("Offered by [redacted]")  
  })

  it("user can select Yes for [redacted]", () => {
    [redacted]YesBox(cy).should("exist")
    [redacted]YesBox(cy).click()
    yesBoxSelected(cy).invoke("attr", "class").should("eq", "custom-radio__input ng-untouched ng-dirty ng-valid")
  })

  it("user can select No for [redacted]", () => {
    [redacted]NoBox(cy).should("exist")
    [redacted]NoBox(cy).click()
    noBoxSelected(cy).invoke("attr", "class").should("eq", "custom-radio__input ng-dirty ng-valid ng-touched")
  })

  it("shows client offer description", () => {
    checkbox(cy).should("exist")
    checkbox(cy).click()
    .find('g').find('g').invoke("attr", "fill").should("eq", "#00668F")
  })

  // ------------------- STEP 2 -------------------
  it("clicks the continue button", () => {
    continueButton(cy).click()
  })

  it("shows a progress bar with the correct progress (50%)", () => {
    progressBarContainer(cy).should("exist")
    progressBar(cy).invoke("attr", "style").should("eq", "width: 50%;")
  })

  it("shows the [redacted] offer logo", () => {
    offerHeaderImage(cy).invoke("attr", "src").should("eq", "https://url-logo.png")
  })

  it("shows [redacted] sales pitch", () => {
    [redacted]SalesPitch(cy).contains("Cover up to $5,000 of out-of-pocket medical expenses for Johnny Appleseed")
  })

  it("displays [redacted] coverage amount", () => {
    [redacted]Coverage(cy).contains("$27.10")  
  })

  it("shows client offer description", () => {
    clientOfferDescription(cy).contains("Offered by [redacted]")  
  })

  it("user can select Yes for [redacted]", () => {
    [redacted]YesBox(cy).should("exist")
    [redacted]YesBox(cy).click()
    yesBoxSelected(cy).invoke("attr", "class").should("eq", "custom-radio__input ng-untouched ng-dirty ng-valid")
  })

  it("user can select No for [redacted]", () => {
    [redacted]NoBox(cy).should("exist")
    [redacted]NoBox(cy).click()
    noBoxSelected(cy).invoke("attr", "class").should("eq", "custom-radio__input ng-dirty ng-valid ng-touched")
  })

  it("shows client offer description", () => {
    checkbox(cy).should("exist")
    checkbox(cy).click()
    .find('g').find('g').invoke("attr", "fill").should("eq", "#00668F")
  })

    // ------------------- STEP 3 -------------------
    it("clicks the continue button", () => {
      continueButton(cy).contains('Continue').click()
    })

    it("shows a progress bar with the correct progress (75%)", () => {
      progressBarContainer(cy).should("exist")
      progressBar(cy).invoke("attr", "style").should("eq", "width: 75%;")
    })

    it("displays [redacted] main header", () => {
      [redacted]HeaderMain(cy).should("exist") 
    })

    it("displays [redacted] sub header", () => {
      [redacted]HeaderSub(cy).should("exist") 
    })

    it("shows the [redacted]  logo", () => {
      [redacted]LogoImage(cy).invoke("attr", "src").should("eq", "https://url-logo.png")
    })

    it("shows [redacted] sport offer", () => {
      [redacted]SportOffer(cy).contains("[redacted] [redacted]")
      [redacted]SportOffer(cy).contains("$99.99")
    })

    it("shows [redacted] offer description", () => {
      clientOfferDescription(cy).contains("Offered by [redacted].")  
    })

    it("user can select the [redacted] checkbox", () => {
      [redacted]Select(cy).should("exist")
      checkbox(cy).click()
      [redacted]Select(cy).invoke("attr", "class").should("eq", "offer-selection__input--hidden ng-untouched ng-valid ng-dirty")
    })

    // ------------------- STEP 4 -------------------
    it("clicks the continue button", () => {
      continueButton(cy).contains('Continue').click()
    }) 

    it("clicks the continue button", () => {
      continueButton(cy).contains('Continue').click()
    })

    it("shows a progress bar with the correct progress (100%)", () => {
      progressBarContainer(cy).should("exist")
      progressBar(cy).invoke("attr", "style").should("eq", "width: 100%;")
    })

    it("displays Skills main header", () => {
      [redacted]HeaderMain(cy).should("exist") 
    })

    it("displays Skills sub header", () => {
      [redacted]HeaderSub(cy).should("exist") 
    })

    it("shows the Skills  logo", () => {
      [redacted]LogoImage(cy).invoke("attr", "src").should("eq", "https://url-logo.png")
    })

    it("shows skills sport offer", () => {
      [redacted]SportOffer(cy).contains("All Access Annual Pass")
      [redacted]SportOffer(cy).contains("$96.00")
    })

    it("shows [redacted] offer description", () => {
      clientOfferDescription(cy).contains("Offered by The [redacted].")  
    })

    it("user can see the [redacted] checkbox", () => {
      [redacted]Select(cy).should("exist")
    })
    // loading screen appears here; user is unable to click checkbox or validate it's clicked

})

function textArea(cy) { 
  return cy.get("#context")
}

function root(cy) {
  return cy.get("sales-channels-element")
}

function button(cy) {
  return cy.get("button")
}

function pageNumbers(cy) {
  return root(cy).shadow().find(".page-stepper__header--page-number")
}

function contentSubtitle(cy) {
  return root(cy).shadow().find(".content-header--sub")
}

function offerHeaderImage(cy) {
  return root(cy).shadow().find(".offer-header--image")
}

function [redacted]Offer(cy) {
  return root(cy).shadow().find(".offer-header--name")
}

function progressBarContainer(cy) {
  return root(cy).shadow().find("se-progress-bar")
}

function progressBar(cy) {
  return root(cy).shadow().find(".se-progress-bar__progress")
}

function clientOfferDescription(cy) {
  return root(cy).shadow().find(".offer-header--fulfiller")
}

function [redacted]YesBox(cy) {
  return root(cy).shadow().find("label[for*='addToCart--true']")
}

function yesBoxSelected(cy) {
  return root(cy).shadow().find("input[id*='addToCart--true']")
}

function [redacted]NoBox(cy) {
  return root(cy).shadow().find("label[for*='addToCart--false']")
}

function noBoxSelected(cy) {
  return root(cy).shadow().find("input[id*='addToCart--false']")
}

function checkbox(cy) {
  return root(cy).shadow().find("app-checkbox-svg")
}

function continueButton(cy) {
  return root(cy).shadow().find(".se-button__content")
}

function [redacted]SalesPitch(cy) {
  return root(cy).shadow().find(".offer-header--name")
}

function [redacted]Coverage(cy) {
  return root(cy).shadow().find(".offer-header--price")
}

function [redacted]YesBox(cy) {
  return root(cy).shadow().find("label[for*='addToCart--true']")
}

function [redacted]NoBox(cy) {
  return root(cy).shadow().find("label[for*='addToCart--false']")
}

function [redacted]HeaderMain(cy) {
  return root(cy).shadow().find(".content-header--main")
}

function [redacted]HeaderSub(cy) {
  return root(cy).shadow().find(".content-header--sub")
}

function [redacted]LogoImage(cy) {
  return root(cy).shadow().find(".offer-header--image")
}

function [redacted]SportOffer(cy) {
  return root(cy).shadow().find(".offer-header--name")
}

function [redacted]Select(cy) {
  return root(cy).shadow().find("input[id*='addToCart']")
}
