module.exports=check=(s,b)=>{m=[];if(s.length%2!==0)return false;for(let i=0;i<s.length;i++){m.push(s[i]);
for(let j=0;j<b.length;j++){if(m[m.length-1]==b[j][1]&&m[m.length-2]==b[j][0]){m.pop();m.pop()}}}return m.length==0}
