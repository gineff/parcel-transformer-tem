const { Transformer } = require("@parcel/plugin");

const transformer = new Transformer({
  async transform({ asset }) {
    asset.bundleBehavior = "inline";
    asset.meta.inlineType = "string";
    return [asset];
  },
});

module.exports = transformer;
