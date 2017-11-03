var M = module.exports = {
  t2s : require('./dtable')
}

M.convert = function (asctr) {
    
    var cnStr = '';
    for (var i = 0; i < twStr.length; i++)
        if(M.t2s.table[ascStr[i]] !== undefined) {    
            cnStr += M.t2s.table[ascStr[i]]
        }
        else {
            cnStr += twStr[i]
        }
    // throw new Error('twcn.convert() not implemented !')
  
    return cnStr
}
