const { Transformer } = require("@parcel/plugin");

const transformer = new Transformer({
  async transform({ asset }) {
    const code = await asset.getCode();
    asset.setCode(code);
    return [asset];
  },
});
