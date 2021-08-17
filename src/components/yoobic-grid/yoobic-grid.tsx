import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'yoobic-grid',
  styleUrl: 'yoobic-grid.css',
  shadow: true,
})
export class YoobicGrid {

  /**
   * The data to render
   */
   @Prop() data: Array<any>;

  render() {
    const rows = [];
    if (this.data) {
      for (const [index, value] of this.data.entries()) {
        rows.push(<tr key={index}>
          <td>{value.title}</td>
          <td>{value.director}</td>
          <td>{value.producer}</td>
          <td>{value.release_date}</td>
          <td>{value.opening_crawl}</td>
        </tr>);
      }
    } else {
      rows.push(<tr><td colSpan={5}>No data to show</td></tr>);
    }


    return (
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
          {rows}
        </tbody>
      </table>
    );
  }

}
