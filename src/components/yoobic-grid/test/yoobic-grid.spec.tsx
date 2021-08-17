import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { YoobicGrid } from '../yoobic-grid';

describe('yoobic-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YoobicGrid],
      html: `<yoobic-grid></yoobic-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <yoobic-grid>
        <mock:shadow-root>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Producer</th>
              <th>Release Date</th>
              <th>Opening Crawl</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan=5>No data to show</td>
            </tr>
          </tbody>
        </table>
        </mock:shadow-root>
      </yoobic-grid>
    `);
  });

  it('renders with values', async () => {
    const data = [{
      title: "Jingle All the Way",
      opening_crawl: "Workaholic Minneapolis mattress salesman Howard Langston loves his wife...",
      director: "Brian Levant",
      producer: "Michael Barnathan, Chris Columbus",
      release_date: "1996-11-16",
    }];
    const page = await newSpecPage({
      components: [YoobicGrid],
      template: () => (
        <yoobic-grid data={data}></yoobic-grid>
      ),
    });

    expect(page.root).toEqualHtml(`
      <yoobic-grid>
        <mock:shadow-root>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Producer</th>
              <th>Release Date</th>
              <th>Opening Crawl</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>Jingle All the Way</td>
            <td>Brian Levant</td>
            <td>Michael Barnathan, Chris Columbus</td>
            <td>1996-11-16</td>
            <td>Workaholic Minneapolis mattress salesman Howard Langston loves his wife...</td>
          </tr>
          </tbody>
        </table>
        </mock:shadow-root>
      </yoobic-grid>
    `);
  });
});
