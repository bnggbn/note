var M = module.exports = {
  t2s : require('./dtable')
}

M.convert = function (word) {
    
    var asctr = '';
    for (var i = 0; i < word.length; i++)
        if(M.t2s.table[word[i]] !== undefined) {    
            asctr += M.t2s.table[word[i]]
        }
        else {
            asctr += word[i]
        }
    // throw new Error('twcn.convert() not implemented !')
  
    return asctr
}
