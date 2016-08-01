module.exports = {
  normalizeEntityName() {
  },

  afterInstall() {
    console.log('after install - autoNumerics');
    return this.addBowerPackageToProject('autoNumerics', '~1.9.43');
  }
};
