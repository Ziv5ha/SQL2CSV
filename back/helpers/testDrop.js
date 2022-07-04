const containsDrop = (query) => {
  const dropOptions = [
    ';',
    'drop ',
    'Drop ',
    'dRop ',
    'drOp ',
    'droP ',
    'DRop ',
    'DrOp ',
    'DroP ',
    'dROp ',
    'dRoP ',
    'drOP ',
    'dROP ',
    'DrOP ',
    'DRoP ',
    'DROp ',
    'DROP ',
  ];
  if (dropOptions.some((option) => query.includes(option))) return true;
  else return false;
};
module.exports = { containsDrop };
