import viewBento from '../views/bento';

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
    ${viewBento()}
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Dashboard;
