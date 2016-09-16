module.exports = {
  normalizeEntityName() {
  },

  afterInstall() {
    return this.addBowerPackageToProject('autoNumerics', '~1.9.43');
  }
};
