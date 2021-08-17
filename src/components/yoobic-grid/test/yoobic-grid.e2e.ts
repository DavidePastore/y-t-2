import { newE2EPage } from '@stencil/core/testing';

describe('yoobic-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoobic-grid></yoobic-grid>');

    const element = await page.find('yoobic-grid');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<yoobic-grid></yoobic-grid>');
    const component = await page.find('yoobic-grid');

    // With no data
    const element = await page.find('yoobic-grid >>> table > tbody > tr');
    expect(element.textContent).toEqual(`No data to show`);

    // With empty data
    component.setProperty('data', []);
    await page.waitForChanges();
    expect(element.textContent).toEqual(`No data to show`);

    // With data
    const data = [{
      title: "Jingle All the Way",
      opening_crawl: "Workaholic Minneapolis mattress salesman Howard Langston loves his wife...",
      director: "Brian Levant",
      producer: "Michael Barnathan, Chris Columbus",
      release_date: "1996-11-16",
    }];
    component.setProperty('data', data);
    await page.waitForChanges();
    const tds = await page.findAll('yoobic-grid >>> table > tbody > tr > td');
    expect(tds[0].textContent).toEqual('Jingle All the Way');
    expect(tds[1].textContent).toEqual('Brian Levant');
    expect(tds[2].textContent).toEqual('Michael Barnathan, Chris Columbus');
    expect(tds[3].textContent).toEqual('1996-11-16');
    expect(tds[4].textContent).toEqual('Workaholic Minneapolis mattress salesman Howard Langston loves his wife...');
  });
});
