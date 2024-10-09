import viewBanner from '../views/banner';
import viewPresentation from '../views/presentation';
import viewBento from '../views/bento';
import viewFooter from '../views/footer';

import '../output.css';

const Dashboard = class Dashboard {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
    ${viewBanner()}
    ${viewPresentation()}
    ${viewBento()}
    ${viewFooter()}
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Dashboard;
