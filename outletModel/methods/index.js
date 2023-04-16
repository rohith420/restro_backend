const { outlet} = require("../index");


module.exports.createOutlet=body=> {
  return outlet.create(body);
}

module.exports.deleteOutlet= filterQuery=> {
  return outlet.findByIdAndDelete(filterQuery);
}

module.exports.getOutlet = filterQuery=>{
    return outlet.findOne(filterQuery)
}

module.exports.getAllOutlets =(filterQuery)=>{
    return outlet.find(filterQuery)
}
module.exports.updateOutlet =(filterquery,body)=>{
  return outlet.findOneAndUpdate(filterquery,body)
}

