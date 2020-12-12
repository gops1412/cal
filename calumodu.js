exports.myCalculator = function (fn,sn,operations) {
  if(operations=='+')
  return Number(fn)+Number(sn);
  if(operations=='-')
  return Number(fn)-Number(sn);
  if(operations=='*')
  return Number(fn)*Number(sn);
  if(operations=='/')
  return Number(fn)/Number(sn);
  };