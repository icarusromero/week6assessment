
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

describe('button tests', () => {
    test('clicking draw button should display div with the id=choices', async () => {
        await driver.findElement(By.xpath('//button[text()="Draw"]')).click()
        const choices = await driver.findElement(By.id('choices'))
        const displayed = await choices.isDisplayed()
        expect(displayed).toBe(true)
    })

    // test('clicking add to duo button should display div with the id=player-id', async () => {
    //     await driver.findElement(By.xpath('//button[text()="Draw"]')).click()
    //     await driver.findElement(By.xpath('(//button[text()="Add to Duo"])[1]')).click()
    //     const playerID = await driver.findElement(By.id('player-id'))
    //     const displayed = await playerID.isDisplayed()
    //     expect(displayed).toBe(true)
    // })

})